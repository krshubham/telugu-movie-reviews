
import {Regex} from '../enums/urls';

function urlMatch(url){
    const re = Regex.reviewUrl;
    return re.test(url);
}


export default urlMatch;