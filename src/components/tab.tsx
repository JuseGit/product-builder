'use client'

import { FC, MouseEvent, ReactNode } from 'react'
import { useProductBuilderContext } from '../providers/pb-context'
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
  const { activeTab, setActiveTab, setAlert } = useProductBuilderContext()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault()
      setAlert(true)
      return
    }

    setActiveTab(index)
  }

  return (
    <li className={activeTab !== index ? '' : styles['active']} key={id}>
      <Link href={to} onClick={handleClick}>
        {children}
      </Link>
    </li>
  )
}

export default Tab
