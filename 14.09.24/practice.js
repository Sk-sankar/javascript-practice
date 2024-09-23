let lapCount = 0;
let totalLaps = 10;
while (lapCount < totalLaps) {
    lapCount++;
    console.log(`Lap ${lapCount} completed!`);
}
console.log("The robot has completed all laps!");



// /


let batteryLevel = 100;
const batteryThreshold = 20;
while (batteryLevel > batteryThreshold) {
    
    console.log(`Battery level: ${batteryLevel}%`);
    batteryLevel -= 5;
}
console.log("Battery is low!");





// 


let altitude = 1000;

function simulateDescent() {
    for(i=altitude;altitude>0;altitude--){
        altitude-=10;
        console.log(`Current altitude: ${altitude}ft`);
        if (altitude <= 0) {
            console.log("Flight arrived");
        }
    }

}

simulateDescent();




function getRunway(destination) {
    let runway="";

    switch (destination.toLowerCase()) {
        case 'new york':
            runway = "Runway 1";
            break;
        case 'los angeles':
            runway ="Runway 2";
            break;
        case 'USA':
            runway = "Runway 3";
            break;
        case 'canada':
            runway = "Runway 4";
            break;
        case 'paskisthan':
            runway = "runway5";
            break;
        case 'delhi':
            runway="runway 6";    
            break;
        default:
            runway = 'Unknown destination. No assigned runway.';
            break;
    }

    return runway;
}
console.log(getRunway("new york"));




const finalAltitude = 1000;
const intervals = 10;
const altitudeIncrement = finalAltitude / intervals;

let currentAltitude = 0;
for (let i = 1; i <= intervals; i++) {
    currentAltitude += altitudeIncrement;
    console.log(`Interval ${i}: Altitude = ${currentAltitude.toFixed(2)} ft`);
}
console.log(`Final altitude reached: ${finalAltitude} ft`);



