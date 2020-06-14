import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function ResourceList(props) {
    return (
        <div>
            <Accordion className = "Resource">
                <Card>
                    <Accordion.Toggle eventKey="0">
                        <Card.Header>
                            {props.question}
                        </Card.Header>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body> {props.answer}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>

    );
}

export default ResourceList;
