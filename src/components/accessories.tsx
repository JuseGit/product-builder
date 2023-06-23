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
      price: 1080,
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
      price: 1080,
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

/**
 * Accessories is a list of accessories provided for each products in the build app.
 * @see AccessoryItem for a description of each list item.
 */
const Accessories: FC<{}> = () => {
  const { model } = useProductBuilderContext()

  return (
    <ul className={`${styles['accessories-list']} ${shared['options-list']}`}>
      {model &&
        accessoriesData[model.id].map((accessory) => (
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
