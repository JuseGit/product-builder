'use client'

import { FC } from 'react'
import { Accessory } from '@/types/accessory.types'
import styles from './accessories.module.css'
import shared from './shared.module.css'
import { useProductBuilderContext } from '../providers/pb-context'
import AccessoryItem from './accessory'

const accessoriesData: { [key: string]: Accessory[] } = {
  product01: [
    {
      id: 'acc01',
      name: 'BMW Charging Station',
      price: 1800,
    },
    {
      id: 'acc02',
      name: 'BMW Maintenance Program Upgrade',
      price: 1895,
    },
    {
      id: 'acc03',
      name: '1 Year BMW Maintenance Program Upgrade',
      price: 975,
    },
  ],
  product02: [
    {
      id: 'acc01',
      name: 'BMW Laserlight',
      price: 6300,
    },
    {
      id: 'acc02',
      name: 'BMW Charging Station',
      price: 1800,
    },
    {
      id: 'acc03',
      name: 'BMW Maintenance Program Upgrade',
      price: 1895,
    },
    {
      id: 'acc04',
      name: '1 Year BMW Maintenance Program Upgrade',
      price: 975,
    },
  ],
}

const Accessories: FC<{}> = () => {
  const { activeModel } = useProductBuilderContext()

  return (
    <ul className={`${styles['accessories-list']} ${shared['options-list']}`}>
      {activeModel !== '' &&
        accessoriesData[activeModel].map((accessory) => (
          <AccessoryItem
            id={accessory.id}
            key={`key__${accessory.id}`}
            name={accessory.name}
            price={accessory.price}
          />
        ))}
    </ul>
  )
}

export default Accessories
