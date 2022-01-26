import { Header } from "../shared";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-layout__wrapper">
        <Header />
        <main className="main">
          <div className="main__wrapper">{children}</div>
        </main>
        <footer className="footer">
          <div className="footer__text">
            Web news project | Made by{" "}
            <a href="https://github.com/maxstenex" target="_blank" rel="noreferrer">
              Maxim Rozinkevich
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
