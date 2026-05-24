// src/pages/Register/Register.jsx
import AuthForm from "../../components/auth/AuthForm/AuthForm";
import useApi from "../../hooks/useApi";

const Register = () => {
    const {signUp} = useApi()
    return(
        <AuthForm apiCallFunc={signUp} btnText={"Sing up"}/>
    );
};

export default Register;