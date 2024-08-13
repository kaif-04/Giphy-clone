import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow Me On :</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/khitish-kumar-nayak-18a293260/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://x.com/KhitishKN18">
          <FaXTwitter size={20} />
        </a>
        <a href="https://github.com/khitishkumar18">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
