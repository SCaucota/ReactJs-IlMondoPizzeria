import React from "react";
import  PropTypes from "prop-types";
import "./styles/ItemListContainer.css"

const ItemListContainer = ({nombre}) => {
    return(
        <div className="prop">Hola {nombre}, Bienvenido.</div>
    );
};

ItemListContainer.propTypes = {
    nombre: PropTypes.element.isRequired
}

export default ItemListContainer;