import React from 'react';

class Footer extends React.Component {

    render() {


        return (

            <div className="row">
                <div className="col-9 col-md-8 col-lg-9 footer footerText">
                    <span style={{ fontWeight: '500' }} >Environmentally Challenged</span> collaborates with <span style={{ fontWeight: '500' }} >ABC</span>, a tree-planting organisation who plant real trees on Earth.
                    <br />When you complete <span style={{ fontWeight: '500' }} >21 challenges</span>, not only do you make a difference, they'll go out and plant a real tree.
                </div>
                <div className="col-3 col-md-4 col-lg-3 footer">
                    <div className="row text-center">
                        <div className="col-md-6">
                            {/* Temporary button for changing themes - change to drop down in footer? */}
                            <button type="button" className="btn themesButton" onClick={this.props.yourProgressButton}>Progress</button>
                        </div>
                        <div className="col-md-6">
                            {/* Temporary button for changing themes - change to drop down in footer? */}
                            <button type="button" className="btn themesButton" onClick={this.props.changeThemes}>Themes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;