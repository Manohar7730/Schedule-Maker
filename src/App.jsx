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
  const nextId = useRef(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (schedule.title === "" || schedule.description === "") {
      setSchedule({ title: "", description: "", checked: false });

      alert("Please add all fields");
      return;
    }

    setSchedules((prevSchedules) => [
      ...prevSchedules,
      { ...schedule, id: nextId.current },
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
      />
      <List
        schedules={schedules}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}
