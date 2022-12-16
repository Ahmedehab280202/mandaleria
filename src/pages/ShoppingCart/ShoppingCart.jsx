import './shoppingCart.css'
import Navbar from '../../components/Navbar'
import ProductListing from '../../components/ProductListing'
import MacrameDreamCatcher from "../../assets/MacrameDreamCatcher.jpeg";
import Btn from '../../components/Btn'

const ShoppingCart = () => {
  return (
    <>
        <div class="shoppingcart">
          <Navbar />
          
          <div class="title">
              <span class="Cart">
                  Cart
              </span>
          </div>
          <div class="msec">
              <div class="msecProducts">
                  <ProductListing image={MacrameDreamCatcher} title='Macrame Dream Catcher' price='150 EGP' />
              </div>
              <div class="mseccheckout">
                  <div class="checkout-form">
                      <div class="formbody">
                          <div class="data">
                              <div class="ProductDetailSection">
                                  <label>
                                        Macrame Dream Catcher
                                  </label>
                                  <span class="Value">
                                      150 EGP
                                  </span>
                              </div>
                              <div class="ProductDetailSection">
                                  <label>
                                    
                                  </label>
                                  <span class="Value">
                                      
                                  </span>
                              </div>
                              <div class="ProductDetailSection">
                                  <label>
                                      Sub-Total:
                                  </label>
                                  <span class="Value">
                                    150 EGP
                                  </span>
                              </div>
                              <div class="ProductDetailSection">
                                  <label>
                                      Delivery:
                                  </label>
                                  <span class="Value">
                                      30 EGP
                                  </span>
                              </div>
                              <div class="ProductDetailSection">
                                  <label>
                                      Total:
                                  </label>
                                  <span class="Value">
                                      180 EGP
                                  </span>
                              </div>
                              <Btn text='Checkout' link='/checkout'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
export default ShoppingCart