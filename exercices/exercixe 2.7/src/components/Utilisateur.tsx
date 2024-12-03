interface User {
    name: string;
    age: number;
  }
  
  interface UtilisateurProps {
    utilisateurs: User[];
  }

const Utilisateur = ({ utilisateurs }: UtilisateurProps) => {
    return (
      <div>
        {utilisateurs.map((utilisateur, index) => (
          <div key={index}>
            <h1>{utilisateur.name}</h1>
            <p>Age: {utilisateur.age}</p>
          </div>
        ))}
      </div>
    );
  };

export default Utilisateur;