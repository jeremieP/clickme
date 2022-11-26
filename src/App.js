import './App.css'
import { Circle } from './components/Circle'
import { Button } from './components/Button'
import { useState } from 'react'

function App() {
  const [clicks, setClicks] = useState([])
  const [clickHistory, setClicksHistory] = useState([])

  const onClickHandler = (e) => {
    // minus 25 because Circle is 50px square + Date.now to have a unique key
    const clickPosition = { top: e.clientY - 25, left: e.clientX - 25, now: Date.now() }
    setClicks([...clicks, clickPosition])
  }

  const undoHandler = (e) => {
    setClicksHistory([...clickHistory, clicks.pop()])
    // Avoid it because rerender already triggered by clickHistory update
    // But modifying directly state value is not really recommended
    // setClicks([...clicks])
  }

  const redoHandler = (e) => {
    setClicks([...clicks, clickHistory.pop()])
    // Avoid it because rerender already triggered by clicks update
    // But modifying directly state value is not really recommended
    // setClicksHistory([...clickHistory])
  }

  return (
    <>
      <div className="App" onClick={onClickHandler}>
        <h1 className="appTitle">Click anywhere !</h1>
        {
          clicks.map((el) => (
            <Circle top={el.top} left={el.left} key={el.now} />
          ))
        }
      </div>

      <div className="actionZone">
          <Button label="Undo" isActive={clicks.length > 0} onClickHandler={undoHandler} />
          <Button label="Redo" isActive={clickHistory.length > 0} onClickHandler={redoHandler} />
        </div>
    </>
  );
}

export default App;
