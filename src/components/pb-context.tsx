'use client'

import { createContext, useContext } from 'react'

interface ProductBuilderContextTypes {
  activeTab: number
  setActiveTab: (tab: number) => void
}

const ProductBuilderContext = createContext<ProductBuilderContextTypes | null>(
  null
)

const useProductBuilderContext = () => {
  const context = useContext(ProductBuilderContext)

  if (!context) {
    throw new Error(
      'useProductBuilderContext has to be used within <ProductBuilderContext.Provider>'
    )
  }

  return context
}

export { ProductBuilderContext, useProductBuilderContext }
