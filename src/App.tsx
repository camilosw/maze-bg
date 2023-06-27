import { CutPattern } from './components/CutPattern';
import { Tile } from './components/Tile';

function App() {
  return (
    <>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[1, 1, 1, 1]} />
        <Tile ids={[1, 1, 2, 3]} />
        <Tile ids={[1, 2, 3, 1]} />
        <Tile ids={[1, 2, 4, 3]} />
        <Tile ids={[1, 2, 5, 3]} />
        <Tile ids={[2, 3, 1, 1]} />
      </CutPattern>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[2, 3, 2, 3]} />
        <Tile ids={[2, 4, 3, 1]} />
        <Tile ids={[2, 4, 4, 3]} />
        <Tile ids={[2, 5, 3, 1]} />
        <Tile ids={[2, 5, 4, 3]} />
        <Tile ids={[3, 1, 1, 2]} />
      </CutPattern>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[3, 2, 3, 2]} />
        <Tile ids={[3, 2, 4, 4]} />
        <Tile ids={[3, 2, 4, 5]} />
        <Tile ids={[4, 3, 1, 2]} />
        <Tile ids={[4, 3, 2, 4]} />
        <Tile ids={[4, 3, 2, 5]} />
      </CutPattern>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[4, 4, 3, 2]} />
        <Tile ids={[4, 4, 4, 4]} />
        <Tile ids={[4, 4, 4, 5]} />
        <Tile ids={[4, 5, 3, 2]} />
        <Tile ids={[4, 5, 4, 4]} />
        <Tile ids={[4, 5, 4, 5]} />
      </CutPattern>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[4, 5, 5, 4]} />
        <Tile ids={[4, 5, 5, 5]} />
        <Tile ids={[5, 3, 1, 2]} />
        <Tile ids={[5, 3, 2, 4]} />
        <Tile ids={[5, 3, 2, 5]} />
        <Tile ids={[5, 4, 3, 2]} />
      </CutPattern>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[5, 4, 4, 4]} />
        <Tile ids={[5, 4, 4, 5]} />
        <Tile ids={[5, 4, 5, 4]} />
        <Tile ids={[5, 4, 5, 5]} />
        <Tile ids={[5, 5, 3, 2]} />
        <Tile ids={[5, 5, 4, 4]} />
      </CutPattern>
      <CutPattern rows={3} columns={2} elementHeight={74} elementWidth={74}>
        <Tile ids={[5, 5, 4, 5]} />
        <Tile ids={[5, 5, 5, 4]} />
        <Tile ids={[5, 5, 5, 5]} />
        <Tile ids={[0, 0, 0, 0]} />
      </CutPattern>
    </>
  );
}

export default App;
