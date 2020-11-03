import * as React from 'react';
import styles from './MyComponentTwo.module.scss';
import globalStyles from './../../../styles/MyGlobalComponent.module.scss';
import { IMyComponentTwoProps } from './IMyComponentTwoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class MyComponentTwo extends React.Component<IMyComponentTwoProps, {}> {
  public render(): React.ReactElement<IMyComponentTwoProps> {
    return (
      <>
        <div className={styles.myComponentTwo}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
                <p className={styles.description}>{escape(this.props.description)}</p>
                <a href="https://aka.ms/spfx" className={styles.button}>
                  <span className={styles.label}>Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={globalStyles.myGlobalContainer}>
          <div className={globalStyles.sectionImage}>
          </div>
          <div className={globalStyles.sectionText}>
            Componente 2 usando estilos globales.
            Imagen de la izquierda cargada como background-image en css y la siguiente como img 
            <img src={require('../../../assets/autorregulacion.png')} alt="test" width='15' height= '15'/>
          </div>
        </div>
      </>
    );
  }
}
