'use strict';
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
require('electron-reload')(__dirname,{
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
function first() {
    let win = new BrowserWindow({
        width: 820,
        icon: 'icon.ico',
        height: 555,
        frame: false,
        x: 400,
        y: 200
    });
    win.loadURL(url.format({
        pathname: 'app.html',
        slashes: true
	}))
	
}

app.on('ready',first);



