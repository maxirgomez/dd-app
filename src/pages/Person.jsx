import { Navigate, useParams } from 'react-router-dom';
import { getPersonById } from '../helpers/getPersonById';

const Person = () => {

  const { id } = useParams();
  const person = getPersonById(id);

  return (
    <>
      <div>
        <p>{person.name}</p>
        <p>{person.proyecto}</p>
        <p>{person.age}</p>
        <p>{person.active}</p>
      </div>
    </>
  )
}

export default Person