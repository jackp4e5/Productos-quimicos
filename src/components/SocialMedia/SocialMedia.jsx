import style from "./SocialMedia.module.css";
import whatsapp from "../../../public/whatsapp.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";

const SocialMedia = ({ title }) => {
  const telefono = "573144115161";

  const mensajeOriginal = `¡Hola! Me interesa este producto ${title}`;

  const mensajeCodificado = encodeURIComponent(mensajeOriginal);

  const urlWhatsapp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

  const socialMediaInfo = [
    { name: "whatsapp", url: urlWhatsapp, image: whatsapp },
    { name: "facebook", url: urlWhatsapp, image: facebook },
    { name: "instagram", url: urlWhatsapp, image: instagram },
  ];
  return (
    <div className={style.wrapperSocialMedia}>
      {socialMediaInfo.map((social, i) => (
        <a
          className={style.socialMedia}
          target="_blank"
          name={social.name}
          href={social.url}
          key={i + social.name}
        >
          <img src={social.image} alt={`${social.name}  icon`} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
