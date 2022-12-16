import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards'



const alanKey = 'db8beed7319cd2dbb9ac8b5554bf91ee2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles] = useState([])
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) => {
                if (command === 'newHeadlines') {
                    console.log(articles)
                    setNewsArticles(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"1rem",color:"rgba(0,0,0,0.8)"}}>Basil Ai Website</h1>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;
