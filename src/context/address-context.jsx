import { createContext, useContext, useReducer, useState } from 'react'
import { addressReducer } from 'reducer/addressReducer'
import { v4 as uuid } from 'uuid'

const addressContext = createContext()
const useAddress = () => useContext(addressContext)

const initialAddress = {
  addresses: [
    {
      _id: uuid(),
      name: 'Rohit',
      mobile: '1234567890',
      address: '5/1 XYZ Road',
      district: 'abc district',
      state: 'West Bengal',
      pincode: '700028',
    },
    {
      _id: uuid(),
      name: 'Prasad',
      mobile: '0987654321',
      address: '5/1 ABC Road',
      district: 'xyz district',
      state: 'West Bengal',
      pincode: '700028',
    },
  ],
}
const AddressContextProvider = ({ children }) => {
  const [addressData, addressDispatch] = useReducer(
    addressReducer,
    initialAddress
  )
  const [defaultAddress, setDefaultAddress] = useState(addressData.addresses[0])
  return (
    <addressContext.Provider
      value={{
        addressData,
        addressDispatch,
        defaultAddress,
        setDefaultAddress,
      }}>
      {children}
    </addressContext.Provider>
  )
}

export { AddressContextProvider, useAddress }
