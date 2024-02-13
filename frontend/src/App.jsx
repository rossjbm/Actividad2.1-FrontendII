import { Button, Card } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa6";


function App() {

  return (
    <>
      <h1>Tienda de Electrodomesticos</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body className=''>
          <Card.Title>Card Title</Card.Title>
          <div>
          <FaHeart className='text-3xl text-green-300'/>
          </div>
          <Card.Text className=' bg-green-200'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='text-center'>
          <Button variant="primary">Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default App
