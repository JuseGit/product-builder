'use client'

import { Accessory } from '@/types/accessory.types'
import { Color } from '@/types/colors.types'
import { Model } from '@/types/model.type'
import { createContext, useContext } from 'react'

interface ProductBuilderContextTypes {
  activeTab: number
  model: Model | undefined
  color: Color
  accessories: Accessory[]
  visited: { [key: number]: string }
  showAlert: boolean
  total: number
  setActiveTab: (tab: number) => void
  setActiveModel: (model: Model) => void
  setColor: (color: Color) => void
  setAccessory: (accessory: Accessory) => void
  setAlert: (val: boolean) => void
  clearAccessory: (id: string) => void
}

const ProductBuilderContext = createContext<ProductBuilderContextTypes | null>(
  null
)

/**
 * Custom context provider hook. Makes sure to throw an error if not used insede the  provider.
 * @see ProductBuilderState for more info on state implementation.
 */
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
