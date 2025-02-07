import Link from "next/link";
export default function Home() {
    return (
        <div className="blueBackgroundColor">
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Bienvenue a L'Assemblee de Dieu de Petite Riviere</h1>
                        <h2 className="subtitle">
                            Join us in worship and fellowship every Sunday.
                        </h2>
                        <Link href="/contact/" className="button is-light is-large mt-4">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
