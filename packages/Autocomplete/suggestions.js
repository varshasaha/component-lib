import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SuggestionCtn = styled.div`
  display: flex;
  width: ${props => props.width ? `${props.width}px` : 0};
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 2px;
  z-index: 100;
  position: absolute;
  top: ${props => props.top ? `${props.top}px` : 0};
  background: white;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
`;

const Suggestion = styled.div`
  padding: 10px;
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const Suggestions = ({showSuggestions, inputPosition, inputWidth, onCloseSuggestions}) => {
  const [suggestions] = useState(['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4']);
  const root = document.getElementById('root');

  if(!showSuggestions) {
    return null;
  }
  const suggestionEl = (
    <Overlay onClick={onCloseSuggestions}>
      <SuggestionCtn top={inputPosition} width={inputWidth}>
        {
          suggestions.map(suggestion => <Suggestion key={suggestion}>{suggestion}</Suggestion>)
        }
      </SuggestionCtn>
    </Overlay>
  );

  return ReactDOM.createPortal(
    suggestionEl,
    root
  );
}


export default Suggestions;