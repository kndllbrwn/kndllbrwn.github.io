import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <h1 className="header__heading">Kendall L. Brown, AWS SA</h1>
        <aside className="socialButtons">
          <ul className="socialButtons__list">
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
              <a href="http://s3.amazonaws.com/kb3itconsulting.com/index.html" target="_blank">
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
