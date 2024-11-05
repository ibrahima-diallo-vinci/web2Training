import "./App.css";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Header from "./Header";
import Cinema from "./Cinema";
import { Movie } from "../types";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 : Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 : Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <div>
      <Header urlLogo="https://images.unsplash.com/photo-1631805249874-3f546d176de4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1>Tous sur les films</h1>
      </Header>

      <main className="pageContent">
        <PageTitle title={pageTitle} />

        <Cinema name={cinema1Name} movies={moviesCinema1} />

        <Cinema name={cinema2Name} movies={moviesCinema2} />
      </main>

      <Footer urlLogo="https://plus.unsplash.com/premium_photo-1709841531148-658a94aefd3c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <p>© 2021 UGC Cinémas</p>
      </Footer>
    </div>
  );
};

export default App;
