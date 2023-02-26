//import modules & Dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import AddCurriculum from "./AddCurriculum";

//Create Requirement form Component
const RequirementForm = () => {
  const [ReqName, setReqName] = useState("");
  const [trainingArea, setTrainingArea] = useState("");
  const [reqCategory, setReqCategory] = useState("");
  const [institution, setInstitution] = useState("");
  const [duration, setDuration] = useState("");
  const [faculties, setFaculties] = useState([]);
  const [isAssign, setIsAssign] = useState(false);

  const handleTrainingAreaChange = (event) => {
    setTrainingArea(event.target.value);
  };

  const handleReqCategoryChange = (event) => {
    setReqCategory(event.target.value);
  };

  // const { userName, designation, email, status, _id } = item;
  // let prev = errors;

  //Define Submit fucntion to read from frontend
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      ReqName,
      trainingArea,
      reqCategory,
      institution,
      duration,
    };

    axios
      .post(`${BASE_URL}/data`)
      .then((res) => {
        alert("Data added successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Error in adding data");
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/faculties`)
      .then((response) => setFaculties(response.data.data));
  }, []);
  console.log({ faculties });

  const assignedFaculty = (item) => {
    let id = localStorage.getItem("req_id");
    if (id) {
      const { userName, designation, email, status, employeeId } = item;
      let userData = {};
      axios
        .patch(`${BASE_URL}/updateReqForm/${id}`, { assignedFaculty: item })
        .then((response) => {
          alert("Assiged Successfully");
          console.log(response);
        });
    } else {
      alert("Requirement Form Data not found");
    }
  };
  return (
    <>
      <div className="user">
        <img src="" alt="" />
      </div>
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            {/* requirement form */}
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center>
                <h4 id="reqformheading">REQUIREMENT FORM</h4>
              </center>
            </div>
          </div>
          <br />
          <AddCurriculum />
          {/* Assign Faculty */}
          <center>
            <button type="button" className="btn btn-secondary btn-lg ms-2">
              <div
                href="#Assign Faculty"
                onClick={() => {
                  setIsAssign((prev) => !prev);
                }}
              ></div>
              Assign Faculty
            </button>
          </center>
          <br />
          <hr />
          <br />

          <div className="input-group mb-3">
            {/* table */}
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Designation</td>
                  <td>Email</td>
                  <td>Status</td>
                  <td>Confirm Selection</td>
                </tr>
              </thead>

              <tbody>
                {faculties.map((item) => {
                  const { userName, designation, email, status, _id } = item;
                  return (
                    <tr key={_id}>
                      <td>{userName}</td>
                      <td>{designation}</td>
                      <td>{email}</td>
                      <td>{status}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg ms-2"
                          id="selectbtn"
                          onClick={() => assignedFaculty(item)}
                        >
                          select
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <center>
            <button type="button" className="btn btn-secondary btn-lg ms-2">
              Assign Requirement
            </button>
          </center> */}
        </div>
      </div>
    </>
  );
};

export default RequirementForm;
