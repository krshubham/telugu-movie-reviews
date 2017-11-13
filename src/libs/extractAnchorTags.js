import cheerio from 'cheerio';
import urlMatch from './urlMatch';

/**
 * Returns a Promise<Array> containing the links of all the pages which contain movie reviews from
 * 123telugu.com
 * @param {String} htmlString 
 * @returns {Array}
 */
function extractAnchorTags(htmlString){
    return new Promise((resolve,reject) => {
        try{
            let reviewUrlArray = [];
            let $ = cheerio.load(htmlString);
            $('div.leading div.article-rel-wrapper a')
            .each((idx, anchor) => {
                let reviewUrl = anchor.attribs.href;
                if(urlMatch(reviewUrl)){
                    reviewUrlArray.push(reviewUrl);
                }
            });
            console.log(reviewUrlArray);
            resolve(reviewUrlArray);
        }
        catch(err){
            reject(err);
        }
    });
}

export default extractAnchorTags;