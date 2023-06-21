'use client'

import { FC } from 'react'
import { Color } from '@/types/colors.types'
import styles from './colors.module.css'
import { useProductBuilderContext } from '../providers/pb-context'
import Image from 'next/image'
import Link from 'next/link'

const colorsData: { [key: string]: Color[] } = {
  product01: [
    {
      id: 'col01',
      name: 'White',
      code: 'white',
      price: 0,
    },
    {
      id: 'col02',
      name: 'Mineral Grey',
      code: 'grey',
      price: 550,
    },
    {
      id: 'col03',
      name: 'Orange Metallic',
      code: 'orange',
      price: 550,
    },
  ],
  product02: [
    {
      id: 'col01',
      name: 'Grey Metallic',
      code: 'grey',
      price: 0,
    },
    {
      id: 'col02',
      name: 'White Pearl Metallic',
      code: 'perl',
      price: 1800,
    },
  ],
}

const Colors: FC<{}> = () => {
  const { model, color, setColor } = useProductBuilderContext()

  return (
    <>
      <ul className={styles['cd-product-previews']}>
        {model &&
          colorsData[model.id].map((cdata) => (
            <li
              className={color.id === cdata.id ? `${styles.selected}` : ''}
              key={`${cdata.id}_preview`}
            >
              <Image
                src={`/img/${model.id}_${cdata.id}.jpg`}
                alt="Product Preview"
                width={500}
                height={500}
                style={{ objectFit: 'cover', height: 'auto' }}
              />
            </li>
          ))}
      </ul>
      <ul className={styles['cd-product-customizer']}>
        {model &&
          colorsData[model.id].map((cdata) => (
            <li
              className={color.id === cdata.id ? `${styles.selected}` : ''}
              key={`${cdata.id}_customizer_item`}
              onClick={() => setColor(cdata)}
              data-color={cdata.code}
              data-content={`${cdata.name} - $${cdata.price.toLocaleString(
                'de-DE'
              )}`}
              style={{ whiteSpace: 'normal' }}
            >
              <Link
                href="#0"
                data-color={cdata.code}
                style={{ borderRadius: '50%' }}
              >
                {cdata.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default Colors
