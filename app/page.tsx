import Hero from '../components/magicui/Hero'
import Navbar from '../components/Navbar';

export default function HeroSection() {
    return (
        <section className='min-h-[1000px]'>
            <Navbar />
            <Hero />
        </section>
    );
}
