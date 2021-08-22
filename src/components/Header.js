import React from 'react';
import { Link } from "react-router-dom";
import styles from '../assets/scss/Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={`/`}>
        dairy app
      </Link>
      <p>Comment with no sense</p>
    </header>
  )
}
export default Header;