// //  给专辑建个模型  album
// /**
//  *  歌手 函数, []
//  *  
//  */
export class Album {
    constructor(id, mId, name, img, singer, publicTime) {
      this.id = id;
      this.mId = mId;
      this.name = name;
      this.img = img;
      this.singer = singer;
      this.publicTime = publicTime;
    }
  }

// 封装一个工具函数
export function createAlbumByList(data){
    return new Album(
        data.album_id,
        data.album_mId,
        data.album_name,
        `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album_mid}.jpg?max_age=2592000`,
        filterSinger(data.singers),
        data.album_publicTime
    )
}

function filterSinger(singers){
    let singerArray = singers.map(singer =>{
        return singer.singer_name
    })
    return singerArray.join('/')
}