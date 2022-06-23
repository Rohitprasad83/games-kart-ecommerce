import React, { useState } from 'react'
import style from './address.module.css'
import { AddressInput } from './AddressInput'
import { CreateAddress } from './CreateAddress'
import { useAddress } from 'context'

function Address() {
  const { addressData } = useAddress()
  const [createAdd, setCreateAdd] = useState(false)

  return (
    <div>
      {createAdd ? (
        <CreateAddress setCreateAdd={setCreateAdd} />
      ) : (
        <div className={`${style['address-container']}`}>
          {addressData.addresses.map(address => (
            <AddressInput
              key={address._id}
              address={address}
              setCreateAdd={setCreateAdd}
            />
          ))}
          <button
            className={`btn btn__primary ${style['createBtn']}`}
            onClick={() => setCreateAdd(true)}>
            Create New Address
          </button>
        </div>
      )}
    </div>
  )
}

export { Address }
