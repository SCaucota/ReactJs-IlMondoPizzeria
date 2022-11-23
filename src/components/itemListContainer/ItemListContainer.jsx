import React from "react";
import  PropTypes from "prop-types";

const ItemListContainer = (prop) => {
    const {nombre} = prop
    return(
        <div className="prop">Hola, {nombre}, Bienvenido.</div>
    );
};

ItemListContainer.propTypes = {
    nombre: PropTypes.element.isRequired
}

export default ItemListContainer;