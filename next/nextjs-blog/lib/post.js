import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts');

export function getSortedPostsData(){
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