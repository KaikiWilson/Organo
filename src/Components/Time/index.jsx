import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({nome, corSecundaria, corPrincipal, colaboradores}) => {
    return(

        (colaboradores.length > 0) &&

       <section className="time" style={{backgroundColor: corSecundaria}}>
            <h3 style={{ borderColor: corPrincipal }}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => <Colaborador corDeFundo={corPrincipal} key={colaborador.nome} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo}/>)}
            </div>
       </section>
    );
};

export default Time;