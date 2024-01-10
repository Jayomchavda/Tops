import React from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

function truncateString(inputString, maxLength) {
    if (inputString.length <= maxLength) {
        return inputString;
    } else {
        const truncatedString = inputString.slice(0, maxLength - 3) + '...';
        return truncatedString;
    }
}

export default function CardCom({ item }) {
    return (
        <div>

            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardImg
                    alt="Sample Card"
                    src={item?.image}
                    top
                    style={{ width: '200px', height: '200px', margin: 'auto' }}
                    className="mt-3"
                />

                {/* <img
                    alt="Sample"
                    src={item?.image}
                /> */}
                <CardBody>
                    <CardTitle tag="h5">
                        {truncateString(item?.title, 24)}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Price: {item?.price}.00 $
                    </CardSubtitle>
                    <CardText>
                        {truncateString(item?.description, 90)}
                    </CardText>
                    <CardText>
                        Rating: {item?.rating.rate}  ({item?.rating.count})
                    </CardText>
                    <Button className='w-100 ' color='danger' >
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
