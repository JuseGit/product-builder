import React, { FC } from 'react'
import Step from './step'
import styles from './main.module.css'
import Models from './models'
import Colors from './colors'
import Accessories from './accessories'

const Main: FC<{}> = () => {
  return (
    <main className={styles['cd-builder-steps']}>
      <ul>
        <Step id="step-models" index={0}>
          <Models />
        </Step>
        <Step id="step-colors" index={1}>
          <Colors />
        </Step>
        <Step id="step-accessories" index={2}>
          <Accessories />
        </Step>
        <Step id="step-summary" index={3}>
          <span>Summary Step</span>
        </Step>
      </ul>
    </main>
  )
}

export default Main
