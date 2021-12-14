import React, { useState, useEffect } from 'react';

// CSS
import styles from './list.module.css';

const List = (props) => {

    const {
        isLoading = [],
        people = [],
        setPeople,
        status,
        onSelect,
        filter
    } = props;

    // Filtered Names
    const [filteredNames, setFilteredNames] = useState([]);

    useEffect(() => {
        if (filter === '') {
            setFilteredNames(people);
        } else {
            setFilteredNames(
                people.filter((person) => {
                    return person.name.toLowerCase().includes(filter);
                })
            );
        }
    }, [people, filter]);

    const handleDelete = (e, name) => {
        e.preventDefault();
        setPeople(people.filter(person => person.name !== name));
    }

    return (
        <div className={styles.list}>
            <ul>
                <div className={styles.functions}>
                    <p className={styles.status}>Status: <strong className={styles.statusStrong}>{status}</strong></p>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredNames.map(person => (
                        <>
                            <li>
                                <span onClick={() => onSelect(person.name)}>{person.name}</span>
                                {' '}
                                <button
                                    onClick={(e) => { handleDelete(e, person.name) }}
                                >
                                    Delete Name
                                </button>
                            </li>
                        </>
                    ))
                )}
            </ul>
        </div>
    )
}

export default List
