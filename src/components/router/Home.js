import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Cartcontext from '../../store/context'
import Header from '../layouts/Navbar'

function Home() {
  const ctx=useContext(Cartcontext)
  const products=ctx.items.map((item)=>(<ul>{item.image}</ul>))
  return (
    <>
    <Header></Header>
    <div>{products}</div>
    
    </>
    
  )
}

export default Home