import React from 'react'
import { ChromePicker } from 'react-color'
import { Context } from '../layout/layout'
import './colour-picker.scss'

class ButtonExample extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div className="colourPickerContainer">
                            <div>
                                <ChromePicker
                                    color={context.state.startColour || "#FF00FF"}
                                    onChange={(color) => {
                                        context.state.handleStartPickerChange(color)
                                    }}
                                    onChangeComplete={(color) => {
                                        context.state.handleStartPickerChangeComplete(color)
                                    }}
                                    disableAlpha={true}
                                    className="colour-picker"
                                />
                            </div>
                            <div>
                                <ChromePicker
                                    color={context.state.endColour || "#00FFFF"}
                                    onChange={(color) => {
                                        context.state.handleEndPickerChange(color)
                                    }}
                                    onChangeComplete={(color) => {
                                        context.state.handleEndPickerChangeComplete(color)
                                    }}
                                    disableAlpha={true}
                                    className="colour-picker"
                                />
                            </div>
                            <input type="number" defaultValue={context.state.chunks} id="chunksInput"></input>
                            <input type="button" value="GO!" onClick={() => {
                                window.scrollTo(0, 0);
                                context.state.submit()
                            }}></input>
                        </div>
                    );
                }
                }
            </Context.Consumer>
        )
    }
}

export default ButtonExample