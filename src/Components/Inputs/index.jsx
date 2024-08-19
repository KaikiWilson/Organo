import { useState } from "react";
import "./Inputs.css"

const Inputs = ({label, placeholder, obrigatorio, valor, aoAlterado}) => {

    const aoDigitar = (evento) => {
        aoAlterado(evento.target.value)
    };

    return(
            <div className="box-inputs">
                <label>
                    {label}
                </label>
                <input value={valor} onChange={aoDigitar} required={obrigatorio} type="text" placeholder={placeholder} />
            </div>
    );
};

export default Inputs;