import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import bachelorImg from '../../assets/formatura.jpg'
import './AboutPage.css';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <img className="picture" src={bachelorImg} alt="Me" />
            <div className="profile-content">
                <div>
                    <h1>Luis Gustavo Girão Cardial</h1>
                    <h2>Software Engineer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros turpis, hendrerit volutpat ultrices vel, tincidunt eget quam. Pellentesque a auctor tortor. Vivamus varius leo elit, et aliquam risus fermentum in. Cras a dolor enim. Maecenas a eros justo. Suspendisse aliquet rhoncus lorem, quis auctor neque sodales eu. Quisque lorem lacus, pellentesque nec nunc congue, faucibus dignissim magna. Donec eleifend facilisis maximus</p>
                </div>
                <div className="social">
                    <a className="button linkedin" href="https://www.linkedin.com/in/gustavo-girao/" target="_blank" title="LinkedIn">
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    </a>
                    <a className="button github" href="https://www.github.com/Mufado" target="_blank" title="GitHub">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a className="button twitter" href="https://twitter.com/Muufado_" target="_blank" title="Twitter">
                        <FontAwesomeIcon className="icon" icon={faXTwitter} />
                    </a>
                    <a className="button instagram" href="https://www.instagram.com/__mufado/" target="_blank" title="Instagram">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>
                    <a className="button email" href="mailto:gustavogiraobg@gmail.com" target="_blank" title="E-mail">
                        <FontAwesomeIcon className="icon" icon={faAt} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
