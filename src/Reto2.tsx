import { useState } from 'react'
import './Reto2.css'

function clamp(value: number) {
  return Math.min(100, Math.max(0, value))
}

function Reto2() {
  const [percent, setPercent] = useState(10)

  return (
    <div className="progress">
      <h2 className="progress-title">Progress bar</h2>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }}>
          {percent}%
        </div>
      </div>
      <label className="progress-input">
        Input Percentage:
        <input
          type="number"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setPercent(clamp(Number(e.target.value) || 0))}
        />
      </label>
    </div>
  )
}

export default Reto2
