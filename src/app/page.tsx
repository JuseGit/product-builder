import styles from './page.module.css'
import Header from '@/components/header'
import { ProductBuilderState } from '@/components/pb-state'

export default function Home() {
  return (
    <div className={styles['cd-product-builder']}>
      <ProductBuilderState>
        <Header />
        <main className={styles.main}></main>
      </ProductBuilderState>
    </div>
  )
}
