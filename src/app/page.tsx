import styles from './page.module.css'
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'
import { ProductBuilderState } from '@/providers/pb-state'

export default function Home() {
  return (
    <div className={styles['cd-product-builder']}>
      <ProductBuilderState>
        <Header />
        <Main />
        <Footer />
      </ProductBuilderState>
    </div>
  )
}
