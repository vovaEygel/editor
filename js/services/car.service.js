import {utilService} from './util.service.js'
import {storageService} from './storage.service.js'
const KEY = 'carsDB'

var cars = _createCars();   

function _createCars() {
    var cars = storageService.load(KEY)
    if (!cars || !cars.length) {
        cars = [_createCar('Audu'), _createCar('Suzupi')]
        storageService.store(KEY, cars)
    }
    return cars;
}

function _createCar(vendor) {
    return {
        id: utilService.makeId(),
        vendor,
        speed: utilService.getRandomInt(100, 300)
    } 
}

function getCars() {
    return Promise.resolve(cars);
}

function getById(carId){
    const car = cars.find(car => car.id === carId)
    return Promise.resolve(car)
}


function saveCar(car) {
    if (car.id) return _updateCar(car)
    else return _addCar(car);
}

function _addCar(car) {
    car.id = utilService.makeId()
    cars.push(car);
    storageService.store(KEY, cars)
    return Promise.resolve(car)
} 
function _updateCar(car) {
    const idx = cars.findIndex(currCar => currCar.id === car.id);
    cars.splice(idx, 1, car)
    storageService.store(KEY, cars)
    return Promise.resolve(car)
} 


function removeCar(carId) {
    const idx = cars.findIndex(car => car.id === carId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE CAR')
    cars.splice(idx, 1);
    storageService.store(KEY, cars)
    return Promise.resolve('CAR REMOVED')
}


function getEmptyCar() {
    var emptyCar =  {
        vendor: '',
        color: '#ff0000',
        speed: 20,
        createdAt : '',
        isAuto : true,
        ownershipType : '',
        seatsCount : 5,
        desc: '',
        features: []
    }
    return emptyCar;
}

function getNextPrevCarIds(carId) {
    const idx = cars.findIndex(car => car.id === carId)
    
    var nextIdx = idx + 1;
    if (nextIdx === cars.length) nextIdx = 0; 
    var prevIdx = idx - 1;
    if (prevIdx < 0) prevIdx = cars.length-1; 

    return {
        prevId: cars[prevIdx].id,
        nextId: cars[nextIdx].id,
    }
}

// CRUDL - Create, Read, Update, Delete, List
export const carService = {
    getCars,
    getById,
    saveCar,
    removeCar,
    getEmptyCar,
    getNextPrevCarIds
}
