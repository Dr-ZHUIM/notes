const {
  Menu
} = require("electron");
const createMenu = (win) => {
  const menu = [{
    label: '菜单',
    submenu: [{
        label: '添加',
        click: () => {
          console.log(win.webContents)
        }
      },
      {
        label: '减少',
        click: () => {
          console.log('decrement!')
        }
      }
    ]
  }];
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
}

module.exports = {
  createMenu
};