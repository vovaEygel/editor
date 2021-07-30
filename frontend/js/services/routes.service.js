import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

const KEY = 'routesDB'

// var routes = _createRoutes();
var routes = [];
// var routesFromDB = [{ path: '/', component: homePage }, { path: '/about', component: about }]

function _createRoutes() {
    var routes = storageService.load(KEY)
    if (!routes || !routes.length) {
        routes = routesFromDB;
        storageService.store(KEY, routes)
    }
    return routes;
}

function _createRoute(vendor) {
    return {
        id: utilService.makeId(),
        vendor,
        speed: utilService.getRandomInt(100, 300)
    }
}

function getRoutes() {
    return routesFromDB;
    // return Promise.resolve(routesFromDB);
}

function getById(routeId) {
    const route = routes.find(route => route.id === routeId)
    return Promise.resolve(route)
}


function saveRoute(route) {
    if (route.id) return _updateRoute(route)
    else return _addRoute(route);
}

function _addRoute(route) {
    route.id = utilService.makeId()
    routes.push(route);
    storageService.store(KEY, routes)
    return Promise.resolve(route)
}

function _updateRoute(route) {
    const idx = routes.findIndex(currRoute => currRoute.id === route.id);
    routes.splice(idx, 1, route)
    storageService.store(KEY, routes)
    return Promise.resolve(route)
}


function removeRoute(routeId) {
    const idx = routes.findIndex(route => route.id === routeId)
    if (idx === -1) return Promise.reject('DID NOT REMOVE CAR')
    routes.splice(idx, 1);
    storageService.store(KEY, routes)
    return Promise.resolve('CAR REMOVED')
}


function getEmptyRoute() {
    var emptyRoute = {
        vendor: '',
        color: '#ff0000',
        speed: 20,
        createdAt: '',
        isAuto: true,
        ownershipType: '',
        seatsCount: 5,
        desc: '',
        features: []
    }
    return emptyRoute;
}

function getNextPrevRouteIds(routeId) {
    const idx = routes.findIndex(route => route.id === routeId)

    var nextIdx = idx + 1;
    if (nextIdx === routes.length) nextIdx = 0;
    var prevIdx = idx - 1;
    if (prevIdx < 0) prevIdx = routes.length - 1;

    return {
        prevId: routes[prevIdx].id,
        nextId: routes[nextIdx].id,
    }
}

// CRUDL - Create, Read, Update, Delete, List
export const routeService = {
    getRoutes,
    getById,
    saveRoute,
    removeRoute,
    getEmptyRoute,
    getNextPrevRouteIds
}