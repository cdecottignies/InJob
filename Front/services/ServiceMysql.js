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
                    .then((response) => {
                        resolve(response.data)
                    })
            } catch (e) {
                reject(e)
            }
        })
    }
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
    // add one advertisement
    AddOneAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}advertisements/admin`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    // delete one advertissement
    DeleteOneAdvert(id, token) {


        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}advertisements/admin/${token}/${id}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateOneAdvert(id, res) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}advertisements/admin/${id}`, res)
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

    GetAllUser(token) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}users/admin/${token}`,)
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
                    .put(`${this.url}users`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    AddOneUser(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}users/admin`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateOneUser(id, key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}users/admin/${id}`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    DeleteOneUser(id, token) {

        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}users/admin/${token}/${id}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    GetAllApplicants(token) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}applicants/admin/${token}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    AddOneApplicants(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}applicants/admin`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateOneApplicants(id, key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}applicants/admin/${id}`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    DeleteOneApplicants(id, token) {

        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}applicants/admin/${token}/${id}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    GetAllCompanies() {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}companies`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    AddOneCompanies(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .post(`${this.url}companies/admin`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    UpdateOneCompanies(id, key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .put(`${this.url}companies/admin/${id}`, key)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
    DeleteOneCompanies(id, token) {

        return new Promise((resolve, reject) => {
            try {
                axios
                    .delete(`${this.url}companies/admin/${token}/${id}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }
}
