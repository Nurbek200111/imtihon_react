import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Shopping() {
  const [shop5, setShop5] = useState([])

  useEffect(() => {
    Shopn1()
  },[])

  function Shopn1(){

    Axios.get('https://myjson.dit.upm.es/api/bins/hbue')
    .then(ress => {
      console.log(ress);
      setShop5(ress.data)
    })
    
    .catch(err => {
      console.log(err);
    })
  }

  // const [son1, setSon1] = useState(0)

  // let a = document.querySelector(".mah_son")
  // console.log(a);
  function minus(){
    // a.innerText += 1
    // console.log();
  }
  function plus(){
    console.log("a");
  }

  const navigate = useNavigate()
  function orqaga(){
    navigate("/")

  }




  return (
    <div>

        <button onClick={() => orqaga()} className='btn btn-danger d-flex align-items-center m-auto my-5'>Back</button>
   <div className="row">
    <div className="col-12">
      <div className="cardshop1">
        <h3>summa: </h3>
        <h3>0</h3>
        </div>
    </div>
          
          {
            (shop5.length>0) ? shop5.map((elemn, index) => {
              return(
                <div className='col-12'>
                  <div className="cardshop" key={index}>
                    <img src={elemn.img_src} alt="rasm" />
                    <div>
                    <h4>{elemn.name}</h4>
                    <h3>{elemn.cost}</h3>
                    <div className='soni'>
                      <button key={index} onClick={() => minus()} className='minus btn btn-primary'>-</button>
                      <h3 className='mah_soni' key={index}>0</h3>
                      <button key={index} onClick={() => plus()} className='plus btn btn-success'>+</button>
                    </div>

                    </div>
                  </div>

                </div>
              )
            }):

            (
              <h4>salom.....</h4>
            )

            
          }
      </div>
    </div>
  )
}
