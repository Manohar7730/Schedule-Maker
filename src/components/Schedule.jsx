import React from "react";

export default function Schedule({ schedule, handleCheck, handleDelete }) {
  return (
    <div>
      <h2
        style={{
          textDecoration: schedule.checked ? "line-through" : "none",
        }}
      >
        {schedule.title}
      </h2>
      <p>Description: {schedule.description}</p>
      <input
        type="checkbox"
        checked={schedule.checked}
        onChange={() => handleCheck(schedule.id)}
      />
      <button onClick={() => handleDelete(schedule.id)}>❌ </button>
    </div>
  );
}
