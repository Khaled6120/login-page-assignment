import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <Logo />
      <Input labelName={"Email"} placeholder={"Enter your email"} type={"text"} />
      <Input labelName={"Password"} placeholder={"Enter your password"} type={"password"} />
      <Button />
    </div>
  );
}

export default Login;
