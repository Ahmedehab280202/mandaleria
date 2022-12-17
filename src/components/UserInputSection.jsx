/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"

const UserInputSectionDiv = styled.div`
 //Dimensions:
  width: 441px;
  height: 63px;
 //Layout:
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 //Properties:
`
const Label = styled.div`
 //Dimensions:
  width: 59px;
  height: 23px;
 //Layout:
  display: flex;
  text-align: center;
  align-items: flex-end;
  letter-spacing: 0.15em;
 //Styling:
  font-family: 'Judson';
  font-weight: 700;
  text-transform: none;
  font-size: 20px;
 //Properties:
  color: rgba(0.0, 0.0, 0.0, 1.0);
`
const InputBar = styled.div`
 //Dimensions:
  width: 441px;
  height: 40px;
  padding: 10px 10px 10px 10px;
 //Layout:
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
 //Properties:
  background: rgba(255.0, 46.4, 0.0, 0.1);
  border: 1px SOLID rgba(178.0, 124.0, 112.0, 1.0);
  border-radius: 10px 10px 10px 10px;
`

const UserInputSection = ({label}) => {
  return (
    <UserInputSectionDiv>
      <Label>
        {label}
      </Label>
      <InputBar>
      </InputBar>
    </UserInputSectionDiv>
  )
}

export default UserInputSection;