import React from "react";
import '../styles.css';

const Footer = ()=>{
    return(
        <footer class="footer bg-dark text-light">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                  <h5>About Us</h5>
                  <p>
                    We are a leading online bookstore providing a wide range of books for all book lovers. 
                    Our mission is to promote reading and knowledge by making books accessible to everyone.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4">
                  <h5>Quick Links</h5>
                  <ul class="list-unstyled">
                    <li><a href="#" class="text-light">Home</a></li>
                    <li><a href="#" class="text-light">Best Sellers</a></li>
                    <li><a href="#" class="text-light">New Arrivals</a></li>
                    <li><a href="#" class="text-light">Contact Us</a></li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <h5>Customer Service</h5>
                  <ul class="list-unstyled">
                    <li><a href="#" class="text-light">Shipping & Returns</a></li>
                    <li><a href="#" class="text-light">FAQs</a></li>
                    <li><a href="#" class="text-light">Privacy Policy</a></li>
                    <li><a href="#" class="text-light">Terms & Conditions</a></li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                  <h5>Subscribe to Our Newsletter</h5>
                  <form>
                    <div class="form-group">
                      <input type="email" class="form-control mb-2" placeholder="Enter your email"></input>
                      <button type="submit" class="btn btn-primary w-100">Subscribe</button>
                    </div>
                  </form>
                  <div class="social-icons mt-3">
                    <a href="#" class="text-light me-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-light me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-light"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col text-center">
                  <p>&copy; 2024 Your Bookstore. All Rights Reserved.</p>
                </div>
              </div>
            </div>
        </footer>

    )
}

export default Footer;