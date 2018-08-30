import React, { Component } from 'react'
import Login from '../components/login';
import { Redirect } from 'react-router-dom'
export default class LoginContainer extends Component {
    state = {
        username: '',
        password: '',
        login: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state
        if ((username === 'andres' && password == 'sqlAndres') || (username === 'argofe' && password == 'argofe321')) {
            localStorage.setItem('login', true)
            return this.setState({
                login: true
            })
        }
        return alert('usuario y/o contraseña incorrecta')
    }

    RefButton = (e) => {
        console.log(e)
        this.button = e
    }
    InputUser = (e) => {
        console.log(e)
        this.user = e
    }

    ChangeUser = (element) => {
        this.setState({ username: this.user.value })
    }
    InputPass = (e) => {
        console.log(e)
        this.pass = e
    }

    ChangePass = (element) => {
        this.setState({ password: this.pass.value })
    }

    render() {
        console.log(this.state.username, this.state.password)
        return (
            <div>
                {
                    (localStorage.getItem('login')) &&
                    <Redirect to='/data' />
                }
                <Login
                    RefButton={this.RefButton}
                    handleSubmit={this.handleSubmit}
                    InputUser={this.InputUser}
                    ChangeUser={this.ChangeUser}
                    InputUserValue={this.state.username}
                    InputPass={this.InputPass}
                    ChangePass={this.ChangePass}
                    InputPassValue={this.state.password}
                />
            </div>
        )
    }
}
