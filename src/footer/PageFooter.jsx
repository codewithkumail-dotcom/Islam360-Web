import './pageFooter.css'


import instaIcon from "../assets/insta_group.png";
import youtubeIcon from "../assets/logos_youtube-icon.png";
import facebookIcon from "../assets/facebook.png";
import playStoreIcon from "../assets/playStore.png";
import googlePlayIcon from "../assets/hugeicons_app-store.png";
import companyLogo from "../assets/islam360.png";
import quranImage from "../assets/i360.png";


const Footer = () => {
  return (
    <footer role="contentinfo" id="site-footer">
      <div className="contentinfo" id="footer-content">
        <SocialMedia />
        <AppSection />
        <CompanySection />
        <QuranImage />
      </div>
    </footer>
  );
};

const SocialMedia = () => (
  <div className="inner-div" id="social-section">
    <div id="social-container">
      <div id="social-heading">:ہمیں فالو کریں</div>
      <div id="social-links">
        <div className="social-item">
          <p className="social-text">انسٹاگرام</p>
          <img className="social-icon" src={instaIcon} alt="Instagram" />
        </div>
        <div className="social-item">
          <p className="social-text">یوٹیوب</p>
          <img className="social-icon" src={youtubeIcon} alt="YouTube" />
        </div>
        <div className="social-item">
          <p className="social-text">فیس بک</p>
          <img className="social-icon" src={facebookIcon} alt="Facebook" />
        </div>
      </div>
    </div>
  </div>
);

const AppSection = () => (
  <div id="app-section">
    <div id="available-text">دستیاب ہے :</div>
    <div id="app-container">
      <div id="app-store-button" className="app-group">
        <p className="app-text">ایپس اسٹور</p>
        <img className="app-store-icon" src={playStoreIcon} alt="App Store" />
      </div>
      <div id="google-play-button" className="app-group">
        <p className="app-text">گوگل ایپ</p>
        <img className="google-play-icon" src={googlePlayIcon} alt="Google Play" />
      </div>
    </div>
  </div>
);

const CompanySection = () => (
  <div className="inner-div" id="company-section">
    <div id="company-header">
      <div id="company-info-text">کمپنی کے بارے میں:</div>
      <div>
        <img id="company-logo" src={companyLogo} alt="Islam360 Logo" />
      </div>
    </div>
    <div id="company-description">
      اسلام360 کی ٹیم اپنی کمیونٹی کے لیے معیاری مواد فراہم کرنے<br />
      کی کوشش کرتی ہے تاکہ لوگ دینی روشنی حاصل کر سکیں۔
    </div>
  </div>
);

const QuranImage = () => (
  <div className="inner-div" id="Quran-img">
    <img src={quranImage} alt="Quran Image" />
  </div>
);

export default Footer;

