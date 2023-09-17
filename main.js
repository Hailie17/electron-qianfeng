const { app, BrowserWindow } = require("electron");
const path = require('path')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {      // 渲染进程和主进程的隔离清除, 有安全隐患，尽量不用
      // nodeIntegration: true,
      // contextIsolation: false,
      sandbox: false,
      preload: path.resolve(__dirname,'./preload.js')
    }
  });
  // win.loadURL("https://www.electronjs.org/zh/docs/latest/tutorial/installation");  //加载线上地址
  win.loadFile('index.html')   //加载本地地址
  win.webContents.openDevTools()   //打开调试工具
  //process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true' //暂时关闭安全警告
};
app.on('window-all-closed', () =>{
  console.log('123')
})

app.whenReady().then(createWindow);
