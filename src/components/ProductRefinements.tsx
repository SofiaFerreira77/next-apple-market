import Link from "next/link"

export default function Refinements({ categories }: { categories: typeCategories }) {

    const showCategories = categories?.map((category) => <li key={category}><Link href={'../list/' + category}>{category}</Link></li>);

    return (
        <>
            {categories ?
                <nav aria-label="Filter By">
                    <ul className="flex gap justify-center">
                        {showCategories}
                    </ul>
                </nav>
                :
                ''
            }
        </>
    )
}