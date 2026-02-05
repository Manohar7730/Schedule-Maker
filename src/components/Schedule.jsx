import React from "react";

export default function Schedule({ schedule, handleCheck, handleDelete }) {
  return (
    <>
      <div className={`item-content ${schedule.checked ? "check-done" : ""}`}>
        <h2>{schedule.title}</h2>
        <p>Description: {schedule.description}</p>
      </div>
      <div className="item-controls">
        <input
          type="checkbox"
          checked={schedule.checked}
          onChange={() => handleCheck(schedule.id)}
          aria-label="Mark schedule as complete"
        />
        <button
          onClick={() => handleDelete(schedule.id)}
          aria-label="Delete schedule"
        >
          ❌{" "}
        </button>
      </div>
    </>
  );
}
