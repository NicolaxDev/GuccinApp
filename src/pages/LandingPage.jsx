import TableLanding from "../components/TableLanding";
import CaracteristicsContainer from "../components/CaracteristicsContainer";
import GetStartedButton from "../components/GetStartedButton";
import LearnMoreLink from "../components/LearnMoreLink";
import ParticlesBackground from "../components/ParticlesBackground";
import logo from "/GuccinAppLogoRemoveBG.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import Footer from "../views/Footer";
import "../styles/scrollBar.css";

export function LandingPage() {
  const { isAuthenticated } = useAuth0();
  return (
    <main className="asideScroll w-[100%] custom:h-full h-[90%] overflow-y-scroll">
      <main className="flex items-center justify-center h-[100vh] font-outfit text-center">
        <ParticlesBackground id="particles" />
        <div className="flex flex-col items-center justify-center text-white font-bold gap-4 ">
          <h1 className="text-4xl md:text-6xl ">
            Tu <strong className="text-green">Asistente</strong> de cocina
            personalizado
          </h1>
          <p className="text-letterGray font-normal text-lg md:text-xl mb-8 max-w-4xl text-center">
            Descubre recetas deliciosas, personalizadas y planes de alimentación
            adaptados a sus necesidades y preferencias dietéticas. ¿Lo mejor?,
            totalmente <strong className="text-green">gratis</strong>
          </p>
          <div className="flex items-center gap-8">
            {isAuthenticated ? (
              <GetStartedButton border="green" />
            ) : (
              <LoginButton
                text="Iniciar Sesión"
                clasnames="bg-green p-[0.7em_1.7em] rounded-full hover:bg-black border border-transparent hover:border-green"
              />
            )}
            {/* <LearnMoreLink text="¿Que es GuccinApp?" link="#info" /> */}
          </div>
        </div>
      </main>
      <section
        id="info"
        className="flex items-center flex-col gap-8 custom:gap-14 text-center p-[4em_2em] custom:p-[6em_4em] font-outfit bg-gray text-white"
      >
        <h2 className=" text-5xl font-bold text-green">GuccinApp Asistant</h2>
        <p className="w-[100%] custom:w-[80%]">
          Es una innovadora herramienta de inteligencia artificial diseñada para
          transformar tu experiencia culinaria. Este asistente de cocina
          personalizado toma en cuenta tus datos de perfil, incluyendo tus
          patologías, preferencias alimenticias, gustos personales y estilo de
          vida, para recomendarte recetas detalladas que se ajustan
          perfectamente a tus necesidades y deseos.
        </p>
        <div className="flex flex-col gap-[4em] w-[80%]">
          <CaracteristicsContainer
            number="1"
            title="Recomendaciones Personalizadas"
            text="Basado en la información de tu perfil, GuccinApp te sugiere recetas que no solo satisfacen tus gustos, sino que también consideran tus necesidades de salud y restricciones dietéticas."
            align="start"
          />
          <CaracteristicsContainer
            number="2"
            title="Elaboración Detallada"
            text="Cada receta viene con instrucciones paso a paso, detalladas y fáciles de seguir, para que puedas preparar tus comidas con confianza y sin complicaciones."
            align="end"
          />
          <CaracteristicsContainer
            number="3"
            title="Salud y Bienestar"
            text="Al considerar tus patologías y estilo de vida, GuccinApp te ayuda a mantener una dieta equilibrada y saludable, contribuyendo a tu bienestar general."
            align="start"
          />
          <CaracteristicsContainer
            number="4"
            title="Interfaz Amigable"
            text="Con una interfaz intuitiva y fácil de usar, navegar y encontrar las recetas ideales para ti es un proceso rápido y sencillo."
            align="end"
          />
        </div>
      </section>
      <section className="custom:p-[4em_20em] p-[4em_1em] text-center font-outfit text-black flex flex-col gap-10 backdrop-blur-sm bg-[#6c757d20]">
        <h2 className="text-green text-5xl font-bold tracking-wider">
          Beneficios
        </h2>
        <TableLanding />
      </section>
      <section className="bg-white font-outfit p-[2em_1em] md:p-[8em] flex flex-col md:flex-row items-center justify-center text-center md:text-start  md:justify-between">
        <h2 className="text-4xl font-bold">
          Empieza a usar <strong className="text-green">GuccinApp</strong> Ahora
        </h2>
        <div className="flex flex-col items-center text-center md:items-end gap-4 mdtext-end">
          <p>Comienza a editar tus preferencias y personaliza tu experiencia</p>
          {isAuthenticated ? (
            <GetStartedButton />
          ) : (
            <LoginButton
              text="Iniciar Sesión"
              clasnames="bg-yellow p-[0.5em_1em] rounded"
            />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
