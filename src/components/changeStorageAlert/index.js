import React from 'react';
import { withStorageListener } from './withStorageListener';

const ChangeStorageAlert = ({ show, toggleShow }) => {
  if (show)
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          style={{
            margin: '7px',
            padding: '5px',
            cursor: 'pointer',
            borderRadius: '4px',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
          }}
          onClick={() => toggleShow(false)}
        >
          ¿Hubo cambios? Volver a cargar la información
        </button>
      </div>
    );
  else return null;
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeStorageAlert);

export default ChangeAlertWithStorageListener;
