import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import books from "../data/books.json"

function BookList() {
    return (
        <Row className="mx-5">
            {books.map((book)=>{
                return (
                    <SingleBook key={book.asin} props={book} />
                        
                )
            })}
        </Row>
    )
}

export default BookList