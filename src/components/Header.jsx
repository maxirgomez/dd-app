import imgHero from '../assets/img/img-test.png'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title, subtitle, btnUrlOne, btnTextOne, btnUrlTwo, btnTextTwo }) => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    {/* TODO: Modificar el responsive del header */}
                    <div className="col-lg-6 my-auto">
                        <h1>{title}</h1>
                        <h5 className="text-league">{subtitle}</h5>
                        <Link className="btn btn-success text-league" to={btnUrlOne}>{btnTextOne}</Link><Link className="btn btn-success text-league mx-1" to={btnUrlTwo}>{btnTextTwo}</Link>
                    </div>
                    {/* TODO: Modificar la imagen del hero */}
                    <div className="col-lg-6">
                        <img src={imgHero} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

//Props for use this component in another place
Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    btnUrlOne: PropTypes.string.isRequired, 
    btnTextOne: PropTypes.string.isRequired, 
    btnUrlTwo: PropTypes.string.isRequired, 
    btnTextTwo: PropTypes.string.isRequired
}

export default Header;