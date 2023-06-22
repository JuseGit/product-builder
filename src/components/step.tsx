'use client'

import { FC, ReactNode } from 'react'
import { useProductBuilderContext } from '../providers/pb-context'
import styles from './step.module.css'

type StepType = {
  children?: ReactNode
  id: string
  title: string
  index: number
}

const Step: FC<StepType> = ({ children, title, id, index }) => {
  const { activeTab, visited } = useProductBuilderContext()

  const updateClassNameByTabID = () => {
    let name = ''
    if (activeTab === index) {
      name = `${styles['active']}`
    }

    // If this was the previous Tab content, assign the class movement effect stored in state
    if (index in visited) {
      name += ` ${styles[visited[index]]}`
    }

    return name
  }

  return (
    <li
      className={`${styles['builder-step']} ${updateClassNameByTabID()}`}
      key={id}
    >
      <section className={`${styles['cd-step-content']}`}>
        <header>
          <h1>{title}</h1>
          <span className={styles['steps-indicator']}>
            Step <b>{index + 1}</b> of 4
          </span>
        </header>
        {children}
      </section>
    </li>
  )
}

export default Step
