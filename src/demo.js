import React from 'react';
import downloadjs from 'downloadjs';
import * as htmlToImage from 'html-to-image';
export default (props) => {
    let title = "ENDGAME";
    let time = "12:00";
    let seat = "C12";

    const onCapture = () => {
        htmlToImage.toJpeg(document.getElementById("cardWrap"))
            .then(function (dataUrl) {
                downloadjs(dataUrl, 'TICKET.JPG');
            });
    }
    return (
        <div>
            <div id="content" style={{ height:"150px", width: 'fit-content', margin: 'auto', }}>
                <div id='cardWrap' className="cardWrap" style={{ display: 'flex' }}>
                    <div className="card cardLeft" style={{ height:"150px",textAlign: 'left', width: '300px', padding: '20px', borderRadius: '5px 0 0 5px', border: '3px solid #e84c3d', borderRight: '1px dotted #e84c3d' }}>
                        <h1 style={{ border: '2px dotted #fff', borderRadius: '5px', textAlign: 'center', backgroundColor: '#e84c3d', fontWeight: 'bold' }}>MOVIEVERSE</h1>
                        <table >
                            <tr>
                                <td><h2 style={{overflow:"hidden"}}>{props.title}</h2></td>
                            </tr>
                            <tr>
                                <td><h2 style={{overflow:"hidden"}}>{seat}</h2></td>
                            </tr>
                            <tr>
                                <td><h2 style={{overflow:"hidden"}}>{time}</h2></td>
                            </tr>
                        </table>
                    </div>
                    <div className="card cardRight" style={{ height:"150px",textAlign: 'left',width: '200px', padding: '20px', borderRadius: '0 5px 5px 0', border: '3px solid #e84c3d', borderLeft: 'none' }}>
                        <div className="number" style={{ margin: 'auto' }}>
                            <h1 style={{ border: '2px dotted #fff', borderRadius: '5px', textAlign: 'center', backgroundColor: '#e84c3d', fontWeight: 'bold' }}>MOVIEVERSE</h1>
                            <table>
                            <tr>
                                <td><h2 style={{overflowY:"hidden"}}>{props.title}</h2></td>
                            </tr>
                            <tr>
                                <td><h2 style={{overflow:"hidden"}}>{seat}</h2></td>
                            </tr>
                            <tr>
                                <td><h2 style={{overflow:"hidden"}}>{time}</h2></td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div><a className='btn btn-dark' href="#" onClick={onCapture}>DOWNLOAD</a>
        </div >
    )
}