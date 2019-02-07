import styled from 'styled-components';

import Git from './git.png'


export const Logo = styled.a`
  background:url(${Git});
  position: fixed;
  top:10px;
  left:-30px;
  width:30px;
  height:30px;
  border:none;
  border-radius:50%;
  background-size:contain;
  margin-left:50px;
  z-index:100;
`