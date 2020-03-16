import React from 'react';

class Footer extends React.Component {

    render() {



        return (

            <div className="row">
                <div className="col-9 col-md-10 col-lg-11 footer">
                    <span style={{ fontWeight: '500' }} >Environmentally Challenged</span> is built by Rebecca French,
                    Monika Urbanska, Rosie Inman and Simone Klein. We hope it helps you help us to save the planet!
                </div>
                <div className="col-3 col-md-2 col-lg-1 footer">
                    {/* Temporary button for changing themes - change to drop down in footer? */}
                    <button type="button" className="btn themesButton" onClick={this.props.changeThemes}>Themes</button>
                </div>
            </div>
        )
    }
}

export default Footer;