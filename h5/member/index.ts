// 定义一个接口  
// 约束 类型    TypeScript 特有的
// interface MembersEntity{
//     id: number;
//     name: string;
//     avatar: string;
// }
// const members:MembersEntity[] = [
//     {
//         id: 1,
//         name: 'Zz',
//         avatar: 'https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/4ae2d4aabfe0381b.jpg'
//     },
//     {
//         id: 2,
//         name: 'Xx',
//         avatar:'http://img3.imgtn.bdimg.com/it/u=4070802607,1504359708&fm=11&gp=0.jpg'
//     },
//     {
//         id: 3,
//         name: 'Cc',
//         avatar:'http://image.biaobaiju.com/uploads/20181227/21/1545916309-cIKFDqXOYA.jpg'
//     }
// ]
// const tbody = document.querySelector('#member tbody')
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const id = form.idInput.value;
//     const name =form.nameInput.value;
//     const avatar =form.avatarInput.value;
//     if (id.trim().length === 0) {
//         alert('id 不能为空');
//         return;
//     }
//     if (name.trim().length === 0) {
//         alert('name 不能为空');
//         return;
//     }
//     const ids = parseInt(id);
//     members.push({
//         id: ids,
//         name: name,
//         avatar: avatar,
//     });
//     console.log(members);
//     render()
// })
// function rander(){
//     tbody.innerHTML = members.map((members) => {
//         return `
//             <tr>
//                 <td>${members.id}</td>
//                 <td>${members.name}</td>
//                 <td><img src="${members.avatar}"/></td>
//             </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
//             `
//     }).join('') 
// }
interface MembersEntity {
    id: number;
    name: string;
    sex:string;
    avatar: string;
    phone_number:number;
    home_town:string;
}

const members:  MembersEntity[] = [
    {
        id: 1314,
        name: '廖子文',
        sex:'男',
        avatar: 'http://img5.imgtn.bdimg.com/it/u=2919831077,1230952122&fm=26&gp=0.jpg',
        phone_number:48949846,
        home_town:'江西赣州'
    },
    {
        id: 520,
        name: '衷从海',
        sex:'男',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=256403268,3382634758&fm=26&gp=0.jpg',
        phone_number:48949846,
        home_town:'江西赣州'
    },
    {
        id: 343138,
        name: '周子寒',
        sex:'男',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=2484602611,2998174117&fm=26&gp=0.jpg',
        phone_number:48949846,
        home_town:'江西赣州'
    },
    {
        id: 1918,
        name: '傅闯',
        sex:'男',
        avatar: 'http://img0.imgtn.bdimg.com/it/u=4150802370,1902002068&fm=11&gp=0.jpg',
        phone_number:48949846,
        home_town:'江西赣州'
    }
]

const form = <HTMLFormElement>(document.forms.myform).value;
// console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const id = form.idInput.value;
    const name =form.nameInput.value;
    const sex =form.sexInput.value;
    const avatar =form.avatarInput.value;
    const phone_number =parseInt(form.phone_numberInput.value);
    const home_town =form.home_townInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    const ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        sex:sex,
        avatar: avatar,
        phone_number:phone_number,
        home_town:home_town
    });
    console.log(members);
    render()
})
const tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
// console.log(members)
function render(){
    tbody.innerHTML = members
    .map((member) => {
        return `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.sex}</td>
            <td><div class="imgbox"><img src=${member.avatar}></div></td>
            <td>${member.phone_number}</td>
            <td>${member.home_town}</td>
        </tr>
        `
    }).join(" ")
}
render();