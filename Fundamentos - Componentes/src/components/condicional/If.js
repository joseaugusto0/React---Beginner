/* <if test={passamos a expressão aqui}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</if>
se a expressão for verdadeira, aparece os spans, caso não, não aparece nada */

export default (props) => {
    /* Aqui ele irá procurar entre os filhos passados na instancia do Pai se há um filho <Else>*/
    const elseChild = props.children.filter((child) => {
        return child.type && child.type.name === "Else";
    })[0];

    /* Aqui ele vai pegar todos os outros filhos que sejam diferentes do Else */
    const ifChildren = props.children.filter((child) => {
        return child !== elseChild;
    });

    if (props.test) {
        return ifChildren;
    } else if (elseChild) {
        return elseChild;
    } else {
        return false;
    }
};

export const Else = (props) => props.children;
