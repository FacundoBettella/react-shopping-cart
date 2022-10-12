import React, { useContext } from "react";
import { FIRESTONE } from "../../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "../../components";
import swal from "sweetalert";
import { carritoContext } from "../../context/carritoContext";

const Cart = () => {
  // const { currentChartArticles } = useChart();

  const {
    // vaciarCarrito,
    // eliminarProductoDelCarrito,
    // agregarAlCarrito,
    // tamañoCarrito,
    carrito,
  } = useContext(carritoContext);

  const handleBuyArticle = () => {
    let articleData;
    let newArticleStock;

    carrito.forEach(async (article) => {
      articleData = doc(FIRESTONE, "products", article.id);
      newArticleStock = { stock: article.stock - 1 };
      try {
        await updateDoc(articleData, newArticleStock);
      } catch (err) {
        console.error(err);
        return swal(
          "Tuvimos dificultades para procesar tu compra.",
          "Intentalo después",
          "error"
        );
      }
      swal("¡Tu compra ha sido un éxito!", "", "success");
    });
  };

  return (
    <>
      {carrito.map((article) => (
        <p>{article.title}</p>
      ))}
      <Button onClick={handleBuyArticle}>Confirmar compra</Button>
    </>
  );
};

export { Cart };
