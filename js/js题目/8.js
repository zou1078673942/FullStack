/**
 * dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
    dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
    dateFormat(new Date('2020-0e4-01'), 'yyyy年MM月dd日') // 2020年04月01日
    写一个日期格式化函数
    const dateFormat = (dateInput, format)=>{
    // todo
    }
 */
const dataFormat = (dateInput,format) => {
    const date = [dateInput.getFullYear(),dateInput.getMonth()+1,dateInput.getDate()]
    for (let i=0;i<date.length; i++){
        format = format.replace(/[a-z|A-Z]+/,date[i])
    }
    return format
}
console.log(dataFormat(new Date('2020-12-01'),'yyyy年MM月dd日'))