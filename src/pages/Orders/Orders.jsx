import Navbar from '../../components/Navbar'
import './orders.css'

const Orders = () => {
  return (
    <>
      <div class="User_track_orders">
        <Navbar />
            <span class="Welcome">
                <span class="text-style-1">Welcome !</span>
          
              <p>Thanks for choosing us.</p>
              Your order has been received and is currently being processed by our crew. 
        
            </span>


            <div class="Progress-bar-1">
                <img src="./Progressbar.png" alt="" />
            </div>
            <span class="Ordered">
                <span class="text-style-1">Ordered </span>
                 17th Dec 2022
            </span>
            <div class="Frame-99">
                <span class="Order-Summary">
                    <span class="text-style-1">Order Summary</span> <br></br>
                    <span class="text-style-2"></span>
                    <span class="text-style-3">OrderNO </span><span class="text-style-4">:</span>
                    NEGEC0044014412-S1 <br></br>
                    <span class="text-style-5">Order Total </span>
                    <span class="text-style-6">:</span>
                    180.00 EGP <br></br>
                    <span class="text-style-7">Payment</span>
                    : Cash on delivery
                </span>
            </div>
            <div class="Frame-90">
                <span class="Shipping-Address">
                    <span class="text-style-1">Shipping Address :</span>
                    <span class="text-style-2"></span>
                    building No.11 1st floor .el obour <br></br>
                    Cairo , Egypt . <br></br>
                </span>
            </div>
            <div class="track_order_frame_2">
                <span class="Confirmed-Items-">
                   Confirmed Items : <br></br>
                </span>
                <span class="Delivery-by">
                    <br></br>
                   <p>Delivery by Thu, Dec 12</p> <br></br>
                </span>
               
                <div class="tote">
                    <img src="./tote.png" alt="" />
                </div>
                <div class="layout"><span class="covery-cases-Carmel-White">
                    <p>Macrame Dream Catcher</p>
                    <span class="text-style-1">180.00EGP</span>
                </span></div>
              
                    
            </div>
        
      </div>
    </>
  )
}

export default Orders