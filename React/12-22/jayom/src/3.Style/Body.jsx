import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export default function Body() {
    return (


        <div className="p-4 d-flex gap-3 justify-content-center align-items-center ">
            {/* 
            <div>
                <h1>Hello world</h1>
            </div> */}

            <div className="d-flex gap-5  ">
                <Card style={{ width: '18rem' }}>
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </div>


    );


}
