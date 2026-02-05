import React from "react";
import Schedule from "./Schedule";

export default function List({ schedules, handleCheck, handleDelete }) {
  if (schedules.length === 0) {
    return <p>No schedules yet</p>;
  }

  return (
    <ol className="list">
      {schedules.map((schedule) => (
        <li key={schedule.id} className="list-item">
          <Schedule
            schedule={schedule}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ol>
  );
}
