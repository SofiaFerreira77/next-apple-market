import { getCategoriesListCase } from "@/useCases/ProductUseCase";
import Link from "next/link"

export default function Refinements() {
    const showCategories = getCategoriesListCase().then(categories =>
        categories.map((category) => <li key={category.id}><Link href={'../list/' + category.slug}>{category.name}</Link></li>)
    )

    return (
        <>
            <nav aria-label="Filter By">
                <ul className="flex gap justify-center">
                    {showCategories}
                </ul>
            </nav>
        </>
    )
}