import { useEffect, useState } from 'react'
import './Reto4.css'

function Reto4() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="reto4">
      <div>
        <h1>Timer</h1>
      </div>
      <div>
        <h2>
          {minutes} mins {secs} secs
        </h2>
      </div>
      <div className="reto4-buttons">
        <button
          className="reto4-start"
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          className="reto4-stop"
          onClick={() => setRunning(false)}
        >
          Stop
        </button>
        <button
          className="reto4-reset"
          onClick={() => {
            setRunning(false)
            setSeconds(0)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Reto4
