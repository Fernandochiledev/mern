import React, { Component } from 'react';   
import NavBar from "./NavBar";

class TasksCrudMongo extends Component { 
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            title_update: '',
            description_update: '',
            id_update: '',
            tasks : []
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.updateTask = this.updateTask.bind(this);  
    }

    addTask(e) {
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(data =>{ 
            M.toast({html: 'Task Saved'});
            this.setState({title: '', description: ''});
            this.fetchTasks();
        })
        .catch(err =>console.log(err)); 
        e.preventDefault();
    }

    updateTask(e) { 
        console.log(this.state.title_update);
        console.log(this.state.description_update);
        fetch('/api/tasks/'+this.state.id_update, {
            method: 'PUT',
            body: JSON.stringify({'title': this.state.title_update, 'description': this.state.description_update}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res =>res.json())
        .then(data =>{ 
            M.toast({html: 'Task Saved'});
            this.setState({title: '', description: ''});
            this.fetchTasks();
        })
        .catch(err =>console.log(err)); 
        e.preventDefault();
    }
 
    showToUpdate(id) {
        fetch(`/api/tasks/${id}`)
        .then(res => res.json())
        .then(data => {
            data.map(task => { 
                this.setState({id_update: task._id, title_update: task.title, description_update: task.description})
            });
        });
    }

    deleteTask(id) {  
        if( confirm("¿Are you sure to delete?"))
        {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE' 
            })
            .then(res =>res.json())
            .then(data =>{ 
                M.toast({html: 'Task Deleted'});
                this.fetchTasks();
            })
            .catch(err =>console.log(err));  
        }
            
    }
 
    componentDidMount(){
        this.fetchTasks();
    }

    fetchTasks(){
        fetch('api/tasks')
        .then(res => res.json())
        .then(data => {
            this.setState({tasks: data}); 
        });   
    }  
    handleChange(e) {
        const {name, value } = e.target;
        this.setState({
            [name] :  value
        }) 
    }
    render() {
        return (
            <div>
                {/* NAVIGATION */}
               
               
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                    <div className="row">  
                                            <h4>Create Task</h4> 
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title" value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} className="materialize-textarea" value={this.state.description} placeholder="Task Description"> 
                                                </textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4 ">
                                            Send
                                        </button>
                                    </form>   
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.updateTask}>
                                         <div className="row"> 
                                            <h4>Update Task</h4>
                                            <div className="input-field col s12">
                                                <input name="title_update" onChange={this.handleChange} type="text" placeholder="Task Title" value={this.state.title_update} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description_update" onChange={this.handleChange} className="materialize-textarea" value={this.state.description_update} placeholder="Task Description"> 
                                                </textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4 ">
                                            Update
                                        </button>
                                    </form>   
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <div className="card">
                                <div className="card-content">
                                <table>
        <thead>
        <tr>
              <th colSpan="3" className="center">Tasks</th> 
                    </tr>
                    <tr> 
                        <th>Title</th>
                        <th>Description</th>
                        <th>Options</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.tasks.map(task => {
                                return (
                                    <tr key={task._id}> 
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>
                                            <button onClick={() => this.showToUpdate(task._id)} className="btn yellow ">Update</button>
                                            <button onClick={() => this.deleteTask(task._id)} className="btn red btnmargin" >Delete</button>
                                        </td>
                                    </tr>
                                )
                        })
                    }
                    </tbody>
                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default TasksCrudMongo;
