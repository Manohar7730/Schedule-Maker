import React from "react";
import Schedule from "./Schedule";

export default function List({ schedules, handleCheck, handleDelete }) {
  if (schedules.length === 0) {
    return <p>No schedules yet</p>;
  }

  return (
    <ol>
      {schedules.map((schedule) => (
        <li key={schedule.id}>
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
