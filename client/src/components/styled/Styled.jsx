import styled from 'styled-components';

const StyledScript = styled.div`
display: flex;
justify-content: center;
background-color: lightgrey;
`
const StyledForm = styled.div`
display: flex;
background-color: lightgrey;
justify-content: center;
`

const StyledMessage = styled.div`
background-color: lime;
color: white;
width: 300px;
display:flex;
padding: 10px;
`
const StyledMessageFail = styled.div`
background-color: red;
color: white;
width: 300px;
display:flex;
padding: 10px;
`
const StyledLogin = styled.form`
width: 100%;
display: grid;
float: right;
input{
    width: 200px;
}

button{
    width: 200px;
}
`
const MainDiv = styled.div `
html{
    height: 100%;
}
background: lightgrey;
height: 1000px;
`
const StyledScriptCard = styled.div`
border: 5px solid black;
background: white;
margin: 5px;
color: coral;
`
export{StyledScript,StyledForm,StyledMessage,StyledMessageFail, MainDiv,StyledScriptCard, StyledLogin};