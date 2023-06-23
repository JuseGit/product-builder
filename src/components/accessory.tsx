'use client'

import { ComponentPropsWithoutRef, FC, useEffect, useState } from 'react'
import styles from './accessories.module.css'
import shared from './shared.module.css'
import { useProductBuilderContext } from '@/providers/pb-context'

interface AccessoryProps extends ComponentPropsWithoutRef<'li'> {
  id: string
  name: string
  price: number
}

/**
 * AccessoryItem represents an item in @see Accessories section.
 */
const AccessoryItem: FC<AccessoryProps> = ({ id, name, price, ...rest }) => {
  const [selected, setSelected] = useState(false)
  const { model, setAccessory, clearAccessory } = useProductBuilderContext()

  const handleClick = () => {
    if (!selected) {
      setAccessory({ id, name, price })
    } else {
      clearAccessory(id)
    }

    setSelected(!selected)
  }

  useEffect(() => {
    setSelected(false)
  }, [model])

  return (
    <li
      className={selected ? shared.selected : ''}
      {...rest}
      onClick={handleClick}
    >
      <p>{name}</p>
      <span className={styles.price}>{`$${price.toLocaleString(
        'de-DE'
      )}`}</span>
      <div className={`${styles.check} ${shared.check}`}></div>
    </li>
  )
}

export default AccessoryItem
