'use client'

import { ComponentPropsWithoutRef, FC, MouseEvent, ReactNode } from 'react'
import { useProductBuilderContext } from '../providers/pb-context'
import Link from 'next/link'

interface TabProps extends ComponentPropsWithoutRef<'li'> {
  children?: ReactNode
  id: string
  index: number
  to: string
  disabled: boolean
}

/**
 * A Tab represents an item inside a navigator. Used within @see Tabs
 */
const Tab: FC<TabProps> = ({ children, id, index, to, disabled, ...rest }) => {
  const { setActiveTab, setAlert } = useProductBuilderContext()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault()
      setAlert(true)
      return
    }

    setActiveTab(index)
  }

  return (
    <li key={id} {...rest}>
      <Link href={to} onClick={handleClick}>
        {children}
      </Link>
    </li>
  )
}

export default Tab
