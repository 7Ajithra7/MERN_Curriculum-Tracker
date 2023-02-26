//import modules & Dependencies
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { BASE_URL } from "../../utils/constants";

// Curriculum Field tables
const AddCurriculum = () => {
  const [ReqName, setReqName] = useState("");
  const [trainingArea, setTrainingArea] = useState("");
  const [reqCategory, setReqCategory] = useState("");
  const [institution, setInstitution] = useState("");
  const [duration, setDuration] = useState("");
  const [refFile, setRefFile] = useState();

  console.log({ refFile });

  const handleTrainingAreaChange = (event) => {
    setTrainingArea(event.target.value);
  };

  const handleReqCategoryChange = (event) => {
    setReqCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("refFile", refFile);
    formData.append("ReqName", ReqName);
    formData.append("trainingArea", trainingArea);
    formData.append("institution", institution);
    formData.append("reqCategory", reqCategory);
    formData.append("duration", duration);

    const config = {
      headers: {
        "Content-Type": "form-data",
      },
    };
    const res = await axios.post(`${BASE_URL}/add`, formData, config);
    console.log(res);
    if (res?.data?.status === "success") {
      alert("Requirement successfully Added");
      let req_id = res.data.data._id;
      localStorage.setItem("req_id", req_id);
    }
  };

  return (
    <div >
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="ReqName">
          {/* <Form.Label className="labelstyle">Requirement Name</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Enter Requirement Name"
            value={ReqName}
            onChange={(event) => setReqName(event.target.value)}
            required
          />
        </Form.Group>
        <br />

        <Form.Group controlId="trainingArea">
          {/* <Form.Label>Area where training is required</Form.Label> */}
          <Form.Control
            as="select"
            value={trainingArea}
            onChange={handleTrainingAreaChange}
            required
          >
            <option id = "formdropdowntext" value="">Area of Requirement</option>
            <option value="FSD">FSD</option>
            <option value="ML-AI">ML-AI</option>
            <option value="DSA">DSA</option>
            <option value="RPA">RPA</option>
            <option value="ST">ST</option>
            <option value="CSA">CSA</option>
          </Form.Control>
        </Form.Group>
        <br />

        <Form.Group controlId="reqCategory">
          {/* <Form.Label>Category of Requirement</Form.Label> */}
          <Form.Control
            as="select"
            value={reqCategory}
            onChange={handleReqCategoryChange}
            required
          >
            <option id = "formdropdowntext" value="">Category Of requirement</option>
            <option value="Retail">Retail</option>
            <option value="Academic">Academic</option>
            <option value="Corporate">Corporate</option>
          </Form.Control>
        </Form.Group>
 <br />

        <Form.Group controlId="institution">
          {/* <Form.Label>Institution</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Enter Name of Instition from Requirement Came"
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            required
          />
        </Form.Group>
 <br />

        <Form.Group controlId="duration">
          {/* <Form.Label>Duration (in hours)</Form.Label> */}
          <Form.Control
            type="number"
            placeholder="Enter Duration in Hours"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            required
          />
        </Form.Group>
        <br />

        {/* upload files*/}

        <div className="form-outline mb-2">
          {/* <label htmlFor="" className="form-label">
            Choose reference file
          </label> */}
          <input
            type="file"
            id="uploadfile"
            className="form-control"
            placeholder="choose reference file"
            onChange={(event) => setRefFile(event.target.files[0])}
          />
        </div>
        {/* <br /> */}
        <div className="d-flex justify-content-center pt-3">
          {/* <button
                type="button"
                className="btn btn-secondary btn-lg ms-2"
                id="save"
              >
                Submit
              </button>*/}
        </div>
        <Button variant="primary" type="submit">
          SAVE
        </Button>
      </Form>
    </div>
  );
};

export default AddCurriculum;
