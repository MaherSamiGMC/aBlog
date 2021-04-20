import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-tiger-transition";
import './AddArticle.css'

const AddArticle=(props)=>{
    const [content,setContent]=useState({title:"",description:""})


    const HandleTitle=(e)=>setContent({...content,title:e.target.value})
    const HandleDescription=(e)=>setContent({...content,description:e.target.value})
    const HandleClick=(e)=>{
        e.preventDefault();
        props.Adding(content)
        setContent({title:"",description:""})
    }
    return (
    <Form className="form">
    <Form.Group >
        <Form.Label>Article title : </Form.Label>
        <Form.Control onChange={HandleTitle} value={content.title} type="text" placeholder="Your Article title" />
    </Form.Group>
    
    
    <Form.Group >
        <Form.Label>Type your article here</Form.Label>
        <Form.Control onChange={HandleDescription} value={content.description} as="textarea" rows={10} />
    </Form.Group>
    
    
    <Button type="button" onClick={HandleClick} variant="primary" type="submit">
    <Link to="/ListOfArticles" transition='drop-left' >
        
   Submit 
   </Link>
 </Button> 
 

    </Form>
)}

export default AddArticle