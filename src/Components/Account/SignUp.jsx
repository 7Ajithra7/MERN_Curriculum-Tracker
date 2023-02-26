import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import {
  ErrorText,
  inputHandler,
  isDesignation,
  isEmail,
  isEmployeeId,
  isPassword,
  isUserName,
} from "../../utils/form";

const initialValues = {
  userName: "",
  designation: "",
  employeeId: "",
  email: "",
  password: "",
  confpassword: "",
  // userType:"",
  // secretKey:""
};

const SignUp = () => {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();
  const signUpData = () => {
    console.log(data);

    // let error = true;

    const { userName, designation, employeeId, email, password, confpassword } =
      data;
    let prev = errors;

    if (userName === "" || !isUserName(userName)) {
      prev = { ...prev, userName: "! Enter Valid User Name" };
    } else {
      prev = { ...prev, userName: "" };
    }

    if (designation === "" || !isDesignation(designation)) {
      prev = { ...prev, designation: "! Enter Valid Designation" };
    } else {
      prev = { ...prev, designation: "" };
    }

    if (employeeId === "" || !isEmployeeId(employeeId)) {
      prev = { ...prev, employeeId: "! Enter Valid Designation" };
    } else {
      prev = { ...prev, employeeId: "" };
    }

    if (email === "" || !isEmail(email)) {
      prev = { ...prev, email: "! Enter Valid Email id" };
    } else {
      prev = { ...prev, email: "" };
    }

    if (password === "" || !isPassword(password)) {
      prev = {
        ...prev,
        password:
          "! Enter Valid Password in alphanumrics,special character,min 6 characters",
      };
    } else {
      prev = { ...prev, password: "" };
    }

    if (confpassword !== password || confpassword === "") {
      prev = { ...prev, confpassword: "! Not matches with password entered" };
    } else {
      prev = { ...prev, confpassword: "" };
    }

    setErrors(prev);
    console.log(errors);

    if (
      !Object.values(prev).some((item) => item != "") &&
      Object.values(prev).length !== 0
    ) {
      axios
        .post(`${BASE_URL}/signup`, data)
        .then((response) => {
          console.log(response.data);
          if (response.data.Status == "Success") {
            alert("User Successfully Registered");
            setData(initialValues);
            localStorage.setItem("token", response.data.token);
            // response.data.Data.role === "admin"
            Navigate("/facultypanel");
          } else {
            setErrors({ confpassword: response.data.Error });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div class="sign-up-htm">
      <div class="group">
        <label for="user" class="label">
          Username
        </label>
        <input
          id="user"
          type="text"
          class="input"
          name="userName"
          value={data.userName}
          onChange={(e) => inputHandler(e, setData)}
        />
        {errors?.userName && <ErrorText>{errors.userName}</ErrorText>}
      </div>
      <div class="group">
        <label for="user" class="label">
          Employee Id
        </label>
        <input
          id="user"
          type="text"
          class="input"
          name="employeeId"
          value={data.employeeId}
          onChange={(e) => inputHandler(e, setData)}
        />
        {errors?.employeeId && <ErrorText>{errors.employeeId}</ErrorText>}
      </div>
      <div class="group">
        <label for="user" class="label">
          Designation
        </label>
        <input
          id="user"
          type="text"
          class="input"
          name="designation"
          value={data.designation}
          onChange={(e) => inputHandler(e, setData)}
        />
        {errors?.designation && <ErrorText>{errors.designation}</ErrorText>}
      </div>
      <div class="group">
        <label for="pass" class="label">
          Email Address
        </label>
        <input
          id="pass"
          type="text"
          class="input"
          name="email"
          value={data.email}
          onChange={(e) => inputHandler(e, setData)}
        />{" "}
        {errors?.email && <ErrorText>{errors.email}</ErrorText>}
      </div>
      <div class="group">
        <label for="pass" class="label">
          Password
        </label>
        <input
          id="pass"
          type="password"
          class="input"
          data-type="password"
          name="password"
          value={data.password}
          onChange={(e) => inputHandler(e, setData)}
        />
        {errors?.password && <ErrorText>{errors.password}</ErrorText>}
      </div>
      <div class="group">
        <label for="pass" class="label">
          Confirm Password
        </label>
        <input
          id="pass"
          type="password"
          class="input"
          data-type="password"
          name="confpassword"
          value={data.confpassword}
          onChange={(e) => inputHandler(e, setData)}
        />
        {errors?.confpassword && <ErrorText>{errors.confpassword}</ErrorText>}
      </div>

      <div class="group">
        <input
          type="submit"
          class="button"
          value="Sign Up"
          onClick={signUpData}
        />
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <label for="tab-1">Already Member?</label>
      </div>
    </div>
  );
};

export default SignUp;
