import { ClotheType } from "lib/clothesSlice";
import { LocalUser } from "../authSlice";


// TAKES THE USERS WISHLIST ARRAY AND A WISHLIST OBJECT
// RETURNS A NEW WISHLIST ARRAY WITH THE ADDED WISHLIST OBJECT 
type R = {
  obj: ClotheType;
  user: LocalUser ;
}
const recreateWishlistArray = ({ obj, user }: R): ClotheType[] => {
  let t
  t = [...(user.wishlist || [])]
  t.push(obj)
  return t.flat()
}


// THE ARRAY FILTERS IN OR OUT THE WISHLIST PRIDUCT FROM THE USERS WISHLIST ARRAY
// THE DIRECTION IS EITHER "+" OR "-"
// RETURNS A NEW WISHLIST ARRAY
type F = {
  arr: ClotheType[];
  _id: string;
  direction: string;
}
const filterProductFromWishlist = ({ arr, _id, direction }: F): ClotheType[] => {
  return arr.filter((item) =>
    direction === "+" ? item._id === _id : item._id !== _id
  )
}


// TAKES THE USERS CART ARRAY AND A CART OBJECT
// RETURNS A NEW CART ARRAY WITH THE ADDED CART OBJECT
type C = {
  obj: ClotheType;
  user: LocalUser;
}
const recreateCartArray = ({ obj, user }: C): ClotheType[] => {
  let t
  t = [...(user.cart || [])]
  t.push(obj)
  return t.flat()
}

//! make comments here 
type G = {
  arr: ClotheType[];
  _id: string;
  size: string;
}
const filterProductFromCart = ({ arr, _id, size }: G): ClotheType => {
  const [newItem] = arr.filter((item) => item._id === _id)
  const newItemClone = Object.assign({}, newItem)

  if (newItemClone && newItemClone !== undefined) {
    newItemClone.sizes = size; // sizes is a string array. For the user they need one size 
    delete newItemClone.item //! SHAUN YOU NEED TO WORK ON THIS SECTION@@!!@$!@$!@$
    delete newItemClone.__v
    return newItemClone;
  }
  return newItemClone //! this is not right 
}


// TAKES THE USERS ARRAY AND THE PRODUCT ID
// RETURNS A NEW ARRAY WITH THE PRODUCT REMOVED
type S = {
  user: ClotheType[];
  _id: string;
}
const filterProductFromArray = ({ user, _id }: S) => { //! find the return type 
  let arr = [...user]
  const index = arr.findIndex((item) => item._id === _id)
  arr.splice(index, 1)
  return arr
}


export default {
  recreateWishlistArray,
  filterProductFromWishlist,
  recreateCartArray,
  filterProductFromCart,
  filterProductFromArray
} 