import styled from 'styled-components';

function App() {
  return (
    <AppSection>
      <AppContainer>
        <h2>Github branches for each episodes</h2>
        <ol dir="auto">
          <li><a href="https://github.com/potchangelo/react-just-react/tree/01-start" target="_blank" rel="noreferrer">Start</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/02-state-x-object" target="_blank" rel="noreferrer">State x Object</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/03-state-x-array-01" target="_blank" rel="noreferrer">State x Array (Add)</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/04-state-x-array-02" target="_blank" rel="noreferrer">State x Array (Delete)</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/05-state-x-array-03" target="_blank" rel="noreferrer">State x Array (Edit)</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/06-effect" target="_blank" rel="noreferrer">useEffect</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/07-effect-return" target="_blank" rel="noreferrer">useEffect return</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/08-context" target="_blank" rel="noreferrer">useContext</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/09-context-state" target="_blank" rel="noreferrer">useContext x useState</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/10-context-reducer" target="_blank" rel="noreferrer">useContext x useReducer</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/11-ref" target="_blank" rel="noreferrer">useRef</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/12-forward-ref" target="_blank" rel="noreferrer">forwardRef</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/13-layout-components" target="_blank" rel="noreferrer">Layout Components</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/14-css-modules" target="_blank" rel="noreferrer">CSS Modules</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/15-styled-components" target="_blank" rel="noreferrer">styled-components</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/16-react-router" target="_blank" rel="noreferrer">React Router basic routes</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/17-react-router-nested" target="_blank" rel="noreferrer">React Router nested routes</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/18-react-router-dynamic" target="_blank" rel="noreferrer">React Router dynamic routes</a></li>
          <li><a href="https://github.com/potchangelo/react-just-react/tree/19-react-testing-library" target="_blank" rel="noreferrer">React Testing Library</a></li>
        </ol>
      </AppContainer>
    </AppSection>
  );
}

const AppSection = styled.section`
  padding: 20px;
`;

const AppContainer = styled.section`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
