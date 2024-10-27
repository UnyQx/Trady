import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles['app-header']}>
      <h1 className={styles['app-title']}>TITLE</h1>
    </header>
  )
}

export default Header