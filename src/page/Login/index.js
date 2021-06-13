import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import ShopImage from "../../assets/shop-logo.svg";
import { TextField } from "@material-ui/core";
import Users from "../../server/usuarios.json";

const Login = () => {
    const history = useHistory();
    const [ user, setUser] = useState({
        email: "",
        password: ""
    });
    const [ existError , setError] = useState({
        status: false
    });

    const [ cadastro, setCadastro] = useState({
        email: ""
    });

    function findUser(email) {
        for (let index = 0; index < Users.length; index++) {
            const e = Users[index];
            if(e.email === email){
                return e;
            }
            
        }
        return undefined;
    }

    function isAccredited(email,password) {
        var usuario = findUser(email);
        if (usuario) {
            if (usuario.password === password) {
                return true;
            }
        }
        return false;
    }

    function login() {
        if (isAccredited(user.email, user.password)) {
            history.push("/home");
            setError({
                status: false
            })
        }
        setError({
            status: true
        })
    }

    function logError() {
        if (existError.status) {
            return (<label className="error">E-mail ou senha estão incorretos.</label>);
        }
        return (<label></label>);
    }

    function register(e) {
        localStorage.setItem("cadastro-email", cadastro.email);
        history.push("/register");
    }

    function onhandlerChangeEmailRegister(e) {
        setCadastro({
            email: e.target.value
        })
    }

    function onHandlerChangeEmail(e) {
        setUser({
            email: e.target.value,
            password: user.password
        })
    }

    function onHandlerChangePassword(e){
        setUser({
            email: user.email,
            password: e.target.value 
        })
    }
    
    return (
        <div className="container">
            <div className="container-image">
                <img id="imagem-container"src={ShopImage} height="600px" alt="Imagem ilustrando a entrega de uma encomenda." />
            </div>
            <div className="container-form">
                <div className="input-login">
                    <label className="label-form">Login</label>
                    <TextField error={existError.status} onChange={onHandlerChangeEmail} id="standard-basic" label="E-mail"/>
                    <TextField error={existError.status} type="password" onChange={onHandlerChangePassword} id="standard-basic" label="Password"/>
                    {logError()}
                </div>
                <div className="container-button">
                    <button className="button-login"type="submit" onClick={login} >Entrar</button>
                </div>
                <label id="lb-esq-senha"className="label-form">Esqueceu a senha!</label>
                <div className="container-cadastro">
                    <label>Cadastre-se Já</label>
                    <TextField onChange={onhandlerChangeEmailRegister} id="standard-basic" label="E-mail" />
                </div>
                <div className="container-button-cadastro">
                    <button id="button-cadastro" className="button-login"type="submit" onClick={register}>Cadastra</button>
                </div>
            </div>
        </div>
    );
}

export default Login;