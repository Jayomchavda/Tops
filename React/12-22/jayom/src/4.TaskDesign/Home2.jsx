import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Content from './content'
import Maincontent from './maincontent'

export default function Home2() {
    return (
        <div>
            <div style={{ backgroundColor: "red" }}>
                <Header />
                {/* <Body /> */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <Content style={{ flex: 1, }} />
                <Maincontent style={{ flex: 1, }} />
                <Content style={{ flex: 1, }} />
            </div>
            <Footer />
        </div>
    );
}

