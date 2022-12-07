import {LoginContainer} from "./styles";
import {useState} from "react";
import {authenticate, register} from "../../Service/user";
import {saveAuthData} from "../../Util/localstorage/localStorage";
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {

    var [userName, setUserName] = useState("");
    var [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onRegisterClick = async () => {
        try {
            await register(userName, password);
            await authenticate(userName, password);
        } catch (e) {
            window.alert(e);
            throw e;
        }
    }
    const onLoginClick = async () => {
        try {
            const result = await authenticate(userName, password);
            if (result) {
                saveAuthData(result);
                navigate("/room")
            }
        } catch (e) {
            window.alert(e);
            throw e;
        }
    }
    return <LoginContainer>
        <input placeholder={"username"}
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
        />
        <input placeholder={"password"}
               onChange={(e) => setPassword(e.target.value)}
               value={password}/>
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onRegisterClick}>Register</button>
    </LoginContainer>
}
export default LoginPage;