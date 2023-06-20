'use client'

import React, { ReactNode, useCallback, useReducer } from 'react'
import { ProductBuilderContext } from './pb-context'

export enum ProductBuilderActionType {
  SET_ACTIVE_TAB = 'set_active_tab',
  SET_ACTIVE_MODEL = 'set_active_model',
}

// An interface for our state
export interface ProductBuilderState {
  activeTab: number
  activeModel: string
  visited: { [key: number]: string }
}

type SetActiveTab = {
  type: ProductBuilderActionType.SET_ACTIVE_TAB
  payload: number
}

type SetActiveModel = {
  type: ProductBuilderActionType.SET_ACTIVE_MODEL
  payload: string
}

type ProductBuilderAction = SetActiveTab | SetActiveModel

type ProductBuilderProps = {
  children: ReactNode
}

const productBuilderReducer = (
  state: ProductBuilderState,
  action: ProductBuilderAction
): ProductBuilderState => {
  switch (action.type) {
    case ProductBuilderActionType.SET_ACTIVE_TAB:
      return {
        ...state,
        visited:
          state.activeTab < action.payload
            ? { [state.activeTab]: 'move-left' }
            : { [action.payload]: 'back' },
        activeTab: action.payload,
      }

    case ProductBuilderActionType.SET_ACTIVE_MODEL:
      return {
        ...state,
        activeModel: state.activeModel !== action.payload ? action.payload : '',
      }

    default:
      return state
  }
}

export const ProductBuilderState = ({ children }: ProductBuilderProps) => {
  const initialState: ProductBuilderState = {
    activeTab: 0,
    activeModel: '',
    visited: {},
  }

  const [state, dispatch] = useReducer(productBuilderReducer, initialState)

  const setActiveTab = useCallback((tab: number) => {
    dispatch({
      type: ProductBuilderActionType.SET_ACTIVE_TAB,
      payload: tab,
    })
  }, [])

  const setActiveModel = useCallback((model: string) => {
    dispatch({
      type: ProductBuilderActionType.SET_ACTIVE_MODEL,
      payload: model,
    })
  }, [])

  return (
    <ProductBuilderContext.Provider
      value={{
        activeTab: state.activeTab,
        activeModel: state.activeModel,
        visited: state.visited,
        setActiveTab,
        setActiveModel,
      }}
    >
      {children}
    </ProductBuilderContext.Provider>
  )
}
