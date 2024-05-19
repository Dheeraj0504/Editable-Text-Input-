import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  InputContainer,
  InputText,
  TextLine,
  SaveButton,
} from './styledComponents'

class Home extends Component {
  state = {
    saveText: false,
    textInput: '',
  }

  onChangeInput = event => {
    // console.log(event.target.value)
    this.setState({textInput: event.target.value})
  }

  onClickSaveButton = () => {
    // console.log("Button Clicked")
    this.setState(pervState => ({
      saveText: !pervState.saveText,
    }))
  }

  render() {
    const {saveText, textInput} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {saveText ? (
              <TextLine>{textInput}</TextLine>
            ) : (
              <InputText
                type="text"
                value={textInput}
                onChange={this.onChangeInput}
              />
            )}

            <SaveButton type="button" onClick={this.onClickSaveButton}>
              {saveText ? 'Edit' : 'Save'}
            </SaveButton>
          </InputContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default Home
