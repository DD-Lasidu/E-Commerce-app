import { Container ,Row,Col } from "react-bootstrap";

const Footer = () => {

    return (
<footer className = "bg-dark text-light py-2 mt-2">
           <div class="container">
<div class="row">
     <div class="col-md-4">
       <h5>About Us</h5>
       <p>We provide high-quality services to our customers.</p>
     </div>
     <div class="col-md-4">
       <ul class="list-unstyled">
         <li><a href="#" class="text-dark">Home</a></li>
         <li><a href="#" class="text-dark">Services</a></li>
         <li><a href="#" class="text-dark">Contact</a></li>
       </ul>
     </div>
     <div class="col-md-4">
       <h5>Contact</h5>
       <p>Email: info@example.com</p>
       <p>Phone: +123 456 7890</p>
     </div>
   </div>
   <hr />
   <p class="text-center">© 2023 Your Company. All rights reserved.</p>
 </div>
</footer>
    );
};



export default Footer;