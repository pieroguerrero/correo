import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserAccount, shapeUserAccount } from "../../models/UserAccount";
import NavPaths from "../../utilities/NavPaths";

interface ILogin {
  setUserAccount: (userAccount: IUserAccount | null) => void;
}

/**
 * The Login is going to enable the listening of an specific email inbox
 * @returns
 */
export function Login({ setUserAccount }: ILogin) {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.includes("@")) {
      const userAccount = shapeUserAccount(
        "No Name",
        "No Last Name",
        email.trim().toLowerCase()
      );
      setUserAccount(userAccount);
      navigate(NavPaths.DefaultAfteLogin.path);
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
          />
        </label>

        <button>Login</button>
      </form>
    </div>
  );
}
