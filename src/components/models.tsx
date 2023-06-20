'use client'

import { FC } from 'react'
import Model from './model'
import styles from './models.module.css'
import model01Pic from '../../public/img/product01_col01.jpg'
import model02Pic from '../../public/img/product02_col01.jpg'
import { useProductBuilderContext } from './pb-context'

const modelsData = [
  {
    productId: 'product-01',
    name: 'BMW i3',
    imgURL: model01Pic,
    price: 42400,
  },
  {
    productId: 'product-02',
    name: 'BMW i8',
    imgURL: model02Pic,
    price: 140700,
  },
]

const Models: FC<{}> = () => {
  const { activeModel, setActiveModel } = useProductBuilderContext()

  return (
    <ul
      className={`${styles['models-list']} ${styles['options-list']} ${styles['cd-col-2']}`}
    >
      {modelsData.map((model) => (
        <li
          className={
            activeModel === model.productId
              ? `${styles.selected} ${styles.loaded}`
              : ''
          }
          key={model.productId}
          onClick={() => setActiveModel(model.productId)}
        >
          <Model name={model.name} imgData={model.imgURL} price={model.price} />
        </li>
      ))}
    </ul>
  )
}

export default Models
