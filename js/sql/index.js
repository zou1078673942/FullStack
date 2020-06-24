const users = [
    {id: 1, name: 'john', age: 28, sex: 'male'},
    {id: 4, name: 'alice', age: 18, sex: 'female'},
    {id: 2, name: 'bob', age: 33, sex: 'male'},
    {id: 3, name: 'tom', age: 22, sex: 'male'},
    {id: 5, name: 'rihana', age: 35, sex: 'female'},
    {id: 6, name: 'sara', age: 20, sex: 'female'}
];

// es5 function类进行封装
function SQL(table){
    this.table = table;
    // 结果的保存变量  存储中间结果 
    this._result = null;
    this._getRows = function(){
        return this._result ? this._result : this.table
    }
    // this._result = SQL.prototype.where(table);
};
// 条件动作
SQL.prototype.where = function(predicate){
    let rows = this._getRows();
    if(Array.isArray(rows)){
        this._result = rows.filter(predicate);
        // console.log(this._result)
    }else{
        // json object
        this._result = Object.keys(rows)
            .reduce((groups, group) => {
                groups[group] = rows[group].filter(predicate);
                return groups;
            },{})
    }
    return this;
    // let people = predicate.filter((x) => {
    //     return x.age<30;
    // })
}
SQL.prototype.groupBy = function(key){
    let rows = this._getRows();
    // reduce 将数组每一个数据逐步处理
    this._result = rows.reduce((groups,row) =>{
        let group = row[key];
        if(!groups[group]){
            groups[group] = [];
        }
        console.log(groups[group],'--------------------',groups)
        groups[group].push(row);
        return groups;
    },{})
    console.log(this._result)
    return this;   // 在函数的后面 return this 就可以实现链式调用
}
SQL.prototype.getResult = function(){
    return this._result;
}


let sql = new SQL(users);
let predicate = function(row){
    return row.age < 30
}


let result = sql
    .groupBy('sex')   // 链式调用
    .where(predicate)
    .getResult();
console.log(result,'11111111111');