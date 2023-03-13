import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserAccount, shapeUserAccount } from "../../entities/UserAccount";
import NavPaths from "../../utilities/NavPaths";

interface ILogin {
  setUserAccount: (userAccount: IUserAccount | null) => void;
}

export function Login({ setUserAccount }: ILogin) {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email.includes("@")) {
      const userAccount = shapeUserAccount("No Name", "No Last Name", email);
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
