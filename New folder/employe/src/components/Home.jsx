import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

    
    <Link to="/company">company</Link> 
    <Link to="/employee">Expenses</Link>
    </div>
  )
}

export default Home