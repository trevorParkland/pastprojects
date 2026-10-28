import styled from 'styled-components';
import ArrowBlue from '../../images/arrow-blue.png';
import ArrowDown from '../../images/arrow-blue-mobile-nav.png';
import ArrowUp from '../../images/arrow-blue-up.png';
import Swipe from '../../images/table-swipe.png';
export const HeaderH2 = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

export const ParaText = styled.p`
  margin: 0 0 30px 0;
  padding: 0;
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
    font-weight: bold;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    text-decoration: none;
    code {
      color: #9fb577 !important;
    }
  }
  code {
    font-size: 12px;
    line-height: 18px;
    color: #666;
    font-family: 'Figtree-Regular', arial, sans-serif;
  }
`;

export const Table = styled.div`
  table {
    position: relative;
    width: 100%;
    margin: 0 0 20px 0;
    background: #fff;
    border-spacing: 0;
    tr {
      td {
        padding: 6px 10px;
        border: none;
        p {
          margin: 0 !important;
          b {
            font-style: normal;
            font-size: 14px;
            text-align: left;
            font-family: 'Figtree-Bold', arial, sans-serif;
            font-weight: bold;
          }
          i {
            font-style: normal;
          }
        }
      }
    }
    tr:nth-child(odd) {
      background: #f5f5f5;
    }
    tr:first-child {
      background: #037ec4;
      th {
        padding: 10px;
        ${ParaText} {
          margin: 0 !important;
          b {
            color: #fff !important;
            font-size: 14px;
            text-align: left;
            text-transform: uppercase;
            font-family: 'Figtree-Bold', arial, sans-serif;
            font-weight: bold;
          }
        }
      }
    }
    @media (max-width: 767px) {
      width: 300%;
      margin: 0 0 10px 0 !important;
    }
  }
`;
export const SwipeContainer = styled.div`
  @media (max-width: 767px) {
    overflow: scroll hidden;
    background: url(${Swipe}) left top / contain no-repeat rgb(255, 255, 255);
    padding-top: 50px !important;
  }
`;
export const MainDiv = styled.div`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 30px;
  }
`;

export const LinkStyle = styled.a`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  text-decoration: none;
  color: #9fb577;
  transition: 0.25s ease-out;
  transition: background-position 0.15s ease-out;
  :hover {
    color: #037ec4;
  }
`;

export const Header2 = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  position: relative;
  @media (max-width: 760px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;
export const Header2Center = styled.h2`
  text-align: center;
  margin-bottom: 35px;
  position: relative;
  font-family: 'MrAlex', sans-serif;
  font-size: 45px;
  line-height: 50px;
  color: #037ec4;
  padding: 0;
  font-weight: normal;
  font-style: normal;
  @media (max-width: 1439px) {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 35px;
  }
`;
export const ButtonStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 20px 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: url(${ArrowBlue}) 95% center no-repeat #ebf5fa;
  transition: background-position 0.15s ease-out;
  border: none;
  @media (max-width: 767px) {
    width: 100% !important;
    margin: 0 0 25px 0 !important;
  }
  :hover {
    background: url(${ArrowBlue}) 90% center no-repeat #ebf5fa;
    transition: background-position 0.15s ease-out 0s;
    border: none;
  }
`;
export const HeaderH1 = styled.h1`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
