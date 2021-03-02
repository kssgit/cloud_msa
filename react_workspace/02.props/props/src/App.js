import Welcome from './Welcome';

function App() {
  const style ={
    backgroundColor : 'black',
    color :'aqua',
    fontSize : '50px',
    fontWeight : 'bold',
    padding : 6,
  }
  return (
    <div>
      {/* 부모 element */}
      <Welcome style={style}>class</Welcome> 
      <Welcome name='React'>function</Welcome>
    </div>
  );
}

export default App;
