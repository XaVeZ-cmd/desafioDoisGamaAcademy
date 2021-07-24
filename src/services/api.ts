function api(request: { JSON: any; }, response: any){
  response.json(
    {
      "produtos": [
        {
          "id": 1,
          "photo": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg",
          "name": "IPhone",
          "description": "Descrição do produto",
          "price": 8000
        },
        {
          "id": 2,
          "photo": "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1620261745",
          "name": "Galaxy",
          "description": "Descrição do produto",
          "price": 3000
        },
        {
          "id": 3,
          "photo": "https://cdn.awsli.com.br/600x700/1417/1417526/produto/100422729ecd3963191.jpg",
          "name": "Pocophone",
          "description": "Descrição do produto",
          "price": 2500
        }
        
      ]
    }
  )
}

export default api;