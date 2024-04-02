import { ScaleLoader } from "react-spinners";
import "./styles/index.scss";

export const InProgress = () => {
  return (
    <>
      <div className="main">
        <ScaleLoader width={6} height={45} color="#FFB703" />
        <h1 className="main-text">Em desenvolvimento...</h1>
        <h2 className="main-copyright">
          Copyright © 2024 Lazy Pirates Productions. Todos os direitos
          reservados.
        </h2>
      </div>
    </>
  );
};
