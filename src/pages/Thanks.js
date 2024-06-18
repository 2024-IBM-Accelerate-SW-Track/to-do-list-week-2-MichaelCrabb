import React, { Component } from "react";
import Footer from "../component/footer.js";
import "./Thanks.css";

export default class extends Component {
    render() {
        return (
            <div className="thanks">
                <div className="content">
                    <div className="text">
                        This Page is dedicated to all the IBMers that helped put together the Accelerate program!
                    </div>
                    <div className="text">
                        I want to express my sincerest thanks for this opportunity to expand my early career.
                    </div>
                    <div className="text">
                        This experience is priceless!!
                    </div>
                </div>
                <Footer className="footer"/> {this.footer}
            </div>
        )
    }
}