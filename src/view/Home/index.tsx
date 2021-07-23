import React, { useState, useEffect } from 'react';
import { Container, BodySection } from './style';
import api from '../../services/api';

interface IProduct {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, []);

const handleCart = (index: number) => {
  const productStore = JSON.stringify(data[index]);
  localStorage.setItem(`@Produto-${index}`, productStore);
}

//FALTA JOGAR OS ITENS NO CAROUSEL, OU LISTA-LOS LADO A LADO
  return (
    <BodySection>
      <body>
        <div className="row containerFundo"> 
            <Container>
              <section>
              { data.map( (prod, index) => (
                
                      <div className="product-content" key={prod.id}>
                      <img src={prod.photo} alt="iphone" width="200" height="auto" />
                      <h4>{prod.name}</h4>
                      <span>{prod.description}</span>
                      <h6>R$ {prod.price},00</h6>
                      <button onClick={ () => handleCart(index) }>Adicionar ao Carrinho</button>
                    </div>
                    
                
                  
                )) }
              </section>
            </Container>
        </div>
      </body>
    </BodySection>
  )
}

export default Home;