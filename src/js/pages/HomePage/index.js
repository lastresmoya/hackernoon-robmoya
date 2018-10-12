
import React from 'react';
import { Link } from 'react-router-dom';
import image from './assets/avatar.jpg';
import TableColumn from "./TableColumn";


function HomePage(props) {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto text-center">
                    <img
                        className="img-fluid py-4"
                        src="https://cdn-images-1.medium.com/max/490/1*1HcGNZYjo78mH0faO3BnaQ@2x.png"
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                    <small className="text-muted">
                        Add values into each cell to check for Column Averages, Totals, Min
                        and Max Values
                    </small>
                    <div className="d-flex justify-content-center align-items-start">
                        <TableColumn />
                        <TableColumn />
                        <TableColumn />
                        <TableColumn />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
