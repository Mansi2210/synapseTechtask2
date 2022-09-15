import React from 'react';
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
    console.log(newsItem);
    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));
    const time = hour>12?true:false;
  return (
    <div className='newsCard'>
        <img alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:"https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg"}
           className='newsImage' ></img>
           <div className='newsText'>
            <div>
                <span className='title'>{newsItem.title}</span>
                <span className='author'><br></br>
                    <a href={newsItem.url} target='_blank'>
                        <b>article</b>
                    </a>
                    <span className='muted'>
                    {" "}by {newsItem.author?newsItem.author:"unknown"} /{" "}{
                        time?`${hour-12}:${date[4].substring(3,5)} pm`:`${hour-12}:${date[4].substring(3,5)} am`}{" "}
                        on {date[2]} {date[1]} {date[3]}, {date[0]}
             
                    </span>
                </span>
                <div className='lower'>
                    <div className='description'>{newsItem.description}</div><br></br>
                    <span className='readmore'>
                        readmore at {' '}
                        <a href={newsItem.url} target='_blank'>
                        <b>{newsItem.source.name}</b>
                    </a>
                    </span>
                </div>
            </div>

           </div>
      
    </div>
  )
}

export default NewsCard;
