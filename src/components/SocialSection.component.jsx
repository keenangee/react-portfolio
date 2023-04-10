import SocialHover from "./socialHover.component";

const SocialSection = () => {
  return (
    <section className="social-section">
      <SocialHover social="T" link="https://twitter.com/KeenanGee" />
      <SocialHover social="L" link="https://www.linkedin.com/in/keenangee/" />
      <SocialHover social="I" link="https://www.instagram.com/keenangee/" />
    </section>
  );
};

export default SocialSection;
