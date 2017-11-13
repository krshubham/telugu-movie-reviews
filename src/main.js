import $ from "cheerio";
import {URLS} from './enums/urls';
import extractAnchorTags from "./libs/extractAnchorTags";
import request from 'request-promise';
import crawler from './libs/crawler';
import sourceMapSupport from 'source-map-support'

sourceMapSupport.install()

request(URLS.start)
.then(data => {
    extractAnchorTags(data)
    .then(crawler)
    .catch(err => console.log(err));
})
.catch(err => console.error(err));
