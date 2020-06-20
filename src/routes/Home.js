import React from 'react'
import Navigation from '../components/Navigation'
import '../routes/Home.css'
import {Spring} from 'react-spring/renderprops'

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <Spring
                    from={{opacity: 0}}
                    to= {{opacity: 1}}
                    config={{duration:2000}}
                >
                    {
                        props => (
                            <div style={props}>
                                <div className="welcome-note">Welcome</div>
                            </div>
                        )
                    }
                </Spring>
                
                <Spring
                    from={{marginTop:-80, opacity:0}}
                    to={{marginTop:0, opacity:1}}
                    config={{delay:1000,duration:1000}}
                >
                    {
                        props=>(
                            <div style={props}>
                                <Navigation props="Home"/>
                            </div>
                        )
                    }
                </Spring>
            </div>
        )
    }
}

export default Home