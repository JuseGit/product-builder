'use client'

import React, { ReactNode, useCallback, useReducer } from 'react'
import { ProductBuilderContext } from './pb-context'
import { Color } from '@/types/colors.types'
import { Accessory } from '@/types/accessory.types'

export enum ProductBuilderActionType {
  SET_ACTIVE_TAB = 'set_active_tab',
  SET_ACTIVE_MODEL = 'set_active_model',
  SET_COLOR = 'set_color',
  SET_ACCESSORY = 'set_accessory',
  CLEAR_ACCESSORY = 'clear_accessory',
  CLEAR_SELECTIONS = 'clear_sel',
}

// An interface for our state
export interface ProductBuilderState {
  activeTab: number
  activeModel: string
  color: Color
  accessories: Accessory[]
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

type SetAccessory = {
  type: ProductBuilderActionType.SET_ACCESSORY
  payload: Accessory
}

type ClearAccessory = {
  type: ProductBuilderActionType.CLEAR_ACCESSORY
  payload: string
}

type ClearSelections = {
  type: ProductBuilderActionType.CLEAR_SELECTIONS
}

type ProductBuilderAction =
  | SetActiveTab
  | SetActiveModel
  | SetColor
  | SetAccessory
  | ClearAccessory
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

    case ProductBuilderActionType.SET_ACCESSORY:
      return {
        ...state,
        accessories: [...state.accessories, action.payload],
      }

    case ProductBuilderActionType.CLEAR_ACCESSORY:
      return {
        ...state,
        accessories: state.accessories.filter(
          (item) => item.id !== action.payload
        ),
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
        accessories: [],
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
    accessories: [],
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

  const setAccessory = useCallback((accessory: Accessory) => {
    dispatch({
      type: ProductBuilderActionType.SET_ACCESSORY,
      payload: accessory,
    })
  }, [])

  const clearAccessory = useCallback((id: string) => {
    dispatch({
      type: ProductBuilderActionType.CLEAR_ACCESSORY,
      payload: id,
    })
  }, [])

  return (
    <ProductBuilderContext.Provider
      value={{
        activeTab: state.activeTab,
        activeModel: state.activeModel,
        color: state.color,
        accessories: state.accessories,
        visited: state.visited,
        setActiveTab,
        setActiveModel,
        setColor,
        setAccessory,
        clearAccessory,
      }}
    >
      {children}
    </ProductBuilderContext.Provider>
  )
}
