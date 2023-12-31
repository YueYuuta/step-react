import React, { useEffect, useRef, useState } from 'react';
import './ItemStepDisney.scss';
import { DataStepModel } from '../../../models/data-step.model';

export type ItemStepDisneyProps = {
  dataStep: DataStepModel[];
};

const ItemStepDisney: React.FC<ItemStepDisneyProps> = ({ dataStep }) => {
  const limit = dataStep.length;
  const [este, setEste] = useState<{ id: number; state: boolean }>({
    id: 0,
    state: false,
  });

  const [imagen, setImagen] = useState<string>(dataStep[0].image);
  const [activo, setActivo] = useState(true);
  const [intervalValue, setIntervalValue] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activo) {
      const bandera = 1;
      closeAndOpen(bandera, true);
      const id = initInterval(bandera, true);
      return () => clearInterval(id);
    }
  }, [activo]);

  const initInterval = (idItem: number, firstTime: boolean) => {
    let bandera = idItem;
    const id = setInterval(() => {
      bandera++;
      console.log('bandera', bandera);
      if (bandera > limit) {
        bandera = 1;
      }
      setImagen(dataStep[bandera - 1].image);
      closeAndOpen(bandera, firstTime);
    }, 8000);

    return id;
  };
  const cleanIntervalCustom = () => {
    intervalValue.map((data) => {
      clearInterval(data);
    });
    setIntervalValue([]);
  };

  const detenerBucle = () => setActivo(false);

  useEffect(() => {}, [dataStep]);

  const addItemToRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !refs.current[index]) {
      refs.current[index] = el;
    }
  };

  function closeAndOpen(id: number, firstTime: boolean) {
    setImagen(dataStep[id - 1].image);

    let state = true;
    if (refs.current[id]?.style.maxHeight === '0px') {
      state = false;
    }
    setEste({ id, state: state });

    if (!firstTime) {
      let b = id;
      if (state) {
        if (b === limit) {
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
        if (bandera > limit) {
          bandera = 1;
        }
        console.log('bandera', bandera);
        closeAndOpen(bandera, true);
      }, 8000);

      setIntervalValue((prevValues) => [...prevValues, idSet]);
    }
  }
  return (
    <div className='benefits__multimedia'>
      <div id='bgImage' className='benefits__multimediia__img'>
        <img id='assetImage' src={imagen} alt='' />
      </div>
      <div className='benefits__multimediia__content'>
        <div
          className='benefits__multimediia__body'
          id='content-item-accordeon'
        >
          {dataStep.map((data, index) => (
            <div key={index} className='benefits__multimedia__flex-normal'>
              <div className='progress-container'>
                <div
                  style={{
                    height: data.id === este.id && !este.state ? `100%` : '0%',
                    transition:
                      data.id === este.id && !este.state
                        ? `height 8s ease`
                        : '',
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
        </div>
      </div>
    </div>
  );
};

export default ItemStepDisney;
