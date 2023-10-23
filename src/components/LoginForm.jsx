import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: 0, password: 0 });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" && password === "") {
      setErrors({ email: 1, password: 1 });
    } else if (email === "") {
      setErrors({ email: 1, password: 0 });
    } else if (password === "") {
      setErrors({ email: 0, password: 1 });
    } else {
      setErrors({ email: 0, password: 0 });
      toast("Login successful", {
        position: "top-center",
      });
      return;
    }
  };

  return (
    <>
      <ToastContainer />
      <form>
        <Input
          labelName={"Email"}
          placeholder={"Enter your email"}
          type={"email"}
          value={email}
          onChange={handleEmailChange}
          errors={errors}
        />
        <Input
          labelName={"Password"}
          placeholder={"Enter your password"}
          type={"password"}
          value={password}
          onChange={handlePasswordChange}
          errors={errors}
          extra={"Forget password?"}
        />
        <Button type="button" handleSubmit={handleSubmit} text={"Log in"} />
      </form>
    </>
  );
}

export default LoginForm;
