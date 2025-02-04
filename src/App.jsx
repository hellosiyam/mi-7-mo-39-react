import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {
  
  const alertBtn = () => {
    alert('Button Clicked')
  }

  const alertBtnWithPera = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <Team></Team>
      <Counter></Counter>
      <h1>React</h1>
      <button onClick={alertBtn}>On click </button>
      <button onClick={() => {alert('On click Btn 2')}}>On click Btn 2</button>
      <button onClick={() => {alertBtnWithPera(10)}}>On click Btn 3</button>
    </>
  )
}

export default App
