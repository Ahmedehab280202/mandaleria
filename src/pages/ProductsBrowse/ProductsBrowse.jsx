import './productBrowse.css'
import Navbar from '../../components/Navbar';
import ProductListing from '../../components/ProductListing';
import MacrameDreamCatcher from "../../assets/MacrameDreamCatcher.jpeg";
import MacrameMedal from "../../assets/MacrameMedal.jpeg";
import PharaonicMakeupBag from "../../assets/PharaonicMakeupBag.jpeg";

const ProductsBrowse = () => {
  return (
    <>
      <div class="prodbrows">
        <Navbar />

            <div class="TitleSection">
                <span class="Title">
                    Products
                </span>
            </div>
            <div class="MainSection">
                <div class="Row">
                    <ProductListing title='Macrame Dream Catcher' stock='' price='Price: 150 EGP' image={MacrameDreamCatcher} link='/productprofile' />
                    <ProductListing title='Macrame Medal' stock='' price='Price: 50 EGP' image={MacrameMedal} link='/productprofile' />
                </div>
                <div class="Row">
                    <ProductListing title='Pharaonic Makeup Bag' stock='' price='Price: 160 EGP' image={PharaonicMakeupBag} link='/productprofile' />
                </div>
            </div>
    </div>
    </>
  )
}

export default ProductsBrowse;