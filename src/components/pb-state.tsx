'use client'

import React, { ReactNode, useCallback, useReducer } from 'react'
import { ProductBuilderContext } from './pb-context'

export enum ProductBuilderActionType {
  SET_ACTIVE_TAB = 'set_active_tab',
}

// An interface for our state
export interface ProductBuilderState {
  activeTab: number
}

type SetActiveTab = {
  type: ProductBuilderActionType.SET_ACTIVE_TAB
  payload: number
}

type ProductBuilderAction = SetActiveTab

type ProductBuilderProps = {
  children: ReactNode
}

const productBuilderReducer = (
  state: ProductBuilderState,
  action: ProductBuilderAction
): ProductBuilderState => {
  switch (action.type) {
    case ProductBuilderActionType.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload }

    default:
      return state
  }
}

export const ProductBuilderState = ({ children }: ProductBuilderProps) => {
  const initialState: ProductBuilderState = {
    activeTab: 0,
  }

  const [state, dispatch] = useReducer(productBuilderReducer, initialState)

  const setActiveTab = useCallback((tab: number) => {
    console.log(tab)

    dispatch({
      type: ProductBuilderActionType.SET_ACTIVE_TAB,
      payload: tab,
    })
  }, [])

  return (
    <ProductBuilderContext.Provider
      value={{
        activeTab: state.activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ProductBuilderContext.Provider>
  )
}
