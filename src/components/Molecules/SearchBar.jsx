import {Form, InputGroup ,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const SearchBar = () => {
    <Form className="d-flex flex-grow mx3">
            <InputGroup>
                <Form.Control type ='search' placeholder="search Products"/>
                <button variant = 'outline-primary'>
                    <i className='bi bi-search'></i>
                </button>
            
            </InputGroup>
    </Form>
} ;

export default SearchBar;