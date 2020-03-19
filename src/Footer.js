import React from 'react';

class Footer extends React.Component {

    render() {


        return (

            <div className="row">
                <div className="col-6 col-md-8 col-lg-10 footer">
                    <span style={{ fontWeight: '500' }} >Environmentally Challenged</span> collaborates with <span style={{ fontWeight: '500' }} >ABC</span>, a tree-planting organisation who plant real trees on Earth.
                    <br />When you complete challenges, not only do you make a difference, they'll go out and plant real trees. 
                </div>
                <div className="col-3 col-md-2 col-lg-1 footer">
                    {/* Temporary button for changing themes - change to drop down in footer? */}
                    <button type="button" className="btn themesButton" onClick={this.props.yourProgressButton}>Progress</button>
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