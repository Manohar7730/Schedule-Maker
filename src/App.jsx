import React, { useRef, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [schedule, setSchedule] = useState({
    title: "",
    description: "",
    checked: false,
  });
  const [schedules, setSchedules] = useState([]);
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

      return window.alert("please add all fields");
    }

    setSchedules((prevTasks) => [
      ...prevTasks,
      { ...schedule, id: nextId.current },
    ]);

    nextId.current++;

    setSchedule({ title: "", description: "", checked: false });
  };

  const handleCheck = (id) => {
    setSchedules((prevTasks) =>
      prevTasks.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
  };
  return (
    <div>
      <Form
        schedule={schedule}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List schedules={schedules} handleCheck={handleCheck} />
    </div>
  );
}
