import { useState } from "react";
import { LoginIcon } from "../icons/LoginIcon";
import styles from "./Login.module.scss";
import { validateEmail } from "../../utils/regex";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [emailHasError, setEmailHasError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordHasError, setPasswordHasError] = useState(false);

  const emailChangeHandler = (email) => {
    setEmail(email);
    if (emailHasError) setEmailHasError(false);
  };

  const passwordChangeHandler = (password) => {
    setPassword(password);
    if (passwordHasError) setPasswordHasError(false);
  };

  const submitHandler = async () => {
    if (!validateEmail(email) || password === "") {
      if (password === "") setPasswordHasError(true);
      if (!validateEmail(email)) setEmailHasError(true);
      return;
    }

    try {
      const response = await fetch("/api/v1/player", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Player created successfully, do something
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network error
    }
  };

  return (
    <div className={styles.login}>
      <form>
        <h3>PadelUp Sweden</h3>
        <input
          type="text"
          name="mail"
          id="mail"
          placeholder="MAIL"
          className={`${emailHasError ? "error" : ""}`}
          onChange={(e) => emailChangeHandler(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="lösenord"
          className={`${passwordHasError ? styles.error : ""}`}
          onChange={(e) => passwordChangeHandler(e.target.value)}
        />

        <button type="button" onClick={submitHandler} className="button">
          <LoginIcon />
          logga in
        </button>
      </form>
    </div>
  );
};

export default Login;
