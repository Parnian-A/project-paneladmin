
import React, { Component} from 'react'
import  Table  from "components/utils/Table";
import {EyeFilled} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import request from "tools/request";
import { setPersons } from 'actions/person';



class List extends Component {

  state ={
    loading : false
  }

    componentDidMount(){
        this.setState({loading:true})
        request('/users')
        .then(response =>this.props.setItem(response.data))
        .finally(() =>this.setState({loading:false}))
    }


    columns =[
        {title: 'شناسه', key: 'id', }, 
        {title: 'نام', key: 'name', }, 
        {title: 'ایمیل', key: 'email', }, 
        {title: 'آدرس', key: 'address', 
        render :(field , record)=> {
            return `${field?.city} ${field?.street} ${record.phone}`
        }}, 
        {title: '', key: 'action',
        render : (field , record)=>{
           return <Link to={`/person/${record.id}`}><EyeFilled/></Link>
        }
     }
    ]


  render() {
    return (
      <div>
            <Table data={this.props.persons} columns={this.columns}  />;
      </div>
    )
  }
}

const mapStateToProps = function(state){
  return {
    persons : state.persons
  }
}


const mapDispatchToProps = function ( dispatch){
  return {
    setItem : function (data){
       dispatch(setPersons(data))
    }
  }
}


export default connect( mapStateToProps, mapDispatchToProps)(List)