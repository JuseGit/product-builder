'use client'

import { FC } from 'react'
import styles from './summary.module.css'
import Image from 'next/image'
import { useProductBuilderContext } from '@/providers/pb-context'

const Summary: FC<{}> = () => {
  const { model, color, accessories } = useProductBuilderContext()

  return (
    <ul className={styles['summary-list']}>
      <li key="summary-model-item">
        <h2>Model</h2>
        {model && (
          <Image
            className={styles['product-preview']}
            src={`/img/${model.id}_${color.id}.jpg`}
            width={500}
            height={500}
            alt={model.name}
          />
        )}
        <h3>{model?.name}</h3>
        <p>{model && model.description}</p>
      </li>
      <li key="summary-color-item">
        <h2>Color</h2>
        <span className={styles['summary-color']}>
          <em className={styles['color-swatch']} data-color={color.code}></em>
          <em className={styles['color-label']}>{`${
            color.name
          } - \$${color.price.toLocaleString('de-DE')}`}</em>
        </span>
      </li>
      <li key="summary-accessories-item">
        <h2>Accessories</h2>
        <ul className={styles['summary-accessories']}>
          {accessories.length > 0 ? (
            accessories.map((accessory) => (
              <li key={`${accessory.id}-item`}>
                <p>{accessory.name}</p>
              </li>
            ))
          ) : (
            <li>
              <p>No Accessories selected;</p>
            </li>
          )}
        </ul>
      </li>
    </ul>
  )
}

export default Summary
