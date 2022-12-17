/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"

const PageTitleDiv = styled.div`
 //Dimensions:
  width: 279px;
  height: 82px;
 //Layout:
  display: flex;
  flex-direction: none;
  justify-content: flex-start;
  align-items: flex-start;
 //Properties:
  color: rgba(255.0, 255.0, 255.0, 1.0);
`
const Title = styled.div`
 //Dimensions:
  width: 198px;
  height: 89px;
 //Layout:
  display: flex;
  text-align: center;
  align-items: flex-end;
  letter-spacing: 0.15em;
 //Styling:
  font-family: 'Jura';
  font-weight: 400;
  text-transform: none;
  font-size: 75px;
 //Properties:
  color: rgba(0.0, 0.0, 0.0, 1.0);
  box-shadow: 0.0px 4.0px 4.0px rgba(0.0, 0.0, 0.0, 0.150);
`

const PageTitle = ({title}) => {
  return (
    <PageTitleDiv>
      <Title>
        {title}
      </Title>
    </PageTitleDiv>
  )
}

export default PageTitle;