import Card from "../Card";

const Skills = () => {
  return (
    <section className="flex flex-col m-24" id="skills">
      <Card>
        <>
          <h2 className="text-4xl font-bold my-4">Habilidades</h2>
          <Card color="bg-paletteBlue flex text-xl font-bold">
            <>
              <ul className="mx-4">
                <li>React.js</li> <li>JavaScript</li> <li>TypeScript</li>{" "}
                <li>Electron.js</li> <li>Sheet.js</li>
              </ul>
              <ul className="mx-4">
                <li>Styled-Components</li> <li>Firebase</li> <li>Html</li>{" "}
                <li>Css</li> <li>Node.js</li>
              </ul>
              <ul className="mx-4">
                <li>Python</li> <li>Flask</li> <li>Beautiful Soup</li>{" "}
                <li>SQLite</li> <li>MySql</li>
              </ul>
            </>
          </Card>
        </>
      </Card>
    </section>
  );
};

export default Skills;
