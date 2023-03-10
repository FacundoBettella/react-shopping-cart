import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SubmitButton,
  FormWrapper,
  FormInput,
  Layout,
} from '../../components/index';
import { useAuth } from '../../context/authContext';

/* ===================================== NPM PRODUCT-CARD IMPLEMENTATION  ===============================*/
// import { ProductCard } from 'product-card-fjb';

// const product = {
//   id: 1,
//   title: 'NPM Component test',
//   img: 'logo192.png',
// };
/* ===================================== NPM PRODUCT-CARD IMPLEMENTATION  ================================*/


/* ===================================== NPM NES-COMPONENTS IMPLEMENTATION  ===============================*/
import { MyButton } from "nes-ui-storybook-fjb";
/* ===================================== NPM NES-COMPONENTS IMPLEMENTATION  ===============================*/

const Register = () => {
  const { signUp, user, messageError, setMessageError } = useAuth();
  const navigate = useNavigate();

  const [inputsValue, setInputsValue] = useState({
    user: '',
    password: '',
  });

  const handleInputs = (e) => {
    setInputsValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setMessageError('');
      await signUp(inputsValue.user, inputsValue.password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Layout title="Registrarse" />
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <ProductCard
          product={product}
          initialValues={{
            count: 3,
            maxCount: 10,
          }}
          style={{
            padding: 10,
          }}
        >
          {({ isMaxCountReached, count, reset, increaseBy }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
              <button
                onClick={reset}
                style={{
                  color: 'white',
                  border: '1px solid white',
                  padding: 3,
                  marginLeft: '70%',
                }}
              >
                RESET {count}
              </button>
            </>
          )}
        </ProductCard>
      </div> */}

      

      <FormWrapper>
        <FormInput
          name="user"
          placeholder="email"
          type="email"
          value={inputsValue.user}
          onChange={handleInputs}
        />
        <FormInput
          name="password"
          placeholder="password"
          type="password"
          value={inputsValue.password}
          onChange={handleInputs}
        />
        <SubmitButton onClick={handleRegister} text="Registrate" />
        <MyButton label="MyButton Clasic" type="zelda" />
        <br />
        {messageError !== '' && (
          <p
            style={{
              color: 'var(--secondary)',
              fontWeight: '600',
              fontSize: '16px',
            }}
          >
            {messageError}
          </p>
        )}
      </FormWrapper>
    </div>
  );
};

export { Register };
