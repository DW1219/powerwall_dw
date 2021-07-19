import React, { useState, useEffect } from 'react';
import './DrawingPage.css';
//import { Button } from 'antd';
//import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { yellow, red, blue, green, purple, pink, lightBlue, lightGreen, lime, cyan } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
//import FormControl from '@material-ui/core/FormControl';
//import { makeStyles } from '@material-ui/core/styles';


//style={{display:'flex', direction:'column', justifyContent:'center'}}
//<circle class="solarToGrid" r="7" fill="white" fill-opacity="0.2" filter="#blur"></circle>

var i = 0;

function DrawingPage(props) {

    const [SwitchState, setSwitchState] = useState({
        checkedSolar: false,
        checkedGrid: false,
        checkedPowerwall: false,
        checkedOnlyForHome: false,
        checkedBoosterMode: false,
    })

    console.log("렌더링 테스트! : " + i)
    i++;

    const [Curve1Visible, setCurve1Visible] = useState("hidden")
    const [Curve2Visible, setCurve2Visible] = useState("hidden")
    const [Curve3Visible, setCurve3Visible] = useState("hidden")
    const [Curve4Visible, setCurve4Visible] = useState("hidden")
    const [Line1Visible, setLine1Visible] = useState("hidden")
    const [Line2Visible, setLine2Visible] = useState("hidden")
    const [LiveSolarVisible, setLiveSolarVisible] = useState("hidden")
    const [LiveGridVisible, setLiveGridVisible] = useState("hidden")
    const [LiveHomeVisible, setLiveHomeVisible] = useState("hidden")
    const [LivePowerwallVisible, setLivePowerwallVisible] = useState("hidden")
    const [BlurSolarVisible, setBlurSolarVisible] = useState("hidden")
    const [BlurGridVisible, setBlurGridVisible] = useState("hidden")
    const [BlurHomeVisible, setBlurHomeVisible] = useState("hidden")
    const [BlurPowerwallVisible, setBlurPowerwallVisible] = useState("hidden")

    const [SolarNormalVisible, setSolarNormalVisible] = useState("hidden")
    const [SolarBoosterVisible, setSolarBoosterVisible] = useState("hidden")
    const [SolarToHomeNormalVisible, setSolarToHomeNormalVisible] = useState("hidden")
    const [SolarToHomeBoosterVisible, setSolarToHomeBoosterVisible] = useState("hidden")
    const [GridNormalVisible, setGridNormalVisible] = useState("hidden")
    const [GridBoosterVisible, setGridBoosterVisible] = useState("hidden")
    const [GridToHomeNormalVisible, setGridToHomeNormalVisible] = useState("hidden")
    const [GridToHomeBoosterVisible, setGridToHomeBoosterVisible] = useState("hidden")
    const [PowerwallNormalVisible, setPowerwallNormalVisible] = useState("hidden")
    const [PowerwallBoosterVisible, setPowerwallBoosterVisible] = useState("hidden")


    //solar line : curve2 or curve3 or line2 or curve2/curve3 or curve2/line2 or curve3/line2 or curve1/curve2/line2
    //grid line : line1 or curve3 or line1/curve3
    //powerwall line : curve4
    //home line : curve2/line1/curve4

    const commonSolarVisible = (flag) => {
        setCurve1Visible(flag)                                      // Curve1 on/off
        setCurve2Visible(flag)                                      // Curve2 on/off
        setLine2Visible(flag)                                       // line2 on/off
        setBlurSolarVisible(flag)                                   // Blur Solar on/off
        setLiveSolarVisible(flag)                                   // Live Solar on/off
        setLiveGridVisible(flag)                                    // Live Grid on/off
        setLiveHomeVisible(flag)                                    // Live Home on/off
        setLivePowerwallVisible(flag)                               // Live Powerwall on/off
    }
    const commonGridVisible = (flag) => {
        setLine1Visible(flag)                                        // line1 on/off
        setCurve3Visible(flag)                                       // curve3 on/off
        setBlurGridVisible(flag)                                     // Blur Grid on/off
        setLiveGridVisible(flag)                                     // Live Grid on/off
        setLiveHomeVisible(flag)                                     // Live Home on/off
        setLivePowerwallVisible(flag)                                // Live Powerwall on/off
    }
    const commonPowerwallVisible = (flag) => {
        setCurve4Visible(flag)                                       // curve4 on/off
        setBlurPowerwallVisible(flag)                                // Blur Powerwall on/off
        setLivePowerwallVisible(flag)                                // Live Grid on/off
        setLiveHomeVisible(flag)                                     // Live Home on/off
    }
    const commonOnlyForHomeVisible = (flag) => {
        setCurve2Visible(flag)                                       // curve2 on/off
        setCurve4Visible(flag)                                       // curve4 on/off
        setLine1Visible(flag)                                        // line1 on/off
        setBlurSolarVisible(flag)                                    // Blur Solar on/off
        setBlurGridVisible(flag)                                     // Blur Grid on/off
        setBlurPowerwallVisible(flag)                                // Blur Powerwall on/off
        setLiveSolarVisible(flag)                                    // Live Solar on/off
        setLiveGridVisible(flag)                                     // Live Grid on/off
        setLivePowerwallVisible(flag)                                // Live Powerwall on/off
        setLiveHomeVisible(flag)                                     // Live Home on/off
    }
    const AllUiHidden = () => {
        commonSolarVisible("hidden");
        commonGridVisible("hidden");
        commonPowerwallVisible("hidden");
        setSolarNormalVisible("hidden");
        setGridNormalVisible("hidden");
        setPowerwallNormalVisible("hidden");
        setSolarBoosterVisible("hidden");
        setGridBoosterVisible("hidden");
        setPowerwallBoosterVisible("hidden");
    }


    useEffect(() => {
        //console.log("checkedSolar : " + SwitchState.checkedSolar + " checkedGrid : " + SwitchState.checkedGrid + " checkedPowerwall : " + SwitchState.checkedPowerwall)
        /// Solar ON
        if (SwitchState.checkedSolar === true) {                     // Solar : ON
            //SwitchState.checkedOnlyForHome = false                            // Forhome 모드UI off
            commonSolarVisible("visible")                                       // Solar common : ON
            if (SwitchState.checkedBoosterMode === true) {           // Solar : ON, Booster : ON
                setSolarNormalVisible("hidden")                                 // Solar Normal Mode off
                setSolarToHomeNormalVisible("hidden")                           // Solar Normal Mode off
                setSolarBoosterVisible("visible")                               // Solar Booster Mode on
                setSolarToHomeBoosterVisible("visible")                         // Solar Booster Mode on
            }
            else if (SwitchState.checkedBoosterMode === false) {     // Solar : ON, Booster : OFF
                setSolarNormalVisible("visible")                                // Solar Normal Mode on
                setSolarToHomeNormalVisible("visible")                          // Solar Normal Mode on
                setSolarBoosterVisible("hidden")                                // Solar Booster Mode off
                setSolarToHomeBoosterVisible("hidden")                          // Solar Booster Mode off
            } else {
                // none
            }
        } else {                                                     // Solar : OFF
            if (SwitchState.checkedGrid === true && SwitchState.checkedPowerwall === false) {       // Solar OFF / Grid ON, Powerwall OFF
                setCurve1Visible("hidden")                                      // Curve1 off
                setCurve2Visible("hidden")                                      // Curve2 off
                setLine2Visible("hidden")                                       // Line2 off
                setBlurSolarVisible("hidden")                                   // Blur Solar off
                setLiveSolarVisible("hidden")                                   // Live Solar off
            } else if (SwitchState.checkedGrid === false && SwitchState.checkedPowerwall === true) { // Solar OFF / Grid OFF, Powerwall ON
                setCurve1Visible("hidden")                                      // Curve1 off
                setCurve2Visible("hidden")                                      // Curve2 off
                setLine2Visible("hidden")                                       // Line2 off
                setBlurSolarVisible("hidden")                                   // Blur Solar off
                setLiveSolarVisible("hidden")                                   // Live Solar off
            } else if (SwitchState.checkedGrid === false && SwitchState.checkedPowerwall === false) { // Solar OFF / Grid OFF, Powerwall OFF
                //SwitchState.checkedBoosterMode = false                          // BoosterMode 버튼UI off
                commonSolarVisible("hidden")                                    // Solar common : ON
            } else { //(SwitchState.heckedGrid === true && SwitchState.checkedPowerwall === true)  // Solar OFF / Grid ON, Powerwall ON
                setCurve1Visible("hidden")                                      // Curve1 off
                setCurve2Visible("hidden")                                      // Curve2 off
                setLine2Visible("hidden")                                       // Line2 off
                setBlurSolarVisible("hidden")                                   // Blur Solar off
                setLiveSolarVisible("hidden")                                   // Live Solar off
            }
            setSolarNormalVisible("hidden")                                     // Solar Normal Mode off
            setSolarToHomeNormalVisible("hidden")                               // Solar Normal Mode off
            setSolarBoosterVisible("hidden")                                    // Solar Booster Mode off
            setSolarToHomeBoosterVisible("hidden")                              // Solar Booster Mode off
        }
        /// Grid ON
        if (SwitchState.checkedGrid === true) {                      // Grid : ON
            //SwitchState.checkedOnlyForHome = false                            // Forhome 모드UI off
            commonGridVisible("visible")                                        // Grid common : ON
            if (SwitchState.checkedBoosterMode === true) {           // Grid : ON, Booster : ON
                setGridNormalVisible("hidden")                                  // Grid Normal Mode off
                setGridToHomeNormalVisible("hidden")                            // Grid Normal Mode off
                setGridBoosterVisible("visible")                                // Grid Booster Mode ON
                setGridToHomeBoosterVisible("visible")                          // Grid Booster Mode ON
            }
            else if (SwitchState.checkedBoosterMode === false) {     // Grid : ON, Booster : OFF
                setGridNormalVisible("visible")                                 // Grid Normal Mode ON
                setGridToHomeNormalVisible("visible")                           // Grid Normal Mode ON
                setGridBoosterVisible("hidden")                                 // Grid Booster Mode off
                setGridToHomeBoosterVisible("hidden")                           // Grid Booster Mode off
            } else {
                // none
            }
        } else {                                                     // Grid : OFF
            if (SwitchState.checkedSolar === true && SwitchState.checkedPowerwall === false) {          // Grid OFF / Solar ON, Powerwall OFF
                setLine1Visible("hidden")                                        // line1 off
                setCurve3Visible("hidden")                                       // curve3 off
                setBlurGridVisible("hidden")                                     // Blur Grid off
            } else if (SwitchState.checkedSolar === false && SwitchState.checkedPowerwall === true) {   // Grid OFF / Solar OFF, Powerwall ON
                setLine1Visible("hidden")                                        // line1 off
                setCurve3Visible("hidden")                                       // curve3 off
                setBlurGridVisible("hidden")                                     // Blur Grid off
            } else if (SwitchState.checkedSolar === false && SwitchState.checkedPowerwall === false) {  // Grid OFF / Solar OFF, Powerwall OFF
                //SwitchState.checkedBoosterMode = false                           // BoosterMode 버튼UI off
                commonGridVisible("hidden")                                      // Grid common : OFF
            } else {  //(SwitchState.checkedSolar === true && SwitchState.checkedPowerwall === true)    // Grid OFF / Solar ON, Powerwall ON
                setLine1Visible("hidden")                                        // line1 off
                setCurve3Visible("hidden")                                       // curve3 off
                setBlurGridVisible("hidden")                                     // Blur Grid off
            }
            setGridNormalVisible("hidden")                                       // Grid Normal Mode OFF
            setGridToHomeNormalVisible("hidden")                                 // Grid Normal Mode OFF
            setGridBoosterVisible("hidden")                                      // Grid Booster Mode OFF
            setGridToHomeBoosterVisible("hidden")                                // Grid Booster Mode OFF
        }
        /// Powerwall ON
        if (SwitchState.checkedPowerwall === true) {                 // Powerwall : ON
            //SwitchState.checkedOnlyForHome = false                             // Forhome 모드UI off
            commonPowerwallVisible("visible")                                    // Powerwall common : ON
            if (SwitchState.checkedBoosterMode === true) {           // Grid : ON, Booster : ON
                setPowerwallNormalVisible("hidden")                              // Powerwall Normal Mode off
                setPowerwallBoosterVisible("visible")                            // Powerwall Booster Mode ON
            }
            else if (SwitchState.checkedBoosterMode === false) {     // Grid : ON, Booster : OFF
                setPowerwallNormalVisible("visible")                             // Powerwall Normal Mode ON
                setPowerwallBoosterVisible("hidden")                             // Powerwall Booster Mode off
            } else {
                // none
            }
        } else {                                                     // Powerwall : OFF
            if (SwitchState.checkedSolar === true && SwitchState.checkedGrid === false) {          // Powerwall : OFF / Solar ON, Grid OFF
                setCurve4Visible("hidden")                                       // curve4 off
                setBlurPowerwallVisible("hidden")                                // Blur Powerwall off
            } else if (SwitchState.checkedSolar === false && SwitchState.checkedGrid === true) {   // Powerwall : OFF / Solar OFF, Grid ON
                setCurve4Visible("hidden")                                       // curve4 off
                setBlurPowerwallVisible("hidden")                                // Blur Powerwall off
            } else if (SwitchState.checkedSolar === false && SwitchState.checkedGrid === false) {  // Powerwall : OFF / Solar OFF, Grid OFF
                //SwitchState.checkedBoosterMode = false                           // BoosterMode 버튼UI off
                commonPowerwallVisible("hidden")                                 // Grid common : OFF
            } else { // (SwitchState.checkedSolar === true && SwitchState.checkedGrid === true) {  // Powerwall : OFF / Solar ON, Grid ON
                setCurve4Visible("hidden")                                       // curve4 off
                setBlurPowerwallVisible("hidden")                                // Blur Powerwall off
            }
            setPowerwallNormalVisible("hidden")                                  // Powerwall Normal Mode off
            setPowerwallBoosterVisible("hidden")                                 // Powerwall Booster Mode off
        }
        /// OnlyForHome ON ///
        if (SwitchState.checkedOnlyForHome === true) {               // OnlyForHome : ON
            AllUiHidden()                                            // OnlyForHome 에선 기존 모든 UI제거
            SwitchState.checkedSolar = false;                                    // checkSolar 버튼UI off
            SwitchState.checkedGrid = false;                                     // checkGrid 버튼UI off
            SwitchState.checkedPowerwall = false;                                // checkPowerwall 버튼UI off
            commonOnlyForHomeVisible("visible")                                  // OnlyForHome common : ON
            if (SwitchState.checkedBoosterMode === true) {           // OnlyForHome : ON, Booster : ON
                //console.log("test")
                setSolarToHomeNormalVisible("hidden")                            // OnlyForHome Normal Mode off
                setGridNormalVisible("hidden")                                   // OnlyForHome Normal Mode off
                setPowerwallNormalVisible("hidden")                              // OnlyForHome Normal Mode off
                setSolarToHomeBoosterVisible("visible")                          // OnlyForHome Booster Mode ON
                setGridToHomeBoosterVisible("visible")                           // OnlyForHome Booster Mode ON
                setPowerwallBoosterVisible("visible")                            // OnlyForHome Booster Mode ON
            }
            else if (SwitchState.checkedBoosterMode === false) {     // OnlyForHome : ON, Booster : OFF
                setSolarToHomeNormalVisible("visible")                           // OnlyForHome Normal Mode ON
                setGridToHomeNormalVisible("visible")                            // OnlyForHome Normal Mode ON
                setPowerwallNormalVisible("visible")                             // OnlyForHome Normal Mode ON
                setSolarToHomeBoosterVisible("hidden")                           // OnlyForHome Booster Mode off
                setGridToHomeBoosterVisible("hidden")                            // OnlyForHome Booster Mode off
                setPowerwallBoosterVisible("hidden")                             // OnlyForHome Booster Mode off
            } else {
                // none
            }
        }
        else {
            // none
        }

    }, [SwitchState])


    const handleChange = (event) => {
        setSwitchState({ ...SwitchState, [event.target.name]: event.target.checked });

    };

    const YellowSwitch = withStyles({
        switchBase: {
            color: yellow[200],
            '&$checked': {
                color: yellow[600],
            },
            '&$checked + $track': {
                backgroundColor: yellow[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    const RedSwitch = withStyles({
        switchBase: {
            color: red[200],
            '&$checked': {
                color: red[600],
            },
            '&$checked + $track': {
                backgroundColor: red[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    const BlueSwitch = withStyles({
        switchBase: {
            color: blue[200],
            '&$checked': {
                color: blue[600],
            },
            '&$checked + $track': {
                backgroundColor: blue[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    const GreenSwitch = withStyles({
        switchBase: {
            color: green[200],
            '&$checked': {
                color: green[600],
            },
            '&$checked + $track': {
                backgroundColor: green[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    const CyanSwitch = withStyles({
        switchBase: {
            color: cyan[200],
            '&$checked': {
                color: cyan[600],
            },
            '&$checked + $track': {
                backgroundColor: cyan[600],
            },
        },
        checked: {},
        track: {},
    })(Switch);


    const CalculateKW = () => {
        //var kw = KilloWatt
        //kw--
        //setKilloWatt(kw)
    }


    return (
        <div>
            <div class='background'>
                <svg width="360" height="480" viewBox="0 0 360 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="energy_circle">
                        <circle class="solarToGridSvg" r="2.5" fill="yellow" fill-opacity="0.8" visibility={SolarNormalVisible}></circle>
                        <circle class="solarToGridSvg" r="8" fill="white" fill-opacity="0.2" visibility={SolarNormalVisible}></circle>
                        <circle class="solarToHomeSvg" r="2.5" fill="blue" fill-opacity="0.8" visibility={SolarToHomeNormalVisible}></circle>
                        <circle class="solarToHomeSvg" r="8" fill="white" fill-opacity="0.2" visibility={SolarToHomeNormalVisible}></circle>
                        <circle class="solarToPowerwallSvg" r="2.5" fill="blue" fill-opacity="0.8" visibility={SolarNormalVisible}></circle>
                        <circle class="solarToPowerwallSvg" r="8" fill="white" fill-opacity="0.2" visibility={SolarNormalVisible}></circle>

                        <circle class="solarToGridSvgBooster" r="3" fill="yellow" fill-opacity="0.8" visibility={SolarBoosterVisible}></circle>
                        <circle class="solarToGridSvgBooster" r="15" fill="white" fill-opacity="0.2" visibility={SolarBoosterVisible}></circle>
                        <circle class="solarToHomeSvgBooster" r="3" fill="yellow" fill-opacity="0.8" visibility={SolarToHomeBoosterVisible}></circle>
                        <circle class="solarToHomeSvgBooster" r="15" fill="white" fill-opacity="0.2" visibility={SolarToHomeBoosterVisible}></circle>
                        <circle class="solarToPowerwallSvgBooster" r="3" fill="blue" fill-opacity="0.8" visibility={SolarBoosterVisible}></circle>
                        <circle class="solarToPowerwallSvgBooster" r="15" fill="white" fill-opacity="0.2" visibility={SolarBoosterVisible}></circle>

                        <circle class="solarToGridSvgBoosterDuo" r="3" fill="yellow" fill-opacity="0.8" visibility={SolarBoosterVisible}></circle>
                        <circle class="solarToGridSvgBoosterDuo" r="15" fill="white" fill-opacity="0.2" visibility={SolarBoosterVisible}></circle>
                        <circle class="solarToHomeSvgBoosterDuo" r="3" fill="yellow" fill-opacity="0.8" visibility={SolarToHomeBoosterVisible}></circle>
                        <circle class="solarToHomeSvgBoosterDuo" r="15" fill="white" fill-opacity="0.2" visibility={SolarToHomeBoosterVisible}></circle>
                        <circle class="solarToPowerwallSvgBoosterDuo" r="3" fill="blue" fill-opacity="0.8" visibility={SolarBoosterVisible}></circle>
                        <circle class="solarToPowerwallSvgBoosterDuo" r="15" fill="white" fill-opacity="0.2" visibility={SolarBoosterVisible}></circle>

                        <circle class="gridToHomeSvg" r="2.5" fill="yellow" fill-opacity="0.8" visibility={GridToHomeNormalVisible}></circle>
                        <circle class="gridToHomeSvg" r="8" fill="white" fill-opacity="0.2" visibility={GridToHomeNormalVisible}></circle>
                        <circle class="gridToPowerwallSvg" r="2.5" fill="blue" fill-opacity="0.8" visibility={GridNormalVisible}></circle>
                        <circle class="gridToPowerwallSvg" r="8" fill="white" fill-opacity="0.2" visibility={GridNormalVisible}></circle>

                        <circle class="gridToHomeSvgBooster" r="3" fill="yellow" fill-opacity="0.8" visibility={GridToHomeBoosterVisible}></circle>
                        <circle class="gridToHomeSvgBooster" r="15" fill="white" fill-opacity="0.2" visibility={GridToHomeBoosterVisible}></circle>
                        <circle class="gridToPowerwallSvgBooster" r="3" fill="yellow" fill-opacity="0.8" visibility={GridBoosterVisible}></circle>
                        <circle class="gridToPowerwallSvgBooster" r="15" fill="white" fill-opacity="0.2" visibility={GridBoosterVisible}></circle>

                        <circle class="gridToHomeSvgBoosterDuo" r="3" fill="yellow" fill-opacity="0.8" visibility={GridToHomeBoosterVisible}></circle>
                        <circle class="gridToHomeSvgBoosterDuo" r="15" fill="white" fill-opacity="0.2" visibility={GridToHomeBoosterVisible}></circle>
                        <circle class="gridToPowerwallSvgBoosterDuo" r="3" fill="yellow" fill-opacity="0.8" visibility={GridBoosterVisible}></circle>
                        <circle class="gridToPowerwallSvgBoosterDuo" r="15" fill="white" fill-opacity="0.2" visibility={GridBoosterVisible}></circle>

                        <circle class="powerwallToHomeSvg" r="2.5" fill="yellow" fill-opacity="0.8" visibility={PowerwallNormalVisible}></circle>
                        <circle class="powerwallToHomeSvg" r="8" fill="white" fill-opacity="0.2" visibility={PowerwallNormalVisible}></circle>
                        <circle class="powerwallToHomeSvgBooster" r="3" fill="yellow" fill-opacity="0.8" visibility={PowerwallBoosterVisible}></circle>
                        <circle class="powerwallToHomeSvgBooster" r="15" fill="white" fill-opacity="0.2" visibility={PowerwallBoosterVisible}></circle>
                        <circle class="powerwallToHomeSvgBoosterDuo" r="3" fill="yellow" fill-opacity="0.8" visibility={PowerwallBoosterVisible}></circle>
                        <circle class="powerwallToHomeSvgBoosterDuo" r="15" fill="white" fill-opacity="0.2" visibility={PowerwallBoosterVisible}></circle>
                    </g>
                    <g id="frame_blur_fix">
                        <path id="curve1" d="M177 139C177 160.152 177 205.277 177 216.558C177 227.839 167.549 229.485 162.823 228.897H97" stroke="url(#paint0_linear)" visibility={Curve1Visible} />
                        <path id="curve2" d="M183 139C183 160.152 183 205.277 183 216.558C183 227.839 192.451 229.485 197.177 228.897H263" stroke="url(#paint1_linear)" visibility={Curve2Visible} />
                        <path id="curve3" d="M97 235C115.802 235 155.913 235 165.941 235C175.968 235 177.431 245.633 176.908 250.949L176.908 325" stroke="url(#paint2_linear)" visibility={Curve3Visible} />
                        <path id="curve4" d="M183 325C183 303.848 183 258.723 183 247.442C183 236.161 192.451 234.515 197.177 235.103H263" stroke="url(#paint3_linear)" visibility={Curve4Visible} />
                        <path id="line2" d="M180 139L180 325" stroke="url(#paint4_linear)" visibility={Line2Visible} />
                        <path id="line1" d="M97 232L263 232" stroke="url(#paint5_linear)" visibility={Line1Visible} />

                        <g id="circle_form">
                            <g id="blur_powerwall_group" visibility={BlurPowerwallVisible}>
                                <g id="blur_circle_bottom" filter="url(#filter0_dd)">
                                    <circle cx="180.5" cy="367.5" r="42.5" fill="black" />
                                    <circle cx="180.5" cy="367.5" r="41.5" stroke="#05FF00" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                            </g>
                            <g id="dead_powerwall_group">
                                <g id="dead_circle_bottom">
                                    <circle cx="180.5" cy="367.5" r="42.5" fill="black" />
                                    <circle cx="180.5" cy="367.5" r="41.5" stroke="#C6C6C6" stroke-opacity="0.5" stroke-width="2" />
                                </g>
                                <g id="dead_powerwall">
                                    <path id="Vector" d="M166.096 344.949L178.27 369.536L177.369 371.405L165.196 346.818L166.096 344.949Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_2" d="M177.806 371.751L178.744 369.806L194.933 369.72L193.996 371.664L177.806 371.751Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_3" d="M194.931 369.176L178.741 369.262L166.53 344.599L182.72 344.513L194.931 369.176Z" fill="#C6C6C6" fill-opacity="0.5" />
                                </g>
                            </g>
                            <g id="live_powerwall_group" visibility={LivePowerwallVisible}>
                                <g id="live_circle_bottom">
                                    <circle cx="180.5" cy="367.5" r="42.5" fill="black" />
                                    <circle cx="180.5" cy="367.5" r="41.5" stroke="#05FF00" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                                <g id="live_powerwall">
                                    <path id="Vector_4" d="M166.096 344.949L178.27 369.536L177.369 371.405L165.196 346.818L166.096 344.949Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_5" d="M177.806 371.751L178.744 369.806L194.933 369.72L193.996 371.664L177.806 371.751Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_6" d="M194.931 369.176L178.741 369.262L166.53 344.599L182.72 344.513L194.931 369.176Z" fill="white" fill-opacity="0.9" />
                                </g>
                            </g>
                            <g id="blur_home_group" visibility={BlurHomeVisible}>
                                <g id="blur_circle_right" filter="url(#filter1_dd)">
                                    <circle cx="305.5" cy="232.5" r="42.5" fill="black" />
                                    <circle cx="305.5" cy="232.5" r="41.5" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                            </g>
                            <g id="dead_home_group">
                                <g id="dead_circle_right">
                                    <circle cx="305.5" cy="232.5" r="42.5" fill="black" />
                                    <circle cx="305.5" cy="232.5" r="41.5" stroke="#C6C6C6" stroke-opacity="0.5" stroke-width="2" />
                                </g>
                                <g id="dead_home">
                                    <path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M316.428 223.265V234.844C316.428 236.241 315.285 237.383 313.889 237.383H308.505C308.323 237.383 308.174 237.234 308.174 237.052V227.561C308.174 227.379 308.025 227.231 307.843 227.231H302.156C301.974 227.231 301.825 227.379 301.825 227.561V237.052C301.825 237.234 301.677 237.383 301.495 237.383H296.112C294.715 237.383 293.572 236.241 293.572 234.844V223.265H289.332C289.031 223.265 288.886 222.898 289.106 222.693L304.774 208.089C304.901 207.97 305.098 207.97 305.226 208.089L311.349 213.797V211.064C311.349 210.882 311.498 210.734 311.68 210.734H314.828C315.01 210.734 315.158 210.882 315.158 211.064V217.347L320.894 222.693C321.114 222.898 320.968 223.265 320.668 223.265H316.428V223.265Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_8" d="M304.56 220.349L304.454 220.838L304.56 220.349ZM304.56 220.349L304.071 220.243M304.56 220.349L304.071 220.243M304.071 220.243L304.071 220.243L304.071 220.243L304.07 220.243L304.07 220.243L304.07 220.243L304.069 220.243L304.069 220.243L304.069 220.243L304.069 220.243L304.068 220.243L304.068 220.243L304.068 220.242L304.067 220.242L304.067 220.242L304.067 220.242L304.067 220.242L304.066 220.242L304.066 220.242L304.066 220.242L304.065 220.242L304.065 220.242L304.065 220.242L304.065 220.242L304.064 220.242L304.064 220.242L304.064 220.242L304.063 220.242L304.063 220.241L304.063 220.241L304.063 220.241L304.062 220.241L304.062 220.241L304.062 220.241L304.061 220.241L304.061 220.241L304.061 220.241L304.061 220.241L304.06 220.241L304.06 220.241L304.06 220.241L304.06 220.241L304.059 220.241L304.059 220.241L304.059 220.241L304.058 220.24L304.058 220.24L304.058 220.24L304.058 220.24L304.057 220.24L304.057 220.24L304.057 220.24L304.056 220.24L304.056 220.24L304.056 220.24L304.056 220.24L304.055 220.24L304.055 220.24L304.055 220.24L304.055 220.24L304.054 220.24L304.054 220.239L304.054 220.239L304.053 220.239L304.053 220.239L304.053 220.239L304.053 220.239L304.052 220.239L304.052 220.239L304.052 220.239L304.051 220.239L304.051 220.239L304.051 220.239L304.051 220.239L304.05 220.239L304.05 220.239L304.05 220.239L304.05 220.239L304.049 220.238L304.049 220.238L304.049 220.238L304.048 220.238L304.048 220.238L304.048 220.238L304.048 220.238L304.047 220.238L304.047 220.238L304.047 220.238L304.047 220.238L304.046 220.238L304.046 220.238L304.046 220.238L304.045 220.238L304.045 220.238L304.045 220.238L304.045 220.237L304.044 220.237L304.044 220.237L304.044 220.237L304.044 220.237L304.043 220.237L304.043 220.237L304.043 220.237L304.043 220.237L304.042 220.237L304.042 220.237L304.042 220.237L304.041 220.237L304.041 220.237L304.041 220.237L304.041 220.237L304.04 220.237L304.04 220.236L304.04 220.236L304.04 220.236L304.039 220.236L304.039 220.236L304.039 220.236L304.039 220.236L304.038 220.236L304.038 220.236L304.038 220.236L304.037 220.236L304.037 220.236L304.037 220.236L304.037 220.236L304.036 220.236L304.036 220.236L304.036 220.236L304.036 220.236L304.035 220.235L304.035 220.235L304.035 220.235L304.035 220.235L304.034 220.235L304.034 220.235L304.034 220.235L304.033 220.235L304.033 220.235L304.033 220.235L304.033 220.235L304.032 220.235L304.032 220.235L304.032 220.235L304.032 220.235L304.031 220.235L304.031 220.235L304.031 220.234L304.031 220.234L304.03 220.234L304.03 220.234L304.03 220.234L304.03 220.234L304.029 220.234L304.029 220.234L304.029 220.234L304.029 220.234L304.028 220.234L304.028 220.234L304.028 220.234L304.027 220.234L304.027 220.234L304.027 220.234L304.027 220.234L304.026 220.234L304.026 220.233L304.026 220.233L304.026 220.233L304.025 220.233L304.025 220.233L304.025 220.233L304.025 220.233L304.024 220.233L304.024 220.233L304.024 220.233L304.024 220.233L304.023 220.233L304.023 220.233L304.023 220.233L304.023 220.233L304.022 220.233L304.022 220.233L304.022 220.233L304.022 220.232L304.021 220.232L304.021 220.232L304.021 220.232L304.021 220.232L304.02 220.232L304.02 220.232L304.02 220.232L304.02 220.232L304.019 220.232L304.019 220.232L304.019 220.232L304.019 220.232L304.018 220.232L304.018 220.232L304.018 220.232L304.018 220.232L304.017 220.232L304.017 220.231L304.017 220.231L304.017 220.231L304.016 220.231L304.016 220.231L304.016 220.231L304.015 220.231L304.015 220.231L304.015 220.231L304.015 220.231L304.014 220.231L304.014 220.231L304.014 220.231L304.014 220.231L304.013 220.231L304.013 220.231L304.013 220.231L304.013 220.231L304.012 220.231L304.012 220.23L304.012 220.23L304.012 220.23L304.011 220.23L304.011 220.23L304.011 220.23L304.011 220.23L304.01 220.23L304.01 220.23L304.01 220.23L304.01 220.23L304.009 220.23L304.009 220.23L304.009 220.23L304.009 220.23L304.008 220.23L304.008 220.23L304.008 220.23L304.008 220.229L304.007 220.229L304.007 220.229L304.007 220.229L304.007 220.229L304.006 220.229L304.006 220.229L304.006 220.229L304.006 220.229L304.006 220.229L304.005 220.229L304.005 220.229L304.005 220.229L304.005 220.229L304.004 220.229L304.004 220.229L304.004 220.229L304.004 220.229L304.003 220.229L304.003 220.228L304.003 220.228L304.003 220.228L304.002 220.228L304.002 220.228L304.002 220.228L304.002 220.228L304.001 220.228L304.001 220.228L304.001 220.228L304.001 220.228L304 220.228L304 220.228L304 220.228L304 220.228L303.999 220.228L303.999 220.228L303.999 220.228L303.999 220.228L303.998 220.227L303.998 220.227L303.998 220.227L303.998 220.227L303.997 220.227L303.997 220.227L303.997 220.227L303.997 220.227L303.996 220.227L303.996 220.227L303.996 220.227L303.996 220.227L303.995 220.227L303.995 220.227L303.995 220.227L303.995 220.227L303.994 220.227L303.994 220.227L303.994 220.227L303.994 220.226L303.994 220.226L303.993 220.226L303.993 220.226L303.993 220.226L303.993 220.226L303.992 220.226L303.992 220.226L303.992 220.226L303.992 220.226L303.991 220.226L303.991 220.226L303.991 220.226L303.991 220.226L303.99 220.226L303.99 220.226L303.99 220.226L303.99 220.226L303.989 220.226L303.989 220.225L303.989 220.225L303.989 220.225L303.988 220.225L303.988 220.225L303.988 220.225L303.988 220.225L303.987 220.225L303.987 220.225L303.987 220.225L303.987 220.225L303.987 220.225L303.986 220.225L303.986 220.225L303.986 220.225L303.986 220.225L303.985 220.225L303.985 220.225L303.985 220.225L303.985 220.224L303.984 220.224L303.984 220.224L303.984 220.224L303.984 220.224L303.983 220.224L303.983 220.224L303.983 220.224L303.983 220.224L303.982 220.224L303.982 220.224L303.982 220.224L303.982 220.224L303.981 220.224L303.981 220.224L303.981 220.224L303.981 220.224L303.981 220.224L303.98 220.224L303.98 220.223L303.98 220.223L303.98 220.223L303.979 220.223L303.979 220.223L303.979 220.223L303.979 220.223L303.978 220.223L303.978 220.223L303.978 220.223L303.978 220.223L303.977 220.223L303.977 220.223L303.977 220.223L303.977 220.223L303.976 220.223L303.976 220.223L303.976 220.223L303.976 220.223L303.976 220.223L303.975 220.222L303.975 220.222L303.975 220.222L303.975 220.222L303.974 220.222L303.974 220.222L303.974 220.222L303.974 220.222L303.973 220.222L303.973 220.222L303.973 220.222L303.973 220.222L303.972 220.222L303.972 220.222L303.972 220.222L303.972 220.222L303.971 220.222L303.971 220.222L303.971 220.222L303.971 220.221L303.971 220.221L303.97 220.221L303.97 220.221L303.97 220.221L303.97 220.221L303.969 220.221L303.969 220.221L303.969 220.221L303.969 220.221L303.968 220.221L303.968 220.221L303.968 220.221L303.968 220.221L303.967 220.221L303.967 220.221L303.967 220.221L303.967 220.221L303.967 220.221L303.966 220.221L303.966 220.22L303.966 220.22L303.966 220.22L303.965 220.22L303.965 220.22L303.965 220.22L303.965 220.22L303.964 220.22L303.964 220.22L303.964 220.22L303.964 220.22L303.963 220.22L303.963 220.22L303.963 220.22L303.963 220.22L303.963 220.22L303.962 220.22L303.962 220.22L303.962 220.22L303.962 220.219L303.961 220.219L303.961 220.219L303.961 220.219L303.961 220.219L303.96 220.219L303.96 220.219L303.96 220.219L303.96 220.219L303.959 220.219L303.959 220.219L303.959 220.219L303.959 220.219L303.959 220.219L303.958 220.219L303.958 220.219L303.958 220.219L303.958 220.219L303.957 220.219L303.957 220.219L303.957 220.218L303.957 220.218L303.956 220.218L303.956 220.218L303.956 220.218L303.956 220.218L303.955 220.218L303.955 220.218L303.955 220.218L303.955 220.218L303.955 220.218L303.954 220.218L303.954 220.218L303.954 220.218L303.954 220.218L303.953 220.218L303.953 220.218L303.953 220.218L303.953 220.218L303.952 220.218L303.952 220.217L303.952 220.217L303.952 220.217L303.952 220.217L303.951 220.217L303.951 220.217L303.951 220.217L303.951 220.217L303.95 220.217L303.95 220.217L303.95 220.217L303.95 220.217L303.949 220.217L303.949 220.217L303.949 220.217L303.949 220.217L303.948 220.217L303.948 220.217L303.948 220.217L303.948 220.216L303.948 220.216L303.947 220.216L303.947 220.216L303.947 220.216L303.947 220.216L303.946 220.216L303.946 220.216L303.946 220.216L303.946 220.216L303.945 220.216L303.945 220.216L303.945 220.216L303.945 220.216L303.944 220.216L303.944 220.216L303.944 220.216L303.944 220.216L303.944 220.216L303.943 220.216L303.943 220.215L303.943 220.215L303.943 220.215L303.942 220.215C303.619 220.145 303.295 220.075 302.97 220.004C302.069 219.807 301.164 219.61 300.259 219.423C301.346 217.895 302.427 216.365 303.509 214.834C303.831 214.378 304.153 213.923 304.475 213.467L304.475 213.467M304.071 220.243L304.475 213.467M310.071 216.813C310.127 216.735 310.166 216.627 310.17 216.533L310.071 216.813ZM310.071 216.813C309.321 217.882 308.566 218.949 307.811 220.015C307.71 220.158 307.609 220.3 307.508 220.443L310.071 216.813ZM304.475 213.467C304.779 213.037 305.084 212.606 305.388 212.176C305.713 211.716 306.038 211.257 306.363 210.797M304.475 213.467L306.363 210.797M306.363 210.797C306.055 212.223 305.746 213.649 305.438 215.074L305.438 215.074L305.438 215.074L305.438 215.075L305.438 215.075L305.438 215.075L305.438 215.075L305.437 215.075L305.437 215.076L305.437 215.076L305.437 215.076L305.437 215.076L305.437 215.077L305.437 215.077L305.437 215.077L305.437 215.077L305.437 215.078L305.437 215.078L305.437 215.078L305.437 215.078L305.437 215.079L305.437 215.079L305.437 215.079L305.437 215.079L305.437 215.08L305.437 215.08L305.436 215.08L305.436 215.08L305.436 215.081L305.436 215.081L305.436 215.081L305.436 215.081L305.436 215.081L305.436 215.082L305.436 215.082L305.436 215.082L305.436 215.082L305.436 215.083L305.436 215.083L305.436 215.083L305.436 215.083L305.436 215.084L305.436 215.084L305.436 215.084L305.436 215.084L305.435 215.085L305.435 215.085L305.435 215.085L305.435 215.085L305.435 215.086L305.435 215.086L305.435 215.086L305.435 215.086L305.435 215.087L305.435 215.087L305.435 215.087L305.435 215.087L305.435 215.088L305.435 215.088L305.435 215.088L305.435 215.088L305.435 215.088L305.435 215.089L305.435 215.089L305.434 215.089L305.434 215.089L305.434 215.09L305.434 215.09L305.434 215.09L305.434 215.09L305.434 215.091L305.434 215.091L305.434 215.091L305.434 215.091L305.434 215.092L305.434 215.092L305.434 215.092L305.434 215.092L305.434 215.093L305.434 215.093L305.434 215.093L305.434 215.093L305.434 215.094L305.433 215.094L305.433 215.094L305.433 215.094L305.433 215.095L305.433 215.095L305.433 215.095L305.433 215.095L305.433 215.095L305.433 215.096L305.433 215.096L305.433 215.096L305.433 215.096L305.433 215.097L305.433 215.097L305.433 215.097L305.433 215.097L305.433 215.098L305.433 215.098L305.433 215.098L305.432 215.098L305.432 215.099L305.432 215.099L305.432 215.099L305.432 215.099L305.432 215.1L305.432 215.1L305.432 215.1L305.432 215.1L305.432 215.101L305.432 215.101L305.432 215.101L305.432 215.101L305.432 215.102L305.432 215.102L305.432 215.102L305.432 215.102L305.432 215.103L305.432 215.103L305.431 215.103L305.431 215.103L305.431 215.104L305.431 215.104L305.431 215.104L305.431 215.104L305.431 215.104L305.431 215.105L305.431 215.105L305.431 215.105L305.431 215.105L305.431 215.106L305.431 215.106L305.431 215.106L305.431 215.106L305.431 215.107L305.431 215.107L305.431 215.107L305.431 215.107L305.43 215.108L305.43 215.108L305.43 215.108L305.43 215.108L305.43 215.109L305.43 215.109L305.43 215.109L305.43 215.109L305.43 215.11L305.43 215.11L305.43 215.11L305.43 215.11L305.43 215.111L305.43 215.111L305.43 215.111L305.43 215.111L305.43 215.112L305.43 215.112L305.43 215.112L305.429 215.112L305.429 215.113L305.429 215.113L305.429 215.113L305.429 215.113L305.429 215.114L305.429 215.114L305.429 215.114L305.429 215.114L305.429 215.115L305.429 215.115L305.429 215.115L305.429 215.115L305.429 215.116L305.429 215.116L305.429 215.116L305.429 215.116L305.429 215.117L305.429 215.117L305.428 215.117L305.428 215.117L305.428 215.118L305.428 215.118L305.428 215.118L305.428 215.118L305.428 215.119L305.428 215.119L305.428 215.119L305.428 215.119L305.428 215.119L305.428 215.12L305.428 215.12L305.428 215.12L305.428 215.12L305.428 215.121L305.428 215.121L305.428 215.121L305.428 215.121L305.427 215.122L305.427 215.122L305.427 215.122L305.427 215.122L305.427 215.123L305.427 215.123L305.427 215.123L305.427 215.123L305.427 215.124L305.427 215.124L305.427 215.124L305.427 215.124L305.427 215.125L305.427 215.125L305.427 215.125L305.427 215.125L305.427 215.126L305.427 215.126L305.426 215.126L305.426 215.126L305.426 215.127L305.426 215.127L305.426 215.127L305.426 215.127L305.426 215.128L305.426 215.128L305.426 215.128L305.426 215.128L305.426 215.129L305.426 215.129L305.426 215.129L305.426 215.129L305.426 215.13L305.426 215.13L305.426 215.13L305.426 215.131L305.425 215.131L305.425 215.131L305.425 215.131L305.425 215.132L305.425 215.132L305.425 215.132L305.425 215.132L305.425 215.133L305.425 215.133L305.425 215.133L305.425 215.133L305.425 215.134L305.425 215.134L305.425 215.134L305.425 215.134L305.425 215.135L305.425 215.135L305.425 215.135L305.425 215.135L305.424 215.136L305.424 215.136L305.424 215.136L305.424 215.136L305.424 215.137L305.424 215.137L305.424 215.137L305.424 215.137L305.424 215.138L305.424 215.138L305.424 215.138L305.424 215.138L305.424 215.139L305.424 215.139L305.424 215.139L305.424 215.139L305.424 215.14L305.424 215.14L305.423 215.14L305.423 215.14L305.423 215.141L305.423 215.141L305.423 215.141L305.423 215.141L305.423 215.142L305.423 215.142L305.423 215.142L305.423 215.142L305.423 215.143L305.423 215.143L305.423 215.143L305.423 215.144L305.423 215.144L305.423 215.144L305.423 215.144L305.423 215.145L305.422 215.145L305.422 215.145L305.422 215.145L305.422 215.146L305.422 215.146L305.422 215.146L305.422 215.146L305.422 215.147L305.422 215.147L305.422 215.147L305.422 215.147L305.422 215.148L305.422 215.148L305.422 215.148L305.422 215.148L305.422 215.149L305.422 215.149L305.421 215.149L305.421 215.149L305.421 215.15L305.421 215.15L305.421 215.15L305.421 215.151L305.421 215.151L305.421 215.151L305.421 215.151L305.421 215.152L305.421 215.152L305.421 215.152L305.421 215.152L305.421 215.153L305.421 215.153L305.421 215.153L305.421 215.153L305.421 215.154L305.42 215.154L305.42 215.154L305.42 215.154L305.42 215.155L305.42 215.155L305.42 215.155L305.42 215.155L305.42 215.156L305.42 215.156L305.42 215.156L305.42 215.157L305.42 215.157L305.42 215.157L305.42 215.157L305.42 215.158L305.42 215.158L305.42 215.158L305.42 215.158L305.419 215.159L305.419 215.159L305.419 215.159L305.419 215.159L305.419 215.16L305.419 215.16L305.419 215.16L305.419 215.161L305.419 215.161L305.419 215.161L305.419 215.161L305.419 215.162L305.419 215.162L305.419 215.162L305.419 215.162L305.419 215.163L305.419 215.163L305.418 215.163L305.418 215.163L305.418 215.164L305.418 215.164L305.418 215.164L305.418 215.165L305.418 215.165L305.418 215.165L305.418 215.165L305.418 215.166L305.418 215.166L305.418 215.166L305.418 215.166L305.418 215.167L305.418 215.167L305.418 215.167L305.418 215.168L305.417 215.168L305.417 215.168L305.417 215.168L305.417 215.169L305.417 215.169L305.417 215.169L305.417 215.169L305.417 215.17L305.417 215.17L305.417 215.17L305.417 215.171L305.417 215.171L305.417 215.171L305.417 215.171L305.417 215.172L305.417 215.172L305.417 215.172L305.416 215.172L305.416 215.173L305.416 215.173L305.416 215.173L305.416 215.174L305.416 215.174L305.416 215.174L305.416 215.174L305.416 215.175L305.416 215.175L305.416 215.175L305.416 215.175L305.416 215.176L305.416 215.176L305.416 215.176L305.416 215.177L305.416 215.177L305.415 215.177L305.415 215.177L305.415 215.178L305.415 215.178L305.415 215.178L305.415 215.178L305.415 215.179L305.415 215.179L305.415 215.179L305.415 215.18L305.415 215.18L305.415 215.18L305.415 215.18L305.415 215.181L305.415 215.181L305.415 215.181L305.414 215.182L305.414 215.182L305.414 215.182L305.414 215.182L305.414 215.183L305.414 215.183L305.414 215.183L305.414 215.183L305.414 215.184L305.414 215.184L305.414 215.184L305.414 215.185L305.414 215.185L305.414 215.185L305.414 215.185L305.414 215.186L305.414 215.186L305.413 215.186L305.413 215.187L305.413 215.187L305.413 215.187L305.413 215.187L305.413 215.188L305.413 215.188L305.413 215.188L305.413 215.189L305.413 215.189L305.413 215.189L305.413 215.189L305.413 215.19L305.413 215.19L305.413 215.19L305.413 215.191L305.412 215.191L305.412 215.191L305.412 215.191L305.412 215.192L305.412 215.192L305.412 215.192L305.412 215.193L305.412 215.193L305.412 215.193L305.412 215.193L305.412 215.194L305.412 215.194L305.412 215.194L305.412 215.195L305.412 215.195L305.412 215.195L305.411 215.195L305.411 215.196L305.411 215.196L305.411 215.196L305.411 215.197L305.411 215.197L305.411 215.197L305.411 215.197L305.411 215.198L305.411 215.198L305.411 215.198L305.411 215.199L305.411 215.199L305.411 215.199L305.411 215.2L305.411 215.2L305.41 215.2L305.41 215.2L305.41 215.201L305.41 215.201L305.41 215.201L305.41 215.202L305.41 215.202L305.41 215.202L305.41 215.202L305.41 215.203L305.41 215.203L305.41 215.203L305.41 215.204L305.41 215.204L305.41 215.204L305.41 215.205L305.409 215.205L305.409 215.205L305.409 215.205L305.409 215.206L305.409 215.206L305.409 215.206L305.409 215.207L305.303 215.695L305.792 215.801L305.792 215.801L305.792 215.801L305.793 215.801L305.793 215.801L305.793 215.801L305.794 215.801L305.794 215.801L305.794 215.802L305.794 215.802L305.795 215.802L305.795 215.802L305.795 215.802L305.795 215.802L305.796 215.802L305.796 215.802L305.796 215.802L305.797 215.802L305.797 215.802L305.797 215.802L305.797 215.802L305.798 215.802L305.798 215.802L305.798 215.802L305.798 215.802L305.799 215.803L305.799 215.803L305.799 215.803L305.8 215.803L305.8 215.803L305.8 215.803L305.8 215.803L305.801 215.803L305.801 215.803L305.801 215.803L305.801 215.803L305.802 215.803L305.802 215.803L305.802 215.803L305.803 215.803L305.803 215.803L305.803 215.803L305.803 215.804L305.804 215.804L305.804 215.804L305.804 215.804L305.804 215.804L305.805 215.804L305.805 215.804L305.805 215.804L305.805 215.804L305.806 215.804L305.806 215.804L305.806 215.804L305.806 215.804L305.807 215.804L305.807 215.804L305.807 215.804L305.808 215.804L305.808 215.804L305.808 215.805L305.808 215.805L305.809 215.805L305.809 215.805L305.809 215.805L305.809 215.805L305.81 215.805L305.81 215.805L305.81 215.805L305.81 215.805L305.811 215.805L305.811 215.805L305.811 215.805L305.812 215.805L305.812 215.805L305.812 215.805L305.812 215.805L305.813 215.806L305.813 215.806L305.813 215.806L305.813 215.806L305.814 215.806L305.814 215.806L305.814 215.806L305.814 215.806L305.815 215.806L305.815 215.806L305.815 215.806L305.815 215.806L305.816 215.806L305.816 215.806L305.816 215.806L305.816 215.806L305.817 215.806L305.817 215.806L305.817 215.807L305.818 215.807L305.818 215.807L305.818 215.807L305.818 215.807L305.819 215.807L305.819 215.807L305.819 215.807L305.819 215.807L305.82 215.807L305.82 215.807L305.82 215.807L305.82 215.807L305.821 215.807L305.821 215.807L305.821 215.807L305.821 215.807L305.822 215.807L305.822 215.808L305.822 215.808L305.822 215.808L305.823 215.808L305.823 215.808L305.823 215.808L305.823 215.808L305.824 215.808L305.824 215.808L305.824 215.808L305.824 215.808L305.825 215.808L305.825 215.808L305.825 215.808L305.825 215.808L305.826 215.808L305.826 215.808L305.826 215.808L305.826 215.809L305.827 215.809L305.827 215.809L305.827 215.809L305.828 215.809L305.828 215.809L305.828 215.809L305.828 215.809L305.829 215.809L305.829 215.809L305.829 215.809L305.829 215.809L305.83 215.809L305.83 215.809L305.83 215.809L305.83 215.809L305.831 215.809L305.831 215.809L305.831 215.81L305.831 215.81L305.832 215.81L305.832 215.81L305.832 215.81L305.832 215.81L305.833 215.81L305.833 215.81L305.833 215.81L305.833 215.81L305.834 215.81L305.834 215.81L305.834 215.81L305.834 215.81L305.835 215.81L305.835 215.81L305.835 215.81L305.835 215.81L305.836 215.811L305.836 215.811L305.836 215.811L305.836 215.811L305.837 215.811L305.837 215.811L305.837 215.811L305.837 215.811L305.838 215.811L305.838 215.811L305.838 215.811L305.838 215.811L305.839 215.811L305.839 215.811L305.839 215.811L305.839 215.811L305.84 215.811L305.84 215.811L305.84 215.811L305.84 215.812L305.841 215.812L305.841 215.812L305.841 215.812L305.841 215.812L305.842 215.812L305.842 215.812L305.842 215.812L305.842 215.812L305.843 215.812L305.843 215.812L305.843 215.812L305.843 215.812L305.844 215.812L305.844 215.812L305.844 215.812L305.844 215.812L305.845 215.812L305.845 215.812L305.845 215.813L305.845 215.813L305.846 215.813L305.846 215.813L305.846 215.813L305.846 215.813L305.846 215.813L305.847 215.813L305.847 215.813L305.847 215.813L305.847 215.813L305.848 215.813L305.848 215.813L305.848 215.813L305.848 215.813L305.849 215.813L305.849 215.813L305.849 215.813L305.849 215.814L305.85 215.814L305.85 215.814L305.85 215.814L305.85 215.814L305.851 215.814L305.851 215.814L305.851 215.814L305.851 215.814L305.852 215.814L305.852 215.814L305.852 215.814L305.852 215.814L305.853 215.814L305.853 215.814L305.853 215.814L305.853 215.814L305.854 215.814L305.854 215.814L305.854 215.815L305.854 215.815L305.855 215.815L305.855 215.815L305.855 215.815L305.855 215.815L305.856 215.815L305.856 215.815L305.856 215.815L305.856 215.815L305.856 215.815L305.857 215.815L305.857 215.815L305.857 215.815L305.857 215.815L305.858 215.815L305.858 215.815L305.858 215.815L305.858 215.815L305.859 215.816L305.859 215.816L305.859 215.816L305.859 215.816L305.86 215.816L305.86 215.816L305.86 215.816L305.86 215.816L305.861 215.816L305.861 215.816L305.861 215.816L305.861 215.816L305.862 215.816L305.862 215.816L305.862 215.816L305.862 215.816L305.863 215.816L305.863 215.816L305.863 215.816L305.863 215.816L305.863 215.817L305.864 215.817L305.864 215.817L305.864 215.817L305.864 215.817L305.865 215.817L305.865 215.817L305.865 215.817L305.865 215.817L305.866 215.817L305.866 215.817L305.866 215.817L305.866 215.817L305.867 215.817L305.867 215.817L305.867 215.817L305.867 215.817L305.868 215.817L305.868 215.817L305.868 215.818L305.868 215.818L305.868 215.818L305.869 215.818L305.869 215.818L305.869 215.818L305.869 215.818L305.87 215.818L305.87 215.818L305.87 215.818L305.87 215.818L305.871 215.818L305.871 215.818L305.871 215.818L305.871 215.818L305.872 215.818L305.872 215.818L305.872 215.818L305.872 215.818L305.873 215.819L305.873 215.819L305.873 215.819L305.873 215.819L305.873 215.819L305.874 215.819L305.874 215.819L305.874 215.819L305.874 215.819L305.875 215.819L305.875 215.819L305.875 215.819L305.875 215.819L305.876 215.819L305.876 215.819L305.876 215.819L305.876 215.819L305.877 215.819L305.877 215.819L305.877 215.819L305.877 215.82L305.877 215.82L305.878 215.82L305.878 215.82L305.878 215.82L305.878 215.82L305.879 215.82L305.879 215.82L305.879 215.82L305.879 215.82L305.88 215.82L305.88 215.82L305.88 215.82L305.88 215.82L305.881 215.82L305.881 215.82L305.881 215.82L305.881 215.82L305.881 215.82L305.882 215.82L305.882 215.821L305.882 215.821L305.882 215.821L305.883 215.821L305.883 215.821L305.883 215.821L305.883 215.821L305.884 215.821L305.884 215.821L305.884 215.821L305.884 215.821L305.885 215.821L305.885 215.821L305.885 215.821L305.885 215.821L305.885 215.821L305.886 215.821L305.886 215.821L305.886 215.821L305.886 215.822L305.887 215.822L305.887 215.822L305.887 215.822L305.887 215.822L305.888 215.822L305.888 215.822L305.888 215.822L305.888 215.822L305.888 215.822L305.889 215.822L305.889 215.822L305.889 215.822L305.889 215.822L305.89 215.822L305.89 215.822L305.89 215.822L305.89 215.822L305.891 215.822L305.891 215.822L305.891 215.823L305.891 215.823L305.892 215.823L305.892 215.823L305.892 215.823L305.892 215.823L305.892 215.823L305.893 215.823L305.893 215.823L305.893 215.823L305.893 215.823L305.894 215.823L305.894 215.823L305.894 215.823L305.894 215.823L305.895 215.823L305.895 215.823L305.895 215.823L305.895 215.823L305.895 215.823L305.896 215.824L305.896 215.824L305.896 215.824L305.896 215.824L305.897 215.824L305.897 215.824L305.897 215.824L305.897 215.824L305.898 215.824L305.898 215.824L305.898 215.824L305.898 215.824L305.898 215.824L305.899 215.824L305.899 215.824L305.899 215.824L305.899 215.824L305.9 215.824L305.9 215.824L305.9 215.824L305.9 215.825L305.901 215.825L305.901 215.825L305.901 215.825L305.901 215.825L305.902 215.825L305.902 215.825L305.902 215.825L305.902 215.825L305.902 215.825L305.903 215.825L305.903 215.825L305.903 215.825L305.903 215.825L305.904 215.825L305.904 215.825L305.904 215.825L305.904 215.825L305.905 215.825L305.905 215.825L305.905 215.826L305.905 215.826L305.905 215.826L305.906 215.826L305.906 215.826L305.906 215.826L305.906 215.826L305.907 215.826L305.907 215.826L305.907 215.826L305.907 215.826L305.908 215.826L305.908 215.826L305.908 215.826L305.908 215.826L305.908 215.826L305.909 215.826L305.909 215.826L305.909 215.826L305.909 215.826L305.91 215.827L305.91 215.827L305.91 215.827L305.91 215.827L305.911 215.827L305.911 215.827L305.911 215.827L305.911 215.827L305.911 215.827L305.912 215.827L305.912 215.827L305.912 215.827L305.912 215.827L305.913 215.827L305.913 215.827L305.913 215.827L305.913 215.827L305.914 215.827L305.914 215.827L305.914 215.827L305.914 215.828L305.914 215.828L305.915 215.828L305.915 215.828L305.915 215.828L305.915 215.828L305.916 215.828L305.916 215.828L305.916 215.828L305.916 215.828L305.917 215.828L305.917 215.828L305.917 215.828L305.917 215.828L305.917 215.828C307.142 216.093 308.367 216.359 309.592 216.625C308.865 217.66 308.134 218.693 307.403 219.726C307.302 219.869 307.201 220.011 307.1 220.154L307.1 220.154C305.9 221.852 304.7 223.549 303.5 225.246L303.502 225.237L303.504 225.228L303.506 225.218L303.508 225.209L303.51 225.2L303.512 225.19L303.514 225.181L303.516 225.171L303.518 225.162L303.52 225.153L303.522 225.143L303.524 225.134L303.526 225.124L303.528 225.115L303.53 225.106L303.532 225.096L303.534 225.087L303.536 225.077L303.538 225.068L303.54 225.059L303.542 225.049L303.544 225.04L303.546 225.03L303.548 225.021L303.55 225.012L303.552 225.002L303.554 224.993L303.556 224.983L303.559 224.974L303.561 224.965L303.563 224.955L303.565 224.946L303.567 224.936L303.569 224.927L303.571 224.918L303.573 224.908L303.575 224.899L303.577 224.889L303.579 224.88L303.581 224.871L303.583 224.861L303.585 224.852L303.587 224.842L303.589 224.833L303.591 224.824L303.593 224.814L303.595 224.805L303.597 224.795L303.599 224.786L303.601 224.777L303.603 224.767L303.605 224.758L303.607 224.748L303.609 224.739L303.611 224.73L303.613 224.72L303.616 224.711L303.618 224.701L303.62 224.692L303.622 224.683L303.624 224.673L303.626 224.664L303.628 224.654L303.63 224.645L303.632 224.635L303.634 224.626L303.636 224.617L303.638 224.607L303.64 224.598L303.642 224.588L303.644 224.579L303.646 224.57L303.648 224.56L303.65 224.551L303.652 224.541L303.654 224.532L303.656 224.523L303.658 224.513L303.66 224.504L303.662 224.494L303.664 224.485L303.666 224.476L303.668 224.466L303.67 224.457L303.673 224.447L303.675 224.438L303.677 224.429L303.679 224.419L303.681 224.41L303.683 224.4L303.685 224.391L303.687 224.382L303.689 224.372L303.691 224.363L303.693 224.353L303.695 224.344L303.697 224.335L303.699 224.325L303.701 224.316L303.703 224.306L303.705 224.297L303.707 224.288L303.709 224.278L303.711 224.269L303.713 224.259L303.715 224.25L303.717 224.241L303.719 224.231L303.721 224.222L303.723 224.212L303.725 224.203L303.727 224.194L303.729 224.184L303.732 224.175L303.734 224.165L303.736 224.156L303.738 224.147L303.74 224.137L303.742 224.128L303.744 224.118L303.746 224.109L303.748 224.1L303.75 224.09L303.752 224.081L303.754 224.071L303.756 224.062L303.758 224.053L303.76 224.043L303.762 224.034L303.764 224.024L303.766 224.015L303.768 224.006L303.77 223.996L303.772 223.987L303.774 223.977L303.776 223.968L303.778 223.959L303.78 223.949L303.782 223.94L303.784 223.93L303.786 223.921L303.789 223.912L303.791 223.902L303.793 223.893L303.795 223.883L303.797 223.874L303.799 223.865L303.801 223.855L303.803 223.846L303.805 223.836L303.807 223.827L303.809 223.818L303.811 223.808L303.813 223.799L303.815 223.789L303.817 223.78L303.819 223.771L303.821 223.761L303.823 223.752L303.825 223.742L303.827 223.733L303.829 223.724L303.831 223.714L303.833 223.705L303.835 223.695L303.837 223.686L303.839 223.677L303.841 223.667L303.843 223.658L303.846 223.648L303.848 223.639L303.85 223.63L303.852 223.62L303.854 223.611L303.856 223.601L303.858 223.592L303.86 223.583L303.862 223.573L303.864 223.564L303.866 223.554L303.868 223.545L303.87 223.536L303.872 223.526L303.874 223.517L303.876 223.507L303.878 223.498L303.88 223.489L303.882 223.479L303.884 223.47L303.886 223.46L303.888 223.451L303.89 223.442L303.892 223.432L303.894 223.423L303.896 223.413L303.898 223.404L303.9 223.395L303.903 223.385L303.905 223.376L303.907 223.366L303.909 223.357L303.911 223.348L303.913 223.338L303.915 223.329L303.917 223.319L303.919 223.31L303.921 223.301L303.923 223.291L303.925 223.282L303.927 223.272L303.929 223.263L303.931 223.254L303.933 223.244L303.935 223.235L303.937 223.225L303.939 223.216L303.941 223.207L303.943 223.197L303.945 223.188L303.947 223.178L303.949 223.169L303.951 223.16L303.953 223.15L303.955 223.141L303.957 223.131L303.96 223.122L303.962 223.113L303.964 223.103L303.966 223.094L303.968 223.084L303.97 223.075L303.972 223.066L303.974 223.056L303.976 223.047L303.978 223.037L303.98 223.028L303.982 223.019L303.984 223.009L303.986 223L303.988 222.99L303.99 222.981L303.992 222.972L303.994 222.962L303.996 222.953L303.998 222.943L304 222.934L304.002 222.925L304.004 222.915L304.006 222.906L304.008 222.896L304.01 222.887L304.012 222.878L304.014 222.868L304.016 222.859L304.019 222.849L304.021 222.84L304.023 222.831L304.025 222.821L304.027 222.812L304.029 222.802L304.031 222.793L304.033 222.784L304.035 222.774L304.037 222.765L304.039 222.755L304.041 222.746L304.043 222.737L304.045 222.727L304.047 222.718L304.049 222.708L304.051 222.699L304.053 222.69L304.055 222.68L304.057 222.671L304.059 222.661L304.061 222.652L304.063 222.642L304.065 222.633L304.067 222.624L304.069 222.614L304.071 222.605L304.073 222.595L304.076 222.586L304.078 222.577L304.08 222.567L304.082 222.558L304.084 222.548L304.086 222.539L304.088 222.53L304.09 222.52L304.092 222.511L304.094 222.501L304.096 222.492L304.098 222.483L304.1 222.473L304.102 222.464L304.104 222.454L304.106 222.445L304.108 222.436L304.11 222.426L304.112 222.417L304.114 222.407L304.116 222.398L304.118 222.389L304.12 222.379L304.122 222.37L304.124 222.36L304.126 222.351L304.128 222.342L304.13 222.332L304.133 222.323L304.135 222.313L304.137 222.304L304.139 222.295L304.141 222.285L304.143 222.276L304.145 222.266L304.147 222.257L304.149 222.248L304.151 222.238L304.153 222.229L304.155 222.219L304.157 222.21L304.159 222.201L304.161 222.191L304.163 222.182L304.165 222.172L304.167 222.163L304.169 222.154L304.171 222.144L304.173 222.135L304.175 222.125L304.177 222.116L304.179 222.107L304.181 222.097L304.183 222.088L304.185 222.078L304.187 222.069L304.19 222.06L304.192 222.05L304.194 222.041L304.196 222.031L304.198 222.022L304.2 222.013L304.202 222.003L304.204 221.994L304.206 221.984L304.208 221.975L304.21 221.966L304.212 221.956L304.214 221.947L304.216 221.937L304.218 221.928L304.22 221.919L304.222 221.909L304.224 221.9L304.226 221.89L304.228 221.881L304.23 221.872L304.232 221.862L304.234 221.853L304.236 221.843L304.238 221.834L304.24 221.825L304.242 221.815L304.244 221.806L304.246 221.796L304.249 221.787L304.251 221.778L304.253 221.768L304.255 221.759L304.257 221.749L304.259 221.74L304.261 221.731L304.263 221.721L304.265 221.712L304.267 221.702L304.269 221.693L304.271 221.684L304.273 221.674L304.275 221.665L304.277 221.655L304.279 221.646L304.281 221.637L304.283 221.627L304.285 221.618L304.287 221.608L304.289 221.599L304.291 221.59L304.293 221.58L304.295 221.571L304.297 221.561L304.299 221.552L304.301 221.543L304.303 221.533L304.306 221.524L304.308 221.514L304.31 221.505L304.312 221.496L304.314 221.486L304.316 221.477L304.318 221.467L304.32 221.458L304.322 221.449L304.324 221.439L304.326 221.43L304.328 221.42L304.33 221.411L304.332 221.402L304.334 221.392L304.336 221.383L304.338 221.373L304.34 221.364L304.342 221.355L304.344 221.345L304.346 221.336L304.348 221.326L304.35 221.317L304.352 221.308L304.354 221.298L304.356 221.289L304.358 221.279L304.36 221.27L304.363 221.261L304.365 221.251L304.367 221.242L304.369 221.232L304.371 221.223L304.373 221.214L304.375 221.204L304.377 221.195L304.379 221.185L304.381 221.176L304.383 221.167L304.385 221.157L304.387 221.148L304.389 221.138L304.391 221.129L304.393 221.12L304.395 221.11L304.397 221.101L304.399 221.091L304.401 221.082L304.403 221.073L304.405 221.063L304.407 221.054L304.409 221.044L304.411 221.035L304.413 221.026L304.415 221.016L304.417 221.007L304.42 220.997L304.422 220.988L304.424 220.979L304.426 220.969L306.363 210.797ZM303.146 225.74C303.146 225.74 303.146 225.74 303.147 225.74L303.146 225.74Z" fill="#C6C6C6" fill-opacity="0.5" stroke="#5A5A5A" />
                                </g>
                            </g>
                            <g id="live_home_group" visibility={LiveHomeVisible}>
                                <g id="live_circle_right">
                                    <circle cx="305.5" cy="232.5" r="42.5" fill="black" />
                                    <circle cx="305.5" cy="232.5" r="41.5" stroke="#0085FF" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                                <g id="live_home">
                                    <path id="Vector_9" fill-rule="evenodd" clip-rule="evenodd" d="M316.428 223.265V234.844C316.428 236.241 315.285 237.383 313.889 237.383H308.505C308.323 237.383 308.174 237.234 308.174 237.052V227.561C308.174 227.379 308.025 227.231 307.843 227.231H302.156C301.974 227.231 301.825 227.379 301.825 227.561V237.052C301.825 237.234 301.677 237.383 301.495 237.383H296.112C294.715 237.383 293.572 236.241 293.572 234.844V223.265H289.332C289.031 223.265 288.886 222.898 289.106 222.693L304.774 208.089C304.901 207.97 305.098 207.97 305.226 208.089L311.349 213.797V211.064C311.349 210.882 311.498 210.734 311.68 210.734H314.828C315.01 210.734 315.158 210.882 315.158 211.064V217.347L320.894 222.693C321.114 222.898 320.968 223.265 320.668 223.265H316.428V223.265Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_10" d="M304.56 220.349L304.454 220.838L304.56 220.349ZM304.56 220.349L304.071 220.243M304.56 220.349L304.071 220.243M304.071 220.243L304.071 220.243L304.071 220.243L304.07 220.243L304.07 220.243L304.07 220.243L304.069 220.243L304.069 220.243L304.069 220.243L304.069 220.243L304.068 220.243L304.068 220.243L304.068 220.242L304.067 220.242L304.067 220.242L304.067 220.242L304.067 220.242L304.066 220.242L304.066 220.242L304.066 220.242L304.065 220.242L304.065 220.242L304.065 220.242L304.065 220.242L304.064 220.242L304.064 220.242L304.064 220.242L304.063 220.242L304.063 220.241L304.063 220.241L304.063 220.241L304.062 220.241L304.062 220.241L304.062 220.241L304.061 220.241L304.061 220.241L304.061 220.241L304.061 220.241L304.06 220.241L304.06 220.241L304.06 220.241L304.06 220.241L304.059 220.241L304.059 220.241L304.059 220.241L304.058 220.24L304.058 220.24L304.058 220.24L304.058 220.24L304.057 220.24L304.057 220.24L304.057 220.24L304.056 220.24L304.056 220.24L304.056 220.24L304.056 220.24L304.055 220.24L304.055 220.24L304.055 220.24L304.055 220.24L304.054 220.24L304.054 220.239L304.054 220.239L304.053 220.239L304.053 220.239L304.053 220.239L304.053 220.239L304.052 220.239L304.052 220.239L304.052 220.239L304.051 220.239L304.051 220.239L304.051 220.239L304.051 220.239L304.05 220.239L304.05 220.239L304.05 220.239L304.05 220.239L304.049 220.238L304.049 220.238L304.049 220.238L304.048 220.238L304.048 220.238L304.048 220.238L304.048 220.238L304.047 220.238L304.047 220.238L304.047 220.238L304.047 220.238L304.046 220.238L304.046 220.238L304.046 220.238L304.045 220.238L304.045 220.238L304.045 220.238L304.045 220.237L304.044 220.237L304.044 220.237L304.044 220.237L304.044 220.237L304.043 220.237L304.043 220.237L304.043 220.237L304.043 220.237L304.042 220.237L304.042 220.237L304.042 220.237L304.041 220.237L304.041 220.237L304.041 220.237L304.041 220.237L304.04 220.237L304.04 220.236L304.04 220.236L304.04 220.236L304.039 220.236L304.039 220.236L304.039 220.236L304.039 220.236L304.038 220.236L304.038 220.236L304.038 220.236L304.037 220.236L304.037 220.236L304.037 220.236L304.037 220.236L304.036 220.236L304.036 220.236L304.036 220.236L304.036 220.236L304.035 220.235L304.035 220.235L304.035 220.235L304.035 220.235L304.034 220.235L304.034 220.235L304.034 220.235L304.033 220.235L304.033 220.235L304.033 220.235L304.033 220.235L304.032 220.235L304.032 220.235L304.032 220.235L304.032 220.235L304.031 220.235L304.031 220.235L304.031 220.234L304.031 220.234L304.03 220.234L304.03 220.234L304.03 220.234L304.03 220.234L304.029 220.234L304.029 220.234L304.029 220.234L304.029 220.234L304.028 220.234L304.028 220.234L304.028 220.234L304.027 220.234L304.027 220.234L304.027 220.234L304.027 220.234L304.026 220.234L304.026 220.233L304.026 220.233L304.026 220.233L304.025 220.233L304.025 220.233L304.025 220.233L304.025 220.233L304.024 220.233L304.024 220.233L304.024 220.233L304.024 220.233L304.023 220.233L304.023 220.233L304.023 220.233L304.023 220.233L304.022 220.233L304.022 220.233L304.022 220.233L304.022 220.232L304.021 220.232L304.021 220.232L304.021 220.232L304.021 220.232L304.02 220.232L304.02 220.232L304.02 220.232L304.02 220.232L304.019 220.232L304.019 220.232L304.019 220.232L304.019 220.232L304.018 220.232L304.018 220.232L304.018 220.232L304.018 220.232L304.017 220.232L304.017 220.231L304.017 220.231L304.017 220.231L304.016 220.231L304.016 220.231L304.016 220.231L304.015 220.231L304.015 220.231L304.015 220.231L304.015 220.231L304.014 220.231L304.014 220.231L304.014 220.231L304.014 220.231L304.013 220.231L304.013 220.231L304.013 220.231L304.013 220.231L304.012 220.231L304.012 220.23L304.012 220.23L304.012 220.23L304.011 220.23L304.011 220.23L304.011 220.23L304.011 220.23L304.01 220.23L304.01 220.23L304.01 220.23L304.01 220.23L304.009 220.23L304.009 220.23L304.009 220.23L304.009 220.23L304.008 220.23L304.008 220.23L304.008 220.23L304.008 220.229L304.007 220.229L304.007 220.229L304.007 220.229L304.007 220.229L304.006 220.229L304.006 220.229L304.006 220.229L304.006 220.229L304.006 220.229L304.005 220.229L304.005 220.229L304.005 220.229L304.005 220.229L304.004 220.229L304.004 220.229L304.004 220.229L304.004 220.229L304.003 220.229L304.003 220.228L304.003 220.228L304.003 220.228L304.002 220.228L304.002 220.228L304.002 220.228L304.002 220.228L304.001 220.228L304.001 220.228L304.001 220.228L304.001 220.228L304 220.228L304 220.228L304 220.228L304 220.228L303.999 220.228L303.999 220.228L303.999 220.228L303.999 220.228L303.998 220.227L303.998 220.227L303.998 220.227L303.998 220.227L303.997 220.227L303.997 220.227L303.997 220.227L303.997 220.227L303.996 220.227L303.996 220.227L303.996 220.227L303.996 220.227L303.995 220.227L303.995 220.227L303.995 220.227L303.995 220.227L303.994 220.227L303.994 220.227L303.994 220.227L303.994 220.226L303.994 220.226L303.993 220.226L303.993 220.226L303.993 220.226L303.993 220.226L303.992 220.226L303.992 220.226L303.992 220.226L303.992 220.226L303.991 220.226L303.991 220.226L303.991 220.226L303.991 220.226L303.99 220.226L303.99 220.226L303.99 220.226L303.99 220.226L303.989 220.226L303.989 220.225L303.989 220.225L303.989 220.225L303.988 220.225L303.988 220.225L303.988 220.225L303.988 220.225L303.987 220.225L303.987 220.225L303.987 220.225L303.987 220.225L303.987 220.225L303.986 220.225L303.986 220.225L303.986 220.225L303.986 220.225L303.985 220.225L303.985 220.225L303.985 220.225L303.985 220.224L303.984 220.224L303.984 220.224L303.984 220.224L303.984 220.224L303.983 220.224L303.983 220.224L303.983 220.224L303.983 220.224L303.982 220.224L303.982 220.224L303.982 220.224L303.982 220.224L303.981 220.224L303.981 220.224L303.981 220.224L303.981 220.224L303.981 220.224L303.98 220.224L303.98 220.223L303.98 220.223L303.98 220.223L303.979 220.223L303.979 220.223L303.979 220.223L303.979 220.223L303.978 220.223L303.978 220.223L303.978 220.223L303.978 220.223L303.977 220.223L303.977 220.223L303.977 220.223L303.977 220.223L303.976 220.223L303.976 220.223L303.976 220.223L303.976 220.223L303.976 220.223L303.975 220.222L303.975 220.222L303.975 220.222L303.975 220.222L303.974 220.222L303.974 220.222L303.974 220.222L303.974 220.222L303.973 220.222L303.973 220.222L303.973 220.222L303.973 220.222L303.972 220.222L303.972 220.222L303.972 220.222L303.972 220.222L303.971 220.222L303.971 220.222L303.971 220.222L303.971 220.221L303.971 220.221L303.97 220.221L303.97 220.221L303.97 220.221L303.97 220.221L303.969 220.221L303.969 220.221L303.969 220.221L303.969 220.221L303.968 220.221L303.968 220.221L303.968 220.221L303.968 220.221L303.967 220.221L303.967 220.221L303.967 220.221L303.967 220.221L303.967 220.221L303.966 220.221L303.966 220.22L303.966 220.22L303.966 220.22L303.965 220.22L303.965 220.22L303.965 220.22L303.965 220.22L303.964 220.22L303.964 220.22L303.964 220.22L303.964 220.22L303.963 220.22L303.963 220.22L303.963 220.22L303.963 220.22L303.963 220.22L303.962 220.22L303.962 220.22L303.962 220.22L303.962 220.219L303.961 220.219L303.961 220.219L303.961 220.219L303.961 220.219L303.96 220.219L303.96 220.219L303.96 220.219L303.96 220.219L303.959 220.219L303.959 220.219L303.959 220.219L303.959 220.219L303.959 220.219L303.958 220.219L303.958 220.219L303.958 220.219L303.958 220.219L303.957 220.219L303.957 220.219L303.957 220.218L303.957 220.218L303.956 220.218L303.956 220.218L303.956 220.218L303.956 220.218L303.955 220.218L303.955 220.218L303.955 220.218L303.955 220.218L303.955 220.218L303.954 220.218L303.954 220.218L303.954 220.218L303.954 220.218L303.953 220.218L303.953 220.218L303.953 220.218L303.953 220.218L303.952 220.218L303.952 220.217L303.952 220.217L303.952 220.217L303.952 220.217L303.951 220.217L303.951 220.217L303.951 220.217L303.951 220.217L303.95 220.217L303.95 220.217L303.95 220.217L303.95 220.217L303.949 220.217L303.949 220.217L303.949 220.217L303.949 220.217L303.948 220.217L303.948 220.217L303.948 220.217L303.948 220.216L303.948 220.216L303.947 220.216L303.947 220.216L303.947 220.216L303.947 220.216L303.946 220.216L303.946 220.216L303.946 220.216L303.946 220.216L303.945 220.216L303.945 220.216L303.945 220.216L303.945 220.216L303.944 220.216L303.944 220.216L303.944 220.216L303.944 220.216L303.944 220.216L303.943 220.216L303.943 220.215L303.943 220.215L303.943 220.215L303.942 220.215C303.619 220.145 303.295 220.075 302.97 220.004C302.069 219.807 301.164 219.61 300.259 219.423C301.346 217.895 302.427 216.365 303.509 214.834C303.831 214.378 304.153 213.923 304.475 213.467L304.475 213.467M304.071 220.243L304.475 213.467M310.071 216.813C310.127 216.735 310.166 216.627 310.17 216.533L310.071 216.813ZM310.071 216.813C309.321 217.882 308.566 218.949 307.811 220.015C307.71 220.158 307.609 220.3 307.508 220.443L310.071 216.813ZM304.475 213.467C304.779 213.037 305.084 212.606 305.388 212.176C305.713 211.716 306.038 211.257 306.363 210.797M304.475 213.467L306.363 210.797M306.363 210.797C306.055 212.223 305.746 213.649 305.438 215.074L305.438 215.074L305.438 215.074L305.438 215.075L305.438 215.075L305.438 215.075L305.438 215.075L305.437 215.075L305.437 215.076L305.437 215.076L305.437 215.076L305.437 215.076L305.437 215.077L305.437 215.077L305.437 215.077L305.437 215.077L305.437 215.078L305.437 215.078L305.437 215.078L305.437 215.078L305.437 215.079L305.437 215.079L305.437 215.079L305.437 215.079L305.437 215.08L305.437 215.08L305.436 215.08L305.436 215.08L305.436 215.081L305.436 215.081L305.436 215.081L305.436 215.081L305.436 215.081L305.436 215.082L305.436 215.082L305.436 215.082L305.436 215.082L305.436 215.083L305.436 215.083L305.436 215.083L305.436 215.083L305.436 215.084L305.436 215.084L305.436 215.084L305.436 215.084L305.435 215.085L305.435 215.085L305.435 215.085L305.435 215.085L305.435 215.086L305.435 215.086L305.435 215.086L305.435 215.086L305.435 215.087L305.435 215.087L305.435 215.087L305.435 215.087L305.435 215.088L305.435 215.088L305.435 215.088L305.435 215.088L305.435 215.088L305.435 215.089L305.435 215.089L305.434 215.089L305.434 215.089L305.434 215.09L305.434 215.09L305.434 215.09L305.434 215.09L305.434 215.091L305.434 215.091L305.434 215.091L305.434 215.091L305.434 215.092L305.434 215.092L305.434 215.092L305.434 215.092L305.434 215.093L305.434 215.093L305.434 215.093L305.434 215.093L305.434 215.094L305.433 215.094L305.433 215.094L305.433 215.094L305.433 215.095L305.433 215.095L305.433 215.095L305.433 215.095L305.433 215.095L305.433 215.096L305.433 215.096L305.433 215.096L305.433 215.096L305.433 215.097L305.433 215.097L305.433 215.097L305.433 215.097L305.433 215.098L305.433 215.098L305.433 215.098L305.432 215.098L305.432 215.099L305.432 215.099L305.432 215.099L305.432 215.099L305.432 215.1L305.432 215.1L305.432 215.1L305.432 215.1L305.432 215.101L305.432 215.101L305.432 215.101L305.432 215.101L305.432 215.102L305.432 215.102L305.432 215.102L305.432 215.102L305.432 215.103L305.432 215.103L305.431 215.103L305.431 215.103L305.431 215.104L305.431 215.104L305.431 215.104L305.431 215.104L305.431 215.104L305.431 215.105L305.431 215.105L305.431 215.105L305.431 215.105L305.431 215.106L305.431 215.106L305.431 215.106L305.431 215.106L305.431 215.107L305.431 215.107L305.431 215.107L305.431 215.107L305.43 215.108L305.43 215.108L305.43 215.108L305.43 215.108L305.43 215.109L305.43 215.109L305.43 215.109L305.43 215.109L305.43 215.11L305.43 215.11L305.43 215.11L305.43 215.11L305.43 215.111L305.43 215.111L305.43 215.111L305.43 215.111L305.43 215.112L305.43 215.112L305.43 215.112L305.429 215.112L305.429 215.113L305.429 215.113L305.429 215.113L305.429 215.113L305.429 215.114L305.429 215.114L305.429 215.114L305.429 215.114L305.429 215.115L305.429 215.115L305.429 215.115L305.429 215.115L305.429 215.116L305.429 215.116L305.429 215.116L305.429 215.116L305.429 215.117L305.429 215.117L305.428 215.117L305.428 215.117L305.428 215.118L305.428 215.118L305.428 215.118L305.428 215.118L305.428 215.119L305.428 215.119L305.428 215.119L305.428 215.119L305.428 215.119L305.428 215.12L305.428 215.12L305.428 215.12L305.428 215.12L305.428 215.121L305.428 215.121L305.428 215.121L305.428 215.121L305.427 215.122L305.427 215.122L305.427 215.122L305.427 215.122L305.427 215.123L305.427 215.123L305.427 215.123L305.427 215.123L305.427 215.124L305.427 215.124L305.427 215.124L305.427 215.124L305.427 215.125L305.427 215.125L305.427 215.125L305.427 215.125L305.427 215.126L305.427 215.126L305.426 215.126L305.426 215.126L305.426 215.127L305.426 215.127L305.426 215.127L305.426 215.127L305.426 215.128L305.426 215.128L305.426 215.128L305.426 215.128L305.426 215.129L305.426 215.129L305.426 215.129L305.426 215.129L305.426 215.13L305.426 215.13L305.426 215.13L305.426 215.131L305.425 215.131L305.425 215.131L305.425 215.131L305.425 215.132L305.425 215.132L305.425 215.132L305.425 215.132L305.425 215.133L305.425 215.133L305.425 215.133L305.425 215.133L305.425 215.134L305.425 215.134L305.425 215.134L305.425 215.134L305.425 215.135L305.425 215.135L305.425 215.135L305.425 215.135L305.424 215.136L305.424 215.136L305.424 215.136L305.424 215.136L305.424 215.137L305.424 215.137L305.424 215.137L305.424 215.137L305.424 215.138L305.424 215.138L305.424 215.138L305.424 215.138L305.424 215.139L305.424 215.139L305.424 215.139L305.424 215.139L305.424 215.14L305.424 215.14L305.423 215.14L305.423 215.14L305.423 215.141L305.423 215.141L305.423 215.141L305.423 215.141L305.423 215.142L305.423 215.142L305.423 215.142L305.423 215.142L305.423 215.143L305.423 215.143L305.423 215.143L305.423 215.144L305.423 215.144L305.423 215.144L305.423 215.144L305.423 215.145L305.422 215.145L305.422 215.145L305.422 215.145L305.422 215.146L305.422 215.146L305.422 215.146L305.422 215.146L305.422 215.147L305.422 215.147L305.422 215.147L305.422 215.147L305.422 215.148L305.422 215.148L305.422 215.148L305.422 215.148L305.422 215.149L305.422 215.149L305.421 215.149L305.421 215.149L305.421 215.15L305.421 215.15L305.421 215.15L305.421 215.151L305.421 215.151L305.421 215.151L305.421 215.151L305.421 215.152L305.421 215.152L305.421 215.152L305.421 215.152L305.421 215.153L305.421 215.153L305.421 215.153L305.421 215.153L305.421 215.154L305.42 215.154L305.42 215.154L305.42 215.154L305.42 215.155L305.42 215.155L305.42 215.155L305.42 215.155L305.42 215.156L305.42 215.156L305.42 215.156L305.42 215.157L305.42 215.157L305.42 215.157L305.42 215.157L305.42 215.158L305.42 215.158L305.42 215.158L305.42 215.158L305.419 215.159L305.419 215.159L305.419 215.159L305.419 215.159L305.419 215.16L305.419 215.16L305.419 215.16L305.419 215.161L305.419 215.161L305.419 215.161L305.419 215.161L305.419 215.162L305.419 215.162L305.419 215.162L305.419 215.162L305.419 215.163L305.419 215.163L305.418 215.163L305.418 215.163L305.418 215.164L305.418 215.164L305.418 215.164L305.418 215.165L305.418 215.165L305.418 215.165L305.418 215.165L305.418 215.166L305.418 215.166L305.418 215.166L305.418 215.166L305.418 215.167L305.418 215.167L305.418 215.167L305.418 215.168L305.417 215.168L305.417 215.168L305.417 215.168L305.417 215.169L305.417 215.169L305.417 215.169L305.417 215.169L305.417 215.17L305.417 215.17L305.417 215.17L305.417 215.171L305.417 215.171L305.417 215.171L305.417 215.171L305.417 215.172L305.417 215.172L305.417 215.172L305.416 215.172L305.416 215.173L305.416 215.173L305.416 215.173L305.416 215.174L305.416 215.174L305.416 215.174L305.416 215.174L305.416 215.175L305.416 215.175L305.416 215.175L305.416 215.175L305.416 215.176L305.416 215.176L305.416 215.176L305.416 215.177L305.416 215.177L305.415 215.177L305.415 215.177L305.415 215.178L305.415 215.178L305.415 215.178L305.415 215.178L305.415 215.179L305.415 215.179L305.415 215.179L305.415 215.18L305.415 215.18L305.415 215.18L305.415 215.18L305.415 215.181L305.415 215.181L305.415 215.181L305.414 215.182L305.414 215.182L305.414 215.182L305.414 215.182L305.414 215.183L305.414 215.183L305.414 215.183L305.414 215.183L305.414 215.184L305.414 215.184L305.414 215.184L305.414 215.185L305.414 215.185L305.414 215.185L305.414 215.185L305.414 215.186L305.414 215.186L305.413 215.186L305.413 215.187L305.413 215.187L305.413 215.187L305.413 215.187L305.413 215.188L305.413 215.188L305.413 215.188L305.413 215.189L305.413 215.189L305.413 215.189L305.413 215.189L305.413 215.19L305.413 215.19L305.413 215.19L305.413 215.191L305.412 215.191L305.412 215.191L305.412 215.191L305.412 215.192L305.412 215.192L305.412 215.192L305.412 215.193L305.412 215.193L305.412 215.193L305.412 215.193L305.412 215.194L305.412 215.194L305.412 215.194L305.412 215.195L305.412 215.195L305.412 215.195L305.411 215.195L305.411 215.196L305.411 215.196L305.411 215.196L305.411 215.197L305.411 215.197L305.411 215.197L305.411 215.197L305.411 215.198L305.411 215.198L305.411 215.198L305.411 215.199L305.411 215.199L305.411 215.199L305.411 215.2L305.411 215.2L305.41 215.2L305.41 215.2L305.41 215.201L305.41 215.201L305.41 215.201L305.41 215.202L305.41 215.202L305.41 215.202L305.41 215.202L305.41 215.203L305.41 215.203L305.41 215.203L305.41 215.204L305.41 215.204L305.41 215.204L305.41 215.205L305.409 215.205L305.409 215.205L305.409 215.205L305.409 215.206L305.409 215.206L305.409 215.206L305.409 215.207L305.303 215.695L305.792 215.801L305.792 215.801L305.792 215.801L305.793 215.801L305.793 215.801L305.793 215.801L305.794 215.801L305.794 215.801L305.794 215.802L305.794 215.802L305.795 215.802L305.795 215.802L305.795 215.802L305.795 215.802L305.796 215.802L305.796 215.802L305.796 215.802L305.797 215.802L305.797 215.802L305.797 215.802L305.797 215.802L305.798 215.802L305.798 215.802L305.798 215.802L305.798 215.802L305.799 215.803L305.799 215.803L305.799 215.803L305.8 215.803L305.8 215.803L305.8 215.803L305.8 215.803L305.801 215.803L305.801 215.803L305.801 215.803L305.801 215.803L305.802 215.803L305.802 215.803L305.802 215.803L305.803 215.803L305.803 215.803L305.803 215.803L305.803 215.804L305.804 215.804L305.804 215.804L305.804 215.804L305.804 215.804L305.805 215.804L305.805 215.804L305.805 215.804L305.805 215.804L305.806 215.804L305.806 215.804L305.806 215.804L305.806 215.804L305.807 215.804L305.807 215.804L305.807 215.804L305.808 215.804L305.808 215.804L305.808 215.805L305.808 215.805L305.809 215.805L305.809 215.805L305.809 215.805L305.809 215.805L305.81 215.805L305.81 215.805L305.81 215.805L305.81 215.805L305.811 215.805L305.811 215.805L305.811 215.805L305.812 215.805L305.812 215.805L305.812 215.805L305.812 215.805L305.813 215.806L305.813 215.806L305.813 215.806L305.813 215.806L305.814 215.806L305.814 215.806L305.814 215.806L305.814 215.806L305.815 215.806L305.815 215.806L305.815 215.806L305.815 215.806L305.816 215.806L305.816 215.806L305.816 215.806L305.816 215.806L305.817 215.806L305.817 215.806L305.817 215.807L305.818 215.807L305.818 215.807L305.818 215.807L305.818 215.807L305.819 215.807L305.819 215.807L305.819 215.807L305.819 215.807L305.82 215.807L305.82 215.807L305.82 215.807L305.82 215.807L305.821 215.807L305.821 215.807L305.821 215.807L305.821 215.807L305.822 215.807L305.822 215.808L305.822 215.808L305.822 215.808L305.823 215.808L305.823 215.808L305.823 215.808L305.823 215.808L305.824 215.808L305.824 215.808L305.824 215.808L305.824 215.808L305.825 215.808L305.825 215.808L305.825 215.808L305.825 215.808L305.826 215.808L305.826 215.808L305.826 215.808L305.826 215.809L305.827 215.809L305.827 215.809L305.827 215.809L305.828 215.809L305.828 215.809L305.828 215.809L305.828 215.809L305.829 215.809L305.829 215.809L305.829 215.809L305.829 215.809L305.83 215.809L305.83 215.809L305.83 215.809L305.83 215.809L305.831 215.809L305.831 215.809L305.831 215.81L305.831 215.81L305.832 215.81L305.832 215.81L305.832 215.81L305.832 215.81L305.833 215.81L305.833 215.81L305.833 215.81L305.833 215.81L305.834 215.81L305.834 215.81L305.834 215.81L305.834 215.81L305.835 215.81L305.835 215.81L305.835 215.81L305.835 215.81L305.836 215.811L305.836 215.811L305.836 215.811L305.836 215.811L305.837 215.811L305.837 215.811L305.837 215.811L305.837 215.811L305.838 215.811L305.838 215.811L305.838 215.811L305.838 215.811L305.839 215.811L305.839 215.811L305.839 215.811L305.839 215.811L305.84 215.811L305.84 215.811L305.84 215.811L305.84 215.812L305.841 215.812L305.841 215.812L305.841 215.812L305.841 215.812L305.842 215.812L305.842 215.812L305.842 215.812L305.842 215.812L305.843 215.812L305.843 215.812L305.843 215.812L305.843 215.812L305.844 215.812L305.844 215.812L305.844 215.812L305.844 215.812L305.845 215.812L305.845 215.812L305.845 215.813L305.845 215.813L305.846 215.813L305.846 215.813L305.846 215.813L305.846 215.813L305.846 215.813L305.847 215.813L305.847 215.813L305.847 215.813L305.847 215.813L305.848 215.813L305.848 215.813L305.848 215.813L305.848 215.813L305.849 215.813L305.849 215.813L305.849 215.813L305.849 215.814L305.85 215.814L305.85 215.814L305.85 215.814L305.85 215.814L305.851 215.814L305.851 215.814L305.851 215.814L305.851 215.814L305.852 215.814L305.852 215.814L305.852 215.814L305.852 215.814L305.853 215.814L305.853 215.814L305.853 215.814L305.853 215.814L305.854 215.814L305.854 215.814L305.854 215.815L305.854 215.815L305.855 215.815L305.855 215.815L305.855 215.815L305.855 215.815L305.856 215.815L305.856 215.815L305.856 215.815L305.856 215.815L305.856 215.815L305.857 215.815L305.857 215.815L305.857 215.815L305.857 215.815L305.858 215.815L305.858 215.815L305.858 215.815L305.858 215.815L305.859 215.816L305.859 215.816L305.859 215.816L305.859 215.816L305.86 215.816L305.86 215.816L305.86 215.816L305.86 215.816L305.861 215.816L305.861 215.816L305.861 215.816L305.861 215.816L305.862 215.816L305.862 215.816L305.862 215.816L305.862 215.816L305.863 215.816L305.863 215.816L305.863 215.816L305.863 215.816L305.863 215.817L305.864 215.817L305.864 215.817L305.864 215.817L305.864 215.817L305.865 215.817L305.865 215.817L305.865 215.817L305.865 215.817L305.866 215.817L305.866 215.817L305.866 215.817L305.866 215.817L305.867 215.817L305.867 215.817L305.867 215.817L305.867 215.817L305.868 215.817L305.868 215.817L305.868 215.818L305.868 215.818L305.868 215.818L305.869 215.818L305.869 215.818L305.869 215.818L305.869 215.818L305.87 215.818L305.87 215.818L305.87 215.818L305.87 215.818L305.871 215.818L305.871 215.818L305.871 215.818L305.871 215.818L305.872 215.818L305.872 215.818L305.872 215.818L305.872 215.818L305.873 215.819L305.873 215.819L305.873 215.819L305.873 215.819L305.873 215.819L305.874 215.819L305.874 215.819L305.874 215.819L305.874 215.819L305.875 215.819L305.875 215.819L305.875 215.819L305.875 215.819L305.876 215.819L305.876 215.819L305.876 215.819L305.876 215.819L305.877 215.819L305.877 215.819L305.877 215.819L305.877 215.82L305.877 215.82L305.878 215.82L305.878 215.82L305.878 215.82L305.878 215.82L305.879 215.82L305.879 215.82L305.879 215.82L305.879 215.82L305.88 215.82L305.88 215.82L305.88 215.82L305.88 215.82L305.881 215.82L305.881 215.82L305.881 215.82L305.881 215.82L305.881 215.82L305.882 215.82L305.882 215.821L305.882 215.821L305.882 215.821L305.883 215.821L305.883 215.821L305.883 215.821L305.883 215.821L305.884 215.821L305.884 215.821L305.884 215.821L305.884 215.821L305.885 215.821L305.885 215.821L305.885 215.821L305.885 215.821L305.885 215.821L305.886 215.821L305.886 215.821L305.886 215.821L305.886 215.822L305.887 215.822L305.887 215.822L305.887 215.822L305.887 215.822L305.888 215.822L305.888 215.822L305.888 215.822L305.888 215.822L305.888 215.822L305.889 215.822L305.889 215.822L305.889 215.822L305.889 215.822L305.89 215.822L305.89 215.822L305.89 215.822L305.89 215.822L305.891 215.822L305.891 215.822L305.891 215.823L305.891 215.823L305.892 215.823L305.892 215.823L305.892 215.823L305.892 215.823L305.892 215.823L305.893 215.823L305.893 215.823L305.893 215.823L305.893 215.823L305.894 215.823L305.894 215.823L305.894 215.823L305.894 215.823L305.895 215.823L305.895 215.823L305.895 215.823L305.895 215.823L305.895 215.823L305.896 215.824L305.896 215.824L305.896 215.824L305.896 215.824L305.897 215.824L305.897 215.824L305.897 215.824L305.897 215.824L305.898 215.824L305.898 215.824L305.898 215.824L305.898 215.824L305.898 215.824L305.899 215.824L305.899 215.824L305.899 215.824L305.899 215.824L305.9 215.824L305.9 215.824L305.9 215.824L305.9 215.825L305.901 215.825L305.901 215.825L305.901 215.825L305.901 215.825L305.902 215.825L305.902 215.825L305.902 215.825L305.902 215.825L305.902 215.825L305.903 215.825L305.903 215.825L305.903 215.825L305.903 215.825L305.904 215.825L305.904 215.825L305.904 215.825L305.904 215.825L305.905 215.825L305.905 215.825L305.905 215.826L305.905 215.826L305.905 215.826L305.906 215.826L305.906 215.826L305.906 215.826L305.906 215.826L305.907 215.826L305.907 215.826L305.907 215.826L305.907 215.826L305.908 215.826L305.908 215.826L305.908 215.826L305.908 215.826L305.908 215.826L305.909 215.826L305.909 215.826L305.909 215.826L305.909 215.826L305.91 215.827L305.91 215.827L305.91 215.827L305.91 215.827L305.911 215.827L305.911 215.827L305.911 215.827L305.911 215.827L305.911 215.827L305.912 215.827L305.912 215.827L305.912 215.827L305.912 215.827L305.913 215.827L305.913 215.827L305.913 215.827L305.913 215.827L305.914 215.827L305.914 215.827L305.914 215.827L305.914 215.828L305.914 215.828L305.915 215.828L305.915 215.828L305.915 215.828L305.915 215.828L305.916 215.828L305.916 215.828L305.916 215.828L305.916 215.828L305.917 215.828L305.917 215.828L305.917 215.828L305.917 215.828L305.917 215.828C307.142 216.093 308.367 216.359 309.592 216.625C308.865 217.66 308.134 218.693 307.403 219.726C307.302 219.869 307.201 220.011 307.1 220.154L307.1 220.154C305.9 221.852 304.7 223.549 303.5 225.246L303.502 225.237L303.504 225.228L303.506 225.218L303.508 225.209L303.51 225.2L303.512 225.19L303.514 225.181L303.516 225.171L303.518 225.162L303.52 225.153L303.522 225.143L303.524 225.134L303.526 225.124L303.528 225.115L303.53 225.106L303.532 225.096L303.534 225.087L303.536 225.077L303.538 225.068L303.54 225.059L303.542 225.049L303.544 225.04L303.546 225.03L303.548 225.021L303.55 225.012L303.552 225.002L303.554 224.993L303.556 224.983L303.559 224.974L303.561 224.965L303.563 224.955L303.565 224.946L303.567 224.936L303.569 224.927L303.571 224.918L303.573 224.908L303.575 224.899L303.577 224.889L303.579 224.88L303.581 224.871L303.583 224.861L303.585 224.852L303.587 224.842L303.589 224.833L303.591 224.824L303.593 224.814L303.595 224.805L303.597 224.795L303.599 224.786L303.601 224.777L303.603 224.767L303.605 224.758L303.607 224.748L303.609 224.739L303.611 224.73L303.613 224.72L303.616 224.711L303.618 224.701L303.62 224.692L303.622 224.683L303.624 224.673L303.626 224.664L303.628 224.654L303.63 224.645L303.632 224.635L303.634 224.626L303.636 224.617L303.638 224.607L303.64 224.598L303.642 224.588L303.644 224.579L303.646 224.57L303.648 224.56L303.65 224.551L303.652 224.541L303.654 224.532L303.656 224.523L303.658 224.513L303.66 224.504L303.662 224.494L303.664 224.485L303.666 224.476L303.668 224.466L303.67 224.457L303.673 224.447L303.675 224.438L303.677 224.429L303.679 224.419L303.681 224.41L303.683 224.4L303.685 224.391L303.687 224.382L303.689 224.372L303.691 224.363L303.693 224.353L303.695 224.344L303.697 224.335L303.699 224.325L303.701 224.316L303.703 224.306L303.705 224.297L303.707 224.288L303.709 224.278L303.711 224.269L303.713 224.259L303.715 224.25L303.717 224.241L303.719 224.231L303.721 224.222L303.723 224.212L303.725 224.203L303.727 224.194L303.729 224.184L303.732 224.175L303.734 224.165L303.736 224.156L303.738 224.147L303.74 224.137L303.742 224.128L303.744 224.118L303.746 224.109L303.748 224.1L303.75 224.09L303.752 224.081L303.754 224.071L303.756 224.062L303.758 224.053L303.76 224.043L303.762 224.034L303.764 224.024L303.766 224.015L303.768 224.006L303.77 223.996L303.772 223.987L303.774 223.977L303.776 223.968L303.778 223.959L303.78 223.949L303.782 223.94L303.784 223.93L303.786 223.921L303.789 223.912L303.791 223.902L303.793 223.893L303.795 223.883L303.797 223.874L303.799 223.865L303.801 223.855L303.803 223.846L303.805 223.836L303.807 223.827L303.809 223.818L303.811 223.808L303.813 223.799L303.815 223.789L303.817 223.78L303.819 223.771L303.821 223.761L303.823 223.752L303.825 223.742L303.827 223.733L303.829 223.724L303.831 223.714L303.833 223.705L303.835 223.695L303.837 223.686L303.839 223.677L303.841 223.667L303.843 223.658L303.846 223.648L303.848 223.639L303.85 223.63L303.852 223.62L303.854 223.611L303.856 223.601L303.858 223.592L303.86 223.583L303.862 223.573L303.864 223.564L303.866 223.554L303.868 223.545L303.87 223.536L303.872 223.526L303.874 223.517L303.876 223.507L303.878 223.498L303.88 223.489L303.882 223.479L303.884 223.47L303.886 223.46L303.888 223.451L303.89 223.442L303.892 223.432L303.894 223.423L303.896 223.413L303.898 223.404L303.9 223.395L303.903 223.385L303.905 223.376L303.907 223.366L303.909 223.357L303.911 223.348L303.913 223.338L303.915 223.329L303.917 223.319L303.919 223.31L303.921 223.301L303.923 223.291L303.925 223.282L303.927 223.272L303.929 223.263L303.931 223.254L303.933 223.244L303.935 223.235L303.937 223.225L303.939 223.216L303.941 223.207L303.943 223.197L303.945 223.188L303.947 223.178L303.949 223.169L303.951 223.16L303.953 223.15L303.955 223.141L303.957 223.131L303.96 223.122L303.962 223.113L303.964 223.103L303.966 223.094L303.968 223.084L303.97 223.075L303.972 223.066L303.974 223.056L303.976 223.047L303.978 223.037L303.98 223.028L303.982 223.019L303.984 223.009L303.986 223L303.988 222.99L303.99 222.981L303.992 222.972L303.994 222.962L303.996 222.953L303.998 222.943L304 222.934L304.002 222.925L304.004 222.915L304.006 222.906L304.008 222.896L304.01 222.887L304.012 222.878L304.014 222.868L304.016 222.859L304.019 222.849L304.021 222.84L304.023 222.831L304.025 222.821L304.027 222.812L304.029 222.802L304.031 222.793L304.033 222.784L304.035 222.774L304.037 222.765L304.039 222.755L304.041 222.746L304.043 222.737L304.045 222.727L304.047 222.718L304.049 222.708L304.051 222.699L304.053 222.69L304.055 222.68L304.057 222.671L304.059 222.661L304.061 222.652L304.063 222.642L304.065 222.633L304.067 222.624L304.069 222.614L304.071 222.605L304.073 222.595L304.076 222.586L304.078 222.577L304.08 222.567L304.082 222.558L304.084 222.548L304.086 222.539L304.088 222.53L304.09 222.52L304.092 222.511L304.094 222.501L304.096 222.492L304.098 222.483L304.1 222.473L304.102 222.464L304.104 222.454L304.106 222.445L304.108 222.436L304.11 222.426L304.112 222.417L304.114 222.407L304.116 222.398L304.118 222.389L304.12 222.379L304.122 222.37L304.124 222.36L304.126 222.351L304.128 222.342L304.13 222.332L304.133 222.323L304.135 222.313L304.137 222.304L304.139 222.295L304.141 222.285L304.143 222.276L304.145 222.266L304.147 222.257L304.149 222.248L304.151 222.238L304.153 222.229L304.155 222.219L304.157 222.21L304.159 222.201L304.161 222.191L304.163 222.182L304.165 222.172L304.167 222.163L304.169 222.154L304.171 222.144L304.173 222.135L304.175 222.125L304.177 222.116L304.179 222.107L304.181 222.097L304.183 222.088L304.185 222.078L304.187 222.069L304.19 222.06L304.192 222.05L304.194 222.041L304.196 222.031L304.198 222.022L304.2 222.013L304.202 222.003L304.204 221.994L304.206 221.984L304.208 221.975L304.21 221.966L304.212 221.956L304.214 221.947L304.216 221.937L304.218 221.928L304.22 221.919L304.222 221.909L304.224 221.9L304.226 221.89L304.228 221.881L304.23 221.872L304.232 221.862L304.234 221.853L304.236 221.843L304.238 221.834L304.24 221.825L304.242 221.815L304.244 221.806L304.246 221.796L304.249 221.787L304.251 221.778L304.253 221.768L304.255 221.759L304.257 221.749L304.259 221.74L304.261 221.731L304.263 221.721L304.265 221.712L304.267 221.702L304.269 221.693L304.271 221.684L304.273 221.674L304.275 221.665L304.277 221.655L304.279 221.646L304.281 221.637L304.283 221.627L304.285 221.618L304.287 221.608L304.289 221.599L304.291 221.59L304.293 221.58L304.295 221.571L304.297 221.561L304.299 221.552L304.301 221.543L304.303 221.533L304.306 221.524L304.308 221.514L304.31 221.505L304.312 221.496L304.314 221.486L304.316 221.477L304.318 221.467L304.32 221.458L304.322 221.449L304.324 221.439L304.326 221.43L304.328 221.42L304.33 221.411L304.332 221.402L304.334 221.392L304.336 221.383L304.338 221.373L304.34 221.364L304.342 221.355L304.344 221.345L304.346 221.336L304.348 221.326L304.35 221.317L304.352 221.308L304.354 221.298L304.356 221.289L304.358 221.279L304.36 221.27L304.363 221.261L304.365 221.251L304.367 221.242L304.369 221.232L304.371 221.223L304.373 221.214L304.375 221.204L304.377 221.195L304.379 221.185L304.381 221.176L304.383 221.167L304.385 221.157L304.387 221.148L304.389 221.138L304.391 221.129L304.393 221.12L304.395 221.11L304.397 221.101L304.399 221.091L304.401 221.082L304.403 221.073L304.405 221.063L304.407 221.054L304.409 221.044L304.411 221.035L304.413 221.026L304.415 221.016L304.417 221.007L304.42 220.997L304.422 220.988L304.424 220.979L304.426 220.969L306.363 210.797ZM303.146 225.74C303.146 225.74 303.146 225.74 303.147 225.74L303.146 225.74Z" fill="white" fill-opacity="0.9" stroke="#5A5A5A" />
                                </g>
                            </g>
                            <g id="blur_grid_group" visibility={BlurGridVisible}>
                                <g id="blur_circle_left" filter="url(#filter2_dd)">
                                    <circle cx="54.5" cy="232.5" r="42.5" fill="black" />
                                    <circle cx="54.5" cy="232.5" r="41.5" stroke="#FF003D" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                            </g>
                            <g id="dead_grid_group">
                                <g id="dead_circle_left">
                                    <circle cx="54.5" cy="232.5" r="42.5" fill="black" />
                                    <circle cx="54.5" cy="232.5" r="41.5" stroke="#C6C6C6" stroke-opacity="0.5" stroke-width="2" />
                                </g>
                                <g id="dead_grid">
                                    <path id="Vector_11" fill-rule="evenodd" clip-rule="evenodd" d="M66.9633 210.635C66.9292 210.635 66.902 210.635 66.8744 210.635C65.9991 210.635 65.1225 210.631 64.2473 210.639C64.0456 210.641 63.8995 210.461 63.9944 210.243C64.6504 208.736 65.3003 207.227 65.9522 205.719C66.2912 204.934 66.6307 204.149 66.9697 203.363C67.0278 203.23 67.1388 203.163 67.2586 203.188C67.3885 203.215 67.4626 203.316 67.4626 203.465C67.4635 204.563 67.4635 205.66 67.4635 206.756C67.4635 206.784 67.4635 206.812 67.4635 206.847C67.4958 206.847 67.523 206.847 67.5501 206.847C68.4231 206.847 69.2964 206.847 70.1698 206.847C70.3274 206.847 70.4306 206.91 70.4536 207.039C70.4646 207.1 70.454 207.175 70.4287 207.234C70.0409 208.14 69.6488 209.045 69.2573 209.95C68.6589 211.335 68.0605 212.719 67.4622 214.104C67.3926 214.267 67.2751 214.332 67.1369 214.287C67.0374 214.255 66.9711 214.17 66.9637 214.065C66.9624 214.042 66.9633 214.017 66.9633 213.995C66.9633 212.905 66.9633 211.814 66.9633 210.724C66.9633 210.697 66.9633 210.67 66.9633 210.635Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_12" d="M37 231.856H38.6585V233.488C38.6585 233.937 38.2854 234.304 37.8293 234.304C37.3732 234.304 37 233.937 37 233.488V231.856ZM69.3415 233.488C69.3415 233.937 69.7146 234.304 70.1707 234.304C70.6268 234.304 71 233.937 71 233.488V231.856H69.3415V233.488ZM46.5117 230.223L46.9595 226.016L37.2861 230.223H46.5117ZM61.0405 226.016L61.4883 230.223H70.7139L61.0405 226.016ZM37.8293 223.285C38.2854 223.285 38.6585 222.918 38.6585 222.469V220.837H37V222.469C37 222.918 37.3732 223.285 37.8293 223.285ZM69.3415 220.837V222.469C69.3415 222.918 69.7146 223.285 70.1707 223.285C70.6268 223.285 71 222.918 71 222.469V220.837H69.3415ZM48.1951 214.458L37.2861 219.204H47.6893L48.1951 214.458ZM70.7139 219.204L59.8049 214.458L60.3107 219.204H70.7139ZM47.1544 239.801L52.7727 234.741L48.1412 230.57L47.1544 239.801ZM59.3446 228.819L54 224.004L48.6554 228.819L54 233.635L59.3446 228.819ZM59.8588 230.57L55.2273 234.741L60.8456 239.801L59.8588 230.57ZM49.2939 219.768L48.5559 226.697L52.7727 222.898L49.2939 219.768ZM49.5137 217.751L54 221.792L58.4863 217.751L58.25 215.531H49.75L49.5137 217.751ZM55.2273 222.898L59.4441 226.697L58.702 219.768L55.2273 222.898ZM50.1854 211.45L49.9241 213.899H58.0759L57.8146 211.45H50.1854ZM59.3902 207.369H48.6098V209.818H59.3902V207.369ZM63.9512 240.834H59.5354L54 235.847L48.4646 240.834H44.0488C43.5927 240.834 43.2195 241.201 43.2195 241.65C43.2195 242.099 43.5927 242.466 44.0488 242.466H63.9512C64.4073 242.466 64.7805 242.099 64.7805 241.65C64.7805 241.201 64.4073 240.834 63.9512 240.834Z" fill="#C6C6C6" fill-opacity="0.5" />
                                </g>
                            </g>
                            <g id="live_grid_group" visibility={LiveGridVisible}>
                                <g id="live_circle_left">
                                    <circle cx="54.5" cy="232.5" r="42.5" fill="black" />
                                    <circle cx="54.5" cy="232.5" r="41.5" stroke="#FF003D" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                                <g id="live_grid">
                                    <path id="Vector_13" fill-rule="evenodd" clip-rule="evenodd" d="M66.9633 210.635C66.9292 210.635 66.902 210.635 66.8744 210.635C65.9991 210.635 65.1225 210.631 64.2473 210.639C64.0456 210.641 63.8995 210.461 63.9944 210.243C64.6504 208.736 65.3003 207.227 65.9522 205.719C66.2912 204.934 66.6307 204.149 66.9697 203.363C67.0278 203.23 67.1388 203.163 67.2586 203.188C67.3885 203.215 67.4626 203.316 67.4626 203.465C67.4635 204.563 67.4635 205.66 67.4635 206.756C67.4635 206.784 67.4635 206.812 67.4635 206.847C67.4958 206.847 67.523 206.847 67.5501 206.847C68.4231 206.847 69.2964 206.847 70.1698 206.847C70.3274 206.847 70.4306 206.91 70.4536 207.039C70.4646 207.1 70.454 207.175 70.4287 207.234C70.0409 208.14 69.6488 209.045 69.2573 209.95C68.6589 211.335 68.0605 212.719 67.4622 214.104C67.3926 214.267 67.2751 214.332 67.1369 214.287C67.0374 214.255 66.9711 214.17 66.9637 214.065C66.9624 214.042 66.9633 214.017 66.9633 213.995C66.9633 212.905 66.9633 211.814 66.9633 210.724C66.9633 210.697 66.9633 210.67 66.9633 210.635Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_14" d="M37 231.856H38.6585V233.488C38.6585 233.937 38.2854 234.304 37.8293 234.304C37.3732 234.304 37 233.937 37 233.488V231.856ZM69.3415 233.488C69.3415 233.937 69.7146 234.304 70.1707 234.304C70.6268 234.304 71 233.937 71 233.488V231.856H69.3415V233.488ZM46.5117 230.223L46.9595 226.016L37.2861 230.223H46.5117ZM61.0405 226.016L61.4883 230.223H70.7139L61.0405 226.016ZM37.8293 223.285C38.2854 223.285 38.6585 222.918 38.6585 222.469V220.837H37V222.469C37 222.918 37.3732 223.285 37.8293 223.285ZM69.3415 220.837V222.469C69.3415 222.918 69.7146 223.285 70.1707 223.285C70.6268 223.285 71 222.918 71 222.469V220.837H69.3415ZM48.1951 214.458L37.2861 219.204H47.6893L48.1951 214.458ZM70.7139 219.204L59.8049 214.458L60.3107 219.204H70.7139ZM47.1544 239.801L52.7727 234.741L48.1412 230.57L47.1544 239.801ZM59.3446 228.819L54 224.004L48.6554 228.819L54 233.635L59.3446 228.819ZM59.8588 230.57L55.2273 234.741L60.8456 239.801L59.8588 230.57ZM49.2939 219.768L48.5559 226.697L52.7727 222.898L49.2939 219.768ZM49.5137 217.751L54 221.792L58.4863 217.751L58.25 215.531H49.75L49.5137 217.751ZM55.2273 222.898L59.4441 226.697L58.702 219.768L55.2273 222.898ZM50.1854 211.45L49.9241 213.899H58.0759L57.8146 211.45H50.1854ZM59.3902 207.369H48.6098V209.818H59.3902V207.369ZM63.9512 240.834H59.5354L54 235.847L48.4646 240.834H44.0488C43.5927 240.834 43.2195 241.201 43.2195 241.65C43.2195 242.099 43.5927 242.466 44.0488 242.466H63.9512C64.4073 242.466 64.7805 242.099 64.7805 241.65C64.7805 241.201 64.4073 240.834 63.9512 240.834Z" fill="white" fill-opacity="0.9" />
                                </g>
                            </g>
                            <g id="blur_solar_group" visibility={BlurSolarVisible}>
                                <g id="blur_circle_top" filter="url(#filter3_dd)">
                                    <circle cx="180.5" cy="96.5" r="42.5" fill="black" />
                                    <circle cx="180.5" cy="96.5" r="41.5" stroke="#FFF500" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                            </g>
                            <g id="dead_solar_group">
                                <g id="dead_circle_top">
                                    <circle cx="180.5" cy="96.5" r="42.5" fill="black" />
                                    <circle cx="180.5" cy="96.5" r="41.5" stroke="#C6C6C6" stroke-opacity="0.5" stroke-width="2" />
                                </g>
                                <g id="dead_solar">
                                    <path id="Vector_15" fill-rule="evenodd" clip-rule="evenodd" d="M170.115 75.6234C172.29 75.6234 174.155 77.4883 174.155 79.8195C174.155 81.9952 172.29 83.8601 170.115 83.8601C167.783 83.8601 165.919 81.9952 165.919 79.8195C165.919 77.4883 167.783 75.6234 170.115 75.6234Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_16" d="M169.493 71.5828C169.493 70.8057 170.581 70.8057 170.581 71.5828V73.9139C170.581 74.691 169.493 74.691 169.493 73.9139V71.5828Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_17" d="M163.898 74.3802C163.277 73.7585 164.054 72.9815 164.675 73.6031L166.385 75.3126C166.851 75.7788 166.074 76.5559 165.608 76.0897L163.898 74.3802Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_18" d="M161.878 80.2857C161.101 80.2857 161.101 79.1978 161.878 79.1978H164.209C164.986 79.1978 164.986 80.2857 164.209 80.2857H161.878Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_19" d="M164.675 86.0358C164.054 86.502 163.277 85.725 163.898 85.1034L165.608 83.3939C166.074 82.9276 166.851 83.7047 166.385 84.3263L164.675 86.0358Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_20" d="M178.351 79.1978C178.973 79.1978 178.973 80.2857 178.351 80.2857H175.865C175.088 80.2857 175.088 79.1978 175.865 79.1978H178.351Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_21" d="M175.399 73.6031C176.02 72.9815 176.797 73.7585 176.331 74.3802L174.622 76.0897C174 76.5559 173.223 75.7788 173.689 75.3126L175.399 73.6031Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_22" fill-rule="evenodd" clip-rule="evenodd" d="M167.257 101H157L163.216 94.939H172.075L167.257 101Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_23" fill-rule="evenodd" clip-rule="evenodd" d="M177.825 101H168.345L173.007 94.939H180.933L177.825 101Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_24" fill-rule="evenodd" clip-rule="evenodd" d="M188.859 101H178.913L181.865 94.939H190.257L188.859 101Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_25" fill-rule="evenodd" clip-rule="evenodd" d="M200.048 94.939L200.204 101H189.947L191.034 94.939H200.048Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_26" fill-rule="evenodd" clip-rule="evenodd" d="M172.852 94.0067H164.304L168.189 90.2769H175.804L172.852 94.0067Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_27" fill-rule="evenodd" clip-rule="evenodd" d="M181.399 94.0067H173.629L176.581 90.2769H183.419L181.399 94.0067Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_28" fill-rule="evenodd" clip-rule="evenodd" d="M190.413 94.0067H182.332L184.041 90.2769H191.19L190.413 94.0067Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_29" fill-rule="evenodd" clip-rule="evenodd" d="M199.893 90.2769V94.0067H191.345L191.967 90.2769H199.893Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_30" fill-rule="evenodd" clip-rule="evenodd" d="M192.744 86.3917H199.737V89.4998H192.122L192.744 86.3917Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_31" fill-rule="evenodd" clip-rule="evenodd" d="M185.906 86.3917H192.122L191.345 89.4998H184.507L185.906 86.3917Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_32" fill-rule="evenodd" clip-rule="evenodd" d="M179.534 86.3917H185.44L183.73 89.4998H177.203L179.534 86.3917Z" fill="#C6C6C6" fill-opacity="0.5" />
                                    <path id="Vector_33" fill-rule="evenodd" clip-rule="evenodd" d="M172.23 86.3917H178.913L176.426 89.4998H168.966L172.23 86.3917Z" fill="#C6C6C6" fill-opacity="0.5" />
                                </g>
                            </g>
                            <g id="live_solar_group" visibility={LiveSolarVisible}>
                                <g id="live_circle_top">
                                    <circle cx="180.5" cy="96.5" r="42.5" fill="black" />
                                    <circle cx="180.5" cy="96.5" r="41.5" stroke="#FFF500" stroke-opacity="0.9" stroke-width="2" />
                                </g>
                                <g id="live_solar">
                                    <path id="Vector_34" fill-rule="evenodd" clip-rule="evenodd" d="M170.115 75.6234C172.29 75.6234 174.155 77.4883 174.155 79.8195C174.155 81.9952 172.29 83.8601 170.115 83.8601C167.783 83.8601 165.919 81.9952 165.919 79.8195C165.919 77.4883 167.783 75.6234 170.115 75.6234Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_35" d="M169.493 71.5828C169.493 70.8057 170.581 70.8057 170.581 71.5828V73.9139C170.581 74.691 169.493 74.691 169.493 73.9139V71.5828Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_36" d="M163.898 74.3802C163.277 73.7585 164.054 72.9815 164.675 73.6031L166.385 75.3126C166.851 75.7788 166.074 76.5559 165.608 76.0897L163.898 74.3802Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_37" d="M161.878 80.2857C161.101 80.2857 161.101 79.1978 161.878 79.1978H164.209C164.986 79.1978 164.986 80.2857 164.209 80.2857H161.878Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_38" d="M164.675 86.0358C164.054 86.502 163.277 85.725 163.898 85.1034L165.608 83.3939C166.074 82.9276 166.851 83.7047 166.385 84.3263L164.675 86.0358Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_39" d="M178.351 79.1978C178.973 79.1978 178.973 80.2857 178.351 80.2857H175.865C175.088 80.2857 175.088 79.1978 175.865 79.1978H178.351Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_40" d="M175.399 73.6031C176.02 72.9815 176.797 73.7585 176.331 74.3802L174.622 76.0897C174 76.5559 173.223 75.7788 173.689 75.3126L175.399 73.6031Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_41" fill-rule="evenodd" clip-rule="evenodd" d="M167.257 101H157L163.216 94.939H172.075L167.257 101Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_42" fill-rule="evenodd" clip-rule="evenodd" d="M177.825 101H168.345L173.007 94.939H180.933L177.825 101Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_43" fill-rule="evenodd" clip-rule="evenodd" d="M188.859 101H178.913L181.865 94.939H190.257L188.859 101Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_44" fill-rule="evenodd" clip-rule="evenodd" d="M200.048 94.939L200.204 101H189.947L191.034 94.939H200.048Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_45" fill-rule="evenodd" clip-rule="evenodd" d="M172.852 94.0067H164.304L168.189 90.2769H175.804L172.852 94.0067Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_46" fill-rule="evenodd" clip-rule="evenodd" d="M181.399 94.0067H173.629L176.581 90.2769H183.419L181.399 94.0067Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_47" fill-rule="evenodd" clip-rule="evenodd" d="M190.413 94.0067H182.332L184.041 90.2769H191.19L190.413 94.0067Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_48" fill-rule="evenodd" clip-rule="evenodd" d="M199.893 90.2769V94.0067H191.345L191.967 90.2769H199.893Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_49" fill-rule="evenodd" clip-rule="evenodd" d="M192.744 86.3917H199.737V89.4998H192.122L192.744 86.3917Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_50" fill-rule="evenodd" clip-rule="evenodd" d="M185.906 86.3917H192.122L191.345 89.4998H184.507L185.906 86.3917Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_51" fill-rule="evenodd" clip-rule="evenodd" d="M179.534 86.3917H185.44L183.73 89.4998H177.203L179.534 86.3917Z" fill="white" fill-opacity="0.9" />
                                    <path id="Vector_52" fill-rule="evenodd" clip-rule="evenodd" d="M172.23 86.3917H178.913L176.426 89.4998H168.966L172.23 86.3917Z" fill="white" fill-opacity="0.9" />
                                </g>
                            </g>
                        </g>
                        <path id="Solar" d="M167.205 35.2466C165.999 34.8999 165.12 34.4751 164.568 33.9722C164.021 33.4644 163.748 32.8394 163.748 32.0972C163.748 31.2573 164.082 30.564 164.751 30.0171C165.425 29.4653 166.299 29.1895 167.373 29.1895C168.105 29.1895 168.757 29.3311 169.329 29.6143C169.905 29.8975 170.349 30.2881 170.662 30.7861C170.979 31.2842 171.138 31.8286 171.138 32.4194H169.724C169.724 31.7749 169.519 31.2695 169.109 30.9033C168.699 30.5322 168.12 30.3467 167.373 30.3467C166.68 30.3467 166.138 30.5005 165.747 30.8081C165.361 31.1108 165.168 31.5332 165.168 32.0752C165.168 32.5098 165.352 32.8784 165.718 33.1812C166.089 33.479 166.716 33.7524 167.6 34.0015C168.489 34.2505 169.182 34.5264 169.68 34.8291C170.183 35.127 170.554 35.4761 170.793 35.8765C171.038 36.2769 171.16 36.748 171.16 37.29C171.16 38.1543 170.823 38.8477 170.149 39.3701C169.475 39.8877 168.574 40.1465 167.446 40.1465C166.714 40.1465 166.03 40.0073 165.396 39.729C164.761 39.4458 164.27 39.0601 163.923 38.5718C163.582 38.0835 163.411 37.5293 163.411 36.9092H164.824C164.824 37.5537 165.061 38.064 165.535 38.4399C166.013 38.811 166.65 38.9966 167.446 38.9966C168.188 38.9966 168.757 38.8452 169.153 38.5425C169.548 38.2397 169.746 37.8271 169.746 37.3047C169.746 36.7822 169.563 36.3794 169.197 36.0962C168.831 35.8081 168.167 35.5249 167.205 35.2466ZM172.397 35.9644C172.397 35.188 172.549 34.4897 172.852 33.8696C173.159 33.2495 173.584 32.771 174.126 32.4341C174.673 32.0972 175.295 31.9287 175.994 31.9287C177.073 31.9287 177.944 32.3022 178.608 33.0493C179.277 33.7964 179.612 34.79 179.612 36.0303V36.1255C179.612 36.897 179.463 37.5903 179.165 38.2056C178.872 38.8159 178.45 39.292 177.898 39.6338C177.351 39.9756 176.721 40.1465 176.008 40.1465C174.934 40.1465 174.062 39.7729 173.394 39.0259C172.729 38.2788 172.397 37.29 172.397 36.0596V35.9644ZM173.76 36.1255C173.76 37.0044 173.962 37.71 174.368 38.2422C174.778 38.7744 175.325 39.0405 176.008 39.0405C176.697 39.0405 177.244 38.772 177.649 38.2349C178.054 37.6929 178.257 36.936 178.257 35.9644C178.257 35.0952 178.049 34.3921 177.634 33.855C177.224 33.313 176.677 33.042 175.994 33.042C175.325 33.042 174.785 33.3081 174.375 33.8403C173.965 34.3726 173.76 35.1343 173.76 36.1255ZM182.783 40H181.428V28.75H182.783V40ZM189.851 40C189.773 39.8438 189.709 39.5654 189.661 39.165C189.031 39.8193 188.279 40.1465 187.405 40.1465C186.624 40.1465 185.981 39.9268 185.479 39.4873C184.98 39.043 184.731 38.4814 184.731 37.8027C184.731 36.9775 185.044 36.3379 185.669 35.8838C186.299 35.4248 187.183 35.1953 188.32 35.1953H189.639V34.5728C189.639 34.0991 189.497 33.7231 189.214 33.4448C188.931 33.1616 188.513 33.02 187.961 33.02C187.478 33.02 187.073 33.1421 186.746 33.3862C186.418 33.6304 186.255 33.9258 186.255 34.2725H184.893C184.893 33.877 185.032 33.4961 185.31 33.1299C185.593 32.7588 185.974 32.4658 186.453 32.251C186.936 32.0361 187.466 31.9287 188.042 31.9287C188.955 31.9287 189.67 32.1582 190.188 32.6172C190.706 33.0713 190.974 33.6987 190.994 34.4995V38.147C190.994 38.8745 191.086 39.4531 191.272 39.8828V40H189.851ZM187.603 38.9673C188.027 38.9673 188.43 38.8574 188.811 38.6377C189.192 38.418 189.468 38.1323 189.639 37.7808V36.1548H188.577C186.917 36.1548 186.086 36.6406 186.086 37.6123C186.086 38.0371 186.228 38.3691 186.511 38.6084C186.794 38.8477 187.158 38.9673 187.603 38.9673ZM196.948 33.291C196.743 33.2568 196.521 33.2397 196.282 33.2397C195.393 33.2397 194.79 33.6182 194.473 34.375V40H193.118V32.0752H194.436L194.458 32.9907C194.902 32.2827 195.532 31.9287 196.348 31.9287C196.611 31.9287 196.812 31.9629 196.948 32.0312V33.291Z" fill="#EAEAEA" fill-opacity="0.7" />
                        <path id="Grid" d="M49.4004 301.601C49.0391 302.119 48.5337 302.507 47.8843 302.766C47.2397 303.02 46.4878 303.146 45.6284 303.146C44.7593 303.146 43.9878 302.944 43.314 302.539C42.6401 302.128 42.1177 301.547 41.7466 300.795C41.3804 300.043 41.1924 299.172 41.1826 298.181V297.25C41.1826 295.644 41.5562 294.399 42.3032 293.515C43.0552 292.631 44.1099 292.189 45.4673 292.189C46.5806 292.189 47.4766 292.475 48.1553 293.046C48.834 293.613 49.249 294.418 49.4004 295.463H47.9941C47.7305 294.052 46.8906 293.347 45.4746 293.347C44.5322 293.347 43.8169 293.679 43.3286 294.343C42.8452 295.002 42.6011 295.959 42.5962 297.214V298.085C42.5962 299.282 42.8696 300.234 43.4165 300.942C43.9634 301.645 44.7031 301.997 45.6357 301.997C46.1631 301.997 46.6245 301.938 47.02 301.821C47.4155 301.704 47.7427 301.506 48.0015 301.228V298.833H45.5332V297.69H49.4004V301.601ZM55.3696 296.291C55.1646 296.257 54.9424 296.24 54.7031 296.24C53.8145 296.24 53.2114 296.618 52.894 297.375V303H51.5391V295.075H52.8574L52.8794 295.991C53.3237 295.283 53.9536 294.929 54.769 294.929C55.0327 294.929 55.2329 294.963 55.3696 295.031V296.291ZM58.0942 303H56.7393V295.075H58.0942V303ZM56.6294 292.973C56.6294 292.753 56.6953 292.568 56.8271 292.417C56.9639 292.265 57.1641 292.189 57.4277 292.189C57.6914 292.189 57.8916 292.265 58.0283 292.417C58.165 292.568 58.2334 292.753 58.2334 292.973C58.2334 293.193 58.165 293.376 58.0283 293.522C57.8916 293.669 57.6914 293.742 57.4277 293.742C57.1641 293.742 56.9639 293.669 56.8271 293.522C56.6953 293.376 56.6294 293.193 56.6294 292.973ZM59.9399 298.972C59.9399 297.756 60.228 296.779 60.8042 296.042C61.3804 295.3 62.1348 294.929 63.0674 294.929C63.9951 294.929 64.73 295.246 65.272 295.881V291.75H66.627V303H65.3818L65.3159 302.15C64.7739 302.814 64.0195 303.146 63.0527 303.146C62.1348 303.146 61.3853 302.771 60.8042 302.019C60.228 301.267 59.9399 300.285 59.9399 299.074V298.972ZM61.2949 299.125C61.2949 300.024 61.4805 300.727 61.8516 301.235C62.2227 301.743 62.7354 301.997 63.3896 301.997C64.249 301.997 64.8765 301.611 65.272 300.839V297.199C64.8667 296.452 64.2441 296.079 63.4043 296.079C62.7402 296.079 62.2227 296.335 61.8516 296.848C61.4805 297.36 61.2949 298.12 61.2949 299.125Z" fill="#EAEAEA" fill-opacity="0.7" />
                        <path id="Home" d="M296.755 300H295.342V295.071H289.966V300H288.56V289.336H289.966V293.921H295.342V289.336H296.755V300ZM298.682 295.964C298.682 295.188 298.833 294.49 299.136 293.87C299.443 293.25 299.868 292.771 300.41 292.434C300.957 292.097 301.58 291.929 302.278 291.929C303.357 291.929 304.229 292.302 304.893 293.049C305.562 293.796 305.896 294.79 305.896 296.03V296.125C305.896 296.897 305.747 297.59 305.449 298.206C305.156 298.816 304.734 299.292 304.182 299.634C303.635 299.976 303.005 300.146 302.292 300.146C301.218 300.146 300.347 299.773 299.678 299.026C299.014 298.279 298.682 297.29 298.682 296.06V295.964ZM300.044 296.125C300.044 297.004 300.247 297.71 300.652 298.242C301.062 298.774 301.609 299.041 302.292 299.041C302.981 299.041 303.528 298.772 303.933 298.235C304.338 297.693 304.541 296.936 304.541 295.964C304.541 295.095 304.333 294.392 303.918 293.855C303.508 293.313 302.961 293.042 302.278 293.042C301.609 293.042 301.069 293.308 300.659 293.84C300.249 294.373 300.044 295.134 300.044 296.125ZM308.87 292.075L308.906 292.954C309.487 292.271 310.271 291.929 311.257 291.929C312.366 291.929 313.12 292.354 313.521 293.203C313.784 292.822 314.126 292.515 314.546 292.28C314.971 292.046 315.471 291.929 316.047 291.929C317.786 291.929 318.669 292.849 318.699 294.69V300H317.344V294.771C317.344 294.204 317.214 293.782 316.956 293.503C316.697 293.22 316.262 293.079 315.652 293.079C315.149 293.079 314.731 293.23 314.399 293.533C314.067 293.831 313.875 294.233 313.821 294.741V300H312.458V294.807C312.458 293.655 311.895 293.079 310.767 293.079C309.878 293.079 309.27 293.457 308.943 294.214V300H307.588V292.075H308.87ZM324.038 300.146C322.964 300.146 322.09 299.795 321.416 299.092C320.742 298.384 320.405 297.439 320.405 296.257V296.008C320.405 295.222 320.554 294.521 320.852 293.906C321.155 293.286 321.575 292.803 322.112 292.456C322.654 292.104 323.24 291.929 323.87 291.929C324.9 291.929 325.701 292.268 326.272 292.947C326.843 293.625 327.129 294.597 327.129 295.862V296.426H321.76C321.78 297.207 322.007 297.839 322.441 298.323C322.881 298.801 323.438 299.041 324.111 299.041C324.59 299.041 324.995 298.943 325.327 298.748C325.659 298.552 325.95 298.293 326.199 297.971L327.026 298.616C326.362 299.636 325.366 300.146 324.038 300.146ZM323.87 293.042C323.323 293.042 322.864 293.242 322.493 293.643C322.122 294.038 321.892 294.595 321.804 295.312H325.774V295.21C325.735 294.521 325.549 293.989 325.217 293.613C324.885 293.232 324.436 293.042 323.87 293.042Z" fill="#EAEAEA" fill-opacity="0.7" />
                        <path id="Powerwall" d="M148.596 431.825V436H147.189V425.336H151.123C152.29 425.336 153.203 425.634 153.862 426.229C154.526 426.825 154.858 427.614 154.858 428.595C154.858 429.63 154.533 430.429 153.884 430.99C153.239 431.547 152.314 431.825 151.108 431.825H148.596ZM148.596 430.675H151.123C151.875 430.675 152.451 430.5 152.851 430.148C153.251 429.792 153.452 429.279 153.452 428.61C153.452 427.975 153.251 427.467 152.851 427.086C152.451 426.706 151.901 426.508 151.203 426.493H148.596V430.675ZM155.979 431.964C155.979 431.188 156.13 430.49 156.433 429.87C156.74 429.25 157.165 428.771 157.707 428.434C158.254 428.097 158.876 427.929 159.575 427.929C160.654 427.929 161.525 428.302 162.189 429.049C162.858 429.796 163.193 430.79 163.193 432.03V432.125C163.193 432.897 163.044 433.59 162.746 434.206C162.453 434.816 162.031 435.292 161.479 435.634C160.932 435.976 160.302 436.146 159.589 436.146C158.515 436.146 157.644 435.773 156.975 435.026C156.311 434.279 155.979 433.29 155.979 432.06V431.964ZM157.341 432.125C157.341 433.004 157.543 433.71 157.949 434.242C158.359 434.774 158.906 435.041 159.589 435.041C160.278 435.041 160.825 434.772 161.23 434.235C161.635 433.693 161.838 432.936 161.838 431.964C161.838 431.095 161.63 430.392 161.215 429.855C160.805 429.313 160.258 429.042 159.575 429.042C158.906 429.042 158.366 429.308 157.956 429.84C157.546 430.373 157.341 431.134 157.341 432.125ZM171.909 434.132L173.432 428.075H174.787L172.48 436H171.381L169.455 429.994L167.58 436H166.481L164.182 428.075H165.529L167.089 434.008L168.935 428.075H170.026L171.909 434.132ZM179.46 436.146C178.386 436.146 177.512 435.795 176.838 435.092C176.164 434.384 175.827 433.439 175.827 432.257V432.008C175.827 431.222 175.976 430.521 176.274 429.906C176.577 429.286 176.997 428.803 177.534 428.456C178.076 428.104 178.662 427.929 179.292 427.929C180.322 427.929 181.123 428.268 181.694 428.947C182.265 429.625 182.551 430.597 182.551 431.862V432.426H177.182C177.202 433.207 177.429 433.839 177.863 434.323C178.303 434.801 178.859 435.041 179.533 435.041C180.012 435.041 180.417 434.943 180.749 434.748C181.081 434.552 181.372 434.293 181.621 433.971L182.448 434.616C181.784 435.636 180.788 436.146 179.46 436.146ZM179.292 429.042C178.745 429.042 178.286 429.242 177.915 429.643C177.543 430.038 177.314 430.595 177.226 431.312H181.196V431.21C181.157 430.521 180.971 429.989 180.639 429.613C180.307 429.232 179.858 429.042 179.292 429.042ZM187.956 429.291C187.751 429.257 187.529 429.24 187.29 429.24C186.401 429.24 185.798 429.618 185.48 430.375V436H184.125V428.075H185.444L185.466 428.991C185.91 428.283 186.54 427.929 187.355 427.929C187.619 427.929 187.819 427.963 187.956 428.031V429.291ZM196.357 434.132L197.88 428.075H199.235L196.928 436H195.83L193.903 429.994L192.028 436H190.93L188.63 428.075H189.978L191.538 434.008L193.383 428.075H194.475L196.357 434.132ZM205.512 436C205.434 435.844 205.371 435.565 205.322 435.165C204.692 435.819 203.94 436.146 203.066 436.146C202.285 436.146 201.643 435.927 201.14 435.487C200.642 435.043 200.393 434.481 200.393 433.803C200.393 432.978 200.705 432.338 201.33 431.884C201.96 431.425 202.844 431.195 203.981 431.195H205.3V430.573C205.3 430.099 205.158 429.723 204.875 429.445C204.592 429.162 204.174 429.02 203.623 429.02C203.139 429.02 202.734 429.142 202.407 429.386C202.08 429.63 201.916 429.926 201.916 430.272H200.554C200.554 429.877 200.693 429.496 200.971 429.13C201.254 428.759 201.635 428.466 202.114 428.251C202.597 428.036 203.127 427.929 203.703 427.929C204.616 427.929 205.332 428.158 205.849 428.617C206.367 429.071 206.635 429.699 206.655 430.5V434.147C206.655 434.875 206.748 435.453 206.933 435.883V436H205.512ZM203.264 434.967C203.688 434.967 204.091 434.857 204.472 434.638C204.853 434.418 205.129 434.132 205.3 433.781V432.155H204.238C202.578 432.155 201.748 432.641 201.748 433.612C201.748 434.037 201.889 434.369 202.172 434.608C202.456 434.848 202.819 434.967 203.264 434.967ZM210.251 436H208.896V424.75H210.251V436ZM213.898 436H212.543V424.75H213.898V436Z" fill="#EAEAEA" fill-opacity="0.7" />
                    </g>

                    <g id="kw_text">
                        <text id="solarKW" text-anchor="middle" x="180" y="120" fill="#CCCCCC" font-size="13" visibility={LiveSolarVisible}>{props.KwSolar} kW</text>
                        <text id="gridKW" text-anchor="middle" x="54" y="258" fill="#CCCCCC" font-size="13" visibility={LiveGridVisible}>{props.KwGrid} kW</text>
                        <text id="homeKW" text-anchor="middle" x="305" y="258" fill="#CCCCCC" font-size="13" visibility={LiveHomeVisible}>{props.KwHome} kW</text>
                        <text id="powerwallKW" text-anchor="middle" x="180" y="392" fill="#CCCCCC" font-size="13" visibility={LivePowerwallVisible}>{props.KwPowerwall} kW</text>
                    </g>
                    <defs>
                        <filter id="filter0_dd" x="132" y="319" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology id="bot_blur" radius="9" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect2_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0 0 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                        </filter>
                        <animate
                            xlinkHref="#bot_blur"
                            attributeName="radius"
                            from="5"
                            to="1"
                            dur="2s"
                            begin="2s" repeatCount="indefinite"
                        />
                        <filter id="filter1_dd" x="257" y="184" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0894445 0 0 0 0 0.173833 0 0 0 0 0.933333 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect2_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0429688 0 0 0 0 0.239766 0 0 0 0 0.9375 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                        </filter>
                        <filter id="filter2_dd" x="6" y="184" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology id="left_blur" radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0 0 0 0 0 0.16725 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect2_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.18 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                        </filter>
                        <animate
                            xlinkHref="#left_blur"
                            attributeName="radius"
                            from="6"
                            to="1"
                            dur="2s"
                            begin="2s" repeatCount="indefinite"
                        />
                        <filter id="filter3_dd" x="132" y="48" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology id="top_blur" radius="0" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.96 0 0 0 0 0 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology radius="0" operator="dilate" in="SourceAlpha" result="effect2_dropShadow" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.96 0 0 0 0 0 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                        </filter>
                        <animate
                            xlinkHref="#top_blur"
                            attributeName="radius"
                            from="5"
                            to="1"
                            dur="2s"
                            begin="2s" repeatCount="indefinite"
                        />
                        <linearGradient id="paint0_linear" x1="177" y1="127" x2="86.2966" y2="218.375" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE600" />
                            <stop offset="0.479167" stop-color="#FFD601" stop-opacity="0.991521" />
                            <stop offset="1" stop-color="#FF0505" stop-opacity="0.952119" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="189.222" y1="139" x2="268.572" y2="216.676" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF500" />
                            <stop offset="0.9999" stop-color="#0085FF" stop-opacity="0.916667" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="97" y1="235" x2="186.379" y2="314.448" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF0000" />
                            <stop offset="1" stop-color="#14FF00" />
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="183" y1="325" x2="272.379" y2="245.552" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#05FF00" />
                            <stop offset="1" stop-color="#0085FF" stop-opacity="0.970676" />
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="180.5" y1="139" x2="180.5" y2="325" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE600" />
                            <stop offset="0.505208" stop-color="#D8E902" />
                            <stop offset="1" stop-color="#24FF00" />
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="97" y1="232" x2="263" y2="231.606" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF0000" />
                            <stop offset="1" stop-color="#0094FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="switchForm1">
                <FormGroup row>
                    <FormControlLabel
                        control={<YellowSwitch size="normal" checked={SwitchState.checkedSolar} onChange={handleChange} name="checkedSolar" />}
                        label={<span style={{ color: '#AAAAAA' }}>Solar</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<RedSwitch size="normal" checked={SwitchState.checkedGrid} onChange={handleChange} name="checkedGrid" color="secondary" />}
                        label={<span style={{ color: '#AAAAAA' }}>Grid</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<GreenSwitch size="normal" checked={SwitchState.checkedPowerwall} onChange={handleChange} name="checkedPowerwall" color="primary" />}
                        label={<span style={{ color: '#AAAAAA' }}>Powerwall</span>} labelPlacement="start"
                    />
                </FormGroup>
            </div>
            <div class="switchForm2">
                <FormGroup row>
                    <FormControlLabel
                        control={<BlueSwitch size="normal" checked={SwitchState.checkedOnlyForHome} onChange={handleChange} name="checkedOnlyForHome" />}
                        label={<span style={{ color: '#AAAAAA' }}>OnlyForHome</span>} labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<CyanSwitch size="normal" checked={SwitchState.checkedBoosterMode} onChange={handleChange} name="checkedBoosterMode" />}
                        label={<span style={{ color: '#AAAAAA' }}>BoosterMode</span>} labelPlacement="start"
                    />
                </FormGroup>
            </div>
        </div>
    )

}
export default DrawingPage
