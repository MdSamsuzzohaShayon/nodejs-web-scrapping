const request = require('request');
const cheerio = require('cheerio');



//GETTING HTML CODE FO WHOLE PAGE
request('https://www.simple.com/blog', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        console.log(html);
    }
})