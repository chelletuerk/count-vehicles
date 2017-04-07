Vehicle Counter
=========

A small library that counts different varieties of vehicles.

## Installation

  `npm install @chelletuerk/count-vehicles`

## Usage

    const countVehicles = require('@chelletuerk/count-vehicles');

    const vehicles = ['car', 'car', 'truck', 'bike', 'boat', 'truck', 'car']
    const countVehicles = counter(vehicles);


  Output should be `{car: 3, truck: 2, bike: 1, boat: 1}`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
