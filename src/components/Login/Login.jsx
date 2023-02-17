import { useState } from "react";
import { LoginIcon } from "../icons/LoginIcon";
import styles from "./Login.module.scss";
import { validateEmail } from "../../utils/regex";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || password === "") {
      if (password === "") setPasswordError(true);
      if (!validateEmail(email)) setEmailError(true);
      return;
    }
    // Send HTTP request
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <h3>PadelUp Sweden</h3>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className={emailError ? "error" : ""}
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Lösenord"
          className={passwordError ? styles.error : ""}
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="button">
          <LoginIcon />
          Logga in
        </button>
      </form>
    </div>
  );
}

export default Login;
