import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png'
import Buttons from './Buttons';

import './Home.css'
import { setIsRoomHost } from '../../store/actions';

const Home = ({setIsRoomHostAction}) => {

  useEffect(() => {
    setIsRoomHostAction(false);
  }, [])
  

  return (
    <div className='introduction_page_container'>
      <div className="introduction_page_panel">
        <img src={logo} className='introduction_page_image' alt="" />
        <Buttons />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  }
}

export default connect(null, mapDispatchToProps)(Home);
