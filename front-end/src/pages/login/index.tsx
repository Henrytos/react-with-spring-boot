import iconGoogle from "../../assets/icons/logos_google-icon.png";
import iconGithub from "../../assets/icons/akar-icons_github-fill.png";
import iconRocket from "../../assets/icons/RocketLaunch.png";
import { Button } from "../../components/button";
import { Title } from "../../components/title";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const onClickButtonGoogle = () => {};
  const onClickButtonGithub = () => {};
  const onClickButtonVisitor = () => {
    navigate("/");
  };

  return (
    <>
      <section
        className="col-span-5 h-full max-h-full"
        id="bg-login-page"
      ></section>
      <section className="col-span-7 h-full flex flex-col justify-center items-center text-white">
        <section className="w-full max-w-sm space-y-10">
          <div className="top space-y-0.5">
            <Title>Bem-vindo ao BookWise</Title>
            <p className="font-light">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <Button imageSrc={iconGoogle} onClick={onClickButtonGoogle}>
              Entrar com Google
            </Button>

            <Button imageSrc={iconGithub} onClick={onClickButtonGithub}>
              Entrar com Github
            </Button>

            <Button imageSrc={iconRocket} onClick={onClickButtonVisitor}>
              Acessar como visitante
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
