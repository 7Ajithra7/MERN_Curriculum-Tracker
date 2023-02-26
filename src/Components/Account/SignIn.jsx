import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, JWT_SECRET } from "../../utils/constants";
import { ErrorText, inputHandler, isEmail, isPassword } from "../../utils/form";
import ForgetPassword from "./ForgetPassword";
// import jwt_decode from "jwt-decode";
// import Joi from "joi";

const initialValues = {
  email: "",
  password: "",
};

// const SigninSchema = Joi.object({
//   email : Joi.string().min(5).max(200).required(),
//   password :Joi.string().min(8).max(500).required()
// });

const Signin = () => {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();

  // useEffect(()=>{return ()=>{
  //   setErrors({})
  // }},[])

  const signIn = () => {
    console.log(data);
    // const Error = SigninSchema.validate(data)
    console.log(Error);

    const { email, password } = data;
    let prev = errors;

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

    console.log(errors);
    setErrors(prev)
    if (
      !Object.values(prev).some((item) => item != "") &&
      Object.values(prev).length !== 0
    ) {
      axios
        .post(`${BASE_URL}/signin`, data)
        .then((response) => {
          console.log(response.data);
          if (response.data.Status == "Success") {
            alert("User Successfully Signed In");
            setData(initialValues);

            localStorage.setItem("user",JSON.stringify(response.data.user));

            localStorage.setItem("token", response.data.token);
            // const decoded = jwt_decode(response.data.data);
            // console.log(decoded);
            response.data.user.role === "admin"
              ? Navigate("/adminpanel")
              : Navigate("/facultypanel");
          } else {
            console.log(response.data.Error);
            setErrors({ password: response.data.Error });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const [isForget, setIsForget] = useState(false);

  return (
    <div class="sign-in-htm">
      <div class="group">
        <label for="user" class="label">
          Email Id
        </label>
        <input
          id="user"
          type="text"
          class="input"
          name="email"
          value={data.email}
          onChange={(e) => inputHandler(e, setData)}
        />
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
        <input
          id="check"
          type="checkbox"
          class="check" //checked
        />
        <label for="check">
          <span class="icon"></span> Keep me Signed in
        </label>
      </div>
      <div class="group">
        <input type="submit" class="button" value="Sign In" onClick={signIn} />
      </div>
      {/* <div class="hr"></div> */}
      <div class="foot-lnk">
        <div
          href="#forgot"
          onClick={() => {
            setIsForget((prev) => !prev);
          }}
        >
          Forgot Password?
        </div>
      </div>

      {isForget && (
        <>
          <div class="hr mb-3"></div>
          <center>
            <div class="group">
              <h5>Reset Your Passord</h5>
              <label for="user" class="label">
                Enter Your Email Id or Phone No.{" "}
              </label>
              <input id="user" type="text" class="input" />
              <br />
              <input
                type="submit"
                class="button"
                value="Send Reset Password Link"
                onClick={ForgetPassword}
              />
            </div>
          </center>
        </>
      )}
    </div>
  );
};

export default Signin;
