import React, {useState} from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
const { TextArea } = Input;
function ModelPage() {
    const initalexample = "example : The movie, Hidden Figures (2016),\
 not only serves as an item of good entertainment, but is also admirable in depicting the scientific changes in the USA in the 1960s,\
 the social life issues of that era, and differences that existed in the country, especially among African-Americans.\
 The movie centers around the lives of three women: Katherine Johnson, who is recreated by movie star Taraji P. Henson; Mary Jackson,\
 who is played by Janelle Monáe; and finally, Dorothy Vaughan, as the mathematician portrayed by Octavia Spencer. Essentially,\
 all three women of African-American backgrounds,\
 they play vital roles in society through their contributions while working at NASA towards the successful launch of a spaceship into orbit."
    const [textcontext, setcontext] = useState(initalexample);
    const handleSubmit = () => {
        axios.get('/api/predict', {
            params: {
              data : textcontext
            }
          }).then((response) => {
            if (response.data.success) {
                console.log(response);    
            }
            else {
                alert(response.data.msg);
            }
        }).catch((e) => {
            console.log(e);
        })
    }
    const handleChange = (event) => {
        setcontext(event.target.value);
    }
    return (
        <div style = {{height : "100%", width : "35%",
            margin: "10rem auto"}}>
            <TextArea rows={10} value={textcontext} onChange={handleChange} showCount = {true}/>
            <div style = {{marginTop : "3rem"}}>
                <Button size="large" type = "primary" onClick = {handleSubmit}>predict</Button>
                <Button size="large" type = "default" style = {{float : "right"}}>update</Button>
            </div>
        </div>
    )
}

export default ModelPage;
