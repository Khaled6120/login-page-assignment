import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <LoginForm />
    </div>
  );
};

export default Login;
