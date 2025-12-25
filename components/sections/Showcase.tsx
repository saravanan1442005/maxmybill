import Image from 'next/image';
import styles from './Showcase.module.css';

export default function Showcase() {
    const images = [
        { src: '/assets/screenshot-1.jpg', alt: 'Inventory' },
        { src: '/assets/screenshot-2.jpg', alt: 'Settings' },
        { src: '/assets/screenshot-3.jpg', alt: 'Billing' },
        { src: '/assets/screenshot-4.jpg', alt: 'Product List' },
    ];

    return (
        <section className={styles.showcase}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Designed for Growth</h2>
                    <p>A user interface that simplifies complex business operations.</p>
                </div>
                <div className={styles.scroller}>
                    <div className={styles.scrollerInner}>
                        {images.map((img, index) => (
                            <div key={index} className={styles.card}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={220}
                                    height={440}
                                    className={styles.screen}
                                />
                            </div>
                        ))}
                        {/* Duplicate for infinite loop effect if needed later */}
                        {images.map((img, index) => (
                            <div key={`dup-${index}`} className={styles.card}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={220}
                                    height={440}
                                    className={styles.screen}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
