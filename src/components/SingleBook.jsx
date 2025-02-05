import { Card, Button, Col } from "react-bootstrap";


function SingleBook(props) {
    console.log(props)
    return (
       <Col >
            <Card  style={{ width: '17rem' }} className='my-3'>
                <Card.Img variant="top" src={props.book.img} className='w-100' style={{ height: '25rem' }}  />
                <Card.Body style={{ height: '13rem' }}>
                    <Card.Title style={{ fontSize: "17px" }}>{props.book.title}</Card.Title>
                    <Card.Text className="mt-1 mb-0" style={{ fontSize: "18px", fontWeight:"bold" }} >{props.book.price} € </Card.Text>
                    <Button className="p-1 mt-1" style={{color:"white", backgroundColor:"#0D6EFD", }}> Aggiungi al Carrello </Button>
                    
                </Card.Body>
            </Card>
       </Col>
        
        
    )
}
export default SingleBook