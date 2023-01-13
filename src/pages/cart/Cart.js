import React, { Fragment, useEffect, useMemo } from 'react';
import { FIRESTONE } from '../../firebase/firebase.config';
import { Layout } from '../../components';
import { doc, updateDoc, setDoc, collection } from 'firebase/firestore';
import swal from 'sweetalert';
import { useCarrito } from '../../context/carritoContext';
import {
  CartItemsContainer,
  CartTotal,
  TotalText,
  TotalPrice,
  VacioText,
  ResponsiveCartItemsContainer,
  Button,
} from './styles';
import { CartItem } from './cartItem/CartItem';
import { ButtonWrapper } from '../../components/product/styles';
import ResponsiveCartItem from './responsive-cartItem/ResponsiveCartItem';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ sizeManagment }) => {
  const { user } = useAuth();
  const { tamañoCarrito, carrito, vaciarCarrito, readCart } = useCarrito();
  const navigate = useNavigate();

  const createNewOrder = async () => {
    const date = new Date().toLocaleString() + '';
    const userEmail = user.email;
    const newOrder = doc(collection(FIRESTONE, 'orders'));
    try {
      await setDoc(newOrder, { userEmail, date, carrito });
    } catch (e) {
      console.error(e);
    }
  };

  const confirmOrder = async () => {
    swal({
      title: '¿Desea confirmar su compra?',
      text: '',
      buttons: { cancel: 'Cancelar', ok: 'Ok' },
    })
      .then((value) => {
        if (value === 'ok') {
          handleBuyArticle();
        }
      })
      .then(() => {
        navigate('/');
      });
  };

  const handleBuyArticle = () => {
    let articleData;
    let newArticleStock;

    carrito.forEach(async (article) => {
      articleData = doc(FIRESTONE, 'products', article.id);
      newArticleStock = { stock: article.stock - article.quantity };
      try {
        await updateDoc(articleData, newArticleStock);
      } catch (err) {
        console.error(err);
        return swal(
          'Tuvimos dificultades para procesar tu compra.',
          'Intentalo después',
          'error'
        );
      }
    });
    createNewOrder();
    vaciarCarrito();
    swal('¡Tu compra ha sido un éxito!', '', 'success');
  };

  const handleCartPrice = () => {
    return parseFloat(
      carrito.reduce(
        (partialSum, a) =>
          parseFloat(partialSum) +
          parseFloat(a.price.replace('.', '')) * parseInt(a.quantity),
        parseFloat(0)
      )
    )
      .toFixed(2)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  // eslint-disable-next-line no-unused-vars
  const totalPriceMemo = useMemo(() => {
    handleCartPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carrito]);

  useEffect(() => {
    readCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Layout title="Donde compras lo que necesitas" />
      {sizeManagment ? (
        <ResponsiveCartItemsContainer>
          {carrito.map((article, i) => (
            <ResponsiveCartItem key={article.title + i} article={article} />
          ))}

          <CartTotal>
            {tamañoCarrito() === 0 ? (
              <VacioText>El carrito está vacío!</VacioText>
            ) : (
              <>
                <TotalText sizeManagment={sizeManagment}>Total</TotalText>
                <TotalPrice sizeManagment={sizeManagment}>
                  $ {handleCartPrice()}
                </TotalPrice>
              </>
            )}
          </CartTotal>
          {tamañoCarrito() > 0 && (
            <ButtonWrapper>
              <Button onClick={confirmOrder}>Confirmar compra</Button>
            </ButtonWrapper>
          )}
        </ResponsiveCartItemsContainer>
      ) : (
        <CartItemsContainer>
          {carrito.map((article, i) => (
            <CartItem key={article.title + i} article={article} />
          ))}

          <CartTotal>
            {tamañoCarrito() === 0 ? (
              <VacioText>El carrito está vacío!</VacioText>
            ) : (
              <>
                <TotalText>Total</TotalText>
                <TotalPrice>$ {handleCartPrice()}</TotalPrice>
              </>
            )}
          </CartTotal>
          {tamañoCarrito() > 0 && (
            <ButtonWrapper>
              <Button onClick={confirmOrder}>Confirmar compra</Button>
            </ButtonWrapper>
          )}
        </CartItemsContainer>
      )}
    </Fragment>
  );
};

export { Cart };
