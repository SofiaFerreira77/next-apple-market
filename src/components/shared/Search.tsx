"use client"

import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from './Icons'
import styles from '@/styles/Header.module.css'

export default function Search() {

    const [inputVisible, setInputVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const searchInput = useRef(null);

    function getSearchResults(term: string) {

    }

    useEffect(() => {
        if (searchTerm.length > 3) {
            // searchInput.current.focus();
            getSearchResults(searchTerm);
        }
    }, [inputVisible, searchTerm])


    return (
        <>
            <button type="button"
                onClick={() => setInputVisible(true)}
                aria-label="Toggle Favorites"><SearchIcon /></button>

            {inputVisible ?
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Here' />
                : ''
            }

            {inputVisible && searchTerm.length > 3 ?
                <div className={styles.SearchOverlay} onClick={() => setInputVisible(false)}>
                    <input ref={searchInput} type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Here' />
                </div>
                :
                ''
            }
        </>
    )
}