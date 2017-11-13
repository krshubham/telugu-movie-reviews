import cheerio from 'cheerio';
import request from 'request-promise';
import { points } from '../enums/constants';

function cl(str){
    return cheerio.load(str);
}

/**
* Extracts the positive points about the movie in the given page
* @param {String} htmlString 
*/
function extractPositives(htmlString){
    
}

/**
* Extracts the negative points about the movie in the given page
* @param {String} htmlString 
*/
function extractNegatives(htmlString){
    //TODO: Work on this part to make sure that plus points are scraped properly
    let $ = cl(htmlString);
    console.log($('div.post-content p strong').length);
    // .each((idx,element) => {
    //     // console.log($(element).text());
    //     // if($(element).text() == points.minus){
    //     //     console.log($(element).parent().html());
    //     // }
    // });
}
let cnt = 0;
function extractText(reviewUrl){
    cnt++;
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