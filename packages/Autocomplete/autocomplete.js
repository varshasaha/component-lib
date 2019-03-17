import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Suggestions from './suggestions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  height: 30px;
  font-size: 14px;
`;

const AutoComplete = () => {
  const [showSuggestions, setShowSuggestion] = useState(false);
  const [inputPosition, setInputPosition] = useState(0);
  const [inputWidth, setInputWidth] = useState(0);
  const inputEl = useRef();

  useEffect(() => {
    setInputPosition(inputEl.current.clientTop + inputEl.current.clientHeight + 10); 
    setInputWidth(inputEl.current.clientWidth);
  }, [inputPosition, inputWidth])

  const handleChange = (e) => {
    if(e.target.value) {
      setShowSuggestion(true);
      return;
    }
    setShowSuggestion(false);
  }

  const handleCloseSuggestions = () => {
    setShowSuggestion(false);
  }

  return (
    <Container>
      <Input ref={inputEl} onChange={handleChange} onFocus={handleChange} />
      <Suggestions
        showSuggestions={showSuggestions}
        inputPosition={inputPosition}
        inputWidth={inputWidth}
        onCloseSuggestions={handleCloseSuggestions}
      />
    </Container>
  );
}


export default AutoComplete;