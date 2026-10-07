import './Reto1.css'

function Reto1({ reversed = false }: { reversed?: boolean }) {
  return (
    <nav className={reversed ? 'navbar reversed' : 'navbar'}>
      <span className="navbar-brand">Navbar</span>
      <a href="#" className="navbar-link active">
        Home
      </a>
      <a href="#" className="navbar-link">
        Features
      </a>
      <a href="#" className="navbar-link">
        Pricing
      </a>
      <a href="#" className="navbar-link">
        About
      </a>
      <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Reto1
