//La idea de crear un servicio es que me devuelva lo que le pido y asi separar la lógica de mis componentes
import axios from "axios"


const apiURL =  "http://ec2-3-15-178-17.us-east-2.compute.amazonaws.com:3000/api/v1"

const TOKEN = "J0dxkScTurEuuz1mflJ4AO6Kq4Yn3Rb6gKMsh9IWskuc3OrUojKYQKRz8S2i"

// axios.defaults.headers.common = {'Authorization': `Bearer ${TOKEN} `}

// axios.interceptors.request.use(
//   config => {
//     config.headers.authorization = `Bearer ${TOKEN}`;
//     return
//   },
//   error => {
//     return Promise.reject(error)
//   }

// )


const authAxios = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
})

const obtenerEvento = async () => {
  try {
    // let peticion= await axios.get(URL)
    // return peticion.data
    let {data} = await axios.get(URL)
    return data.content //json
  } catch (error) {
    return error
  }
}

const obtenerEventoPorId = async (event_id) => {
  try {
    let {data} = await axios.get(`${URL}/${event_id}`)
    return data.content
  } catch (error) {
    return error
  }
}

const crearEvento = async (objEvento) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }//axios.post(URL, datos_a_enviar_json, {headers})
    let {data} = await authAxios.post(apiURL, objEvento, {headers})
    return data.content
  } catch (error) {
    return error
  }
}

// const editarProducto = async (objProducto, id) => {
//   try {
//     let headers = {
//       "Content-Type":"application/json"
//     }
//     let {data} = await axios.put(`${URL}/${id}`, objProducto, {headers})
//     console.log({data})
//     return data.content
//   } catch (error) {
//     return error
//   }
// }

// const subirArchivo = (imagen, refStorage) => {
//   return new Promise((resolve, reject) => {
//     const tarea = refStorage.put(imagen)

//     tarea.on(
//       'state_changed',
//       () => {},//aqui iría una función que observa la subida de mi archivo
//       (error) => {reject(error)}, //aqui manejamos si es que recibimos un error, por eso hace un reject
//       () => { //aqui ya podemos inspeccionar cuando el archivo ha terminado de subirse a firebase
//         tarea.snapshot.ref.getDownloadURL()
//         .then(urlImagen => resolve(urlImagen))
//       }
//     )
//   })
// }

//export mis funciones en forma de un objeto
export {
  obtenerEvento,
  obtenerEventoPorId,
  crearEvento,
}