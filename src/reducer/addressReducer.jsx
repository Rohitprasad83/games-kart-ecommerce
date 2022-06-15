import { v4 as uuid } from 'uuid'

function addressReducer(state, action) {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, { _id: uuid(), ...action.payload }],
      }
    case 'REMOVE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(
          address => address._id !== action.payload
        ),
      }
    case 'EDIT_ADDRESS':
      const otherAddress = state.addresses.filter(
        address => address._id !== action.payload._id
      )
      return { ...state, addresses: [...otherAddress, action.payload] }
    default:
      return { ...state }
  }
}

export { addressReducer }
