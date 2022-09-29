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
                    .get(`${this.url}add/${key}`)
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

    Delete(key) {
        return new Promise((resolve, reject) => {
            try {
                axios
                    .get(`${this.url}delete/${key}`)
                    .then((response) => { resolve(response.data) })
            } catch (e) {
                reject(e)
            }
        })
    }

    Update() {
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

    Reset() {
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
