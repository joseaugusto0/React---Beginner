import React from "react";

export default (props) => {
    const { min, max } = props;

    return (
        <h2>
            Número aleatório: {Math.floor(Math.random() * (max - min)) + min}
        </h2>
    );
};
