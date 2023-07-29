import styled from '@emotion/styled'

const LogoWrapper = styled.h1`
  font-size: 1.5em;
  transition: all 0.5s ease-in-out;
`

export default function Logo() {
  return (
    <LogoWrapper className={'logo'}>DPO and Consulting</LogoWrapper>
  )
}
