import estilos from "../sass/formulario.module.scss";
import { BiUpload } from "react-icons/bi";

function Formulario() {
  return (
    <form className={estilos.cuerpo} >
      <div className={estilos.contForm} >
        <div className={estilos.seccionForm} >
          <h1 className={estilos.title} >STORM LEGENDS</h1>
          <p className={estilos.description} >Bienvenidos a un nuevo torneo en esta ocacion Storm Legends realizado por Dime Legends.</p>
        </div>
        <div className={estilos.seccionForm} >
          <label htmlFor="" className={estilos.subTitulo} >Nombre de Equipo</label>
          <input type="text" className={estilos.campoTexto} />
        </div>
        <div className={estilos.seccionForm} >
          <label htmlFor="" className={estilos.subTitulo} >Numero de celular del Capitan</label>
          <input type="text" className={estilos.campoTexto} />
        </div>
        <div className={estilos.seccionForm} >
          <label htmlFor="" className={estilos.subTitulo} >Nombre de Cada Jugador</label>
          <textarea
            placeholder='Aguilar Milton'
            name=""
            id=""
            rows="5"
            className={estilos.campoTexto} ></textarea>
        </div>
        <div className={estilos.seccionForm} >
          <label htmlFor="" className={estilos.subTitulo} >ID Y NICK de Cada Jugador</label>
          <textarea
            placeholder='Militon 551993861'
            name=""
            id=""
            rows="5"
            className={estilos.campoTexto} ></textarea>
        </div>
        <div className={estilos.seccionForm} >
          <label htmlFor="" className={estilos.subTitulo} >Logo</label>
          <input type="file" name="" id="logo" className={estilos.archivo} />
          <label htmlFor="logo" className={estilos.fileComprobante} >
            <span>
              <BiUpload />
              Seleccionar Archivo
            </span>
          </label>
        </div>
        <div className={estilos.seccionForm} >
          <label htmlFor="" className={estilos.subTitulo} >Comprobante de Pago</label>
          <input type="file" name="" id='comprobante' className={estilos.archivo} aria-label='algo' />
          <label htmlFor="comprobante" className={estilos.fileComprobante} >
            <span>
              <BiUpload />
              Seleccionar Archivo
            </span>
          </label>
        </div>
        <div className={estilos.seccionForm} >
          <button className={estilos.btn} >
            <span className={estilos.textEnviar} >Enviar</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Formulario