import React from 'react'
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

function HomePage() {
    return (
        <div style = {{height : "100%", width : "70%", maxWidth : "60rem",
            margin: "10rem auto", color : "blue"}}>
            <Typography>
                <Title>Movie Review Sentiment Classifier</Title>
                <Title level={4}>Author : Hanxi Lyu</Title>
                <Divider/>
                <Title level={2}>Introduction</Title>
                <Paragraph>
                    The project is based on the ISE 590 directed research of University of Southern California.
                    This is a full-stack website with machine learning model embeded in the Flask backend service. 
                    It can be used to classify whether the sentiment of a movie review is postive or negtive.
                    The website can collect real time data from the user submission and update the backend model.
                    The structure of the project is built on <Text code>React</Text> and <Text code>Flask</Text>. 
                    The template of this project can be used to make fast deployment with new machine learning models.
                    All the codes are public in my <Link href="https://github.com/FutureLYU/sentimentClassifier" target="_blank">github</Link> webiste.

                </Paragraph>
                
                <Title level={2}>Guidelines and Resources</Title>
                <Paragraph>
                    The topics involved in this project include the following:
                </Paragraph>

                <Paragraph>
                <ul>
                    <li>
                    Cleaning and preparing text data
                    </li>
                    <li>
                    Building feature vectors from text documents
                    </li>
                    <li>
                    Training a machine learning model to classify positive and negative movie reviews
                    </li>
                    <li>
                        build front end features with react and antd
                    </li>
                    <li>
                        build backend service with Flask
                    </li>
                    <li>
                        deploy the whole website to public web server
                    </li>
                </ul>
                </Paragraph>

                <Paragraph>
                    We use the tokenizer from <Text code>NLTK</Text> to split text document and 
                    transfer it into vector features by <Text code>HashingVectorizer</Text> from <Text code>scikit-learn</Text>.
                    For model part, we use <Text code>SGDClassifier</Text> to implement online training. 
                    The Flask backend service is composed by database models, routers and ML service. 
                    And sqlite is chose as the backend database because of its convinience. 
                    For front end part, <Text code>antd</Text> and <Text code>axios</Text> are used to handle http request and UI. 
                    After finishing all the tasks above, the website is deployed on pythonanywhere.

                </Paragraph>
                <Paragraph>
                    <Link href="./model">have a try now</Link>
                </Paragraph>
                <Title level={2}>
                    About Author
                </Title>
                <Paragraph>
                A graduate student at University of Southern California,
                 pursuing a Master's degree in Analytics in the school of Viterbi Engineering. 
                Solid engineer with 3 years of project experience in various fields,
                 including web development and machine learning. Strong knowledge and programming skills in Java, Python,
                  SQL, and JavaScript. Familiar with popular frameworks (Java Spring, React, Flask, etc.)
                   and cloud platforms including Google Cloud, AWS.
                   <br/> <br/>
                   contact : hanxilyu@gmail.com 
                   <br/>
                   <Link href="https://www.linkedin.com/in/hanxi-lyu-200602193/" target="_blank">LinkedIn</Link>
                   <br/><br/><br/>                                                                                
                </Paragraph>
                
            </Typography>
        </div>
    )
}

export default HomePage