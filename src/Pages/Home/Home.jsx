import Bannar from "../../Components/Bannar/Bannar";
import CredentialAndProjects from "../../Components/CredentialAndProjects/CredentialAndProjects";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <section className="mt-16">
          <Bannar></Bannar>
        </section>
      </header>
    {/* Main */}
    <main>
      {/* Credential And Projects */}
      <section className="mt-12">
        <CredentialAndProjects></CredentialAndProjects>
      </section>
    </main>
    </div>
  );
};

export default Home;
