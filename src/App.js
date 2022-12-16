import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';


const alanKey = 'db8beed7319cd2dbb9ac8b5554bf91ee2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
    useEffect(() => {
        // only run one times in class component componentDidMount()
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command === 'textCommand') {
                    alert("helo iam basil pulikuth");
                }
            }
        })
    }, [])
    return (
        <div>
            <h1>Basil Voice Ai</h1>
        </div>
    );
}

export default App;
