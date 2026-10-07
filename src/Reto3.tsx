import { useState, type SubmitEvent } from 'react'
import './Reto3.css'

type Entry = {
  username: string
  name: string
  age: string
}

function Reto3() {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [submitted, setSubmitted] = useState<Entry | null>(null)
  const [errors, setErrors] = useState<string[]>([])

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const newErrors: string[] = []
    if (username.trim() === '') {
      newErrors.push('Username is required.')
    }
    if (!/^[\p{L} ]+$/u.test(name.trim())) {
      newErrors.push('FullName must contain only letters and spaces.')
    }
    if (!/^\d+$/.test(age.trim())) {
      newErrors.push('Age must be a whole number.')
    }
    setErrors(newErrors)
    if (newErrors.length > 0) return

    setSubmitted({ username, name, age })
    setUsername('')
    setName('')
    setAge('')
  }

  return (
    <div className="reto3">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">Username:</label>
              </td>
              <td>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="name">FullName:</label>
              </td>
              <td>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="age">Age:</label>
              </td>
              <td>
                <input
                  id="age"
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>

      {errors.length > 0 && (
        <ul className="reto3-errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      {submitted && (
        <ul>
          <li>Username: {submitted.username}</li>
          <li>Name: {submitted.name}</li>
          <li>Age: {submitted.age}</li>
        </ul>
      )}
    </div>
  )
}

export default Reto3
