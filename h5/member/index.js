var members = [
    {
        id: 1,
        name: 'Zz',
        avatar: 'https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/4ae2d4aabfe0381b.jpg'
    },
    {
        id: 2,
        name: 'Xx',
        avatar: 'http://img3.imgtn.bdimg.com/it/u=4070802607,1504359708&fm=11&gp=0.jpg'
    },
    {
        id: 3,
        name: 'Cc',
        avatar: 'http://image.biaobaiju.com/uploads/20181227/21/1545916309-cIKFDqXOYA.jpg'
    }
];
var tbody = document.querySelector('#member tbody');
//  map  将一个数据类型变成 另一个数据类型
//  从 json 数组变成 html 数组
tbody.innerHTML = members.map(function (members) {
    return "\n        <tr>\n            <td>" + members.id + "</td>\n            <td>" + members.name + "</td>\n            <td><img src=\"" + members.avatar + "\"/></td>\n        </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             \n        ";
}).join('');
var submit = document.getElementById('submit');
var getIds = document.getElementById('id').value;
var Ids = parseInt(getIds);
var Names = document.getElementById('name').value;
var Avatars = document.getElementById('avatar').value;
function addItem() {
    console.log(Ids);
}
submit.addEventListener('submit', addItem);
