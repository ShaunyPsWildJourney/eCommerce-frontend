import {  useAddCartItemMutation, useAddWishListItemMutation, useGuestMutation } from "lib/userSlice"
import { useRef } from "react"
import { handleCart } from "./handleCart"
import { useAppSelector } from "./hooks"
import { LocalUser } from "lib/authSlice"
import { selectAllClothes } from "lib/clothesSlice"
import { handleWishlist } from "./handleWishlist"
import { handleCartGuest } from "./handleCartGuest"
import { handleGuestWishlist } from "./handleGuestWishlist"
import { selectUserById } from "lib/userSlice"

export default function useAddClothingItem() {
  const selectOptionsRef = useRef<HTMLSelectElement>(null)
  const currentUser = useAppSelector((state) => selectUserById(state, 'userId'))
  const allClothes = useAppSelector(selectAllClothes)

  const [addWistListItem, {isLoading: isWishLoading, isSuccess: isWishSuccess, isError: isWishError, error: wishError }] = useAddWishListItemMutation()
  const [addCartListItem, {isLoading: isCartLoading, isSuccess: isCartSuccess, isError: isCartError, error: cartError }] = useAddCartItemMutation()
  const [guest] = useGuestMutation()

  async function handleAddItem(_id: string, type: string, size?: string, direction?: string) {

    if (type === 'cart' && selectOptionsRef.current?.value === 'Choose size') {
      return alert('Please choose a size')
    }

    const tempUser: Partial<LocalUser> = {
      given_name: '',
      surname: '',
      gender: '',
      wishlist: [],
      cart: [],
    }


    const USER_LOGGED_IN_CART = currentUser && type === 'cart'
    const USER_LOGGED_IN_WISHLIST = currentUser && type === 'wishlist'
    const USER_NOT_LOGGED_IN_CART = !currentUser && type === 'cart'
    const USER_NOT_LOGGED_IN_WISHLIST = !currentUser && type === 'wishlist'

    //* CHECKS IF CART OR WISHLIST, CHECKS IF LOGGED IN
    //* THE HANDLE CREATES THE OBJECT S
    //* S IS SENT TO THE BACKEND AS A CLOTHETYPE OBJECT
    try {
      if (USER_LOGGED_IN_CART) {
        const s = handleCart(_id, size!, currentUser, allClothes, direction!)
        await addCartListItem({ ...s }).unwrap()

      } else if (USER_LOGGED_IN_WISHLIST) {
        const s = handleWishlist(_id, currentUser, allClothes)
        await addWistListItem({ ...s }).unwrap()

      } else if (USER_NOT_LOGGED_IN_CART) {
        const s = handleCartGuest(_id, tempUser, size!, allClothes)
        await guest({ ...s }).unwrap()

      } else if (USER_NOT_LOGGED_IN_WISHLIST) {
        const s = handleGuestWishlist(_id, tempUser, allClothes)
        await guest({ ...s }).unwrap()
      }
    

    } catch (err) {
        console.log(err)
      }
    }
  
  return {
    handleAddItem, isCartLoading, isWishLoading, isCartSuccess, isWishSuccess,
    error: cartError || wishError,
    isError: isCartError || isWishError,
  }
}