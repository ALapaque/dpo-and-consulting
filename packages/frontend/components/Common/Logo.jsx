import styled from '@emotion/styled'
import data from '@/data/app-data.json'

const LogoWrapper = styled.h1`
  font-size: 1.5em;
  transition: all 0.5s ease-in-out;
  padding: 0;
  margin: 0;
`

export default function Logo() {
  return (
    <LogoWrapper className={'logo'}>{data.company.name}</LogoWrapper>
  )
}
