import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./FormsPage.css";
import "./FormsPage-responsive.css";

const Formulario = () => {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const salvarFormulario = (evento) => {
    evento.preventDefault();

    if (!email) {
      setEmailError('E-mail é obrigatório!')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor, insira um e-mail válido!');
    } else {
      setEmailError('');
      navigate("/ThanksPage/index.jsx");
    }

  };

  return (
    <>
      <div className="container-principal">
        <div className="conteudo">
          <div className="texto">
            <h2>Fique Atualizado!</h2>
            <p>+70.000 assuntos de tecnologias para você se informar!</p>
          </div>

          <div className="lista">
            <ul>
              <li>
                <i class="bi bi-check-circle-fill"></i>Últimas Notícias do Mundo
                da Tecnologia
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>Artigos e Tutoriais
                Imperdíveis
              </li>
              <li>
                <i class="bi bi-check-circle-fill"></i>Oportunidades de Carreira
                em Tecnologia
              </li>
            </ul>
          </div>

          <div className="container-formulario">
            <form onSubmit={salvarFormulario}>
              <label>E-mail:</label>
              <input
                type="email"
                id="email"
                placeholder="email@dominio.com"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                className={emailError ? "input-error" : ""}
                />
              <button>Inscreva-se na NewsLetter</button>
            </form>
          </div>
        </div>

        <div className="imagem">
          <img src="/imagens/banner.webp" alt="Bannner" />
          <img className="mobile" src="/imagens/banner-mobile.webp" alt="Bannner" />
        </div>
      </div>
    </>
  );
};

export default Formulario;
