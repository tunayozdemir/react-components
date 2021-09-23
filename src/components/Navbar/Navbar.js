import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import NavList from '../../db/Navlist.json'

function Navbar() {
  const [navList, setNavlist] = useState(NavList)

  const hadleClik = () => {

  }

  const getNavlist = () => {
    let result = navList.map((item) => console.log(item))
  }

  useEffect(() => {
    getNavlist()
  }, [])

  return (
    <nav className="navbar">
      {navList.map((item) => {
        return (
          <ul>
            <li class="asd a"><a>{item.name}</a></li>
          </ul>
        )
      })
      }
    </nav>
  )
}

export default Navbar
