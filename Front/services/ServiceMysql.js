import axios from 'axios'

export default class Api {
    constructor() {
        this.url = 'http://localhost:8090/api/'
    }
    // get all the advertisement of the database
    GetAllAdvert() {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}advertisements`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    // get one advertisement whith id
    GetAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}advertisements/${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    // add one advertisement
    AddAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}advertisements/${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    // delete one advertissement
    DeleteAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}advertisements/${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}advertisements/${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    // creation of the user
    Register(objet) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}auth/signup`, objet)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    //connexion of the user
    signin(objet) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}auth/signin`, objet)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    //TODO: plusieur connexion possible ?
    signout(objet) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}auth/signout`, objet)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }


    // GetAllIssue() {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             axios
    //                 .get(`${this.url}all`)
    //                 .then((response) => { resolve(response.data) })
    //         } catch (e) {
    //             reject(e)
    //         }
    //     }, 2000)
    // }

    DeleteAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}advertisement${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }

    UpdateAdvert() {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}update`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }

    ResetAdvert() {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}reset`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
}
