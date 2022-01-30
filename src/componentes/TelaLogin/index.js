import React from 'react';
import logo from './estilo.css'

export default function TelaLogin(){
    return (
        <div className="container">
            <header id="logomarca">
                <img src = {require("../../img/logo.png")} height = "60px" alt = "logo"/>
            </header>
            <div id = "formulario">
                <form>
                    <input type = "email" placeholder = "Telefone, e-mail ou nome de usuário" id = "login"></input>
                    <input type = "password" placeholder = "Senha" id = "password"></input>
                    <input type = "submit" value = "Avançar" className="button" id = "proceed"></input>
                    <input type = "submit" value = "Esqueceu sua senha?" className = "button" id = "forgotpw"></input>
                    <p>Não tem conta? <a href = "url">Inscreva-se</a></p>
                </form>
            </div>
        </div>
    );
}