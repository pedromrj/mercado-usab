import React from "react";
import "./styles.css";
import ShopImage from "../../assets/shop-logo.svg";
import { TextField } from "@material-ui/core";

export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-image">
                    <img id="imagem-container"src={ShopImage} height="800px" alt="Imagem ilustrando a entrega de uma encomenda." />
                </div>
                <div className="container-form">
                    <div className="input-login">
                        <label className="label-form">Login</label>
                        <TextField id="standard-basic" label="E-mail"/>
                        <TextField id="standard-basic" label="Password"/>
                    </div>
                    <div className="container-button">
                        <button className="button-login"type="submit" >Entrar</button>
                    </div>
                    <label id="lb-esq-senha"className="label-form">Esqueceu a senha!</label>
                    <div className="container-cadastro">
                        <label>Cadastre-se Já</label>
                        <TextField id="standard-basic" label="E-mail" />
                    </div>
                    <div className="container-button-cadastro">
                        <button id="button-cadastro" className="button-login"type="submit" >Cadastra</button>
                    </div>
                </div>
            </div>
        );
    }
}