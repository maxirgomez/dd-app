import Card from "../components/Card"
import Header from "../components/Header"
import HowItWorks from "../components/HowItWorks"

const Home = () => {
    return (
        <>
            <Header
                title="Giver or taker?"
                subtitle="Fomentamos la construcción de procesos en causas particulares y generales sin intermediarios, queremos estar presentes."
                btnUrlOne="#"
                btnTextOne="Buscar causas"
                btnUrlTwo="#"
                btnTextTwo="Sumar una causa"
            />
            <HowItWorks
                title="Un perfil para profesionales de la industria del software."
                paragraph="Vamos mucho más allá de un Perfil de LinkedIn. Comparte tus proyectos Open Source, tus experiencias en lenguajes de programación y mucho más, con la comunidad técnica."
            />
            <Card />
        </>
    )
}

export default Home