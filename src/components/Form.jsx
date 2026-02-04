import React from "react";

export default function Form({
  schedule,
  handleChange,
  handleSubmit,
  hasDuplicateError,
  hasValidationError,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {hasValidationError && (
        <h3 style={{ color: "red" }}>Please enter all inputs</h3>
      )}

      {hasDuplicateError && (
        <h3 style={{ color: "orange" }}>Schedule already exists</h3>
      )}

      <label htmlFor="schedule">Title:</label>
      <input
        id="schedule"
        type="text"
        name="title"
        value={schedule.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        name="description"
        value={schedule.description}
        onChange={handleChange}
      />
      <button type="submit">Add to Schedule</button>
    </form>
  );
}
