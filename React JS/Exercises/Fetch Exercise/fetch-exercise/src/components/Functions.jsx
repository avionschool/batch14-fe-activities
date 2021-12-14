import React, { useState, useEffect } from 'react';

// CSS
import styles from './functions.module.css';

// API Call
import { getPersons } from './api/People';

// Components

const Functions = (props) => {

    const {
        status,
        setStatus,
        people,
        setPeople,
        filter,
        setFilter,
        selectedNames,
        count,
        setCount,
    } = props;

    const [name, setName] = useState('');

    useEffect(() => {
        setName(selectedNames)
    }, [selectedNames]);

    const fetchNextPerson = async (e) => {
        e.preventDefault();
        const data = await getPersons(count);

        setPeople([...people, data]);
        setCount((count) => count + 1);
    }

    const handleAddPerson = (e) => {
        e.preventDefault();
        if (status === 'Add Name') {
            setPeople([...people, { name: name }]);
        } else if (status === 'Edit Name') {
            setPeople(
                people.map((person) => {
                    return person.name === selectedNames
                        ? { name: name }
                        : person;
                })
            );
            setStatus('Add Name');
        }

        setName('');
    }

    return (
        <div className={styles.functions}>
            {/* Add Person Function */}
            <div className={styles.addPerson}>
                <button
                    className={styles.fetchPersonBtn}
                    onClick={(e) => fetchNextPerson(e)}
                >
                    Fetch More Names
                </button>
                <div className={styles.addPersonIpt}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        className={styles.addPersonBtn}
                        onClick={(e) => handleAddPerson(e)}
                    >
                        {status === 'Add Name' ? (
                            <span>Add Name</span>
                        ) : (
                            <span>Edit Name</span>
                        )}
                    </button>
                </div>
            </div>
            {/* Search Name Function */}
            <div className={styles.searchPerson}>
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <span className={styles.searchSpan}>Search Name</span>
            </div>
        </div>
    )
}

export default Functions
