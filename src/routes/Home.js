import React from 'react'
import Navigation from '../components/Navigation'
import '../routes/Home.css'
import {Spring} from 'react-spring/renderprops'

class Home extends React.Component{
    render(){
        return(
            //return home container that contains two spring block
            <div className="container">
                <Spring
                    from={{opacity: 0}}
                    to= {{opacity: 1}}
                    config={{delay:500,duration:3000}}
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
                    config={{delay:1500,duration:1300}}
                >
                    {
                        props=>(
                            <div style={props}>
                                <Navigation sidebar="Home"/>
                            </div>
                        )
                    }
                </Spring>
            </div>
        )
    }
}

export default Home