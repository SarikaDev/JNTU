import {useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button, Paper } from '@mui/material';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Newnotification() {

    const navigate = useNavigate();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [deparment,setDeparment] = useState('');
    const [image,setImage] = useState('');

    const Handletitle = (e) =>{
        setTitle(e.target.value);
    }

    const Handleimage = (e) => {
        setImage(e.target.files[0])
        
    }
    console.log(image)

    const Handledescription = (e) =>{
        setDescription(e.target.value);
    } 

    const Handledepartment = (e) =>{
        setDeparment(e.target.value);
    } 

    function HandleApi () {
        const formData = new FormData()
        formData.append('image',image)
        formData.append('title',title)
        formData.append('description',description)
        formData.append('deparment',deparment)
        axios.post('https://jntukdmc.in/app/samplenot.php',formData).then((res)=>{
            if(res.data.statusCode === 200){
                navigate('/samplenotifications');
            }
        })
    }

  return (
    <div className="content-wrapper">
        <div className="content-header">
        <div className="container-fluid">
        <div className="row mb-2"> 
        <div className="col-sm-6">
        
        </div>
        
        </div>
        </div>
        </div>
        <section className="content">
        <div className="container-fluid"> 
        <div className="row">
        <div className="card-body">
       <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Stack alignItems={'center'} gap={2} component={Paper} elevation={5} paddingY={2} width={300} >
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={Handletitle}/>
        <TextField id="outlined-basic" label="Description" variant="outlined" onChange={Handledescription}/>
        <TextField id="outlined-basic" label="Department" variant="outlined" onChange={Handledepartment}/>
        <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={Handleimage}/>
            </Button>
        <Button variant="contained" onClick={HandleApi}>Submit</Button>
        </Stack>
        </Box>
              </div>
          
        </div>
        </div>
        </section>
    </div>
  )
}

export default Newnotification
