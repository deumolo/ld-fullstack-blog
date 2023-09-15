import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import AuthLinks from '../AuthLinks/AuthLinks';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" height={24} width={24}/>
                <Image src="/instagram.png" height={24} width={24}/>
                <Image src="/tiktok.png" height={24} width={24}/>
                <Image src="/youtube.png" height={24} width={24}/>
            </div>
            <div className={styles.logo}>lamablog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/">Homepage</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <Link href="/logout">Login</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar