'use client';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await addDoc(collection(db, "leads"), {
                ...formData,
                createdAt: serverTimestamp()
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.wrapper}>
                    {/* Left Side - Form */}
                    <div className={styles.formSection}>
                        <div className={styles.header}>
                            <h2>Contact us</h2>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <div className={styles.inputWrapper}>
                                    <span className={styles.inputIcon}>👤</span>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputWrapper}>
                                    <span className={styles.inputIcon}>✉️</span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputWrapper}>
                                    <span className={styles.inputIcon}>📞</span>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputWrapper}>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className={styles.success}>Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className={styles.error}>Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className={styles.illustrationSection}>
                        <img
                            src="/assets/contact-illustration.png"
                            alt="Contact Illustration"
                            className={styles.illustration}
                        />
                        <div className={styles.decorativeCircle1}></div>
                        <div className={styles.decorativeCircle2}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
