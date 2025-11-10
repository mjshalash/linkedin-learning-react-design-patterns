import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{message}</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'red' }}>Right!</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={10} rightWeight={1}>
      <LeftHandComponent message={'Left Side!!'} />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
