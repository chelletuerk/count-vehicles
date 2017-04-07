const vehicles = ['car', 'car', 'truck', 'bike', 'boat', 'truck', 'car']

const counter = (vehicles) => {
  return vehicles.reduce((countVehs, veh) => {
    countVehs[veh] = ++countVehs[veh] || 1
    return countVehs
  }, {})
}
