import React, { useState, useEffect } from 'react';

// API Call
import { getPeople } from './components/api/People';

// Components
import Functions from './components/Functions'
import Header from './components/Header';
import List from './components/List';

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState([]);

  // Search Names from the Fetch request/added Names
  const [filter, setFilter] = useState('');

  // Add Names to the Fetch request
  const [status, setStatus] = useState('Add Name');

  // Next Fetch request
  const [count, setCount] = useState(11);

  // Delete Names from the Fetch request/added Names
  const [selectedNames, setSelectedNames] = useState(undefined);

  const onSelect = (name) => {
    setSelectedNames(name);
    setStatus('Edit Name');
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getPeople();
      setPeople(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {/* Header Components */}
      <Header />
      {/* Functions Component */}
      <Functions 
        status={status}
        setStatus={setStatus}
        filter={filter}
        setFilter={setFilter}
        people={people}
				setPeople={setPeople}
        selectedNames={selectedNames}
        setSelectedNames={setSelectedNames}
        count={count}
				setCount={setCount}
      />

      {/* List Component */}
      <List 
        status={status}
        setStatus={setStatus}
        isLoading={isLoading}
        people={people}
        setPeople={setPeople}
        onSelect={onSelect}
				filter={filter}
				setFilter={setFilter}
      />
    </div>
  )
}

export default App