declare interface Window {
  electron: ElectronInRenderer
}

interface ElectronInRenderer {
  ipcRenderer: any
}
