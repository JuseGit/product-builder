'use client'

import React, { ReactNode, useCallback, useReducer } from 'react'
import { ProductBuilderContext } from './pb-context'
import { Color } from '@/types/colors.types'

export enum ProductBuilderActionType {
  SET_ACTIVE_TAB = 'set_active_tab',
  SET_ACTIVE_MODEL = 'set_active_model',
  SET_COLOR = 'set_color',
  CLEAR_SELECTIONS = 'clear_sel',
}

// An interface for our state
export interface ProductBuilderState {
  activeTab: number
  activeModel: string
  color: Color
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

type SetColor = {
  type: ProductBuilderActionType.SET_COLOR
  payload: Color
}

type ClearSelections = {
  type: ProductBuilderActionType.CLEAR_SELECTIONS
}

type ProductBuilderAction =
  | SetActiveTab
  | SetActiveModel
  | SetColor
  | ClearSelections

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

    case ProductBuilderActionType.SET_COLOR:
      return {
        ...state,
        color: action.payload,
      }

    case ProductBuilderActionType.CLEAR_SELECTIONS:
      return {
        ...state,
        color: {
          id: 'col01',
          code: 'white',
          name: 'White',
          price: 0,
        },
      }

    default:
      return state
  }
}

export const ProductBuilderState = ({ children }: ProductBuilderProps) => {
  const initialState: ProductBuilderState = {
    activeTab: 0,
    activeModel: '',
    color: {
      id: 'col01',
      code: 'white',
      name: 'White',
      price: 0,
    },
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

    dispatch({
      type: ProductBuilderActionType.CLEAR_SELECTIONS,
    })
  }, [])

  const setColor = useCallback((color: Color) => {
    dispatch({
      type: ProductBuilderActionType.SET_COLOR,
      payload: color,
    })
  }, [])

  return (
    <ProductBuilderContext.Provider
      value={{
        activeTab: state.activeTab,
        activeModel: state.activeModel,
        color: state.color,
        visited: state.visited,
        setActiveTab,
        setActiveModel,
        setColor,
      }}
    >
      {children}
    </ProductBuilderContext.Provider>
  )
}
