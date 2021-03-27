import React, {useState} from 'react';
import { Input, Button, Modal, message, Divider} from 'antd';
import axios from 'axios';
const { TextArea } = Input;

function ModelPage() {

    const initalexample = "Enter your review comment here."
    
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
                sentiment : prediction === "positive" ? 1 : 0 
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
        setConfirmLoading(true);
        axios.post('/api/review', 
            {
                review : textcontext,
                sentiment : prediction === "positive" ? 0 : 1 
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
            <Divider/>
            <p>Tips: The predict button is used to submit a user's review and get prediction and probability.</p>
            <p>Tips: The update button is used to update the model with all the new data submitted by the users.</p>
        </div>
    )
}

export default ModelPage;
