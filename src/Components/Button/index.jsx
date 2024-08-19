import "./Button.css"

const Button = ({children}) => {
    return(
        <div className="box-button">
            <button>
                {children}
            </button>
        </div>
    );
};

export default Button;