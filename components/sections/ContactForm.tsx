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
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2>Get Started with MAXmybill</h2>
                        <p>Ready to transform your business? Download the app or contact us for enterprise solutions.</p>
                        <div className={styles.contactDetails}>
                            <p><strong>Email:</strong> support@maxmybill.com</p>
                            <p><strong>Phone:</strong> +91 123 456 7890</p>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
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
            </div>
        </section>
    );
}
