import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <header>
        <h1>Kendall L. Brown, ICP-PRG</h1>
        <aside>
          <ul>
            <li>
              <a href="mailto:kndllbrwn1914@gmail.com">
                <i className="fa fa-envelope" />
                <span className="header_brandingLg">kndllbrwn1914@gmail</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/KndllBrwn" target="_blank">
                <i className="fa fa-linkedin-square" />
                <span className="header_brandingLg">KndllBrwn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/kndllbrwn" target="_blank">
                <i className="fa fa-github" />
                <span className="header_brandingLg">KndllBrwn</span>
              </a>
            </li>
            <li>
              <a href="http://www.kb3itsolutions.com" target="_blank">
                <i className="fa fa-laptop" />
                <span className="header_brandingLg">Past Website</span>
              </a>
            </li>
          </ul>
        </aside>
      </header>
    );
  }
});

export default Header;
