import React, { useState } from 'react'
import '../Styles/Cards.css'
import Carditem from './Carditem'
import { useHistory } from "react-router-dom";

function Cards() {
  const history = useHistory();
  const [data, setData] = useState(null)

  // Fetch Function   
  fetch("./category.json").then(
    function (res) {
      return res.json()
    }).then(function (data) {
      // store Data in State Data Variable
      setData(data)
    }).catch(
      function (err) {
        console.log(err, ' error')
      }
    )



  return (
    <div className="cards">
      <h1>Pick up your Doctor's Category</h1>
      <div className="cards_size">

        {
          data ? data.map(
            function (data) {
              return (

                <Carditem
                  src={data.category_image}
                  text={data.category_description}
                  label={data.category_specialization}
                  path={data.category_image_path}

                />

              )
            }
          ) : ""
        }

      </div>
    </div>
  )
}

export default Cards
