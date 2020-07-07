// 假数据  在没有真正数据时用一下
import Mock from 'mockjs'
 
export default Mock.mock('/posts/','get',{
    success:true,
    title:'将进酒',
    auther:'李白',
    'list|5-10':[{
       'title':'@title()' ,
       'email':'@email',
       'id':'@id',
       'key|+1':1
    }]    
})