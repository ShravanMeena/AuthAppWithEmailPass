import React, { Component } from 'react'
import fire from './config/Fire'
import logo from './beer.jpg'
import myimage1 from './logo1.jpg'
import myimage2 from './logo2.jpg'
import myimage3 from './logo3.jpg'

export class Home extends Component {

//Logout Func    
    logout = (e) => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="container">
                <header>
                    <div >
                <h1 className="text-warning bg-danger text-center mt-4 mb-2">
                    <img src={logo} alt="logo" style={{width:"40px;", height:"60px"}} />Online-Bear-Bar <img src={logo} alt="logo" style={{width:"40px;", height:"60px"}} /></h1> 
                    </div>
                     <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={myimage3} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title text-danger text-center">Lets Enjoy </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card">
                        <img className="card-img-top" src={myimage1} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title text-center text-danger">Lets Enjoy </h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card">
                        <img className="card-img-top" src={myimage2} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title text-danger text-center">Lets Enjoy </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        </div>
                </header> 
                
                    <button onClick={this.logout} className="btn btn-danger btn-block">Logout</button>
                
            </div>
        )
    }
}

export default Home
