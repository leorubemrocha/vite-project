import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  const nome = 'Leo Rocha';

  return (
    <>
      <p>
        Hello
        {' '}
        { `${nome}` }
      </p>
      <p>CSS Rules</p>
      <Skills />
    </>
  );
}

export default App;
