
 import './style.css';

function Cardcomponent({data}) {
    const {image, designation, name, description} = data;

    return (
        <div className="card">
            <div className='picture'>
            <img src={image} alt="pic" className='image'  />
            </div>
            
            <h3 className='designation'>{designation} </h3>
            <h2 className="name">{name}</h2>
            <p className='description'>{description}</p>
        </div>

    )
}
export default Cardcomponent;