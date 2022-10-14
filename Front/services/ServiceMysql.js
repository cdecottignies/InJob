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
    AddOneAdvert(key) {
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
    DeleteOneAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}advertisements`,key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateOneAdvert(id,res) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}advertisements/${id}`,res)
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
                    .post(`${this.url}auth/signin`, objet, /*{ withCredentials: true }*/)
                    .then((response) => {resolve(response.data)
                    })
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

    userResponseAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}applicants`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    anonymousResponseAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}applicants/anonymously`, key)
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
    GetAllUser(token) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}users/${token}`,)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateUser(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}users`,key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
}
