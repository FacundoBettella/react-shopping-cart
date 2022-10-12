import React from "react";
import { FIRESTONE } from "../../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "../../components";
import swal from "sweetalert";

const Cart = () => {
  // const { currentChartArticles } = useChart();

  const handleBuyArticle = () => {
    let articleData;
    let newArticleStock;

    currentChartArticles.forEach(async (article) => {
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

  return <Button onClick={handleBuyArticle}>Confirmar compra</Button>;
};

export { Cart };
