import React from "react";
import { FIRESTONE } from "../../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "../../components";
import swal from "sweetalert";

const Cart = () => {
  // const { currentChartArticles } = useChart();
  const currentChartArticles = [
    {
      id: "0ZfHho1scwLO9Hs7qg0x",
      image: "",
      largDescription:
        "Capacidad de refrigeración de 3300W. Capacidad de calefacción de 3250 W. Frigorías: 2838. Potencia de refrigeración de 1027W y de calefacción de 900W. Eficiencia energética: A++. Con función deshumidificación. Posee tecnología inverter. Tiene temporizador.",
      price: 129.999,
      shortDescription: "Sansei split inverter frío/calor 2838 frigorías",
      stock: 15,
      title: "Aire acondicionado",
    },
  ];

  const handleBuyArticle = () => {
    let articleData;
    let newArticleStock;

    currentChartArticles.forEach(async (article) => {
      articleData = doc(FIRESTONE, "products", "0ZfHho1scwLO9Hs7qg0xasd");
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
