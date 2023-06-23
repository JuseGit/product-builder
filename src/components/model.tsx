import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import styles from './models.module.css'
import shared from './shared.module.css'

type ModelProps = {
  name: string
  imgURL: string
  price: number
}

/**
 * Model represents an item in Models list section. @see Models for more info
 */
const Model: FC<ModelProps> = ({ name, imgURL, price }) => {
  return (
    <>
      <span className={styles.name}>{name}</span>
      <Image src={imgURL} alt={name} width={500} height={500} />
      <span className={styles.price}>{`from \$${price.toLocaleString(
        'de-DE'
      )}`}</span>
      <div className={shared.radio}></div>
    </>
  )
}

export default Model
