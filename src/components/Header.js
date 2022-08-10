import React from 'react';
import * as S from '../assets/styles/styles'

const Header = () => {
  return (
    <header>
      <S.Title>
        <span className='toColor'>TO</span>
        <span className='doColor'>DO</span>LIST
      </S.Title>
    </header>
  )
}

export default Header;