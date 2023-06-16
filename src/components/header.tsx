import React, { FC } from 'react'
import Tabs from './tabs'
import Tab from './tab'
import styles from './header.module.css'

const Header: FC<{}> = () => {
  return (
    <header className={styles['main-header']}>
      <h1>Product Builder</h1>
      <nav className={styles['cd-builder-main-nav']}>
        <Tabs>
          <Tab to="#models" id="tab-models" index={0}>
            Models
          </Tab>
          <Tab to="#colors" id="tab-colors" index={1}>
            Colors
          </Tab>
          <Tab to="#accessories" id="tab-accessories" index={2}>
            Accessories
          </Tab>
          <Tab to="#summary" id="tab-summary" index={3}>
            Summary
          </Tab>
        </Tabs>
      </nav>
    </header>
  )
}

export default Header
