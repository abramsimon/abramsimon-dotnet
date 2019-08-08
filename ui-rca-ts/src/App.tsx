import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import backVideo from './back.mp4';
import './App.css';

interface ILambdaProvider {
  name: string;
  url: string;
}

const defaultLambdaProviders : ILambdaProvider[] = [
  { name: 'javascript', url: 'https://kjc1wy9o2g.execute-api.us-east-1.amazonaws.com/prod/helloWorld-javascript' },
  { name: 'golang', url: 'https://y9glti1lfj.execute-api.us-east-1.amazonaws.com/prod/eightball-golang' },
  { name: 'python', url: 'https://8rrdb6zwrb.execute-api.us-east-1.amazonaws.com/prod/helloWorld-python' },
  { name: 'dotnet', url: 'https://28k2rs6enb.execute-api.us-east-1.amazonaws.com/prod/helloWorld-dotnet' },
];

const LambdaProviderContext = createContext<ILambdaProvider[]>(defaultLambdaProviders);

const App: React.FC = () => {
  const lambdaProviders = useContext(LambdaProviderContext);
  const [lambdaProvider, setProvider] = useState<ILambdaProvider>(defaultLambdaProviders[0]);
  const [isAsking, setIsAsking] = useState(false);
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setAnswer("");
      return
    }

    const fetchAnswer = async () => {
      const result = await axios(lambdaProvider.url);
      setAnswer(result.data);
      setIsAsking(false);
    }

    setIsAsking(true);
    fetchAnswer();
  }, [debouncedQuery, lambdaProvider]);

  return (
    <LambdaProviderContext.Provider value={defaultLambdaProviders}>
      <div className="fullscreen-bg">
        <video className="fullscreen-bg__video" autoPlay muted loop>
            <source src={backVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      <div className="app">
        <div className="app-box">
          <input type="text" className="query" value={query} placeholder="Ask AI-bram a question..." onChange={e => setQuery(e.target.value)} />
          <p>
              {isAsking && <span>Asking AI-bram your question ...</span>}
              {!isAsking && answer &&
                <span>
                  {answer}<br />
                  <small><i>says {lambdaProvider.name} lambda</i></small>
                </span>
              }
          </p>
          <p>
            {lambdaProviders.map(p => (
              <button key={p.name} onClick={() => setProvider(p)}>{p.name}</button>
            ))}
          </p>
        </div>
      </div>
    </LambdaProviderContext.Provider>
  );
}

export default App;
