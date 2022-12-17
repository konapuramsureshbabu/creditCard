import {useState} from 'react'
import {
  Container,
  CardContainer,
  CardContainer1,
  CardHead,
  CardNum,
  CardNameText,
  CardName,
  TextContainer,
  TextContainer1,
  TextHead,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNum = event => {
    setCardNum(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }
  const upperCardName = cardName.toUpperCase()

  return (
    <Container>
      <CardContainer>
        <CardHead>CREDIT CARD</CardHead>
        <CardContainer1 data-testid="creditCard">
          <CardNum>{cardNum}</CardNum>
          <CardNameText>CARDHOLDER NAME</CardNameText>
          <CardName>{upperCardName}</CardName>
        </CardContainer1>
      </CardContainer>
      <TextContainer>
        <TextContainer1>
          <TextHead>Payment Method</TextHead>
          <Input
            type="text"
            value={cardNum}
            placeholder="Card Number"
            onChange={onChangeCardNum}
          />
          <Input
            type="text"
            value={cardName}
            placeholder="Cardholder Name"
            onChange={onChangeCardName}
          />
        </TextContainer1>
      </TextContainer>
    </Container>
  )
}
export default CreditCard
