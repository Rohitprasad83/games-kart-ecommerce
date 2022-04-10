import axios from 'axios'
import { successToast, errorToast } from '../components/toast/Toast'
import {
    addWishlistItem,
    containsInWishlist,
} from '../utils/wishlistUtils/index.jsx'

const wishlistHandler = async(
    product,
    wishlistItems,
    setWishlistItems,
    encodedToken
) => {
    if (encodedToken) {
        try {
            const response = containsInWishlist(product._id, wishlistItems) ?
                await axios.post(
                    `/api/user/wishlist`, { product }, {
                        headers: {
                            authorization: encodedToken,
                        },
                    }
                ) :
                await axios.delete(`/api/user/wishlist/${product._id}`, {
                    headers: {
                        authorization: encodedToken,
                    },
                })
            const responseStatus = response.status === 200 || response.status === 201

            responseStatus &&
                addWishlistItem(product, wishlistItems, setWishlistItems)

            response.status === 200 &&
                successToast(product.title + ' added to wishlist')
            response.status === 201 &&
                successToast(product.title + ' removed from wishlist')
        } catch (error) {
            errorToast('Could not add to wishlist, please Try again!')
        }
    } else {
        errorToast('Please Login First')
    }
}

const addToCart = async(product, cartDispatch, encodedToken) => {
    if (encodedToken) {
        try {
            const response = await axios.post(
                `/api/user/cart`, { product }, {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            )
            response.status === 201 &&
                cartDispatch({ type: 'ADD_TO_CART', payload: product })

            successToast(product.title + ' added to Cart')
        } catch (err) {
            errorToast('Could not add to the cart, Please try again!')
        }
    } else {
        errorToast('Please Login First')
    }
}
export { wishlistHandler, addToCart }