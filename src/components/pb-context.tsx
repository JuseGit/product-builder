'use client'

import { createContext, useContext } from 'react'

interface ProductBuilderContextTypes {
  activeTab: number
  activeModel: string
  visited: { [key: number]: string }
  setActiveTab: (tab: number) => void
  setActiveModel: (model: string) => void
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
