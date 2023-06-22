import { FC } from 'react'
import styles from './footer.module.css'
import Tabs from './tabs'
import Tab from './tab'
import { useProductBuilderContext } from '@/providers/pb-context'
import Link from 'next/link'

const SecondaryNav: FC<{}> = () => {
  const { model, activeTab, visited } = useProductBuilderContext()

  const updateClassNameByTabID = (index: number) => {
    let name = ''
    if (activeTab === index) {
      name = `${styles['visible']}`
    }

    // If this was the previous Tab content, assign the class movement based on stored state
    if (index in visited) {
      if (styles[visited[index]] === 'move-left ') {
        name += ` ${styles.visited}`
      }
    }

    return name
  }

  return (
    <nav className={styles['cd-builder-secondary-nav']}>
      <ul>
        <li className={`${styles.next} ${styles['nav-item']}`}>
          <Tabs>
            <Tab
              className={updateClassNameByTabID(0)}
              to="#colors"
              id="secnav-nexttab-colors"
              index={1}
              disabled={!model}
            >
              Colors
            </Tab>
            <Tab
              className={updateClassNameByTabID(1)}
              to="#accessories"
              id="secnav-nexttab-accessories"
              index={2}
              disabled={!model}
            >
              Accessories
            </Tab>
            <Tab
              className={updateClassNameByTabID(2)}
              to="#summary"
              id="secnav-nexttab-summary"
              index={3}
              disabled={!model}
            >
              Summary
            </Tab>
            <li className={updateClassNameByTabID(3)} key="secnav-tab-buy">
              <Link href={'#'}>Buy Now</Link>
            </li>
          </Tabs>
        </li>
        <li className={`${styles.prev} ${styles['nav-item']}`}>
          <Tabs>
            <Tab
              className={updateClassNameByTabID(1)}
              to="#summary"
              id="secnav-prevtab-summary"
              index={0}
              disabled={!model}
            >
              Model
            </Tab>
            <Tab
              className={updateClassNameByTabID(2)}
              to="#accessories"
              id="secnav-prevtab-accessories"
              index={1}
              disabled={!model}
            >
              Colors
            </Tab>
            <Tab
              className={updateClassNameByTabID(3)}
              to="#colors"
              id="secnav-prevtab-colors"
              index={2}
              disabled={!model}
            >
              Accessories
            </Tab>
          </Tabs>
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav
