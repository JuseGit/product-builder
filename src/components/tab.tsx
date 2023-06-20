'use client'

import { FC, MouseEvent, ReactNode } from 'react'
import { useProductBuilderContext } from './pb-context'
import Link from 'next/link'
import styles from './header.module.css'

type TabType = {
  children?: ReactNode
  id: string
  index: number
  to: string
  disabled: boolean
}

const Tab: FC<TabType> = ({ children, id, index, to, disabled }) => {
  const { activeTab, setActiveTab } = useProductBuilderContext()

  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    setActiveTab(index)
  }

  return (
    <li
      className={activeTab !== index ? '' : styles['active']}
      key={id}
      onClick={handleClick}
    >
      <Link href={to}>{children}</Link>
    </li>
  )
}

export default Tab
