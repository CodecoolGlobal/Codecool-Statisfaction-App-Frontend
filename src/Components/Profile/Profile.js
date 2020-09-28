import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import { getCourses, getUserData, changeCourse } from "../../Api/ProfileCalls";

function Profile() {
  const [user, setUser] = useState();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      let data = await getCourses();
      setCourses(data);
      await console.log(data);
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      let data = await getUserData();
      setUser(data);
      await console.log(data);
    }
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  const submitCourseChange = () => {
    let tokenId = localStorage.getItem("tokenId");
    let obj = {
      coursName: course,
      tokenId: tokenId,
    };
    console.log(obj);
    changeCourse(obj);
  };

  return (
    <div className="profile">
      <div className="profile-data">
        <h2>Name:</h2>
        <h2>Course:</h2>
      </div>

      {courses === null || courses.lenght === 0 ? (
        <div className="error">u dont have courses</div>
      ) : (
        <div className="profile-courses">
          <select
            onChange={(e) => handleChange(e)}
            className="profile-select"
            name="courses"
          >
            {courses.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
          <button onClick={submitCourseChange}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
