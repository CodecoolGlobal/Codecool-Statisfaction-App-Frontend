import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import { getCourses, getUserData } from "../../Api/ProfileCalls";

function Profile() {
  const [user, setUser] = useState();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      let data = await getCourses();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      let data = await getUserData();
      setUser(data);
    }
    fetchUserData();
  }, []);
  return (
    <div className="profile">
      <div className="profile-data"></div>
      <div className="profile-courses">
        {courses === null || courses.lenght === 0 ? (
          <div className="error">u dont have courses</div>
        ) : (
          <select name="courses">
            {courses.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default Profile;
