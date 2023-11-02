import Banner from "@/components/Banner";

export default function ListLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="List">
            {children}
            
            <div className="container">
                <Banner darkText={true}
                    image="https://www.apple.com/v/ipad/home/ch/images/overview/accessories__gdpezee1naai_large_2x.jpg"
                    title="Apple at Work"
                    subtitle="Get the power to take your business to the next level."
                    link=""
                    linkName='' />
            </div>
        </main>
    )
}