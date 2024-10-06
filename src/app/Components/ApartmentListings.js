import { Link } from "react-router-dom";
import ApartmentDetails from "./ApartmentDetails";

const ApartmentListings = ({ data, search,startDate,endDate }) => {
  const filteredApartments = data.filter(apartment => {
    const isTitleMatch = apartment.title ? apartment.title.toLowerCase().includes(search.toLowerCase()) : false;
    
    const isDateMatch = (!startDate || new Date(apartment.availableFrom) <= startDate) &&
                        (!endDate || new Date(apartment.availableTo) >= endDate);
    
    return isTitleMatch && isDateMatch;
  });

  return (
    <div className='mt-6'>
      {filteredApartments.length > 0 ? (
        filteredApartments.map((apartment) => (
          <div
            key={apartment.id}
            className="flex items-center p-4 border border-gray-300 rounded-md mb-4"
          >
            <img
              src={apartment.image}
              alt="oda resmi"
              className="w-1/3 h-auto rounded-md"
            />
            <div className="ml-4">
              <h1 className="text-xl font-semibold">{apartment.title}</h1>
              <p>{apartment.description}</p>
              <p className="text-gray-600">Fiyat: {apartment.price ? `${apartment.price} TL` :""}</p>
              <Link to={`/apartment/${apartment.id}`}>
              <button className="bg-cyan-600 text-white w-32 h-10 rounded-md mt-2">
                Detaylar
              </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Aramanıza uygun sonuç bulunamadı.</p>
      )}
    </div>
  );
};

export default ApartmentListings;
