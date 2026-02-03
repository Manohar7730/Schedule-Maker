import React from "react";
import Schedule from "./Schedule";

export default function List({ schedules, handleCheck, handleDelete }) {
  return (
    <ol>
      {schedules.map((schedule) => {
        return (
          <li key={schedule.id}>
            <Schedule
              schedule={schedule}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          </li>
        );
      })}
    </ol>
  );
}
