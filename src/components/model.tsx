import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import styles from './models.module.css'
import shared from './shared.module.css'

type Model = {
  name: string
  imgData: StaticImageData
  price: number
}

const Model: FC<Model> = ({ name, imgData, price }) => {
  return (
    <>
      <span className={styles.name}>{name}</span>
      <Image src={imgData} alt={name} />
      <span className={styles.price}>{`from \$${price.toLocaleString(
        'de-DE'
      )}`}</span>
      <div className={shared.radio}></div>
    </>
  )
}

export default Model
