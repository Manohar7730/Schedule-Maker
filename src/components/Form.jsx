import React from "react";

export default function Form({
  schedule,
  handleChange,
  handleSubmit,
  hasDuplicateError,
  hasValidationError,
}) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      {hasValidationError && <h3 className="error">Please enter all inputs</h3>}

      {hasDuplicateError && <h3 className="error">Schedule already exists</h3>}
      <div className="input-container">
        <label htmlFor="schedule">Title:</label>
        <input
          id="schedule"
          type="text"
          name="title"
          value={schedule.title}
          onChange={handleChange}
          className="input-bar"
        />
      </div>

      <div className="input-container">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          type="text"
          name="description"
          value={schedule.description}
          onChange={handleChange}
          className="input-bar"
          cols=""
          rows="5"
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        />
      </div>

      <button
        type="submit"
        className="submit-button"
        aria-label="Add Schedule to List"
      >
        Add to Schedule
      </button>
    </form>
  );
}
