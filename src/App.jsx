import { useState } from 'react'
import './App.css'

function App() {
  const [flag, setFlag] = useState(false);

  const handleOpen = () => setFlag(true);
  
  const handleClose = () => setFlag(false);

  return (
    <>
    <button onClick={handleOpen}>OPEN WINDOW</button>
      {flag && <div className='modal-window'>
        <button onClick={handleClose}>close</button>
    </div>}
    </>
  )
}

export default App
