// import React, { useEffect } from 'react';
// import { useDispatch } from "react-redux";
// import { auth, loginUser } from "../_actions/user_action";
// import { useNavigate } from 'react-router-dom';

// export default function (SpecificComponent, option, adminRoute = null) {

//   //option : null(아무나 출입 가능), true(로그인한 경우만 출입 가능), false(로그인한 상태에서 출입 불가능)

//   function AuthenticationCheck(props) {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     useEffect(() => {
//       dispatch(auth()).then(response => {

//         //로그인한 상태에서 로그인, 회원가입 페이지 들어가면 메인 페이지로 감
//         //로그인하지 않은 상태
//         if (!response.payload.isAuth) {
//           if (option) {
//             navigate('/login');
//           }
//         } else {
//           //로그인한 상태
//           if (adminRoute && !response.payload.isAdmin) {
//             navigate('/');
//           } else {
//             if (option === false) {
//               navigate('/');
//               alert('로그인 상태입니다.')
//             }
//           }
//         }
//       })

//     }, [])

//     return (
//       <SpecificComponent />
//     )

//   }

//   return AuthenticationCheck
// }