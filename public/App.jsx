import React from "react";

function App() {
    

    let currDate = new Date(2020, 5, 5, 10);
    //   Date(year,month,day,hours);

    const cssStyle = {};
    currDate = currDate.getHours();
    let greeting = '';
    if (currDate >= 1 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = 'Green';
    }
    else if (currDate >= 12 && currDate < 20) {
        greeting = "Good Afternoon";
        cssStyle.color = 'Yellow';
    }
    else {
        greeting = "Good Night";
        cssStyle.color = 'black';
    }

    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
            </div>
        </>
    );
}
export default App;