import React from "react";
import styles from "./CompanyProfile.module.css";

const CompanyProfile: React.FC = () => {
  return (
    <>
      <div className={styles.aboutUsContainer}>
        <header className={styles.header}>
          <h1>About Us</h1>
        </header>
        <section className={styles.section}>
          <h2>Who We Are</h2>
          <p>
            We are a team of passionate individuals dedicated to providing the
            best services and solutions in the industry. Our commitment to
            quality and innovation drives everything we do.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize the way people interact with
            technology by offering top-tier products and services. We aim to
            create value through cutting-edge solutions that improve everyday
            life.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Our Vision</h2>
          <p>
            To be a global leader in our field, recognized for innovation,
            customer satisfaction, and excellence. We strive to make a positive
            impact on the world through our work and community involvement.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Meet the Team</h2>
          <p>
            Our team is composed of experts in various fields, from design and
            development to marketing and customer service. We believe in
            collaboration, creativity, and a shared vision of success.
          </p>
        </section>
        <footer className={styles.footer}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default CompanyProfile;
