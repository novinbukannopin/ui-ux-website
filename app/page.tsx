import {CTA, FAQ, Features, Footer, Hero, Navbar, Plans} from "@/components";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Features/>
            <FAQ/>
            <Plans/>
            <CTA/>
            <Footer/>
        </main>
    );
}
