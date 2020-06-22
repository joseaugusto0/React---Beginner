import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
    function getProdutos() {
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 === 0 ? "Par" : "Impar"} key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    {/* toFixed serve para falar a quantidade de casas decimais */}
                    <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
                </tr>
            );
        });
    }
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>{getProdutos()}</tbody>
            </table>
        </div>
    );
};
