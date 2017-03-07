var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
 article :{
    title : 'Title',
    content: `<p>
                    Hello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahaha
                </p>
                <p>Hello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahaha</p>
                  <p>Hello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahahaHello, My name is arjun and this is my first ever coding
                    hahaha</p>  
`}
};
function createtemplate(data){
    var title=data.title;
    var content=data.content;
var htmltemplate=`

<html>
    <head>
        <title>
            <div> ${title}</div>
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
              <link href="/ui/style.css" rel="stylesheet" />
        
        <body class="container">
            <div>
                <a href="/" >home</a>
            </div>
            <div>
            <hr/>
            <div>
                ${content}  
            </div></div>
        </body>
    </head>
</html>


`;
return htmltemplate;
}
app.get('/:articles', function(req,res){
     res.send(createtemplate(articles[articlename]));
    
});

var articlename=req.params.articlename;
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
