import './Mapa.css'

export const Mapa = ({ longitude, latitude, zoom }) => {
  return (
    <>
    <div className="relative w-full h-[500px]">
        <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.149054106366!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}!5e0!3m2!1ses!2sar!4v1644156231795!5m2!1ses!2sar&z=${zoom}`}        
        allowFullScreen
        title="Mapa"
        ></iframe>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent w-[50px] h-[50px]" >X</button>
    </div>
    
    </>
  )
}
