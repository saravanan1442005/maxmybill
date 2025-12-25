import Image from 'next/image';
import styles from './Features.module.css';

export default function Features() {
    return (
        <section id="features" className={`section ${styles.features}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Why Choose MAXmybill?</h2>
                    <p>Everything you need to run your business efficiently, all in one place. Designed for retail, restaurants, and service businesses.</p>
                </div>

                <div className={styles.grid}>
                    {/* Feature 1 */}
                    <div className={styles.featureCard}>
                        <div className={styles.textWrapper}>
                            <div className={styles.iconBox}>📦</div>
                            <h3>Smart Inventory & Stock</h3>
                            <p>Never run out of stock again. Track products, categories, and stock levels in real-time.
                                Get alerts for low stock items and manage multiple categories effortlessly.</p>
                            <ul className={styles.featureList}>
                                <li>Real-time stock tracking</li>
                                <li>Low availability alerts</li>
                                <li>Unlimited categories</li>
                            </ul>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/assets/screenshot-4.jpg"
                                alt="Inventory Management"
                                width={280}
                                height={560}
                                className={styles.featureImage}
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className={styles.featureCardReverse}>
                        <div className={styles.textWrapper}>
                            <div className={styles.iconBox}>⚡</div>
                            <h3>Lightning Fast Billing</h3>
                            <p>Generate professional invoices in under 10 seconds. Search products by name or barcode, apply discounts, and print via thermal printers instantly.</p>
                            <ul className={styles.featureList}>
                                <li>Barcode Scanner Integration</li>
                                <li>Thermal Printer Support</li>
                                <li>GST & VAT Compliant</li>
                            </ul>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/assets/screenshot-3.jpg"
                                alt="Quick Billing"
                                width={280}
                                height={560}
                                className={styles.featureImage}
                            />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className={styles.featureCard}>
                        <div className={styles.textWrapper}>
                            <div className={styles.iconBox}>⚙️</div>
                            <h3>Powerful Control</h3>
                            <p>Complete control over your business settings. Customize tax rates like GST/VAT, configure printers via Bluetooth, and manage business profiles.</p>
                            <ul className={styles.featureList}>
                                <li>Customizable Tax Settings</li>
                                <li>Business Profile Management</li>
                                <li>Multi-language Support</li>
                            </ul>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/assets/screenshot-2.jpg"
                                alt="Settings Screen"
                                width={280}
                                height={560}
                                className={styles.featureImage}
                            />
                            <div className={styles.statCard}>
                                <span>Tax Ready</span>
                                <strong>GST / VAT</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
