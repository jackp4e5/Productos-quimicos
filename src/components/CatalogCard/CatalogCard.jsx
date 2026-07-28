import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";

const CatalogCard = ({ item }) => {
  const images = [img1, img2, img3];
  console.log(item);

  return (
    <div>
      <div>
        <img src={images[item.image - 1]} alt={`image ${item.title}`} />
        <p>{item.title}</p>
      </div>
      <div> <span>Descripcion:</span> {`${item.description}`}</div>
    </div>
  );
};

export default CatalogCard;
