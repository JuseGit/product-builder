import { FC, PropsWithChildren } from 'react'

/**
 * Tabs is a list of items that represents a stack navigator. @see Tab for more info on item implementation
 */
const Tabs: FC<PropsWithChildren> = ({ children }) => {
  return <ul>{children}</ul>
}

export default Tabs
