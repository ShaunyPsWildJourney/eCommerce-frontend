
import styled from 'styled-components'
import React from 'react'
import arch from '@/images/arch.webp'
import Image from 'next/image'

export default function UserLanding() {
  return (
    <Container>
      <Image src={arch} fill alt='' 
      />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 542px;
  background-color: white;

  @media ${({ theme }) => theme.mobileL} {
   display: none;
  }
`
// const Image = styled.div`
//   width: 100%;
//   height: 100%;
//   background-size: contain;
//   filter: brightness(1.1)
// `