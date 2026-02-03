import React from "react";

export default function Form({ schedule, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="schedule">Title: </label>
        <input
          id="schedule"
          type="text"
          name="title"
          value={schedule.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <input
          id="description"
          type="text"
          name="description"
          value={schedule.description}
          onChange={handleChange}
        />
        <button type="submit"> Add to Schedule </button>
      </form>
    </div>
  );
}
