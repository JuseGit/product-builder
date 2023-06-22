'use client'

import React, { ReactNode, useCallback, useReducer } from 'react'
import { ProductBuilderContext } from './pb-context'
import { Color } from '@/types/colors.types'
import { Accessory } from '@/types/accessory.types'
import { Model } from '@/types/model.type'

export enum ProductBuilderActionType {
  SET_ACTIVE_TAB = 'set_active_tab',
  SET_ACTIVE_MODEL = 'set_active_model',
  SET_COLOR = 'set_color',
  SET_ACCESSORY = 'set_accessory',
  SET_ALERT = 'set_alert',
  ADD_TOTAL = 'add_total',
  SUB_TOTAL = 'sub_total',
  CLEAR_ACCESSORY = 'clear_accessory',
  CLEAR_SELECTIONS = 'clear_sel',
}

// An interface for our state
export interface ProductBuilderState {
  activeTab: number
  model: Model | undefined
  color: Color
  accessories: Accessory[]
  visited: { [key: number]: string }
  showAlert: boolean
  total: number
}

type SetActiveTab = {
  type: ProductBuilderActionType.SET_ACTIVE_TAB
  payload: number
}

type SetActiveModel = {
  type: ProductBuilderActionType.SET_ACTIVE_MODEL
  payload: Model | undefined
}

type SetColor = {
  type: ProductBuilderActionType.SET_COLOR
  payload: Color
}

type SetAccessory = {
  type: ProductBuilderActionType.SET_ACCESSORY
  payload: Accessory
}

type SetAlert = {
  type: ProductBuilderActionType.SET_ALERT
  payload: boolean
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
  | SetAlert
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
        total: action.payload ? action.payload.price : 0,
        model: action.payload,
      }

    case ProductBuilderActionType.SET_COLOR:
      return {
        ...state,
        total: state.total - state.color.price + action.payload.price,
        color: action.payload,
      }

    case ProductBuilderActionType.SET_ACCESSORY:
      return {
        ...state,
        total: state.total + action.payload.price,
        accessories: [...state.accessories, action.payload],
      }

    case ProductBuilderActionType.SET_ALERT:
      return {
        ...state,
        showAlert: action.payload,
      }

    case ProductBuilderActionType.CLEAR_ACCESSORY:
      const cleared = state.accessories.find(
        (item) => item.id === action.payload
      )

      return {
        ...state,
        total: state.total - (cleared ? cleared.price : 0),
        accessories: state.accessories.filter(
          (item) => item.id !== action.payload
        ),
      }

    case ProductBuilderActionType.CLEAR_SELECTIONS:
      return {
        ...state,
        color: {
          id: 'col01',
          name: 'initial',
          code: 'initial',
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
    model: undefined,
    color: {
      id: 'col01',
      name: 'initial',
      code: 'initial',
      price: 0,
    },
    accessories: [],
    visited: {},
    showAlert: false,
    total: 0,
  }

  const [state, dispatch] = useReducer(productBuilderReducer, initialState)

  const setActiveTab = useCallback((tab: number) => {
    dispatch({
      type: ProductBuilderActionType.SET_ACTIVE_TAB,
      payload: tab,
    })
  }, [])

  const setActiveModel = useCallback(
    (model: Model) => {
      if (!state.model || state.model.id !== model.id) {
        dispatch({
          type: ProductBuilderActionType.SET_ACTIVE_MODEL,
          payload: model,
        })
      } else {
        dispatch({
          type: ProductBuilderActionType.SET_ACTIVE_MODEL,
          payload: undefined,
        })
      }

      dispatch({
        type: ProductBuilderActionType.CLEAR_SELECTIONS,
      })
    },
    [state.model]
  )

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

  const setAlert = useCallback((val: boolean) => {
    dispatch({
      type: ProductBuilderActionType.SET_ALERT,
      payload: val,
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
        model: state.model,
        color: state.color,
        accessories: state.accessories,
        visited: state.visited,
        showAlert: state.showAlert,
        total: state.total,
        setActiveTab,
        setActiveModel,
        setColor,
        setAccessory,
        setAlert,
        clearAccessory,
      }}
    >
      {children}
    </ProductBuilderContext.Provider>
  )
}
