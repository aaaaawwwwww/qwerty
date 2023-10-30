import React from 'react'
import { Button, Space } from 'antd'
import LoginTool from './LoginTool'

function Head() {
  return (
    <div style={{ border: "solid 2px red", height: '200px' }}>
      <form>
        <Space wrap style={{
          display: "flex", justifyContent: 'flex-end', marginRight: '100px',
          marginLeft: '300px', border: "solid 2px lime"
        }}>
          <Button type="primary">마이페이지</Button>
          <Button>장바구니</Button>
          <Button type="dashed">주문/배송조회</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </form>
      <form style={{
        display: 'inline-block',
        marginTop: "2%", marginLeft: "40%", border: "solid 3px blue"
      }}>
        <input type="text" name="text" id="text" placeholder="검색어를 입력하세요." style={{ width: "30em", height: '30px' }} />
        <button type='submit' className='searchBtn' onClick=""
          style={{
            width: "50px",
            height: "30px"

          }} >
          <span>검색</span>
        </button>
      </form>
      <form style={{ display: 'relative', }}>
        <LoginTool />
      </form>

    </div>
  )
}

export default Head


// import React from 'react'
// import { Button, Space } from 'antd'
// import LoginTool from './LoginTool'

// function Head() {
//   return (
//     <div style={{ border: "solid 2px red", minHeight: '200px' }}>
//       <form>
//         <Space wrap style={{
//           display: "flex",
//           justifyContent: 'flex-end',
//           border: "solid 2px lime"
//         }}>
//           <Button type="primary">마이페이지</Button>
//           <Button>장바구니</Button>
//           <Button type="dashed">주문/배송조회</Button>
//           <Button type="text">Text Button</Button>
//           <Button type="link">Link Button</Button>
//         </Space>
//       </form>
//       <form style={{
//         display: 'flex',
//         justifyContent: 'center',
//         border: "solid 3px blue"
//       }}>
//         <input
//           type="text"
//           name="text"
//           id="text"
//           placeholder="검색어를 입력하세요."
//           style={{ width: "100%", maxWidth: "30em", height: '30px' }}
//         />
//         <button
//           type='submit'
//           className='searchBtn'
//           onClick=""
//           style={{
//             width: "50px",
//             height: "30px"
//           }}
//         >
//           <span>검색</span>
//         </button>
//       </form>
//       <form>
//         <LoginTool />
//       </form>
//     </div>
//   )
// }

// export default Head





