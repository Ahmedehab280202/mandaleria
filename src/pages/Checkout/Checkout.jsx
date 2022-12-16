import './checkout.css'
import Navbar from '../../components/Navbar';
import Btn from '../../components/Btn';

const Checkout = () => {
  return (
    <div className='checkout'>
      <Navbar />
      
      <span class="Title">Checkout</span>
      <form>
        <div class="PaymentInfo">
          <span class="paymentText">Address Info</span>
        </div>
      
        <div class="UserInputSection">
          <label>Phone Number</label>
          <input class="InputBar"type="text" name="phonenumber"/>
        </div>
        <div class="UserInputSection">
          <label>City</label>
          <input class="InputBar" type="text" name="phonenumber"/>
        </div>
        <div class="UserInputSection">
          <label>Address</label>
          <input class="InputBar"type="text" name="phonenumber"/>
        </div>
        <span class="paymentMethod">{/* Payment Method */}</span>     
        
        {/* <div class="PaymentMethods">
          <div class="Frame75">
            <span class="CashOnDelivery">
              Cash On Delivery
            </span><div class="Frame77"></div>
          </div>
          <div class="Frame76">
            <span class="CreditCard">
              Credit Card
            </span>
            <div class="Frame77"></div>
          </div>
        </div> */}
        <Btn text='Place Order' link='/orders' />
      </form>
    </div>
  )
}

export default Checkout;