export interface GeoLocation {
  attitude: string;
  longtitude: string;
}

export interface Apartment {
  id: string;
  header: string;
  country: string;
  city: string;
  street: string;
  price: number;
  photos: string[]; //???
  owner: string; //???
  location: GeoLocation;
  description: string;
}
