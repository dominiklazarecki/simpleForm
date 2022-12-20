

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input type="checkbox"  id="age" onChange={props.change} checked={props.checked}/>
            <label htmlFor="age">Mam co najmniej 16 lat</label>
            <br />
            <button type="submit">Kup bilet</button>
        </form>
    )
}
 
const ValidationMessage = (props) => <p>{props.txt}</p>
 

 class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.isFormSubmitted){
            this.setState({
                isFormSubmitted: !this.state.isFormSubmitted,
            })
        }
    }

     displayMessage = () => {
        if(this.state.isFormSubmitted) {
            if(this.state.isConfirmed){
                return <ValidationMessage txt="Możesz obejrzeć film!" />
                } else {
                return <ValidationMessage txt="Nie możesz obejrzeć tego filmu, nie masz 16 lat!" />
            } 
        } else {return null}
    }

    render() {
    
        const {isConfirmed, isFormSubmitted} = this.state

        return(
            <>
                <h1>Kup bilet na horror roku!</h1>
                < Form 
                    change = {this.handleCheckboxChange} 
                    submit = {this.handleFormSubmit} 
                    checked = {isConfirmed}
                />
                    {this.displayMessage()}
            </>
        )
    }
 }



ReactDOM.render(<TicketShop/>, document.getElementById("root"));