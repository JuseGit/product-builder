'use client'

import { FC, ReactNode } from 'react'
import { useProductBuilderContext } from './pb-context'
import Link from 'next/link'
import styles from './header.module.css'

type TabType = {
  children?: ReactNode
  id: string
  index: number
  to: string
}

const Tab: FC<TabType> = ({ children, id, index, to }) => {
  const { activeTab, setActiveTab } = useProductBuilderContext()

  return (
    <li
      className={activeTab !== index ? '' : styles['active']}
      key={id}
      onClick={() => setActiveTab(index)}
    >
      <Link href={to}>{children}</Link>
    </li>
  )
}

export default Tab
