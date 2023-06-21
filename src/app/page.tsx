import styles from './page.module.css'
import Header from '@/components/header'
import { ProductBuilderState } from '@/providers/pb-state'
import Main from '@/components/main'

export default function Home() {
  return (
    <div className={styles['cd-product-builder']}>
      <ProductBuilderState>
        <Header />
        <Main />
      </ProductBuilderState>
    </div>
  )
}
