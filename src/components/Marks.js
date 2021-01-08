import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert";

export default class Marks extends Component {
    state = {
        marks: 0,
        percentage: 0,
        physics: 0,
        chemistry: 0,
        maths: 0,
        name: "",
        rollno: 0
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    changeMaths = (e) =>{
        this.setState({
            maths: e.target.value
        })
        let m = Number(this.state.physics) + Number(this.state.chemistry) + Number(e.target.value);
        let per = m/3;
        console.log(m);
        setTimeout(() => {
            this.setState({
                marks: m,
                percentage: per
            })
          }, 5000);
    }

    changeChemistry = (e) =>{
        this.setState({
            chemistry: e.target.value
        })
        let m = Number(this.state.physics) + Number(e.target.value) + Number(this.state.maths);
        let per = m/3;
        console.log(m);
        setTimeout(() => {
            this.setState({
                marks: m,
                percentage: per
            })
          }, 5000);
    }

    changePhysics = (e) =>{
        this.setState({
            physics: e.target.value
        })
        let m = Number(e.target.value) + Number(this.state.chemistry) + Number(this.state.maths);
        let per = m/3;
        console.log(m);
        setTimeout(() => {
            this.setState({
                marks: m,
                percentage: per
            })
          }, 5000);
        
    }

    changeRollNo = (e) =>{
        this.setState({
            rollno: e.target.value
        })
    }

    
    submit = async(e) =>{
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.rollno);
        console.log(typeof(this.state.physics));
        console.log(this.state.chemistry);
        console.log(this.state.maths)
        
        let m = Number(this.state.physics) + Number(this.state.chemistry) + Number(this.state.maths);
        let per = m/3;
        console.log(m);
        
        

        const url = `${window.apiHost}/api/new-entry`;

        const data = {
            Physics: Number(this.state.physics),
            Chemistry: Number(this.state.chemistry),
            Maths: Number(this.state.maths),
            RollNo: Number(this.state.rollno),
            Name: this.state.name,
            Marks: m,
            Percentage: per
        }
        const resp = await axios.post(url,data);
        console.log(resp.data);
        if(resp.data.status === "success"){
            swal({
                title: "Success!",
                icon: "success",
              }).then(function(){ 
                window.location.reload()
                })
             
        }else{
            swal({
                title: "Server issue! Try after sometime",
                icon: "error",
              })
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <form className="col s12" onSubmit={this.submit}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">subject</i>
                                                <input id="name" type="text" className="validate" onChange={this.changeName} required/>
                                                <label htmlFor="name">Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">subject</i>
                                                <input id="rollno" type="number" className="validate" onChange={this.changeRollNo} required/>
                                                <label htmlFor="rollno">Roll No.</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">subject</i>
                                                <input id="physics" type="number" className="validate" onChange={this.changePhysics} required min="0" max="100"/>
                                                <label htmlFor="physics">Enter Marks of Physics (out of 100)</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">subject</i>
                                                <input id="chemistry" type="number" className="validate" onChange={this.changeChemistry} min="0" max="100" required/>
                                                <label htmlFor="chemistry">Enter Marks of Chemistry (out of 100)</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">subject</i>
                                                <input id="maths" type="number" className="validate" onChange={this.changeMaths} min="0" max="100" required/>
                                                <label htmlFor="maths">Enter Marks of Maths (out of 100)</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                        <div className="col l6 m6 m12">
                                                <span className="heading123">Total Marks Obtained : {this.state.marks} / 300</span>
                                            </div>
                                            <div className="col l6 m6 s12">
                                                <span className="heading123">Percentage : {this.state.percentage} %</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <button className="waves-effect waves-light btn-large sign-page-button" >Submit</button> 
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
