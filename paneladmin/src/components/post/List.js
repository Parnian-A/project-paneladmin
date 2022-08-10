import { Link } from "react-router-dom";
import React, { Component } from 'react'
import Table from "../utils/Table";
import {EyeFilled} from '@ant-design/icons';
import { connect } from "react-redux";
import { getPosts} from "redux/actions/post";


 class List extends Component {

    componentDidMount(){
        this.props.getItem()
    }

     columns = [
        {title: 'شناسه', key: 'id', }, 
        {title: 'عنوان', key: 'title', }, 
        {title: '', key: 'action',
        render : (Field , record)=> {
            return <Link to={`/post/${record.id}`}><EyeFilled/></Link>
        }
     }, 
     ]


  render() {
    return (
      <div>
            <Table data={this.props.posts} columns={this.columns} />
      </div>
    )
  }
}

const mapStateToProps = function(state){
    return {
        posts : state.posts
    }
}



const mapDispatchToProps = function (dispatch){
    return {

        getItem : ()=>dispatch(getPosts())
        
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(List)
