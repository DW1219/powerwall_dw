import React, { useState } from 'react';
import './PowerFlowPage.css';
import DrawingPage from './DrawingPage/DrawingPage.js';
import { useDispatch, useSelector } from "react-redux";
import { receiveEnergy } from '../../../_actions/actions';
import { Button } from '@material-ui/core';

function AnimationTestPage() {

    ///* Energy Generation part*///////******************************** */
    const [GenEnergySolar, setGenEnergySolar] = useState(10.5)
    const [GenEnergyGrid, setGenEnergyGrid] = useState(4.2)
    const [GenEnergyHome, setGenEnergyHome] = useState(4.1)
    const [GenEnergyPowerwall, setGenEnergyPowerwall] = useState(3.4)

    /*
    function tick() {
        var tempSolar = 10.5

        var temp1 = parseFloat((Math.random() / 6).toFixed(1))
        setGenEnergySolar(tempSolar + temp1)
        console.log(GenEnergySolar)
    }

    setInterval(tick, 10000)
    */

    const EnergyHandler = () => {
        var tempSolar = parseFloat((GenEnergySolar + 0.1).toFixed(1))
        console.log(tempSolar)
        setGenEnergySolar(tempSolar)
    }

    const body = {
        solar: GenEnergySolar,
        grid: GenEnergyGrid,
        home: GenEnergyHome,
        powerwall: GenEnergyPowerwall,
    }

    const dispatch = useDispatch();
    dispatch(receiveEnergy(body))

    /*Axios.post("/api/product", body)
        .then(response => {
            if (response.data.success) {
                // 
                props.history.push('/')
            } else {
                
            }
        })*/
    ///* Energy Generation part*////******************************** */

    var EnergySolar = 0;
    var EnergyGrid = 0;
    var EnergyHome = 0;
    var EnergyPowerwall = 0;

    EnergySolar = useSelector(state => state.root_energy.energyGroup.solar)
    EnergyGrid = useSelector(state => state.root_energy.energyGroup.grid)
    EnergyHome = useSelector(state => state.root_energy.energyGroup.home)
    EnergyPowerwall = useSelector(state => state.root_energy.energyGroup.powerwall)
    //console.log(EnergySolar)



    return (
        <div>
            <DrawingPage KwSolar={EnergySolar} KwGrid={EnergyGrid} KwHome={EnergyHome} KwPowerwall={EnergyPowerwall} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button color="secondary" onClick={EnergyHandler}>Receive energy Test</Button>
            </div>

        </div>

    )

}



export default AnimationTestPage