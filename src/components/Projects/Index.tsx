import Image from "next/image";
import Card from "../Card";
import ButtonLink from "./ButtonLink";

const Projects = () => {
  return (
    <section className="flex flex-col m-24" id="projects">
      <h2 className="font-bold text-3xl my-6">Proyectos</h2>
      <Image
        className="my-4"
        src="/novaneta-banner.png"
        width={1252}
        height={899}
        alt=""
      />
      <Card flex>
        <>
          <section className="w-2/4 mx-4">
            <h3 className="text-4xl font-bold my-4">Tecnologías</h3>
            <Card color="bg-novanetaColor">
              <ul>
                <li className="text-2xl font-bold">React.js</li>
                <li className="text-2xl font-bold">TypeScript</li>
                <li className="text-2xl font-bold">Styled-Components</li>
                <li className="text-2xl font-bold">Firebase</li>
                <li className="text-2xl font-bold">Sheet.js</li>
              </ul>
            </Card>
          </section>
          <section className="w-2/4 mx-4">
            <ButtonLink
              icon="/github.svg"
              to="https://github.com/sudoMag/novaneta-restaurants"
            >
              Repositorio
            </ButtonLink>
            <ButtonLink
              bgColor="bg-novanetaColor"
              icon="/view-project.svg"
              to="https://novaneta-restaurants.vercel.app"
            >
              Proyecto
            </ButtonLink>
            <div className="mx-4">
              <p className="font-bold">Usuario de Prueba</p>
              <p>email: example@example.com</p>
              <p>contraseña: example</p>
            </div>
          </section>
        </>
      </Card>
      <Image
        className="my-4"
        src="/monimoni-banner.png"
        width={1252}
        height={614}
        alt=""
      />
      <Card flex>
        <>
          <section className="w-2/4 mx-4">
            <h3 className="text-4xl font-bold my-4">Tecnologías</h3>
            <Card color="bg-monimoniColor">
              <ul>
                <li className="text-2xl font-bold">Angular</li>
                <li className="text-2xl font-bold">TypeScript</li>
                <li className="text-2xl font-bold">CoinGecko API</li>
                <li className="text-2xl font-bold">News API</li>
              </ul>
            </Card>
          </section>
          <section className="w-2/4 mx-4">
            <ButtonLink
              icon="/github.svg"
              to="https://github.com/sudoMag/angular-example-projects"
            >
              Repositorio
            </ButtonLink>
            <ButtonLink
              bgColor="bg-monimoniColor"
              icon="/view-project.svg"
              to="https://angular-example-project.vercel.app/"
            >
              Proyecto
            </ButtonLink>
          </section>
        </>
      </Card>
      <Image
        className="my-4"
        src="/greco-banner.png"
        width={1252}
        height={581}
        alt=""
      />
      <Card flex>
        <>
          <section className="w-2/4 mx-4">
            <h3 className="text-4xl font-bold my-4">Tecnologías</h3>
            <Card color="bg-grecoColor">
              <ul>
                <li className="text-2xl font-bold">React.js</li>
                <li className="text-2xl font-bold">JavaScript</li>
                <li className="text-2xl font-bold">TypeScript</li>
                <li className="text-2xl font-bold">Styled-Components</li>
                <li className="text-2xl font-bold">Electron.js</li>
              </ul>
            </Card>
          </section>
          <section className="w-2/4 mx-4">
            <ButtonLink
              icon="/github.svg"
              to="https://github.com/sudoMag/greco"
            >
              Repositorio
            </ButtonLink>
            <ButtonLink
              bgColor="bg-grecoColor"
              icon="/view-project.svg"
              to="https://grecoapp.vercel.app/"
            >
              Proyecto
            </ButtonLink>
          </section>
        </>
      </Card>
    </section>
  );
};

export default Projects;
