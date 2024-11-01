import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Utilisateur from "./Utilisateur";

const App = () => {
  const title = "Welcome to My App";

  const footerText = "© 2023 My App";

  const utilisateurs = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  return (
    <div>
      <PageTitle title={title} />
      
      
      <Utilisateur utilisateurs={utilisateurs} />

      <Footer footerText={footerText} />
    </div>
  );
};

export default App;
