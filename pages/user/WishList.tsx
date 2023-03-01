import React from 'react'
import styled from 'styled-components'
import Empty from './Empty'
import MyAccountLayout from './Layout'


export default function WishList() {

  const EmptyWishList = {
    title: `You currently have no Wishlist items.`,
    body: `Best get shopping`,
    button: `Start Shopping`
  }
  let content 

  if (false) {

  } else {
    content =
      <Container>
        <First><h2>WISH LIST</h2></First>
        <Empty info={EmptyWishList} />
      </Container>
  }

  return (<>
    <MyAccountLayout>
      {content}
    </MyAccountLayout>
    </>)
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`
const First = styled.div`
  width: 100%;
  height: 142px;
  background-color:white;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`
