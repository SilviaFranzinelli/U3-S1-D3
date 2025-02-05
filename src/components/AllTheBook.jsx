import {Container, Card, Button} from 'react-bootstrap';
import book from "../data/book.json"

function AllTheBook() {
    return (
        
        <Container className='d-flex flex-wrap '>
            {book.map((libri)=>{

                return (
                    <Card key={`libri-${libri.asin}`} style={{ width: '15rem' }} className='m-2'>
                        <Card.Img variant="top" src={libri.img} className='w-100' style={{ height: '20rem' }} />
                        <Card.Body >
                            <Card.Title style={{ fontSize: "17px" }}>{libri.title}</Card.Title>
                            <Button  style={{color:"white", backgroundColor:"#0D6EFD", }}> {libri.price} € </Button>
                            <Card.Text> {libri.category}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </Container>
            
       
        
    )

  
}

export default AllTheBook;