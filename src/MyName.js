import React from 'react';

const MyName = ({ name }) => {
  return <div className="App"> 안녕하세요! 제 이름은 {name} 입니다. </div>;
};

MyName.defaultProps = {
  name: 'tmddus'
};
export default MyName;
