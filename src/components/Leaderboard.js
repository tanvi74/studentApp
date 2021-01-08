import React, { Component } from 'react';
import axios from 'axios';

export default class Leaderboard extends Component {
    state={
        type:"D",
        entries: [],
        name: "",
        searchItem: []
    }
    componentDidMount(){
        this.getDetails();
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }


    getDetails = async() => {

        const url = `${window.apiHost}/api/all-entries`;
     
        const resp = await axios.get(url);
        console.log(resp.data);
        this.setState({
            entries: resp.data.allEntries
        })
    
    }

    search = async() => {
        let searchItem = this.state.entries.filter(item => item.Name===this.state.name)
        this.setState({
            searchItem: searchItem
        })
    }

    render() {
        let sortedNotes = []
        if(this.state.type==="D"){
            sortedNotes = this.state.entries.sort((a, b) => (b.Total-a.Total));
       }else if(this.state.type==="A"){
            sortedNotes = this.state.entries.sort((a, b) => (a.Total-b.Total));
       }
        const tb = sortedNotes.map((item,key)=>{
            return (
                <tr key={key}>
                    <td>{item.Name}</td>
                    <td>{item.Total}</td>
                    <td>{item.Percentage}</td>
                </tr>
            )
        })

        const tb1 = this.state.searchItem.map((item,key)=>{
            return (
                <tr key={key}>
                    <td>{item.Name}</td>
                    <td>{item.Total}</td>
                    <td>{item.Percentage}</td>
                </tr>
            )
        })

        return (
            <div className="container">
                <div className="row">
                <div className="col s12">
                    <div className="col s6 center"><button className="waves-effect waves-light btn-large typeBtn" onClick={()=>this.setState({type:"A"})}>Ascending Order</button></div>
                    <div className="col s6 center"><button className="waves-effect waves-light btn-large typeBtn" onClick={()=>this.setState({type:"D"})}>Descending Order</button></div>
                </div>
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">subject</i>
                                    <input id="name" type="text" className="validate" onChange={this.changeName}/>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="col s6">
                                    <button className="waves-effect waves-light btn-large sign-page-button" onClick={this.search}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                        
                </div>
           
           {this.state.searchItem.length===0 ? <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                <table className="centered responsive-table">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Marks</th>
                                        <th>Percentage</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {tb}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div> : 
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                <table className="centered responsive-table">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Marks</th>
                                        <th>Percentage</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {tb1}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>}
                    
                </div>
            </div>
            
        )
    }
}
