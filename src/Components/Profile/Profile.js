import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import { getCourses, getUserData, changeCourse } from "../../Api/ProfileCalls";
import PageHeader from "../PageHeader/PageHeader";
import LocationOn from "@material-ui/icons/LocationOn";
import MenuBook from "@material-ui/icons/MenuBook";
import Edit from "@material-ui/icons/Edit";
import AccountBox from "@material-ui/icons/AccountBox";

function Profile() {
  const [user, setUser] = useState();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState("");
  const [picture, setPicture] = useState(
    "https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif"
  );

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
      if (data.pictureLink !== null) setPicture(data.pictureLink);
    }
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  const submitCourseChange = () => {
    let tokenId = localStorage.getItem("tokenId");
    let obj = {
      courseName: course,
      tokenId: tokenId,
    };
    console.log(obj);
    changeCourse(obj);
  };

  return (
    <div className="wall">
      <PageHeader title={"Profile"} />
      <div className="profile">
        <div className="profile-data">
          <img className="avatar" alt="user" src={picture}></img>
          <h2 className="profile-text">
            <AccountBox className="profile-icon" />
            {user && `${user.firstName}  ${user.lastName}`}
          </h2>
          <h2 className="profile-text">
            <LocationOn className="profile-icon" />
            {user && user.city}
            <Edit className="profile-icon-edit" />
          </h2>
          <h2 className="profile-text">
            <MenuBook className="profile-icon" /> {user && user.courseName}
            <Edit className="profile-icon-edit" />
          </h2>
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
    </div>
  );
}

export default Profile;
