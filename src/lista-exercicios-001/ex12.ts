interface Car {
  make: string;
  model: string;
}

type Bus = {
  make: string;
  model: string;
  payloadCapacity: number;
}

type Vehicle = Car | Bus;