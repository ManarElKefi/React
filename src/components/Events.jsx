import Event from "./Event";
import listEvent from "../data/events.json";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
export default function Events(){
    const [showAlert,setShowalert] = useState(false);
    const [showWelcome,setShowwelcome] = useState(false)
    const modifAlert=()=> {
        setShowalert(true);
        setTimeout(() => setShowalert(false),1000);
    }

    useEffect(() => {
        setShowwelcome(true),
       setTimeout(() => setShowwelcome(false),3000)
        return () => {
            console.log("Welcome unmounting");
           // clearTimeout(() => result)
        } 
    })
    return <>
{showWelcome && <Alert variant="success">
    Bienvenue
    </Alert>}


<Row>
{
    listEvent?.map((element,index) => {
        return <Event key={index} e={element} functionAlert={modifAlert}
            
        />
    })
}
</Row>

{showAlert && <Alert variant="Success">
         You have booked an event !
        </Alert>
}
    </>
}

