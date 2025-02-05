import { Card, Button, Col } from "react-bootstrap";


function SingleBook({props}) {
    return (
       <Col >
            <Card  style={{ width: '16rem' }} className='my-3'>
                <Card.Img variant="top" src={props.img} className='w-100' style={{ height: '20rem' }}  />
                <Card.Body style={{ height: '10rem' }}>
                    <Card.Title style={{ fontSize: "17px" }}>{props.title}</Card.Title>
                    <Button className="p-1" style={{color:"white", backgroundColor:"#0D6EFD", }}> {props.price} € </Button>
                    <Card.Text> {props.category}</Card.Text>
                </Card.Body>
            </Card>
       </Col>
        
        
    )
}
export default SingleBook