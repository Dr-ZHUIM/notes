import fs from 'fs';
import path from "path";

const projectsDirectory = path.join(process.cwd(),'projects') ;
const demoDirectory = path.join(process.cwd(),'demos');
const jsonExtension = /\.json/

export function getData(pathDirectory,extension){
    const fileNames = fs.readdirSync(pathDirectory);
    const allData = fileNames.map(fileName=>{
        const id = fileName.replace(extension,'');
        const fullPath = path.join(pathDirectory,fileName);
        const fileContents = JSON.parse(fs.readFileSync(fullPath,'utf-8'));
        return {id,fileContents}
    })
    return allData;
}


export function getDemos(){
   return getData(demoDirectory,jsonExtension)
}

export function getProjects(){
    return getData(projectsDirectory,jsonExtension)
 }