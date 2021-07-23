import styled from "styled-components";

export const BodySection = styled.body`
  width: 100%;
  margin: auto;
`

export const Container = styled.div`
  width: 100%;
  margin: auto;
  

  section {
    height: 100vh;
    width: 100%;
    padding:0px;
    display: flex; 
    background-image: url('https://i.pinimg.com/736x/4d/70/f1/4d70f12d863b71202aa21542d680a098.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    margin: 0px;
  }

  .product-content{
    width: 300px;
    display: grid;
    text-align: center;
    height: 380px;
    background: #fff;
    border-radius: 12px;
    padding: 12px;
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
  }
  .containerFundo{
    width:  100%;
    margin-right: 0px;
    padding: 0;
  }
`