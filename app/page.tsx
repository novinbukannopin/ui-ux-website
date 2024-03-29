import {CTA, FAQ, Features, Footer, Hero, Navbar, Plans} from "@/components/shared";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Features/>
            <FAQ/>
            {/* todo */}
            <Plans/>
            <CTA/>
            <Footer/>
        </main>
    );
}
