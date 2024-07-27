import TableLanding from "../components/TableLanding";
import CaracteristicsContainer from "../components/CaracteristicsContainer";
import GetStartedButton from "../components/GetStartedButton";
import LearnMoreLink from "../components/LearnMoreLink";
import ParticlesBackground from "../components/ParticlesBackground";
import logo from "/GuccinAppLogoRemoveBG.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/LoginButton'
import Footer from '../views/Footer'

export function LandingPage() {
  const {isAuthenticated} = useAuth0()
  return (
    <>
      <main className="flex items-center justify-center h-[86vh] font-rubik mt-[14vh]">
        <ParticlesBackground id="particles" />
        <div className="flex flex-col items-start justify-center text-black font-bold ">
          <h1 className="text-5xl ">
            Tu <strong className="text-green">Asistente</strong> de cocina personalizado
          </h1>
          <p className="text-gray font-normal text-xl mb-8 max-w-4xl">
            Descubre recetas deliciosas, personalizadas y planes de alimentación adaptados a sus necesidades y preferencias dietéticas. ¿Lo mejor?, totalmente <strong className="text-black">gratis</strong>
          </p>
          <div className="flex items-center gap-8">
            {isAuthenticated ? <GetStartedButton /> : <LoginButton clasnames='bg-yellow p-[0.5em_1em] rounded' />}
            <LearnMoreLink text="¿Que es GuccinApp?" link="#info" />
          </div>
        </div>
      </main>
      <section
        id="info"
        className="text-center p-[6em_4em] font-rubik bg-black text-white"
      >
        <h2 className=" text-5xl font-bold text-yellow   ">
          GuccinApp Asistant
        </h2>
        <div className="flex items-center justify-around text-start">
          <p className="max-w-2xl">
            Es una innovadora herramienta de inteligencia artificial diseñada
            para transformar tu experiencia culinaria. Este asistente de cocina
            personalizado toma en cuenta tus datos de perfil, incluyendo tus
            patologías, preferencias alimenticias, gustos personales y estilo de
            vida, para recomendarte recetas detalladas que se ajustan
            perfectamente a tus necesidades y deseos.
          </p>
          <img src={logo} alt="" className="w-[14em] " />
        </div>
        <div className="flex flex-col gap-[4em] p-[0em_4em]">
          <CaracteristicsContainer
            number='1'
            title="Recomendaciones Personalizadas"
            text="Basado en la información de tu perfil, GuccinApp te sugiere recetas que no solo satisfacen tus gustos, sino que también consideran tus necesidades de salud y restricciones dietéticas."
            align="start"
          />
          <CaracteristicsContainer
            number='2'
            title="Elaboración Detallada"
            text="Cada receta viene con instrucciones paso a paso, detalladas y fáciles de seguir, para que puedas preparar tus comidas con confianza y sin complicaciones."
            align="end"
          />
          <CaracteristicsContainer
            number='3'
            title="Salud y Bienestar"
            text="Al considerar tus patologías y estilo de vida, GuccinApp te ayuda a mantener una dieta equilibrada y saludable, contribuyendo a tu bienestar general."
            align="start"
          />
          <CaracteristicsContainer
            number='4'
            title="Interfaz Amigable"
            text="Con una interfaz intuitiva y fácil de usar, navegar y encontrar las recetas ideales para ti es un proceso rápido y sencillo."
            align="end"
          />
        </div>
      </section>
      <section className="p-[4em_20em] text-center font-rubik text-black flex flex-col gap-10 backdrop-blur-sm bg-[#6c757d20]">
        <h2 className="text-5xl font-bold tracking-wider">Beneficios</h2>
        <TableLanding />
      </section>
      <section className="bg-white font-rubik p-[8em] flex items-center justify-between">
        <h2 className="text-4xl font-bold">Empieza a usar <strong className="text-yellow">GuccinApp</strong> Ahora</h2>
        <div className="flex flex-col items-end gap-4 text-end">
          <p>Comienza a editar tus preferencias y personaliza tu experiencia</p>
          {isAuthenticated ? <GetStartedButton /> : <LoginButton clasnames='bg-yellow p-[0.5em_1em] rounded' />}
        </div>
      </section>
      <Footer />
    </>
  );
}
