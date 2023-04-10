const SocialHover = ({ social, link }) => {
  return (
    <section className="social-hover">
      <div className="circle-container">
        <div className="circle">
          <h2 className="social-letter"> {social}</h2>
        </div>
        <p className="text-appear">{link}</p>
      </div>
    </section>
  );
};

export default SocialHover;
