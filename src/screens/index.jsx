import { avatar, logoweb } from "assets";

import { LoginInput } from "components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "global";

export default function Index() {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  return (
    <>
      {/* <div className="login__container"></div> */}
      <div className="signin__text__wraper">
        <div className="signin__text__welcome"> Welcome To Food Severy</div>
        <div className="signin__text__btn__row">
          <div className="signin__text__signin">Sign In</div>
          <div className="signin__text__signup">Register</div>
        </div>

        <form
          className="login__container__form"
          onSubmit={(e) => {
            e.preventDefault();
            setUser({
              profilePic: avatar,
              name: "John doe",
            });
            navigate("/dashboard", { replace: true });
          }}
        >
          <img
            src={logoweb}
            alt="logo"
            className="login__container__form__logo"
          />
          <div className="signin__text__input__row">
            <div className="signin__text__input__row__label">Email</div>
            <input
              type="text"
              className="signin__text__input__row__input"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="signin__text__input__row">
            <div className="signin__text__input__row__label">Password</div>
            <input
              type="text"
              className="signin__text__input__row__input"
              placeholder="Enter Your Password"
            />
          </div>
          <input
            type="submit"
            value="Sign In"
            className="signin__text__input__row__submit
                "
          />
        </form>
      </div>
    </>
  );
}
