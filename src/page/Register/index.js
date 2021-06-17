import React, { useState , useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./styles.css";
import ShopImage from "../../assets/shop-logo.svg";
import { TextField} from "@material-ui/core";
import ArrowBack from "../../assets/arrow_back.svg";
import Users from "../../server/usuarios.json";

const Register = () => {
    const users = Users;
    const errors = 0;
    const history = useHistory();
    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [isValidPass, setValid] = useState({ error: false});


    function register() {
        if (errors === 0) {
            users.push({
                name: user.name,
                email: user.email,
                password: user.password
            });             
            history.push("/");  
        }
    }

    useEffect(() => {
        const email = localStorage.getItem("cadastro-email");

        if(email) {
            setUser({
                name: "",
                email: email,
                password: ""
            });
        }
    }, []);

    function handlerName(e) {
        setUser({
            name: e.target.value,
            email: user.email,
            password: user.password,
        })
    }
    
    function handlerEmail(e) {
        setUser({
            name: user.name,
            email: e.target.value,
            password: user.password,
        })
    }
    
    function handlerPassword(e) {
        setUser({
            name: user.name,
            email: user.email,
            password: e.target.value,
        })
    }
    
    function handlerConfirmPassword(e) {
        if (user.password === e.target.value) {
            return setValid({error: false});
        }
        return setValid({error: true});;
    }

    function logError() {
        if (isValidPass.error) {
            return(<label id="error">Senha não é igual.</label>)
        }
    }
    
    return (
        <div className="container-register">
            <div className="container-image">
                <img id="imagem-container"src={ShopImage} height="600px" alt="Imagem ilustrando a entrega de uma encomenda." />
            </div>
            <div className="container-form">
                <div className="icon-back">
                    <Link to="/"><img src={ArrowBack} alt="Icone de volta para pagina de login!" /></Link>
                </div>
                <div className="input-login">
                    <label className="label-form">Cadastro</label>
                    <div className="input-form">
                        <TextField className="input-cadastro" className="standard-basic" onChange={handlerName} label="Name"/>
                    </div>
                    <div className="input-form">
                        <TextField className="input-cadastro" className="standard-basic" value={user.email} onChange={handlerEmail} label="E-mail"/>
                    </div>
                    <div className="input-form">
                        <TextField className="input-cadastro" type="password" className="standard-basic" onChange={handlerPassword} error={isValidPass.error} label="Password"/>
                    </div>
                    <div className="input-form">
                        <TextField className="input-cadastro" type="password" className="standard-basic" onChange={handlerConfirmPassword} error={isValidPass.error}label="Confirm Password"/>
                        {logError()}
                    </div>
                    <div className="container-button">
                        <button className="button-login"type="submit" onClick={register} >Cadastrar</button>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Register;