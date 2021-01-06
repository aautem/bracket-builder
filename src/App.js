import Bracket from './components/Bracket'

function App() {
  return (
    <div>
      <Bracket
        topGameId="1"
        bottomGameId="2"
      />
      <div style={{ height: '3rem' }} />
      <Bracket
        topGameId="1"
        bottomGameId="2"
      />
    </div>
  );
}

export default App;
