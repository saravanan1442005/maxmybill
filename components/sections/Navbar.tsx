'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="MAXmybill Logo"
                            width={180}
                            height={60}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                </div>

                <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Get Started</Link>
                </div>
            </div>
        </nav>
    );
}
