import { LoginInput } from "components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "global";

export default function Index() {
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
            setUser({
              name: "John doe",
            });
            navigate("/dashboard", { replace: true });
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
            login
          </button>
        </form>
      </div>
    </>
  );
}
