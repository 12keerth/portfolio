import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Products from './Products';
import Details from './Details';

export class Section extends Component{
    render() {
        return (
            <section>
                <Routes>
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Details />} />
                </Routes>
            </section>
        )
    }
}

export default Section;
