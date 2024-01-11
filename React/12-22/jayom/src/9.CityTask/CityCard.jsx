import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'

export default function CityCard({ item }) {
    return (
        <div>

            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardText>
                        {/* Some quick example text to build on the card title and make up the bulk of the card‘s content. */}
                        City: {item?.city}
                    </CardText>

                    <CardText>
                        {/* Some quick example text to build on the card title and make up the bulk of the card‘s content. */}
                        State_name: {item?.state_name}
                    </CardText>

                    <CardText>
                        {/* Some quick example text to build on the card title and make up the bulk of the card‘s content. */}
                        Population: {item?.population}
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )
}
