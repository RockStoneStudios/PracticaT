import { useState ,useEffect} from 'react'
import clientAxios from '../config/clientAxios';
import './components/Card/styles.css'
import { Card } from './components/Card/Card';

function App() {
  const [datos,setDatos] = useState([]);
   useEffect(()=>{
        const cargaDatos = async() =>{
           const data = await clientAxios('/api/get');
           setDatos(data.data)
           console.log(data);
        }
        cargaDatos();
   },[])

  return (
    <div className="container">
     {
       datos.map(item =>(
          <Card title = {item.title} image = {item.image} description = {item.description} category={item.category}/>
       ))
     }
    </div>
  )
}

export default App
