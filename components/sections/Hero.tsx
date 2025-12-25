import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Decorative background shape */}
            <div className={styles.bgShape}></div>

            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <div className={`${styles.badge} animate-fade-up`}>
                        <span>New</span> Available on Google Play
                    </div>
                    <h1 className={`${styles.title} animate-fade-up animate-delay-1`}>
                        Bill. Track. <br />
                        <span className={styles.highlight}>Grow Your Business.</span>
                    </h1>
                    <p className={`${styles.subtitle} animate-fade-up animate-delay-2`}>
                        The ultimate mobile POS & inventory management solution is here.
                        Handle billing, track stock, and manage GST reports - all from your pocket.
                    </p>
                    <div className={`${styles.ctaGroup} animate-fade-up animate-delay-3`}>
                        <Link href="#contact" className="btn btn-primary">Get on Google Play</Link>
                        <Link href="#features" className="btn btn-secondary">Explore Features</Link>
                    </div>

                </div>

                <div className={`${styles.imageWrapper} animate-fade-up animate-delay-2`}>
                    {/* Main POS Screen */}
                    <div className={styles.mainImage}>
                        <Image
                            src="/assets/screenshot-3.jpg"
                            alt="MAXmybill POS Interface"
                            width={350}
                            height={700}
                            className={styles.phoneFrame}
                            priority
                        />
                    </div>
                    {/* Floating Inventory Card */}
                    <div className={styles.floatingImage}>
                        <Image
                            src="/assets/screenshot-1.jpg"
                            alt="Inventory List"
                            width={220}
                            height={440}
                            className={styles.phoneFrame}
                        />
                    </div>
                    {/* Floating Settings Card */}
                    <div className={styles.floatingImageBinary}>
                        <Image
                            src="/assets/screenshot-2.jpg"
                            alt="Settings"
                            width={180}
                            height={360}
                            className={styles.phoneFrame}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
