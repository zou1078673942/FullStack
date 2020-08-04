// // 子组件
// import * as React from 'react';

// export interface Props{
//     userName:string;
// }

// export const HelloComponent = (props: Props) => (
//     <h2>hello user: {props.userName}</h2>
// )
import * as React from 'react'

// 子组件   
export interface Name {
  userName: string,
}
export const HelloComponent = (props: Name) => (
    <h2>Hello user: {props.userName}</h2>
)