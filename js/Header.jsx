import React from 'react'
import Title from './Title'


const Header = React.createClass({
  render () {
    return (
      <header>
        <h1>Kendall L. Brown, ICP-PRG</h1>  
        <aside>
          <ul>
            <li><a href="mailto:kndllbrwn1914@gmail.com"><i className="fa fa-envelope"></i>kndllbrwn1914@gmail</a> </li>
            <li><a href="https://www.linkedin.com/in/KndllBrwn" target="_blank"><i className="fa fa-linkedin-square"></i>KndllBrwn</a> </li>
            <li><a href="https://github.com/kndllbrwn" target="_blank"><i className="fa fa-github"></i>kndllbrwn</a></li>
            <li><a href="https://www.kb3itsolutions.com" target="_blank"><i className="fa fa-laptop"></i>Past Website</a></li>
          </ul>
        </aside>
      </header>
    )
  }
})

export default Header