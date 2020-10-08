import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import { getCourses, getUserData, changeCourse } from "../../Api/ProfileCalls";
import PageHeader from "../PageHeader/PageHeader";
import LocationOn from "@material-ui/icons/LocationOn";
import MenuBook from "@material-ui/icons/MenuBook";
import Edit from "@material-ui/icons/Edit";
import AccountBox from "@material-ui/icons/AccountBox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";

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
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      let data = await getUserData();
      setUser(data);
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
    changeCourse(obj);
  };

  if (!user) {
    return <div>loading...</div>;
  }

  return (
    /* <div className="profile-container">
      <div className="profile">
        <PageHeader title={"Profile"} />
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
    </div> */

    <div className="profile">
      <div className="profile-card">
        <img className="avatar" alt="user" src={picture}></img>
        <div className="profile-field">
          <AccountBox className="profile-icon" />
          <div className="profile-field-info">
            <div className="profile-field-info-title">Name:</div>
            <div className="profile-field-info-name">
              {`${user.firstName} ${user.lastName}`}
            </div>
          </div>
        </div>
        <div className="profile-field">
          <MenuBook className="profile-icon" />
          <div className="profile-field-info">
            <div className="profile-field-info-title">Course:</div>
            <div className="profile-field-info-name">
              {`${user.courseName}`}
            </div>
          </div>
        </div>
        <div className="profile-field">
          <LocationOn className="profile-icon" />
          <div className="profile-field-info">
            <div className="profile-field-info-title">City:</div>
            <div className="profile-field-info-name">
              {`${user.city == null ? "not yet added" : user.city}`}
            </div>
          </div>
        </div>
        <FormControl className="from">
          <Select value={course} onChange={handleChange} displayEmpty>
            <MenuItem value="" disabled>
              {user.courseName && user.courseName}
            </MenuItem>
            {courses.map((course) => (
              <MenuItem value={course.name} key={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select course</FormHelperText>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          onClick={submitCourseChange}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
}

export default Profile;
