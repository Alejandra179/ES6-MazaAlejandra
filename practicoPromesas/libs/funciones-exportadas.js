const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));



    const obtenerPcias=async ()=>{ 
        try {
            await retrasar(1800);
            const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias?orden=nombre&max=100');
            const pcias= await consulta.json()
            return pcias
            
        } catch (error) {
            throw Error ('Error en la carga de Provincias')
        }
    }
    const  obtenerDptos=async ()=>{
        
        try {
            await retrasar(1391);
            const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre');
            const deptos= await consulta.json()
            return deptos       
        } catch (error) {
            throw Error ('Error en la carga de Departamentos') 
        }
    
    }
    const obtenerLocalidades=async()=> {
        
        try {
            await retrasar(900);
            const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades?orden=nombre');
            const localidades= await consulta.json()
            return localidades      
        } catch (error) {
            throw Error ('Error en la carga de Localidades')     
        }

    
    }
    
export{
    obtenerPcias,
    obtenerDptos,
    obtenerLocalidades

}