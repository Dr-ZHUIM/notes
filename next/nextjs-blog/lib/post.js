import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const shiki = require('shiki')
const markdown = require('markdown-it')
const postsDirectory = path.join(process.cwd(),'articles');
const playgroundDirectory = path.join(process.cwd(),'playgrounds');
  
export function getSortedBlogsData(){
  // Get file name under /posts
  const fileName = fs.readdirSync(postsDirectory);
  const allPostsData = fileName.map((fileName)=>{
    // remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/,'');
    // read markdown file as string
    const fullPath = path.join(postsDirectory,fileName);
    const fileContents = fs.readFileSync(fullPath,'utf-8');
    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  });
  // sort posts by date
  return allPostsData.sort(({date:a},{data:b})=>{
    if (a < b){
      return 1
    }else if (b > a){
      return -1
    }else {
      return 0
    }
  });
}

export function getAllBlogsIds(){
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName=>{
    return {
      params:{
        id : fileName.replace(/\.md$/,'')
      }
    }
  })
}


async function htmlOutPut(contentHtml){
  const outData = await shiki.getHighlighter({
    theme: 'nord'
  }).then(highlighter => {
    const md = markdown({
      html: true,
      highlight: (code) => {
        return highlighter.codeToHtml(code, { lang: 'js' })
      }
    })
    const html = md.render(contentHtml);
    return html
    })
    return outData;
}

export async function getBlogData(id){
  const fullPath = path.join(postsDirectory,`${id}.md`);
  const fileContents = fs.readFileSync(fullPath,'utf-8');
  const matterResult = matter(fileContents);
  const preparedHtml = await htmlOutPut(matterResult.content);
  return {
    id,
    preparedHtml,
    ...matterResult.data
  }
}

export async function getPlaygroundData(id){
  const fullPath = path.join(playgroundDirectory,`${id}.jsx`);
}