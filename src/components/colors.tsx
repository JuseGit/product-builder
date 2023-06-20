'use client'

import { FC, useState } from 'react'
import { Color } from '@/types/colors.types'
import styles from './colors.module.css'
import product01col01Pic from '../../public/img/product01_col01.jpg'
import product01col02Pic from '../../public/img/product01_col02.jpg'
import product01col03Pic from '../../public/img/product01_col03.jpg'
import product02col01Pic from '../../public/img/product02_col01.jpg'
import product02col02Pic from '../../public/img/product02_col02.jpg'
import { useProductBuilderContext } from './pb-context'
import Image, { StaticImageData } from 'next/image'
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
  const { activeModel, color, setColor } = useProductBuilderContext()

  return (
    <>
      <ul className={styles['cd-product-previews']}>
        {activeModel !== '' &&
          colorsData[activeModel].map((cdata) => (
            <li
              className={color.id === cdata.id ? `${styles.selected}` : ''}
              key={cdata.id}
            >
              <Image
                src={
                  activeModel !== ''
                    ? `/img/${activeModel}_${cdata.id}.jpg`
                    : '/img/product01_col01.jpg'
                }
                alt="Product Preview"
                width={500}
                height={500}
                style={{ objectFit: 'cover', height: 'auto' }}
              />
            </li>
          ))}
      </ul>
      <ul className={styles['cd-product-customizer']}>
        {activeModel !== '' &&
          colorsData[activeModel].map((cdata) => (
            <>
              <li
                className={color.id === cdata.id ? `${styles.selected}` : ''}
                key={cdata.id}
                onClick={() => setColor(cdata)}
                data-color={cdata.code}
                data-content={`${cdata.name} - $${cdata.price.toLocaleString(
                  'de-DE'
                )}`}
              >
                <Link
                  href="#0"
                  data-color={cdata.code}
                  style={{ borderRadius: '50%' }}
                >
                  {cdata.name}
                </Link>
              </li>{' '}
            </>
          ))}
      </ul>
    </>
  )
}

export default Colors
