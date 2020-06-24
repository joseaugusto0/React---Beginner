import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
    /*     O filho irá passar as seguintes informações para o pai:
    nome idade nerd */

    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState("?");
    const [nerd, setNerd] = useState("?");

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>
                    <strong>{idade}</strong>{" "}
                </span>
                <span>{nerd ? "Verdade" : "Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
};
