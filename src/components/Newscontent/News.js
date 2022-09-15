import { Container } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './News.css';

const News = ({ NewsArray,newsResults}) => {
  return (
    <Container maxWidth='md'>
      <div className='content'>
        {
          NewsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title}>

            </NewsCard>
          ))
        }
      </div>
    </Container>
  )
}

export default News
