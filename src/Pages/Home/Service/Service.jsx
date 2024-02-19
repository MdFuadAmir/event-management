


const Service = ({service}) => {
    const {name,image,price,description} = service;
    
    return (
        <div className="card-compact rounded-lg shadow-md">
  <figure><img className="rounded-t-lg" src={image} alt="event image" /></figure>
  <div className="card-body">
    <h2 className="font-kode font-bold text-2xl ">{name}</h2>
    <p className="mb-5">{description}</p>
    <div className="flex justify-between items-center">
        <p className="text-2xl font-kode font-bold text-green-500">${price}</p>
      <button className="btn bg-blue-400 text-white rounded-md">Show Details</button>
    </div>
  </div>
</div>
    );
};

export default Service;