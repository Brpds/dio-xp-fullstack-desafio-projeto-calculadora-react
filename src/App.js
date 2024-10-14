import { Container, Content, Row } from "./styles";
import Input from './components/Input/index';
import  Button from "./components/Button";
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddNumber = (number) => {
      if(answer === ''){
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
      }else{
        setCurrentNumber(prev => `${prev !== '0' ? '' : prev}${number}`);
        setAnswer('');
        setCurrentNumber(number);
      }
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setAnswer('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setCurrentNumber('0')
      setOperation('+')
    }
  }

  const handleSubtractNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const difference = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(difference))
      setCurrentNumber('0')
      setOperation('-')
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const product = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(product))
      setCurrentNumber('0')
      setOperation('*')
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const quotient = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(quotient))
      setCurrentNumber('0')
      setOperation('/')
    }
  }

  const handleSquareNumbers = () => {
    if(firstNumber !== '0' || currentNumber !== '0'){
      setOperation('sqr')
      const sqrProduct = Math.pow(Number(currentNumber), 2)
      setCurrentNumber(String(sqrProduct))
      setFirstNumber(sqrProduct)
    }
  }


  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          const sum = Number(firstNumber) + Number(currentNumber)
          setCurrentNumber(String(sum))
          setAnswer(String(sum))
          setFirstNumber('0')
          setOperation('')
          break;
        case '-':
          const difference = Number(firstNumber) - Number(currentNumber);
          setCurrentNumber(String(difference))
          setAnswer(String(difference))
          setFirstNumber('0')
          setOperation('')
          break;
        case '*':
          const product = Number(firstNumber) * Number(currentNumber);
          setCurrentNumber(String(product))
          setAnswer(String(product))
          setFirstNumber('0')
          setOperation('')
          break;
        case '/':
          const quotient = Number(firstNumber) / Number(currentNumber);
          setCurrentNumber(String(quotient))
          setAnswer(String(quotient))
          setFirstNumber('0')
          setOperation('')
          break;
        case 'sqr':
          handleSquareNumbers();
        break;
        
        default:
          break;
      }
      
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x²" onClick={ handleSquareNumbers }/>
          <Button label="x" onClick={ handleMultiplyNumbers }/>
          <Button label="/" onClick={ handleDivideNumbers }/>
          <Button label="C" onClick={ handleOnClear }/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubtractNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
