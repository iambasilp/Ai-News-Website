import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
const NewsCards = ({ articles }) => {
    return (
        <div>
            {articles.map((article,i)=>(
              <NewsCard article={article}/>
            ))}
        </div>
    )
}

export default NewsCards