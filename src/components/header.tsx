'use client'

import React, { FC } from 'react'
import Tabs from './tabs'
import Tab from './tab'
import styles from './header.module.css'
import { useProductBuilderContext } from '../providers/pb-context'

const Header: FC<{}> = () => {
  const { model, activeTab } = useProductBuilderContext()

  return (
    <header className={styles['main-header']}>
      <h1>Product Builder</h1>
      <nav
        className={`${!model && styles.disabled} ${
          styles['cd-builder-main-nav']
        }`}
      >
        <Tabs>
          <Tab
            className={activeTab !== 0 ? '' : styles['active']}
            to="#models"
            id="tab-models"
            index={0}
            disabled={!model}
          >
            Models
          </Tab>{' '}
          <Tab
            className={activeTab !== 1 ? '' : styles['active']}
            to="#colors"
            id="tab-colors"
            index={1}
            disabled={!model}
          >
            Colors
          </Tab>{' '}
          <Tab
            className={activeTab !== 2 ? '' : styles['active']}
            to="#accessories"
            id="tab-accessories"
            index={2}
            disabled={!model}
          >
            Accessories
          </Tab>{' '}
          <Tab
            className={activeTab !== 3 ? '' : styles['active']}
            to="#summary"
            id="tab-summary"
            index={3}
            disabled={!model}
          >
            Summary
          </Tab>
        </Tabs>
      </nav>
    </header>
  )
}

export default Header
