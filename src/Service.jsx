import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {


    return (
        <>
            <div className="my-2" >
                <h1 className=" text-center"><span> Our Services </span></h1>
            </div>
               <div className="container-fluid mb-1">
                    <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, index) => {
                                    return <Card className="pics"
                                        key={index}
                                        imgsrc={val.imgsrc}
                                        title={val.title}

                                    />
                                })}
                       </div>
                    </div>
                </div>

            </div>

        </>
    );
};
export default Service;


