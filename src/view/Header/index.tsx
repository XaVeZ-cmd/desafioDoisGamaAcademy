import React from 'react';

import { ContainerHeader } from './style';

const Header: React.FC = () => {
  return (
  <ContainerHeader>
    <section>
      <div className="container">
        <div className="row">
          <div className="col s12 container-header">
            <h1 className="title-header">THIAGO ELETRÔNICOS</h1>
          </div>
        </div>
      </div>
    </section>
  </ContainerHeader>)
}

export default Header;