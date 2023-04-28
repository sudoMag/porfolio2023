import BoldText from "../BoldText";

const About = () => {
  return (
    <section className="m-52 w-2/4" id="about">
      <h2 className="text-3xl font-bold my-4 text-paletteBlue">¡Hola!</h2>
      <p>
        Me llamo <BoldText>Manuel Casanova</BoldText>,{" "}
        <BoldText>React Developer</BoldText> con experiencia creando
        aplicaciones web buscando crear interfaces útiles e intuitivas para los
        usuarios.
      </p>
      <p>
      Soy de Venezuela, buscando trabajar en proyectos interesantes
        y aportar con mis habilidades al equipo.
      </p>
    </section>
  );
};

export default About;
