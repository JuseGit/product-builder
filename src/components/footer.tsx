'use client'

import { useProductBuilderContext } from '@/providers/pb-context'
import Image from 'next/image'
import { FC } from 'react'
import styles from './footer.module.css'

const Footer: FC<{}> = () => {
  const { model, color, showAlert, total } = useProductBuilderContext()

  return (
    <footer
      className={`${styles['cd-builder-footer']} ${
        showAlert ? styles['show-alert'] : ''
      } ${!model ? styles.disabled : ''}`}
    >
      <div className={styles['selected-product']}>
        <Image
          src={
            model
              ? `/img/${model.id}_${color.id}.jpg`
              : '/img/product01_col01.jpg'
          }
          alt={'Product Preview'}
          width={500}
          height={500}
        />

        <div className={styles['tot-price']}>
          <span>Total</span>
          <span className={styles.total}>{`\$${total.toLocaleString(
            'de-DE'
          )}`}</span>
        </div>
      </div>
      {showAlert && (
        <span className={styles.alert}>Please, select a model first!</span>
      )}
    </footer>
  )
}

export default Footer
