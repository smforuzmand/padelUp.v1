import styles from "./Context.module.scss";
import { SendIcon } from "../icons/SendIcon";
import { validateEmail, validatePhoneNumber } from "../../utils/regex";
import { useState } from "react";

const isEmpty = (input) => input == "";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const changeNameHandler = (name) => {
    setName(name);
    if (nameError) setNameError(false);
  };
  const changeMailHandler = (mail) => {
    setMail(mail);
    if (mailError) setMailError(false);
  };
  const changePhoneHandler = (phone) => {
    setPhone(phone);
    if (phoneError) setPhoneError(false);
  };
  const changeMessageHandler = (message) => {
    setMessage(message);
    if (messageError) setMessageError(false);
  };

  const submitHandler = () => {
    if (
      isEmpty(name) ||
      isEmpty(message) ||
      !validateEmail(mail) ||
      !validatePhoneNumber(phone)
    ) {
      if (isEmpty(name)) setNameError(true);
      if (isEmpty(message)) setMessageError(true);
      if (!validateEmail(mail)) setMailError(true);
      if (!validatePhoneNumber(phone)) setPhoneError(true);

      return;
    }

    // send http request
  };

  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h2>{props.header}</h2>
        <p>{props.subHeader}</p>
      </div>
      <form className={styles.form}>
        <div>
          <input
            onChange={(e) => changeNameHandler(e.target.value)}
            type="text"
            className={`${nameError ? "error" : ""}`}
            placeholder="Namn"
          />
          <input
            onChange={(e) => changeMailHandler(e.target.value)}
            type="text"
            className={`${mailError ? "error" : ""}`}
            placeholder="Mail"
          />
          <input
            onChange={(e) => changePhoneHandler(e.target.value)}
            type="text"
            className={`${phoneError ? "error" : ""}`}
            placeholder="Telefonnummer"
          />
        </div>
        <div>
          <textarea
            onChange={(e) => changeMessageHandler(e.target.value)}
            placeholder="meddelande"
            className={`${messageError ? "error" : ""}`}
            name=""
            id=""
          ></textarea>
          <a onClick={submitHandler} href="#" className="button">
            <SendIcon />
            skicka
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
