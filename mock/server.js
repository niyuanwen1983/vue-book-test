let http = require('http');
let fs = require('fs');
let url = require('url');

//获取轮播图 /sliders
let sliders = require('./sliders');

function read(cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length < 1) {
      cb([]);//如果有错误或文件没长度（为空）就是空数组
    }
    else {
      cb(JSON.parse(data));//将读出来的内容转化成对象
    }
  });
}

/*read(function (books) {//books代表所有图书
  console.log(books);
});*/

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") {
    res.end();
    return;
  }
  /*让options请求快速返回*/

  let {pathname, query} = url.parse(req.url);
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hot') {
    read(function (books) {
      let hot = books.reverse().slice(0, 6);
      res.setHeader('Content-Type', 'application/json;charset=utf8');
      res.end(JSON.stringify(hot));
    });
    return;
  }
}).listen(3000);
