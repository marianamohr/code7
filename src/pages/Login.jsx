import React from 'react';
import '../Style/Login.css';
import { connect } from 'react-redux';
import { actionFetchUsers, actionGetDebits } from '../actions/index';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            redirect: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target: { value, name } }) {
        this.setState({
            [name]: value,
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { saveUser, getDebits } = this.props;
        const { nome, email } = this.state;
        saveUser(nome, email);
        getDebits();
        this.setState({ redirect: true });
    }

    render() {
        const { nome, email, redirect } = this.state;
        if (redirect) return <Redirect to="/content" />;

        return (
            <div className="formContainer">
                <form className="form-login" onSubmit={this.handleSubmit}>
                    <h1 className="login-debits">Controle de Débitos</h1>
                    <h1 className="login">Login</h1>
                    <label className="nome" htmlFor="input-player-name">
                        <input
                            name="nome"
                            value={nome}
                            id="input-name"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Name"
                        />
                    </label>
                    <label htmlFor="input-email">
                        <input
                            name="email"
                            value={email}
                            id="input-email"
                            type="email"
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                    </label>

                    <button
                        className="btn-play"
                        type="submit"
                        data-testid="btn-play"
                        disabled={!nome.length || !email.length}
                    >
                        Entrar
                        </button>

                </form>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    saveUser: (nome, email) => dispatch(actionFetchUsers(nome, email)),
    getDebits: () => dispatch(actionGetDebits()),
});

export default connect(null, mapDispatchToProps)(Login);