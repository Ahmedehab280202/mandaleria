/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"

const BtnDiv = styled.div`
 //Dimensions:
  width: auto;
  height: 55px;
  padding: 10px 10px 10px 10px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
 //Properties:
  background-color: rgba(178.0, 124.0, 112.0, 0.4);
  border-radius: 10px 10px 10px 10px;

  :hover {
    box-shadow: 0px 0px 10px lightgrey;
    transform: scale(1.1);
    transition: all 0.1s;
    cursor: pointer;
  }
`
const Text = styled.div`
 //Dimensions:
  width: auto;
  padding: 0 30px;
  height: 35px;
 //Layout:
  display: flex;
  text-align: center;
  align-items: flex-end;
 //Styling:
  font-family: 'ABeeZee';
  font-weight: 400;
  text-transform: none;
  font-size: 30px;
 //Properties:
  color: rgba(0.0, 0.0, 0.0, 1.0);
`

const Btn = ({text,link}) => {
  return (
    <a href={link} css={{textDecoration: 'none'}}>
      <BtnDiv>
        <Text>
          {text}
        </Text>
      </BtnDiv>
    </a>
  )
}

export default Btn;