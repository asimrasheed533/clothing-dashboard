import { avatar, logo } from "assets";

import { LoginInput } from "components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "global";

export default function Index() {
  const navigate = useNavigate();
  const [, setUser] = useAtom(userAtom);
  return (
    <div className="login__container">
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
        <img src={logo} alt="logo" className="login__container__form__logo" />
        <LoginInput label="Email" placeholder="Enter email" type="email" />
        <LoginInput
          label="Password"
          placeholder="Enter password"
          type="password"
        />
        <button type="submit" className="login__container__form__button">
          Sign in
        </button>
      </form>
    </div>
  );
}
