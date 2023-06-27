import { CutPattern } from './components/CutPattern';
import { Tile } from './components/Tile';

function App() {
  return (
    <>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile />
      </CutPattern>
    </>
  );
}

export default App;
