import { LoginInput } from "components";
import { useAtom } from "jotai";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { userAtom } from "global";
import { useState } from "react";

export default function Index() {
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  return (
    <>
      <div className="signin__text__wraper">
        <div className="signin__text__welcome"> Welcome To clothing</div>
        <div className="signin__text__btn__row">
          <div className="signin__text__signin">Login</div>
        </div>

        <form
          className="login__container__form"
          onSubmit={(e) => {
            e.preventDefault();
            setProcessing(true);
            if (e.target.email.value === "" || e.target.password.value === "") {
              alert("Please fill all the fields");
              setProcessing(false);
              return;
            } else if (e.target.email.value === "") {
              alert("Please fill email field");
              setProcessing(false);
              return;
            } else if (e.target.password.value === "") {
              alert("Please fill password field");
              setProcessing(false);
              return;
            } else {
              axios
                .post("/users/login", {
                  email: e.target.email.value,
                  password: e.target.password.value,
                })
                .then((res) => {
                  setProcessing(false);
                  setUser({
                    name: res.data.email,
                  });
                  navigate("/dashboard", { replace: true });
                });
            }
          }}
        >
          <LoginInput
            label="Email"
            placeholder="Enter email"
            type="email"
            id="email"
          />
          <LoginInput
            label="Password"
            placeholder="Enter password"
            type="password"
            id="password"
          />
          <button type="submit" className="login__container__form__button">
            {processing ? "wait...." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
