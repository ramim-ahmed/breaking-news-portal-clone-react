import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
const Jumbotrons = () => {
    return (
        <div>
             <Jumbotron>
                <h1>Global Breaking News</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur vel augue id consectetur. Ut venenatis urna eu aliquam egestas. Aenean placerat tincidunt ornare. In vulputate dui massa, eu lacinia sapien feugiat lobortis. Praesent dictum elit lectus, et laoreet nibh laoreet tristique. Nunc vulputate volutpat viverra. Donec vel velit ut turpis condimentum egestas vel eu justo. Fusce venenatis elementum sem, a congue arcu.
                </p>
                <p>
                    <Button href="https://www.bbc.com/news" variant="primary">More...</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Jumbotrons;