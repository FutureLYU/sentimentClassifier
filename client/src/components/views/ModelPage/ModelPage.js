import React, {useState} from 'react';
import { Input, Button, Modal, message} from 'antd';
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
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [prediction, setprediction] = useState("unknown");
    const [proba, setproba] = useState(0);
    const [submitloading, setsubmitloading] = useState(false);
    const [updateloading, setupdateloading] = useState(false);
    const info = (s) => {
        message.info(s);
      };

    const handleSubmit = () => {
        setsubmitloading(true);
        axios.get('/api/predict', {
            params: {
              data : textcontext
            }
          }).then((response) => {
            if (response.data.success) {
                console.log(response);
                setsubmitloading(false);
                setprediction(response.data.result.prediction);
                setproba(response.data.result.probability);
                setVisible(true);    
            }
            else {
                info(response.data.msg);
            }
        }).catch((e) => {
            console.log(e);
        })
    }

    const handleChange = (event) => {
        setcontext(event.target.value);
    }

    const handleCorrect = () => {
        setConfirmLoading(true);
        axios.post('/api/review', 
            {
                review : textcontext,
                sentiment : 1
            }
        ).then((response) => {
            if (response.data.success) {
                setVisible(false);
                setConfirmLoading(false);
                info("new review saved");
            }
            else {
                setVisible(false);
                setConfirmLoading(false);
                info("fail to save this review");
            }
        }).catch((e) => {
            console.log(e);
        })
      };
    
      const handleWrong = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

      const handleCancel = () => {
          setConfirmLoading(false);
          setVisible(false);
      }

      const handleUpdate = () => {
          setupdateloading(true);
          axios.get('/api/update').then((response) => {
            info(response.data.msg);
            setupdateloading(false);
          }).catch((e) => {
              console.log(e);
          })
      }

    return (
        <div style = {{height : "100%", width : "70%", maxWidth : "40rem",
            margin: "10rem auto"}}>
            <TextArea rows={10} value={textcontext} onChange={handleChange} showCount = {true}/>
            <Modal
                title="Movie Review Sentiment Classifier"
                visible={visible}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                    <Button key="wrong" type = "danger" loading={confirmLoading} onClick={handleWrong}>
                      wrong
                    </Button>,
                    <Button key="correct" type="primary" loading={confirmLoading} onClick={handleCorrect}>
                      correct
                    </Button>,
                  ]}
            >
                <p>prediction : {prediction}</p>
                <p>probability : {proba}</p>
            </Modal>
            <div style = {{marginTop : "3rem"}}>
                <Button size="large" type = "primary" loading={submitloading} onClick = {handleSubmit}>predict</Button>
                <Button size="large" type = "default" loading={updateloading} style = {{float : "right"}} onClick = {handleUpdate}>update</Button>
            </div>
        </div>
    )
}

export default ModelPage;
