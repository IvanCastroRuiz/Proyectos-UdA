import { useParams, Link } from 'react-router-dom';

const DetalleArticulo = () => {

  const params = useParams();
  console.log(params);

  return (
    <div>DetalleArticulo</div>
  )
}

export default DetalleArticulo