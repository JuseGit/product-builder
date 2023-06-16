import { FC, PropsWithChildren } from 'react'

const Tabs: FC<PropsWithChildren> = ({ children }) => {
  return <ul>{children}</ul>
}

export default Tabs
