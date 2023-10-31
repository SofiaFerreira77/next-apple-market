import Link from "next/link"

export default function Refinements({categories}) {

    const showCategories = categories ? categories.map((category,index) => <li key={category}><Link href={'../list/'+category}>{category}</Link></li>) : '';

    return (
        <nav aria-label="Filter By">
            <ul className="flex gap justify-center">
                {showCategories}
            </ul>
        </nav>
    )
}