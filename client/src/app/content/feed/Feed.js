import React from "react";
import axios from 'axios';

import FeedLine from "./FeedLine";

import '../../stylesheets/feed.css';
import { getUser, isLogged } from "../util/app_cookies";
import SwapFeedButtons from "../swap_feed_buttons/SwapFeedButtons";


class Feed extends React.Component {
    state = { events: [] };

    componentDidMount = () => { this.getEvents(); };

    getEvents = () => {
        axios.post('/event/getAll')
            .then((response) => {
                const data = response.data;
                this.setState({events: data.data});
                console.log(this.state.events);

            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
    };

    render() {
        return (
            <>
                { (isLogged) ? <SwapFeedButtons /> : <></> }

                <div className='p-5 mx-lg-5 mx-md-2 mx-sm-2 feed'>
                    {
                        this.state.events.map((element, index) =>
                            <FeedLine element={element} />
                        ).sort((a, b) => (new Date(b.props.dateAjout)).getTime() - (new Date(a.props.dateAjout)).getTime())
                    }
                </div>
            </>
        );
    }
}

export default Feed;