import "./Inputs.css"

const Inputs = ({label, placeholder}) => {
    return(
            <div className="box-inputs">
                <label>{label}</label>
                <input type="text" placeholder={placeholder} />
            </div>
    )
}

export default Inputs;