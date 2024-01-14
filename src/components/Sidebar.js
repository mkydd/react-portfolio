import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/resume">
        Resume
      </a>
      <a className="menu-item" href="/projects">
        Projects
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};