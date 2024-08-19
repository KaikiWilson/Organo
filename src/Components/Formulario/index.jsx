import { useState } from "react";
import Inputs from "../Inputs"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import Button from "../Button";

const Formulario = ({colaboradorCadastrado, times}) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };


    return(
        <div className="box-form">
            <form onSubmit={aoSalvar}>
                <h3>Preencha os dados para criar o card do colaborador.</h3>
                <Inputs 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                
                <Inputs 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                
                <Inputs 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Times" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />

                <Button>
                    Criar card
                </Button>
                
            </form>
        </div>
    );
};

export default Formulario;