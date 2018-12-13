
const fs = require('fs');
const xml2js = require('xml2js');
const moment = require('moment');
const parser = xml2js.Parser();

fs.readFile('./data/post-sitemap.xml', function (err, data) {
    parser.parseString(data, function (err, res) { 
        // console.dir(res);
        // console.log(res.urlset.url);
        const data = res.urlset.url;
        let _arr = [];
        
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.loc.toString() != 'https://webclown.net/blog') {
                _arr.push({
                    title: element.title.toString(),
                    url: element.loc.toString(),
                    timestamp: moment(new Date(element.lastmod)).format('YYYY-MM-DD hh:mm:ss')
                })
            }
        }
        console.log(_arr);
    });
})