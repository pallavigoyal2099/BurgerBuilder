import React, { Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger/>
                <div> Builder</div> 
            </Aux>
        );
    }

}
export default BurgerBuilder;