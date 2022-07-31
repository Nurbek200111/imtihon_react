import {BsList} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
import Carusel from '../companent/Carusel'
import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import Shopping from './Shopping'

export default function Search() {
    const [shopping, Setshopping] = useState([])
    const [data1, SetData1] = useState([])
     const navigate = useNavigate()


    useEffect(() => {
        getShopping()
    },[])

    function getShopping(){
        Axios.get("https://myjson.dit.upm.es/api/bins/hbue")
        .then(ress => {
            Setshopping(ress.data)
            SetData1(ress.data)
        })
        
        .catch(err => {
            Setshopping(err.data)  
        })
    }

    const [D_block, setD_block] = useState()
    function qidiruv(val){
        if(val){
            setD_block("d-none")
        }
        else{
            setD_block("d-block")
        }
        

         let massiv = data1.filter(item => {
        return item.name.toLowerCase().includes(val.toLowerCase())
       })

       Setshopping(massiv)
       
    }


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    
    function PushQil(index){
        console.log("Sadssd");
    }


    function kozinka(){
        navigate('/shopping')
    }

    function select1(opt1){
         let mas = data1.filter(item => {
             return item.category.toLowerCase().includes(opt1.toLowerCase())
            })
            
            Setshopping(mas)
    }



    // ============================================================================================

     const [danProducts, setDanProducts] = useState(0)
    const [gachaProducts, setGachaProducts] = useState(10025000000)
    
    function danGacha(val1, type){
        if(val1){
            setD_block("d-none")
        }
        else{
            setD_block("d-block")
        }
        if(type === "rost"){
           
            setDanProducts(val1)
            
        }
        else if(type === "yolgon"){
            
            setGachaProducts(val1)
            
            
        }
    }
    
    let massiv1 = []
    useEffect(()=>{
        if (shopping.length > 0) {
           massiv1 =  shopping.filter(item=>{
               return item.cost > danProducts && item.cost < gachaProducts
            })
                      
        }

        Setshopping(massiv1)
    },[danProducts,gachaProducts])   
         



  return (
    <>
        <div className="nav">
                    <div className="katagoriya">
                        <select onChange={(opt1) => select1(opt1.target.value)} name="select" id="">
                            <option  value="">all</option>
                           <option value="Krasovka">Krasovka</option>
                           <option value="futbolka">futbolka</option>
                           <option value="soat">soat</option>
                        </select>
                    </div>
                    <div className="startEnd">
                        <input className='startEnd mx-3' type="number" onInput={(val1) => danGacha(val1.target.value, "rost")} placeholder='start'/>
                        <input className='startEnd' type="number" onInput={(val1) => danGacha(val1.target.value, "yolgon")} placeholder='end'/>
                    
                    </div>
                </div>
        <div className='searchInput'>
            <BsList className='icons'/>
            <input onInput={(val) => qidiruv(val.target.value)} type="text" placeholder='Nimani qidiryapsiz' className='form-control' />
            <GiShoppingCart onClick={() => kozinka()} className='icons'/>
        </div>
         <div className={D_block}>
            <Carusel/>
         </div>

         <div className="shopCard">
                <div className='row'>
        {
            (shopping.length>0) ? shopping.map((item,index) => {
                return(
                    <div className="col-3">
                        <div key={index} className="cardshop11">
                            <img src={item.img_src} alt="magazin" />
                            <h3>{item.cost}</h3>
                            <h4>{item.name}</h4>
                            <Button onClick={(index) => PushQil(index)} className='m-2' variant='primary'>Sotib olish</Button>

                        </div>
                    </div>
                )

            }):
            (
                <h4>Loding....</h4>
            )

        }
    </div>

         </div>
    </>
  )
}
