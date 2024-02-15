import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert';

export default function Events(props){
 
    const [e,setEvent] = useState(props.e);
    const like= ()=> {
        setEvent((previousE) => ({
             ...previousE,
             like:!previousE.like
        }))
    }
    const bookEvent=() =>{
        props.functionAlert(),
        setEvent((previousE) =>
       ( {...previousE,nbParticipants:previousE.nbParticipants+1,
       nbTickets:previousE.nbTickets-1}))}
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets===0?"images/sold_out.png":`images/${e.img}`}/>
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
        <p>price: {e.price}</p>
        <p>nbtickets: {e.nbTickets}</p>
        <p>nbparticipants: {e.nbParticipants}</p>
        

        <Button variant="primary" onClick={bookEvent} disabled={e.nbTickets===0?true:false}>Book an event</Button>
        <Button variant="danger" onClick={like}>{e.like?"dislike":"like"}</Button>
      </Card.Body>
    </Card>
  );
}