import cheerio from 'cheerio';
import request from 'request-promise';
import { points, fileDir} from '../enums/constants';
import { join } from "path";
import fs from 'fs';

function cl(str){
    return cheerio.load(str);
}

/**
* Extracts the positive points about the movie in the given page
* @param {String} htmlString 
*/
function extractPositives(htmlString){
    
}


let cnt = 0;
/**
* Extracts the negative points about the movie in the given page
* @param {String} htmlString 
*/
function extractNegatives(htmlString){
    //TODO: Work on this part to make sure that plus points are scraped properly
    let $ = cl(htmlString);
    fs.writeFile(join(fileDir,`rev${cnt}.txt`),$('div.contentheading').text().trim(), (err) => {
        if (err) throw err;
        console.log('The file has been saved! by name',`rev${cnt}.txt`);
    });
    fs.appendFile(join(fileDir,`rev${cnt}.txt`),$('div.post-content').text().trim(), (err) => {
        if (err) throw err;
        console.log('The file has been saved! by name',`rev${cnt}.txt`);
    });
    cnt++;
}
function extractText(reviewUrl){
    request(reviewUrl)
    .then((htmlString) => {
        // extractPositives(htmlString);
        extractNegatives(htmlString);
    })
    .catch(err => console.log(err));
}

/**
* Takes an array containing Url strings and parses the data to find the positives and negatives
* in a movie review
* @param {Array} reviewsArray 
* @returns {void}
*/
function crawler(reviewsArray){
    while(reviewsArray.length){
        let reviewUrl = reviewsArray.pop();
        setTimeout(() => {
            extractText(reviewUrl);
        },500);
    }
}

export default crawler;