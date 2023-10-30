import React from 'react';

const items = ['인기제품', '가격대별', '성능별'];

const style = {
  border: '1px solid green',
  textAlign: 'center',
  width: '200px',
  height: '100px',
  font: '2em bold',
  lineHeight: '100px',
  borderRadius: '20px',
  margin: '40px auto',
};

const MenuVertical = () => {
  return (
    <div style={{
      border: '1px solid ', float: 'left',
      marginLeft: '40px',
    }}>
      {items.map((item, index) => (
        <div key={index} style={style} >{item}</div>))
      }
    </div>
  );
};

export default MenuVertical;
