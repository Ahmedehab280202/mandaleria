/** @jsxImportSource @emotion/react */
import './productProfile.css'
import Navbar from '../../components/Navbar'
import MacrameDreamCatcher from "../../assets/MacrameDreamCatcher.jpeg";
import Btn from '../../components/Btn'

const ProductProfile = () => {
  return (
    <>
      <Navbar />
      <div class="Main">
          <div class="Product-profile">
              <div class="MainImageDisplay">
                  <img src={MacrameDreamCatcher} alt="" class="mainImg"/>
              </div>
          </div>
          <div class="ProductDescription">
              <div>
              <span class="Titlet">
                  Macrame Dream Catcher Medal
                </span></div>
                <label>
                  Name:
                  <span class="Value">
                    Macrame Dream Catcher
                  </span>
                </label>
                <label>
                  Price:
                  <span class="Value">
                    150 L.E
                  </span>
                </label>
                
                <label> Stock:<span class="Value">2</span></label>
                  <Btn text='Add To Cart' link='/cart' />
            {/* <div class="Frame-13">
                <span class="\-">
                    -
                  </span><span>
                    0
                  </span><span>
                    +
                  </span>
            </div> */}
          </div>
      </div>
    </>
    
  )
}

export default ProductProfile