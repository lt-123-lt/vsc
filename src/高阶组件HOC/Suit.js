//将组件作为参数,返回一个新组件的函数

import React from "react"

//01.属性代理:不能改变传入组件的属性
export default function Suit(WrapComponent) {
    return class SuitChild extends React.Component {
        constructor() {
            super()
            this.state = {
                nickname: "Iron-Man",
                skill: ["唱", '跳', "rap", "飞"],
                weapon: ['动感光波', '竹蜻蜓', 'laszer', '阿姆斯特朗大炮喷气回旋式阿姆斯特朗大炮']
            }
        }

        attack() {
            alert("吧啦啦啦能量")
        }

        render() {
            return <WrapComponent {...this.state} attack={this.attack} />
        }
    }
}

//02.反向继承
// export default function Suit(WrapComponent) {
//     //继承自传进来的组件
//     return class SuitChild extends WrapComponent {
//         constructor() {
//             super()
//             // this.state = {
//             //     nickname: "Iron-Man",
//             //     skill: ["唱", '跳', "rap", "飞"],
//             //     weapon: ['动感光波', '竹蜻蜓', 'laszer', '阿姆斯特朗大炮喷气回旋式阿姆斯特朗大炮']
//             // }
//         }

//         attack() {
//             alert("吧啦啦啦能量")
//         }

//         render() {
//             // console.log(this.state);
//             // console.log(this.log);
//             return <WrapComponent {...this.state} attack={this.attack} />
//         }
//     }
// }