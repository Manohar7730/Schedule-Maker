import React, { useRef, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [schedule, setSchedule] = useState({
    title: "",
    description: "",
    checked: false,
  });
  const [schedules, setSchedules] = useLocalStorage("schedules", []);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [hasDuplicateError, setHasDuplicateError] = useState(false);

  const nextId = useRef(
    schedules.length > 0 ? Math.max(...schedules.map((s) => s.id)) + 1 : 1,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = schedule.title.trim();
    const description = schedule.description.trim();

    setHasValidationError(false);
    setHasDuplicateError(false);

    if (!title || !description) {
      setHasValidationError(true);
      return;
    }

    const exists = schedules.some((s) => s.title === title);

    if (exists) {
      setHasDuplicateError(true);
      return;
    }

    setSchedules((prev) => [
      ...prev,
      { id: nextId.current, title, description, checked: false },
    ]);

    nextId.current++;
    setSchedule({ title: "", description: "", checked: false });
  };

  const handleCheck = (id) => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t,
      ),
    );
  };
  const handleDelete = (id) => {
    setSchedules((prevSchedules) =>
      prevSchedules.filter((schedule) => schedule.id !== id),
    );
  };

  return (
    <div>
      <Form
        schedule={schedule}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        hasValidationError={hasValidationError}
        hasDuplicateError={hasDuplicateError}
      />

      <List
        schedules={schedules}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}
