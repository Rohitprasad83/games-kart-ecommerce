import { errorToast } from 'components/toast/Toast'
import { useAddress } from 'context'
import React, { useState } from 'react'
import style from './address.module.css'
function AddressInput({ address, setCreateAdd }) {
  const { defaultAddress, addressDispatch, setDefaultAddress } = useAddress()
  const [editAddressBool, setEditAddressBool] = useState(false)

  const { name, mobile, district, state, pincode } = address
  const [editAddress, setEditAddress] = useState({
    _id: address._id,
    name: name,
    mobile: mobile,
    address: address.address,
    district: district,
    state: state,
    pincode: pincode,
  })

  function saveAddress() {
    if (
      editAddress.name &&
      editAddress.mobile &&
      editAddress.address &&
      editAddress.district &&
      editAddress.state &&
      editAddress.pincode
    ) {
      addressDispatch({ type: 'EDIT_ADDRESS', payload: editAddress })
      setCreateAdd(false)
      setEditAddressBool(false)
    } else {
      errorToast('Please fill all the addess details')
    }
  }
  return (
    <>
      {!editAddressBool ? (
        <div className={`${style['address']}`}>
          <p className="font__bold"> {name} </p>
          <p className={`${style['address-text']}`}> {address.address} </p>
          <p className={`${style['address-text']}`}> {address.district} </p>
          <p className={`${style['address-text']}`}> {address.state} </p>
          <p className={`${style['address-text']}`}> {address.pincode} </p>
          <p className={`${style['address-text']}`}>
            <span>Mobile: </span> {address.mobile}
          </p>
          <div className={`${style['address-buttons']}`}>
            <button
              className="btn btn__primary"
              onClick={() => setEditAddressBool(true)}>
              Edit
            </button>
            <button
              className="btn btn__error"
              onClick={() =>
                addressDispatch({
                  type: 'REMOVE_ADDRESS',
                  payload: address._id,
                })
              }>
              Remove
            </button>
            {defaultAddress._id !== address._id && (
              <button
                className="btn btn__dark__outlined"
                onClick={() => setDefaultAddress(address)}>
                Make Default
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={`${style['address-input']}`}>
          <input
            type="text"
            placeholder="Name *"
            value={editAddress.name}
            onChange={e =>
              setEditAddress({ ...editAddress, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Mobile *"
            value={editAddress.mobile}
            onChange={e =>
              setEditAddress({ ...editAddress, mobile: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address (House No, Buidling, Street, Area)*"
            value={editAddress.address}
            onChange={e =>
              setEditAddress({ ...editAddress, address: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="District/ Town*"
            value={editAddress.district}
            onChange={e =>
              setEditAddress({ ...editAddress, district: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="State *"
            value={editAddress.state}
            onChange={e =>
              setEditAddress({ ...editAddress, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pin Code *"
            value={editAddress.pincode}
            onChange={e =>
              setEditAddress({ ...editAddress, pincode: e.target.value })
            }
          />
          <div className={`${style['address-buttons']}`}>
            <button
              className="btn btn__error"
              onClick={() => setEditAddressBool(false)}>
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
      )}
    </>
  )
}

export { AddressInput }
