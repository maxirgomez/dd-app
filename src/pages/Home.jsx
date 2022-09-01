import Cards from "../components/Cards"
import Header from "../components/Header"
import HowItWorks from "../components/HowItWorks"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"



const Home = () => {
    const peoples = getHeroesByPublisher(true);
    return (
        <>
            <Header
                title="Giver or taker?"
                subtitle="Fomentamos la construcción de procesos en causas particulares y generales sin intermediarios, queremos estar presentes."
                btnUrlOne="/search"
                btnTextOne="Buscar causas"
                btnUrlTwo="#"
                btnTextTwo="Sumar una causa"
            />
            <HowItWorks
                title="Un perfil para profesionales de la industria del software."
                paragraph="Vamos mucho más allá de un Perfil de LinkedIn. Comparte tus proyectos Open Source, tus experiencias en lenguajes de programación y mucho más, con la comunidad técnica."
            />
            {
              peoples.map( people => (
                <>
                    <div className="d-flex">
                        <Cards key={people.id} {...people}/>
                    </div>
                </>
              ) )
            }
        </>
    )
}

export default Home