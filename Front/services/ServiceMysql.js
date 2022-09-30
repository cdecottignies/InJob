import axios from 'axios'

export default class Api {
    constructor() {
        this.url = 'http://localhost:8090/api/'
    }

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
    GetAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}advertisement/${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }

    AddAdvert(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}advertisement/add/${key}`)
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
