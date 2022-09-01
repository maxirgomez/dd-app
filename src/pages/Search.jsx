import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string';
import Cards from "../components/Cards"
import { useForm } from "../hooks/useForm"
import { getPeopleByCause } from "../helpers/getPeopleByCause";


const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const peoples = getPeopleByCause( q );


  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {
      e.preventDefault();
      if( searchText.trim().length <= 1 ) return;
      navigate(`?q=${ searchText }`);
  }
  
  console.log(peoples);
  console.log(searchText);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={onSearchSubmit}>
              <input type="text" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange} />
              <button>search</button>
            </form>
          </div>
          <div className="col-lg-6">
            {
              peoples.map( people => (
                <Cards key={people.id} {...people}/>
              ) )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Search