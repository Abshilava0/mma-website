import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li>Help & FAQs</li>
            <li>Instructors</li>
            <li>Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul>
            <li>Location</li>
            <li>Tell Us What You Think</li>
            <li>AthletiQ Backstage</li>
            <li>Personal Stylist</li>
          </ul>
        </div>

        <div>
          <h4>AthletiQ Inc.</h4>
          <ul>
            <li>Corporate Sites</li>
            <li>About AthletiQ</li>
            <li>News Room</li>
            <li>Investors</li>
            <li>AthletiQ Gives</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <img src="/logos/facebook.png" />
            </li>
            <li>
              <img src="/logos/instagram.png" />
            </li>
            <li>
              <img src="/logos/x.png" />
            </li>
            <li>
              <img src="/logos/youtube.png" />
            </li>
          </ul>
          <ul>
            <li>A Purpose Brands™ company People, Purpose, Profits, Play®</li>
            <li>
              © Anytime Fitness Franchisor, LLC 2025. All rights reserved.
            </li>
             
          </ul>
        </div>
      </footer>
    </>
  );
}
