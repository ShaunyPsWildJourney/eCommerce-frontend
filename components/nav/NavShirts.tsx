import styled from 'styled-components'
import NavMenuList from '@/components/nav/NavMenu_List'
import NavMenuLargeImageTiles from '@/components/nav/NavMenu_LargeImageTiles'
import { Dispatch, SetStateAction } from 'react'
import { selectShirts } from 'lib/clothesSlice'
import { useAppSelector } from 'lib/hooks/hooks'

interface IProps {
  setNavShirts: Dispatch<SetStateAction<boolean>>
}

export default function Nav4Panel({ setNavShirts }: IProps) {

  const shirtsOnly = useAppSelector(selectShirts)


  return (
    <BoxContainer
      onMouseEnter={() => setNavShirts(true)}
      onMouseLeave={() => setNavShirts(false)}
    >
    <Box>
      <Title>Product</Title>
        <NavMenuList info={shirtsOnly} />
    </Box>
      
    <Box style={{width: '75%'}}>
    <Title>Brand</Title>
        <NavMenuLargeImageTiles info={shirtsOnly} />
    </Box>
      
  </BoxContainer>)
}

const BoxContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  padding-top: 20px;

  display: flex;
  height: 340px;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  
  @media ${({ theme }) => theme.mobileL} {
    display: none;
  }

`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 25%;
  padding: 0px 20px;

  border-right: 1px solid lightgrey;

  &:last-child {
    border-right: none;
  }
`
const Title = styled.h3`
  text-decoration: underline;
  padding-bottom: 10px;
`




