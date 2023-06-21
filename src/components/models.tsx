'use client'

import { FC } from 'react'
import { default as ModelItem } from './model'
import styles from './models.module.css'
import shared from './shared.module.css'
import { useProductBuilderContext } from '../providers/pb-context'
import { Model } from '@/types/model.type'

const modelsData: Model[] = [
  {
    id: 'product01',
    name: 'BMW i3',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed
    laboriosam ratione nulla atque molestias at explicabo aperiam
    reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam
    magnam inventore nobis, rem adipisci eveniet illum.`,
    price: 42400,
  },
  {
    id: 'product02',
    name: 'BMW i8',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed
    laboriosam ratione nulla atque molestias at explicabo aperiam
    reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam
    magnam inventore nobis, rem adipisci eveniet illum.`,
    price: 140700,
  },
]

const Models: FC<{}> = () => {
  const { model, setActiveModel } = useProductBuilderContext()

  return (
    <ul
      className={`${styles['models-list']} ${shared['options-list']} ${shared['cd-col-2']}`}
    >
      {modelsData.map((item) => (
        <li
          className={
            model?.id === item.id ? `${shared.selected} ${shared.loaded}` : ''
          }
          key={item.id}
          onClick={() => setActiveModel(item)}
        >
          <ModelItem
            name={item.name}
            imgURL={`/img/${item.id}_col01.jpg`}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  )
}

export default Models
