// const fs = require('fs')

// fs.writeFile('E:/work/Electron/text.text','aaa',() => {   //在本地创建文件
//     console.log('done .')
// })

const { contextBridge } = require('electron')
contextBridge.exposeInMainWorld('myApi', {
    platform: process.platform
})