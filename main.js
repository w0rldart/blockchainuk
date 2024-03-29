const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

const path = require('path');
const url = require('url');
var fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

global.movies = JSON.parse(fs.readFileSync(path.join(__dirname, 'movies.json'), 'utf8'));

function createWindow() {
    win = new BrowserWindow({ width: 1048, heigth: 800 });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // win.webContents.openDevTools();

    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this it the time
        // when you should dlete the corresponding element.
        win = null;
    })
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});
