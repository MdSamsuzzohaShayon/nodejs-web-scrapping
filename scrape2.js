const request = require('request');
const cheerio = require('cheerio');


request('https://www.simple.com/blog', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        $('.post-grid__grid__item').each((i, el)=>{
            //GETTING BLOG POST TITLE
            // const title = $(el).find('.post--small-on-mobile').text();
            //GETTING TITLE WITHOUT WHITESPACE
            const title = $(el).find('.post--small-on-mobile').text().replace(/\s\s+/g, '');

            // GETTING LINK
            const link = $(el).find('a').attr('href');

            // GETTING DATE
            const img = $(el).find('.post__title').text().replace(/,/, '');

            console.log(title, link , img);
        });
    }
});
