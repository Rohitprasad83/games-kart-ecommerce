import axios from 'axios'
import { successToast, errorToast } from '../components/toast/Toast'

const encodedToken = localStorage.getItem('token')

const quantityHandler = async(_id, action, cartDispatch) => {
    try {
        const response = await axios.post(
            `/api/user/cart/${_id}`, {
                action: {
                    type: action,
                },
            }, {
                headers: {
                    authorization: encodedToken,
                },
            }
        )
        response.status === 200 &&
            action === 'increment' &&
            cartDispatch({ type: 'INCREASE_QUANTITY', payload: _id })
        response.status === 200 &&
            action === 'decrement' &&
            cartDispatch({ type: 'DECREASE_QUANTITY', payload: _id })
    } catch (err) {
        errorToast('could not update quantity, please try again!')
    }
}

const removeFromCart = async(product, cartDispatch) => {
    try {
        const response = await axios.delete(`/api/user/cart/${product._id}`, {
            headers: { authorization: encodedToken },
        })

        response.status === 200 &&
            cartDispatch({ type: 'REMOVE_FROM_CART', payload: product._id })
        successToast(product.title + ' removed from cart')
    } catch (err) {
        errorToast('Could not remove product from cart')
    }
}

export { removeFromCart, quantityHandler }