import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface ILambdaProvider {
  name: string;
  url: string;
}

const defaultLambdaProviders : ILambdaProvider[] = [
  { name: 'javascript', url: 'https://kjc1wy9o2g.execute-api.us-east-1.amazonaws.com/prod/helloWorld-javascript' },
  { name: 'golang', url: 'https://2j7b34vch2.execute-api.us-east-1.amazonaws.com/prod/helloWorld-golang' },
  { name: 'python', url: 'https://8rrdb6zwrb.execute-api.us-east-1.amazonaws.com/prod/helloWorld-python' },
  { name: 'dotnet', url: 'https://28k2rs6enb.execute-api.us-east-1.amazonaws.com/prod/helloWorld-dotnet' },
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
