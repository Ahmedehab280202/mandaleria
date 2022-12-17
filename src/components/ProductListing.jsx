/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"

const ProductListingDiv = styled.div`
 //Dimensions:
  width: 550px;
  height: 210px;
  padding: 0px 20px 0px 20px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
 //Properties:
  color: rgba(255.0, 255.0, 255.0, 1.0);
  border: 1px SOLID rgba(0.0, 0.0, 0.0, 0.1);
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0.0px 100.0px 80.0px rgba(208.0, 187.0, 182.0, 0.080),0.0px 64.8px 46.9px rgba(208.0, 187.0, 182.0, 0.068),0.0px 38.5px 25.5px rgba(208.0, 187.0, 182.0, 0.060),0.0px 20.0px 13.0px rgba(208.0, 187.0, 182.0, 0.055),0.0px 8.1px 6.5px rgba(208.0, 187.0, 182.0, 0.050),0.0px 1.9px 3.1px rgba(208.0, 187.0, 182.0, 0.042);

  :hover {
    transition: all 0.1s;
    transform: scale(1.1);
    cursor: pointer;
  }
`
const ImageSection = styled.div`
 //Dimensions:
  width: 251px;
  height: 210px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
 //Properties:
  background: rgba(255.0, 255.0, 255.0, 1.0);
`
const Image = styled.div`
 //Dimensions:
  width: 148px;
  height: 154px;
 //Layout:
  display: flex;
 //Properties:
`

const DescriptionSection = styled.div`
 //Dimensions:
  width: 343px;
  height: 210px;
 //Layout:
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
 //Properties:
`
const Title = styled.div`
 //Dimensions:
  width: 343px;
  height: 45px;
 //Layout:
  display: flex;
  text-align: left;
  align-items: center;
 //Styling:
  font-family: 'ABeeZee';
  font-weight: 400;
  text-transform: none;
  font-size: 18px;
 //Properties:
  color: rgba(24.0, 25.0, 26.0, 1.0);
`

const Price = styled.div`
 //Dimensions:
  width: 343px;
  height: 25px;
 //Layout:
  display: flex;
  text-align: left;
  align-items: flex-start;
 //Styling:
  font-family: 'Abel';
  font-weight: 400;
  text-transform: none;
  font-size: 21px;
 //Properties:
  color: rgba(177.0, 39.0, 4.0, 1.0);
`

const Stock = styled.div`
 //Dimensions:
  width: 343px;
  height: 17px;
 //Layout:
  display: flex;
  text-align: left;
  align-items: flex-start;
 //Styling:
  font-family: 'Amazon Ember';
  font-weight: 400;
  text-transform: none;
  font-size: 14px;
 //Properties:
  color: rgba(177.0, 39.0, 4.0, 1.0);
`

const ProductListing = ({price, stock, title ,image ,link}) => {
  return (
    <a href={link} css={{textDecoration: 'none'}}>
      <ProductListingDiv>
      <ImageSection>
        <Image>
          <img src={image} alt="" css={{width: '100%', height: '100%' }}/>
        </Image>
      </ImageSection>
      <DescriptionSection>
        <Title>
          {title}
        </Title>
        <Price>
          {price}
        </Price>
        <Stock>
          {stock}
        </Stock>
      </DescriptionSection>
    </ProductListingDiv>
    </a>
  )
}

export default ProductListing;