import React, { useEffect, useRef, useState } from 'react';
import './ItemStepDisney.scss';
import { DataStepModel } from '../../../models/data-step.model';

export type ItemStepDisneyProps = {
  dataStep: DataStepModel[];
};

const ItemStepDisney: React.FC<ItemStepDisneyProps> = ({ dataStep }) => {
  const [este, setEste] = useState<{ id: number; state: boolean }>({
    id: 0,
    state: false,
  });
  const [activo, setActivo] = useState(true);
  const [intervalValue, setIntervalValue] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activo) {
      const bandera = 1;
      closeAndOpen(bandera, true);
      const id = initInterval(bandera, true);
      return () => clearInterval(id); // Aquí limpiamos el intervalo cuando el componente se desmonta o cuando se detiene el bucle
    }
  }, [activo]); // Este efecto depende del estado 'activo', por lo que se ejecutará cada vez que 'activo' cambie

  const initInterval = (idItem: number, firstTime: boolean) => {
    let bandera = idItem;
    const id = setInterval(() => {
      bandera++;
      console.log('bandera', bandera);
      if (bandera === 5) {
        bandera = 1;
      }
      closeAndOpen(bandera, firstTime);
      // console.log('Este mensaje se muestra cada 5 segundos');
    }, 8000);

    //clearInterval(id);
    // setIntervalValue((prevValues) => [...prevValues, id]);

    return id;
  };
  const cleanIntervalCustom = () => {
    intervalValue.map((data) => {
      clearInterval(data);
    });
    setIntervalValue([]);
  };

  const detenerBucle = () => setActivo(false); // Función para detener el bucle

  useEffect(() => {}, [dataStep]);

  const addItemToRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !refs.current[index]) {
      refs.current[index] = el;
    }
  };

  function closeAndOpen(id: number, firstTime: boolean) {
    // cleanIntervalCustom();
    let state = true;
    if (refs.current[id]?.style.maxHeight === '0px') {
      state = false;
    }
    setEste({ id, state: state });

    if (!firstTime) {
      let b = id;
      if (state) {
        if (b === 4) {
          b = 0;
        }
        b = b + 1;
        closeAndOpen(b, true);
      }
      console.log('vsda', intervalValue);
      cleanIntervalCustom();
      let bandera = b;
      detenerBucle();
      const idSet = setInterval(() => {
        bandera++;
        if (bandera === 5) {
          bandera = 1;
        }
        console.log('bandera', bandera);
        closeAndOpen(bandera, true);
      }, 8000);

      setIntervalValue((prevValues) => [...prevValues, idSet]);
      // detenerBucle();
      // cleanIntervalCustom();
      // initInterval(id, firstTime);
      // //clearInterval(blucle(id));
      // // setActivo(true);
    }
  }
  return (
    <>
      {dataStep.map((data, index) => (
        <div key={index} className='benefits__multimedia__flex-normal'>
          <div className='progress-container'>
            <div
              style={{
                height: data.id === este.id && !este.state ? `100%` : '0%',
                transition:
                  data.id === este.id && !este.state ? `height 8s ease` : '',
              }}
              className='progress'
            ></div>
          </div>
          <div className='benefits__multimedia__flex'>
            <div className='benefits__multimedia__flex'>
              <span
                onClick={() => closeAndOpen(data.id, false)}
                className='benefits__multimedia__title'
              >
                {data.title}
              </span>

              <div
                ref={(el) => addItemToRef(el, data.id)}
                style={{
                  maxHeight:
                    data.id === este.id && !este.state
                      ? `${refs.current[data.id]?.scrollHeight}px`
                      : '0px',
                }}
                className='benefits__panel-acordeon '
              >
                <p className='benefits__multimedia__description'>
                  {data.descripton}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemStepDisney;