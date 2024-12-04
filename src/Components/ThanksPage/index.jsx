import { useNavigate } from "react-router-dom";
import "./ThanksPage.css";
import "./ThanksPage-responsive.css";

const ThanksPage = () => {

  const navigate = useNavigate();

  const voltarParaFormulario = (evento) => {
    evento.preventDefault();
    navigate("/");
  }

  return (
    <>
      <div className="caixa">
        <div className="conteudo">
          <i className="bi bi-check-circle-fill"></i>
          <h2>Obrigado por se inscrever!</h2>
        </div>

        <div className="mensagem-de-inscricao">
          <p>Ficamos muito felizes em ter você conosco. A partir de agora, você receberá nossas novidades, promoções exclusivas e conteúdos especiais diretamente no seu e-mail.</p>
        </div>
        <button onClick={voltarParaFormulario}>Fechar mensagem</button>
      </div>
    </>
  );
};

export default ThanksPage;
