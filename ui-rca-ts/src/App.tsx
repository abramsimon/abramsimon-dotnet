import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface ILambdaProvider {
  name: string;
  url: string;
}

const defaultLambdaProviders : ILambdaProvider[] = [
  { name: 'javascript', url: 'https://kjc1wy9o2g.execute-api.us-east-1.amazonaws.com/prod/helloWorld-javascript' },
];

const LambdaProviderContext = createContext<ILambdaProvider[]>(defaultLambdaProviders);

const App: React.FC = () => {
  const lambdaProviders = useContext(LambdaProviderContext);
  const [lambdaProvider, setProvider] = useState<ILambdaProvider>(defaultLambdaProviders[0]);
  const [greeting, setGreeting] = useState('hello?');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(lambdaProvider.url);
      setGreeting(result.data);
    };

    fetchData();
  }, [lambdaProvider]);

  return (
    <LambdaProviderContext.Provider value={defaultLambdaProviders}>
      <div className="App">
        <header className="App-header">
          <p>
              {greeting}<br />
              <small><i>says {lambdaProvider.name} lambda</i></small>
          </p>
          <p>
            {lambdaProviders.map(p => (
              <button key={p.name} onClick={() => setProvider(p)}>{p.name}</button>
            ))}
          </p>
        </header>
      </div>
    </LambdaProviderContext.Provider>
    
  );
}

export default App;
