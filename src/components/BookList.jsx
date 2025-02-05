import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";


function BookList(props) {
    return (
        <Row className="mx-5">
            {props.book.map((book)=>{
                return (
                    <SingleBook key={book.asin} book={book}/>
                        
                )
            })}
        </Row>
    )
}

export default BookList