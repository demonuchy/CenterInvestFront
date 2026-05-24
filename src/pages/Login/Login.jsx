// src/pages/Login/Login.jsx
import AuthForm from "../../components/auth/AuthForm/AuthForm";
import useApi from "../../hooks/useApi";

const Login = () => {
    const {signIn} = useApi()
    return(
        <AuthForm apiCallFunc={signIn} btnText={"Sign in"}/>
    );
};

export default Login;