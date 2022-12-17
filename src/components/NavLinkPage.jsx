/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import IconImage from "./IconImage.jsx"

const NavLinkPageCont = styled.div`
 //Dimensions:
  width: auto;
  height: 30px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
 //Properties:
 :hover {
  transform: scale(1.1);
  transition: all 0.1s;
  cursor: pointer;
 }
`
const Icon = styled.div`
 //Dimensions:
  width: 26.06959342956543px;
  height: 30px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 //Properties:
`

const TextCont = styled.div`
 //Dimensions:
  width: auto;
  height: 30px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 //Properties:
`
const Text = styled.div`
 //Dimensions:
  width: auto;
  height: 30px;
 //Layout:
  display: flex;
  text-align: left;
  align-items: flex-start;
  letter-spacing: 0.05em;
 //Styling:
  font-family: 'Exo';
  font-weight: 400;
  text-transform: none;
  font-size: 25px;
 //Properties:
  color: rgba(91.4, 91.4, 91.4, 1.0);
`

const NavLinkPage = ({text, icon, link}) => {
  return (
    <a href={link} css={{textDecoration: 'none'}}>
      <NavLinkPageCont>
        <Icon>
          <IconImage Link={icon} />
        </Icon>
        <TextCont>
          <Text>
            {text}
          </Text>
        </TextCont>
      </NavLinkPageCont>
    </a>
  )
}

export default NavLinkPage;