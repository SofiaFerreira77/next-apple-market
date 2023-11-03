"use client"

export default function Search() {
    function openSearch() {
        console.log('SEARCH')
    }

    return (
        <>
            <button type="button"
                onClick={() => openSearch()}
                aria-label="Toggle Favorites"><Search />sss</button>
        </>
    )
}