import React, { useState } from "react";
import Form from "./components/Form";

export default function App() {
  const [schedule, setSchedule] = useState({
    title: "",
    description: "",
    checked: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form schedule={schedule} handleChange={handleChange} />
    </div>
  );
}
