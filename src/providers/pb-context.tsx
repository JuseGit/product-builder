'use client'

import { Color } from '@/types/colors.types'
import { createContext, useContext } from 'react'

interface ProductBuilderContextTypes {
  activeTab: number
  activeModel: string
  color: Color
  visited: { [key: number]: string }
  setActiveTab: (tab: number) => void
  setActiveModel: (model: string) => void
  setColor: (color: Color) => void
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
