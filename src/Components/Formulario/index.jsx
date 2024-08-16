import Inputs from "../Inputs"
import Time from "../Time/index"
import "./Formulario.css"

const Formulario = () => {
    return(
        <div className="box-form">
            <form action="">
                <h3>Preencha os dados para criar o card do colaborador.</h3>
                <Inputs label="Nome" placeholder="Digite seu nome" />
                <Inputs label="Cargo" placeholder="Digite seu cargo" />
                <Inputs label="Imagem" placeholder="Digite o endereço da imagem" />
                <Time label="Time"/>
                
            </form>
        </div>
    );
};

export default Formulario;