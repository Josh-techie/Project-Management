import React, { useEffect, useState } from 'react'

function Product() {

    const [name, setName] = useState("Joe")
    const [age, setAge] = useState(21)
    
    useEffect( () => {
        alert("Hello, "+ name);
    },[name] )



  return (
    <div>
      <h2> Product List: </h2>

      {/* Name */}
      <p> Name: {name} &nbsp; &nbsp;
      <button onClick={ () => setName("Youssef")}> Change Name </button>
      </p>

      {/* Age */}
      <p> Age: {age} &nbsp; &nbsp;
      <button onClick={ () => setAge(45)}> Change Age </button>
      </p>
    </div>
  )
}

export default Product
