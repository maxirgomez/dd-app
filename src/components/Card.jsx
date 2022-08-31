import imgHero from '../assets/img/img-test.png'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { Link } from 'react-router-dom';

const Card = ({ active }) => {

    const persons = getHeroesByPublisher(active = true);

    console.log(persons);

    return (
        <>
            {/* TODO: hacer las cards dinamicas y modificar el carousel */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 my-auto">
                        <h2>nuestras causas</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nam fugit, quia fuga recusandae maiores at cupiditate, quam nostrum eum, eligendi ab corrupti placeat labore assumenda commodi voluptate deleniti! Maxime.</p>
                    </div>
                    <div className="col-lg-8 carousel-cards">
                        {
                            persons.map(({ id, name, proyecto }) => (
                                <div className="card" key={id}>
                                    <img src={imgHero} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{proyecto}</p>
                                        <Link to={`/proyect/${id}`}>ver más</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card