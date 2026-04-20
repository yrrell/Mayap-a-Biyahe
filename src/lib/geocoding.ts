export const getReverseGeocode = async (lat: number, lng: number) => {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    const data = await res.json();
    return {
      brgy: data.address.suburb || data.address.neighbourhood || "Unknown Brgy",
      city: data.address.city || data.address.town || "Lubao"
    };
  } catch (error) {
    return { brgy: "San Nicolas 1st", city: "Lubao" };
  }
};