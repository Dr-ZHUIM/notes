const {
  Menu
} = require("electron");
const createMenu = (mainWindow) => {
  const menu = [{
      label: '菜单',
      submenu: [{
        label: '添加',
        click: () => {
          mainWindow.webContents.send('test', 123, "asd")
        }
      }]
    },
    {
      label: '功能',
      submenu: [{
        label: "打开开发者工具",
        click: () => {
          mainWindow.webContents.openDevTools({})
        }
      }]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
}

module.exports = {
  createMenu
};