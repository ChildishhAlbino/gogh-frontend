import React from 'react'
import { ChromePicker } from 'react-color'
import { Context } from './layout'


class ButtonExample extends React.Component {
    state = {
        startColour: "#00FFFF",
        endColour: "#FF00FF"
    };
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
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
                            />
                            <ChromePicker
                                color={context.state.endColour || "#00FFFF"}
                                onChange={(color) => {
                                    context.state.handleEndPickerChange(color)
                                }}
                                onChangeComplete={(color) => {
                                    context.state.handleEndPickerChangeComplete(color)
                                }}
                                disableAlpha={true}
                            />
                        </div>
                    );
                }
                }
            </Context.Consumer>
        )
    }
}

export default ButtonExample