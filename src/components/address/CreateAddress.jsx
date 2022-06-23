import { errorToast } from 'components/toast/Toast'
import { useAddress } from 'context'
import React, { useState } from 'react'
import style from './address.module.css'

function CreateAddress({ setCreateAdd }) {
  const { addressDispatch } = useAddress()
  const [address, setAddress] = useState({
    name: '',
    mobile: '',
    address: '',
    district: '',
    state: '',
    pincode: '',
  })

  function saveAddress() {
    if (
      address.name &&
      address.mobile &&
      address.address &&
      address.district &&
      address.state &&
      address.pincode
    ) {
      setCreateAdd(false)
      addressDispatch({ type: 'ADD_ADDRESS', payload: address })
    } else {
      errorToast('Please fill all the address details')
    }
  }

  return (
    <div className={`${style['address-input']}`}>
      <input
        type="text"
        placeholder="Name *"
        value={address.name}
        onChange={e => setAddress({ ...address, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile *"
        value={address.mobile}
        onChange={e => setAddress({ ...address, mobile: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address (House No, Buidling, Street, Area)*"
        value={address.address}
        onChange={e => setAddress({ ...address, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="District/ Town*"
        value={address.district}
        onChange={e => setAddress({ ...address, district: e.target.value })}
      />
      <input
        type="text"
        placeholder="State *"
        value={address.state}
        onChange={e => setAddress({ ...address, state: e.target.value })}
      />
      <input
        type="text"
        placeholder="Pin Code *"
        value={address.pincode}
        onChange={e => setAddress({ ...address, pincode: e.target.value })}
      />
      <div className={`${style['address-buttons']}`}>
        <button className="btn btn__error" onClick={() => setCreateAdd(false)}>
          Cancel
        </button>
        <button
          className="btn btn__primary"
          onClick={() => {
            saveAddress()
          }}>
          Save
        </button>
      </div>
    </div>
  )
}

export { CreateAddress }
