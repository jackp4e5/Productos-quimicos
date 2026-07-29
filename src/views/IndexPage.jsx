import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ModalCard from "../components/ModalCard/ModalCard";
import Hero from "../components/Hero/Hero";
import { InfiniteScroll } from "../components/InfiniteScroll/InfiniteScroll";
import ProductCard from "../components/ProductsCard/ProductCard";
import { mockProducts } from "../data/mockProducts";
import ContactForm from "../components/ContactForm/ContactForm";
import { useLocation } from "react-router-dom";

const IndexPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <div className="app">
        <Hero />
        <div className="container ">
          <InfiniteScroll />
        </div>

        <section
          className="container"
          id="productos"
          style={{ padding: "4rem 1.5rem" }}
        >
          <h2 className="section-title">
            Portafolio de Productos y Materiales
          </h2>
          <p className="section-subtitle">
            Explora nuestras soluciones químicas diseñadas para responder a
            desafíos industriales complejos.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </section>

        <ContactForm />
      </div>
    </>
  );
};

export default IndexPage;
