import axiox from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';
const NewsData = () => {
    const [news, setNews] = useState([]);
    useEffect( () => {
        const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=d66e30bbdd81488bb6598223a2f34bd6';
        axiox(url)
        .then( data => setNews(data.data.articles))
    }, [])
    return (
        <div>
            <h2>Healines : {news.length} </h2>
            {
                news.map( info => <News newsInfo = {info} /> )
            }
        </div>
    );
};

export default NewsData;