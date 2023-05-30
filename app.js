const path = require('path');
const fs = require('fs');
// fs.mkdir(path.join(__dirname,'homeWork'), (err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.mkdir(path.join(__dirname,'homeWork','folder1'),(err)=>{
//     if (err) throw new Error(err.message)
// });
// fs.mkdir(path.join(__dirname,'homeWork','folder2'),(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.mkdir(path.join(__dirname,'homeWork','folder3'),(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.mkdir(path.join(__dirname,'homeWork','folder4'),(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.mkdir(path.join(__dirname,'homeWork','folder5'),(err)=>{
//     if (err) throw new Error(err.message)
// });
//
//
// fs.writeFile(path.join(__dirname,'homeWork','file1.js'),'file1',(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.writeFile(path.join(__dirname,'homeWork','file1.js'),'file1',(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.writeFile(path.join(__dirname,'homeWork','file2.js'),'file2',(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.writeFile(path.join(__dirname,'homeWork','file3.js'),'file3',(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.writeFile(path.join(__dirname,'homeWork','file4.js'),'file4',(err)=>{
//     if (err) throw new Error(err.message)
// });
//
// fs.writeFile(path.join(__dirname,'homeWork','file5.js'),'file5',(err)=>{
//     if (err) throw new Error(err.message)
// });

fs.readdir(path.join(__dirname,'homeWork'),(err, files)=>{
    if (err) throw new Error(err.message);
    files.forEach(file=>{
        if (file.isFile) {
            console.log(`files:${file}`)
        }else {
            console.log(`folders:${file}`)
        }
    })
})