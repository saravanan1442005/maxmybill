import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <Image
                        src="/assets/logo.png"
                        alt="MAXmybill Logo"
                        width={120}
                        height={40}
                        style={{ objectFit: 'contain' }}
                    />
                    <p>© {new Date().getFullYear()} MAXmybill. All rights reserved.</p>
                </div>
                <div className={styles.links}>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#contact">Contact Support</Link>
                </div>
            </div>
        </footer>
    );
}
