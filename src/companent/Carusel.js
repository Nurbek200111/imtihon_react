import React, { useState, useEffect } from 'react'
import  Axios  from 'axios'
import  Carousel  from 'react-bootstrap/Carousel'

export default function Carusel() {

    const [carusel1, setCarusel1] = useState([])
    const [carusel2, setCarusel2] = useState([])
    const [carusel3, setCarusel3] = useState([])


     useEffect(() => {
         getCarusel1()
        getCarusel2()
        getCarusel3()
    },[])

    function getCarusel1(){
        Axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
        .then(ress1 => {
            setCarusel1(ress1.data)
        })
        .catch(err1 => {
            setCarusel1(err1.data)
        })
    }

    function getCarusel2(){
        Axios.get("https://myjson.dit.upm.es/api/bins/dohr")
        .then(ress2 => {
            
            setCarusel2(ress2.data)
        })
        .catch(err2 => {
            setCarusel2(err2.data)
        })
    }
    function getCarusel3(){
        Axios.get("https://myjson.dit.upm.es/api/bins/i6j3")
        .then(ress3 => {
            
            setCarusel3(ress3.data)
        })
        .catch(err3 => {
            setCarusel3(err3.data)
        })
    }

  return (
    <div>
        <div className="reklama1">
            
            {
                (carusel1.length>0) ? carusel1.map(kate => {
                    return(
                        
                        <img className='p-4' src={kate.img_src} alt="salom" />
                    )

                }):
                (
                    <h4>Loding....</h4>
                )   

            }
        </div>

        <div className='reklama2'>
            {
                (carusel2.length>0) ? carusel2.map(item => {
                    return(
                        <Carousel>
                            <Carousel.Item>
                            <img className='rasm1' src={item.img_src} alt="caruse2l" />
                            </Carousel.Item>
                            <Carousel.Caption>
                                
                                </Carousel.Caption>
                        </Carousel>

                    )

                }):
                (
                    <h4>Loding....</h4>
                )

                   
                   
            }
        </div>

        <div className="reklama3">
            <div className="row">

                {
                    
                    (carusel3.length>0) ? carusel3.map(gajet => {
                        return(
                            // console.log(gajet.name);
                            
                            <div className="col-4">
                            <div className='card'>
                            <img className='card_img' src={gajet.img_src} alt={gajet.name} />
                            <p>{gajet.name}</p>
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

    </div>
  )
}
