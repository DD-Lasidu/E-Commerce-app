import {Form, InputGroup ,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const SearchBar = () => {
    return(
        <Form className="d-flex flex-grow-1 mx3">
            <InputGroup>
                <Form.Control type ='search' placeholder="search Products"/>
                <Button variant = 'outline-primary'>
                    <i className="bi bi-search"></i>
                </Button>
            
            </InputGroup>
    </Form>
    );
} ;

export default SearchBar;