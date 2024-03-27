import React from "react";

export default function ExploreDropDown() {
  return (
    <div className="">
      Explore : &nbsp;
      <select name="explore" id="explore" className="p-2 border-2">
        <option value="Courses" defaultChecked className="p-2">
          Courses
        </option>
        <option value="Assessments" className="p-2">
          Assessments
        </option>
        <option value="E-Books" className="p-2">
          E-Books
        </option>
        <option value="Journeys" className="p-2">
          Journeys
        </option>
        <option value="Live Trainings" className="p-2">
          Live Trainings
        </option>
      </select>
    </div>
  );
}
