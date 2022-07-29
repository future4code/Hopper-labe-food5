import React from "react"
import { useParams } from "react-router-dom"
import Carregando from "../carregando/Carregando"
import useData from "../hooks/useData"

const DetalhesPagina = () => {
    const { id } = useParams()
    const { data, isLoading } = useData(`/restaurants/${id}`)
    
    const produtos = data.restaurant && data.restaurant.products.map(food => {
      return food
    }).reduce((acc, food) => {
      if(!acc[food.category]){
        acc[food.category] = []
      }
      acc[food.category].push(food)
      return acc
    }, [])
    console.log(produtos && Object.entries(produtos))
    return (
      <div>
        <p> Restaurantes </p>
        {isLoading
          ? (<Carregando/>)
          : data.restaurant &&  
            (
              <>
                <div key={id}>
                  <img src="../../logo.png"/>
                  <div>
                    <h3>{data.restaurant.name}</h3>
                    <p>{data.restaurant.category}</p>
                    <div>
                      <p>{data.restaurant.deliveryTime - 10} - {data.restaurant.deliveryTime} min</p>
                      <p>Frete R${data.restaurant.shipping},00</p>
                    </div>
                    <p>{data.restaurant.address}</p>
                  </div>
                </div>
                {produtos && Object.entries(produtos).map((type, i)=> (
                  <div key={i}>
                    <h3>{type[0]}</h3>
                    {type[1].map(products => (
                      <div key={products.id}>
                        <div>
                          <img src={products.photoUrl} alt={`Imagem ilustrativa do ${products.name}`}/>
                        </div>
                        <div>
                          <p>{products.name}</p>
                          <p>{products.description}</p>
                          <p>R$ {products.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )
        }
      </div>
    )
  }
    
  export default DetalhesPagina