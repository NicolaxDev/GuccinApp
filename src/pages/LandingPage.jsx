import CaracteristicsContainer from "../components/CaracteristicsContainer";
import GetStartedButton from "../components/GetStartedButton";
import LearnMoreLink from "../components/LearnMoreLink";
import ParticlesBackground from "../components/ParticlesBackground";
import logo from "/GuccinAppLogoCircle.png";

export function LandingPage() {
  return (
    <>
      <main className="flex items-center justify-center h-[86vh] font-rubik mt-[14vh]">
        <ParticlesBackground id="particles" />
        <div className="flex flex-col items-start justify-center text-black font-bold ">
          <h1 className="text-5xl ">
            Tu mejor <strong className="text-green">Asistente</strong> en la
            cocina
          </h1>
          <p className="text-blueMate text-xl mb-8">
            Cocina <strong className="text-black">gratis</strong>, fácil y para todos
          </p>
          <div className="flex items-center gap-8">
            <GetStartedButton />
            <LearnMoreLink text="¿Que es GuccinApp?" link="#info" />
          </div>
        </div>
      </main>
      <section
        id="info"
        className="text-center p-[4em] font-rubik bg-black text-white"
      >
        <h2 className=" text-4xl font-bold text-yellow   ">
          GuccinApp Asistant
        </h2>
        <div className="flex items-center justify-center text-start">
          <p className="max-w-2xl">
            Es una innovadora herramienta de inteligencia artificial diseñada
            para transformar tu experiencia culinaria. Este asistente de cocina
            personalizado toma en cuenta tus datos de perfil, incluyendo tus
            patologías, preferencias alimenticias, gustos personales y estilo de
            vida, para recomendarte recetas detalladas que se ajustan
            perfectamente a tus necesidades y deseos.
          </p>
          <img src={logo} alt="" className="w-[18em] " />
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
    </>
  );
}
