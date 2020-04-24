import React from 'react'

import './styles.css'

import bg from '../../assets/evt.png'

export default function Form() {
    return (

        <section className="page-form-content">
            <div className="container">

                <form className="form">
                    <h2 className="page-form-title">Organize seus eventos</h2>
                    <p className="page-form-subtitle">Agende e organize novos eventos com a sua nova ferramenta de agendamentos</p>

                    <div className="form__group">
                        <label htmlFor="titulo">Título</label>
                        <input id="titulo" type="text" />
                    </div>

                    <div className="form__group">
                        <label htmlFor="local">Local</label>
                        <input id="local" type="text" />
                    </div>

                    <div className="form__group">
                        <label htmlFor="descricao">Acionar uma descrição</label>
                        <textarea id="descricao" cols="5" rows="5" type="text" />
                    </div>

                    <div className="form__group form__group--line">
                        <input id="duracao" type="checkbox" checked />
                        <label htmlFor="duracao">Dia Inteiro</label>
                    </div>

                    <div className="form__group form__group--line">

                        <div className="form__group  form__group--small">
                            <label htmlFor="duracao">De</label>
                            <input type="text" />
                        </div>

                        <div className="form__group  form__group--small form__group--spaceX">
                            <label htmlFor="duracao">Até</label>
                            <input type="text" />
                        </div>
                    </div>

                    <br></br>
                    <button className="btn btn--success" type="button">Enviar</button>
                </form>

                <div className="page-form-img">

                    <img src={bg} alt="" />
                </div>

            </div>

        </section>
    )
}
