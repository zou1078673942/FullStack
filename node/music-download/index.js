const process = require('process')
const axios = require('axios')
const http = require('http')
const fs = require('fs')
const inquirer = require('inquirer')
process.title = 'node music'
// console.log(process.argv);
//  异步 请求不会立马收到
function request() {
    let keywords = process.argv[2];
    return axios({
        methob: 'GET',
        url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
        params: {
            keywords
        }
    })
        .then(res => {
            // console.log(res);
            // promise then回调里面 返回内容 在后面接着链式调用 then 就可以继续取到返回的内容
            return res.data;
        })
}
//  异步 
function choose(songs) {
    // value 可以作为 inquirer 唯一的标识
    // inquirer 要求每一项都是 {name value}
    return inquirer.prompt([
        {
            type: 'list',
            name: 'songs',
            message: `共有${songs.length}首，请回车选择`,
            choices: songs.map(songs => {
                return {
                    name: songs.name,
                    value: songs.id,
                }
            })
        }
    ])
        .then(word => {
            const id = word.songs;
            return id
        })
}
request()
    .then(res => {
        // console.log(res)
        return choose(res.result.songs)
    })
    .then(id => {
        axios({
            url: 'http://neteasecloudmusicapi.zhaoboy.com/song/url',
            params: {
                id
            }
        })
            .then(res => {
                let url = res.data.data[0].url
                return url
            })
            .then(url => {
                if (!url) {
                    console.log('没有找到')
                }
                console.log('获取到url', url, '开始下载...')
                http.get(url, (res) => {
                    res.pipe(fs.createWriteStream(`./${id}.mp3`))
                    res.on('end', () => {
                        console.log('下载完毕')
                    })
                })
            })
    })
