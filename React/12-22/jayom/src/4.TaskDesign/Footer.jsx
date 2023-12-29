import React from 'react'

export default function Footer() {
    return (
        <div className='body1    d-flex p-5 bg-body-secondary ' >
            <div className="col-3">
                <h4 className='fw-bold '>Company Name</h4>
                <p className='p-2 pt-5'>Here you can use rows and columns to organize your footer content. <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="col-3">
                <h4 className='fw-bold t'>PRODUCTS</h4>
                <p><a href="">Angular</a></p>
                <p><a href="">React</a></p>
                <p><a href="">Vue</a></p>
                <p><a href="">Laravel</a></p>

            </div>
            <div className="col-3">
                <h4 className='fw-bold '>USEFUL LINKS</h4>
                <p><a href="">Pricing</a></p>
                <p><a href="">Satting</a></p>
                <p><a href="">Orders</a></p>
                <p><a href="">Help</a></p>
            </div>

            <div className="col-3">
                <h4 className='fw-bold '>CONTACT</h4>
                <p> <a href="">New York, NY 10012, US</a></p>
                <p><a href=""> info@example.com</a></p>
                <p><a href="">+ 01 234 567 88</a></p>
                <p><a href="">+ 01 234 567 89</a></p>
            </div>
        </div>
    )
}
