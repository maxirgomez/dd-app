import imgHero from '../assets/img/img-test.png'
import PropTypes from 'prop-types';

const HowItWorks = ({ title, paragraph }) => {
  return (
    <>
        {/* TODO:  Crear Helper para mapear la data de los textos */}
        <div className="container how-it-works">
            <div className="row">
                <div className="col-lg-6">
                    <img src={ imgHero } alt="" />
                    <h4>{ title }</h4>
                    <p>{ paragraph }</p>
                </div>
                <div className="col-lg-6">
                    <img src={ imgHero } alt="" />
                    <h4>{ title }</h4>
                    <p>{ paragraph }</p>
                </div>
                <div className="col-lg-6">
                    <img src={ imgHero } alt="" />
                    <h4>{ title }</h4>
                    <p>{ paragraph }</p>
                </div>
                <div className="col-lg-6">
                    <img src={ imgHero } alt="" />
                    <h4>{ title }</h4>
                    <p>{ paragraph }</p>
                </div>
            </div>
        </div>
    </>
  )
}

HowItWorks.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
}

export default HowItWorks