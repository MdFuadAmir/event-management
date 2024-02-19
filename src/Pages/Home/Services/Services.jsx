import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
    return (
        <div className="mt-16">
            <h2 className="text-center text-4xl font-kode font-bold">Our Services</h2>
            <p className="mt-4 text-center mx-auto w-7/12">Event management is the process of creating and maintaining an event. This process spans from the very beginning of planning all the way to post-event strategizing.</p>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 mx-auto   mt-12">
            {
              services.map(service => <Service key={service.id} service={service}></Service>)
            }

            </div>

        </div>
    );
};

export default Services;