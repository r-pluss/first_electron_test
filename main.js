'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });
    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
