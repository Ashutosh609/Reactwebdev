import React from 'react';

function calculateheight(i) {
    let height2 = document.getElementById('bmical2');
    let height3 = document.getElementById('bmical3');
    if (i === 1) {
        height3.style.display = 'block';
        height2.style.display = 'none';
    }
    if (i === 2) {
        height2.style.display = 'block';
        height3.style.display = 'none';
    }

}

function calculatebmi() {
    let height2 = document.getElementById('bmical2');
    let height3 = document.getElementById('bmical3');
    let weigth = document.getElementById('weight').value;
    let cm = document.getElementById('Height3').value;
    let foot = document.getElementById('Height1').value;
    let inch = Number(document.getElementById('Height2').value);
    let valuebmi = 0;
    if (height3.style.display === 'block') {
        valuebmi = (weigth * 10000) / (cm * cm);
    }
    if (height2.style.display === 'block') {
        valuebmi = (weigth * 10000) / (((foot * 12 + inch) * 2.54) * ((foot * 12 + inch) * 2.54));
    }
    if (valuebmi > 0 && valuebmi !== Infinity) {
        document.getElementById('Height4').innerText = 'BMI: ' + valuebmi;
    }
    else {
        document.getElementById('Height4').innerText = 'Enter correct Value';
    }

}

const bmi = () => {
    return (
        <>
        <div id="BMI">
            <div id="bmical">
                <h1>BMI Calculator</h1>
                <div id="bmical0">
                    <button id='incm' onClick={()=>calculateheight(1)}>
                        Height in-CMs
                    </button>
                    <button id='infeet' onClick={()=>calculateheight(2)}>
                        Height in-Foot
                    </button>
                </div>
                <div id="bmical1">
                    <label htmlFor='Weight '> Wieght in kg: </label>
                    <input type="number" id="weight" min="0"/>
                </div>
                <div id="bmical2" style={{display: "none"}}>
                    <label htmlFor='Height1 '> Height - foot: </label>
                    <input type="number" id="Height1" min="0"/><br/>
                    <label htmlFor='Height2 '> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inches: </label>
                    <input type="number" id="Height2" min="0"/>
                </div>
                <div id="bmical3" style={{display: "block"}}>
                    <label htmlFor='Height3 '>Height in cm: </label>
                    <input type="number" id="Height3" min="0"/>
                </div>
                <div id="bmical4">
                    <button onClick={calculatebmi}>
                        Calculate
                    </button>
                </div>
                <div id="bmical5">
                    <span id="Height4"></span>
                </div>
            </div>
            <div id="bmipara">
                <table id="tablechat">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>BMI range - kg/m^2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Severe Thinness</td>
                            <td>&lt; 16</td>
                        </tr>
                        <tr>
                            <td>Moderate Thinness </td>
                            <td>16 - 17</td>
                        </tr>
                        <tr>
                            <td>Mild Thinness</td>
                            <td>17 - 18.5</td>
                        </tr>
                        <tr>
                            <td>Normal</td>
                            <td>18.5 - 25</td>
                        </tr>
                        <tr>
                            <td>Overweight</td>
                            <td>25 - 30</td>
                        </tr>
                        <tr>
                            <td>Obese Class I</td>
                            <td>30 - 35</td>
                        </tr>
                        <tr>
                            <td>Obese Class II</td>
                            <td>35 - 40</td>
                        </tr>
                        <tr>
                            <td>Obese Class III</td>
                            <td>&gt; 40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )};
export default bmi;