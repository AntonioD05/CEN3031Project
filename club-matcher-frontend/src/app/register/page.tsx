'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Register() {
  const [isClub, setIsClub] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    interests: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempt:', { isClub, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.backgroundShapes}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      
      <main className={styles.main}>
        <Link href="/" className={styles.backButton}>
          ← Back
        </Link>
        <div className={styles.registerContainer}>
          <h1>Create Account</h1>
          
          <div className={styles.toggleContainer}>
            <span className={!isClub ? styles.activeType : styles.accountType}>Student</span>
            <button 
              onClick={() => setIsClub(!isClub)} 
              className={`${styles.switch} ${isClub ? styles.switchActive : ''}`}
            >
              <span className={styles.slider} />
            </button>
            <span className={isClub ? styles.activeType : styles.accountType}>Club</span>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
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
              <label htmlFor="name">{isClub ? 'Club Name' : 'Full Name'}</label>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="interests">
                {isClub ? 'Club Keywords (separate with commas)' : 'Interests (separate with commas)'}
              </label>
              <textarea
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                required
                rows={3}
                placeholder={isClub ? 'e.g., Technology, Programming, Gaming' : 'e.g., Coding, Sports, Music'}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
} 