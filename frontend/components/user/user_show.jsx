import React from 'react';
import Layout from '../layout/layout';

class UserShow extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <div className='show'>
                <div className='show-banner'>
                    <div className='profile-pic'>
                        <div className='user-img'></div>
                        <div>
                            {/* <p>Update photo</p> */}
                        </div>
                    </div>
                    <div className='display-name'>
                        <h2>Username Goes Here</h2>
                    </div>
                </div>
                <div className='show-content'>
                    <div className='labels'>
                        <span>Tracks</span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
};

export default UserShow;