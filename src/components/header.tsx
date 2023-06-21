'use client'

import React, { FC } from 'react'
import Tabs from './tabs'
import Tab from './tab'
import styles from './header.module.css'
import { useProductBuilderContext } from '../providers/pb-context'

const Header: FC<{}> = () => {
  const { activeModel } = useProductBuilderContext()

  return (
    <header className={styles['main-header']}>
      <h1>Product Builder</h1>
      <nav
        className={`${activeModel === '' && styles.disabled} ${
          styles['cd-builder-main-nav']
        }`}
      >
        <Tabs>
          <Tab
            to="#models"
            id="tab-models"
            index={0}
            disabled={activeModel === ''}
          >
            Models
          </Tab>{' '}
          <Tab
            to="#colors"
            id="tab-colors"
            index={1}
            disabled={activeModel === ''}
          >
            Colors
          </Tab>{' '}
          <Tab
            to="#accessories"
            id="tab-accessories"
            index={2}
            disabled={activeModel === ''}
          >
            Accessories
          </Tab>{' '}
          <Tab
            to="#summary"
            id="tab-summary"
            index={3}
            disabled={activeModel === ''}
          >
            Summary
          </Tab>
        </Tabs>
      </nav>
    </header>
  )
}

export default Header
