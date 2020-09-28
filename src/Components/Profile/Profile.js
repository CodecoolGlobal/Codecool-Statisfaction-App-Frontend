import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import { getCourses, getUserData } from "../../Api/ProfileCalls";

function Profile() {
  const [user, setUser] = useState();
  const [courses, setCourses] = useState();

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
        <select name="courses">
            {courses.lenght === 0 ? 
                <div className="error">u dont have courses</div>
                :
                courses.map(course =>
                    <option value={course.name}>{course.name}</option>
                )    
        }
        </select>
      </div>
    </div>
  );
}

export default Profile;
