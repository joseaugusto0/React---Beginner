import React from "react";
import "./App.css";

import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import PrimeiroComp from "./components/basicos/Primeiro";
import ComParam from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

export default (_) => (
    <div className="App">
        <h1>Fundamentos React (Arrow _)</h1>

        <div className="Cards">
            <Card titulo="#11 - Componente Controlado" color="#D96459">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#1FDA9A">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#F0A830">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#00C8F8">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: "fe@nando.com" }}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#1F8A0A">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#1F8A9A">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#1FDA9A">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio aleatório" color="#E94C6F">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#C6D5CD">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#5A6A62">
                <ComParam
                    titulo="Situação do aluno"
                    subtitulo="Maria"
                    nota={9.9}
                ></ComParam>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#542733">
                <PrimeiroComp></PrimeiroComp>
            </Card>
        </div>
    </div>
);
