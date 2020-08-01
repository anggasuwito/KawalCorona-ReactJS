import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Loading from '../../../components/Loading'
import { connect } from 'react-redux'

const HomeListData = (props) => {
    const { globalPositive, globalDeath, globalRecover, coronaIndonesia, isLoading } = props
    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    return (
        <div >
            <br />
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="https://image.flaticon.com/icons/svg/168/168029.svg" height="300" />
                    <Card.Body>
                        <Card.Title>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://image.flaticon.com/icons/svg/303/303534.svg" alt="" />
                                        </div>
                                        <br />
                                        <h4 className="d-flex justify-content-center">Total Positives:</h4>
                                        <h5 className="d-flex justify-content-center">{coronaIndonesia.positif}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://image.flaticon.com/icons/svg/824/824530.svg" alt="" />
                                        </div>
                                        <br />
                                        <h4 className="d-flex justify-content-center">Total Recovers:</h4>
                                        <h5 className="d-flex justify-content-center">{coronaIndonesia.sembuh}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://image.flaticon.com/icons/svg/939/939813.svg" alt="" />
                                        </div>
                                        <br />
                                        <h4 className="d-flex justify-content-center">Total Deaths:</h4>
                                        <h5 className="d-flex justify-content-center">{coronaIndonesia.meninggal}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://image.flaticon.com/icons/svg/3034/3034644.svg" alt="" height="150" />
                                        </div>
                                        <br />
                                        <h4 className="d-flex justify-content-center">Total Treats:</h4>
                                        <h5 className="d-flex justify-content-center">{coronaIndonesia.dirawat}</h5>
                                    </div>
                                </div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <br /><br />
                    <Card.Img variant="top" src="https://image.flaticon.com/icons/svg/814/814476.svg" alt="" height="250" />
                    <Card.Body>
                        <Card.Title>
                            <div className="col-md-12">
                                <div className="d-flex justify-content-center">
                                    <img src="https://image.flaticon.com/icons/svg/303/303534.svg" alt="" />
                                </div>
                                <br />
                                <h4 className="d-flex justify-content-center">Total Positives:</h4>
                                <h5 className="d-flex justify-content-center">{globalPositive}</h5>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://image.flaticon.com/icons/svg/939/939813.svg" alt="" />
                                        </div>
                                        <br />
                                        <h4 className="d-flex justify-content-center">Total Deaths:</h4>
                                        <h5 className="d-flex justify-content-center">{globalDeath}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://image.flaticon.com/icons/svg/824/824530.svg" alt="" height="150" />
                                        </div>
                                        <br />
                                        <h4 className="d-flex justify-content-center">Total Recovers:</h4>
                                        <h5 className="d-flex justify-content-center">{globalRecover}</h5>
                                    </div>
                                </div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br /><br /><br /><br /><br />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coronaIndonesia: state.coronaIndonesia,
        globalPositive: state.globalPositive,
        globalDeath: state.globalDeath,
        globalRecover: state.globalRecover
    }
}

export default connect(mapStateToProps)(HomeListData);