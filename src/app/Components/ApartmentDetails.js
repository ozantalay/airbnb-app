import React from "react";
import { useParams } from "react-router-dom";
import ApartmentData from "../data/apartments.json"; 

const ApartmentDetails = () => {
  const { id } = useParams(); 
  const apartment = ApartmentData.find((apt) => apt.id === parseInt(id)); 

  if (!apartment) {
    return <p>Daire bulunamadı.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{apartment.title}</h1>
      <img src={apartment.image} alt={apartment.title} className="h-auto rounded-md mb-4" />
      <p>{apartment.description}</p>
      <p className="text-gray-600">Fiyat: {apartment.price ? `${apartment.price} TL` : ""}</p>
      <p className="text-gray-600">Giriş Tarihi: {apartment.availableFrom}</p>
      <p className="text-gray-600">Çıkış Tarihi: {apartment.availableTo}</p>
     
    </div>
  );
};

export default ApartmentDetails;
