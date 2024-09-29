


const esperarSegundos = async (timeSeg) =>{
    
    try {
        
        
        await new Promise((resolve) =>{
            setTimeout(() => {
               console.log(`Han pasado ${timeSeg} segundos`)
               resolve() 
            }, timeSeg*1000);
        })

    } catch (error) {
        console.log("error al ejecutar la función", error.message)
    }

}

export default esperarSegundos; 


