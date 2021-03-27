import React from 'react'
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
function OverviewPage() {
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
                <Title level={2}>Data preprocessing</Title>
                <Paragraph>
                    The movie review dataset can be downloaded from http://ai.stanford.edu/~amaas/data/sentiment/.
                    Then we remove all of the HTML markup from the movie reviews by regular expression. 
                    After we removed the HTML markup, 
                    we used a slightly more complex regex to find emoticons, which we temporarily stored as emoticons. 
                    Next, we removed all non-word characters from the text via the regex <Text code>[\W]+</Text> and converted the text into lowercase characters.
                    Using the PorterStemmer from the <Text code>NLTK</Text> package, 
                    we modified our tokenizer function to reduce words to their root form, 
                    which was illustrated by the simple preceding example where the word 'running' was stemmed to its root form 'run'.
                    In order to remove stop-words from the movie reviews, 
                    we will use the stop words set from the NLTK library, which can be obtained by calling the nltk.download function.
                    So we have done all the preprocessing work so far.
                </Paragraph>


                <Title level={2}>Feature engineering</Title>
                <Paragraph>
                Before we train a online ML model, we need to convert the collection of text documents to a matrix of token occurrences.
                Since <Text code>CountVectorizer</Text> and <Text code>TfidfVectorizer</Text> requires holding the complete vocabulary in memory. 
                The vectorizer we used here for feature engineering is <Text code>HashingVectorizer</Text> from <Text code>scikit-learn</Text>. 
                HashingVectorizer is data-independent and makes use of the hashing trick via the 32-bit MurmurHash3 function by Austin Appleby.
                </Paragraph>
                
                <div><Text code>... from sklearn.feature_extraction.text import HashingVectorizer</Text></div>
                <div><Text code>... from sklearn.linear_model import SGDClassifier</Text></div>
                <div><Text code>... vect = HashingVectorizer(decode_error='ignore',</Text></div>
                <div><Text code>...                          n_features=2**21,</Text></div>
                <div><Text code>...                          preprocessor=None,</Text></div>
                <div><Text code>...                          tokenizer=tokenizer)</Text></div>
                    
                
                
                <Title level={2}>Model training</Title>
                <Paragraph>
                    To implement a online algorithm, we will use of the partial_fit function of the <Text code>SGDClassifier</Text> 
                    in scikit-learn to stream the documents directly from our local drive, 
                    and train a logistic regression model using small mini-batches of documents.
                    we initialized HashingVectorizer with our tokenizer function and set the number of features to 2**21. 
                    Furthermore, we reinitialized a logistic regression classifier by setting the loss parameter 
                    of the SGDClassifier to 'log'—note that by choosing a large number of features in the HashingVectorizer, 
                    we reduce the chance of causing hash collisions, but we also increase the number of coefficients in 
                    our logistic regression model. Having set up all the complementary functions, 
                    we can now start our training. Finally, the accuracy of the model is approximately 88 percent.
                </Paragraph>

                <Title level={2}>Web development</Title>
                <Paragraph>
                    <Text code>React</Text> is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
                    It lets you compose complex UIs from small and isolated pieces of code called “components”.
                    Flask is a lightweight WSGI web application framework. 
                    It is designed to make getting started quick and easy, with the ability to scale up to complex applications. 
                    It began as a simple wrapper around Werkzeug and Jinja and has become one of the most popular Python web application frameworks.
                    There are several ways to create a combined project with React and Flask. 
                    I start from the frontend because the project structure is more complex than the backend. 
                    For this project I used the create-react-app generator to create a simple React project.
                    <Text code>antd</Text> and <Text code>axios</Text> are used to handle http request and UI.
                    The Flask backend service is composed by database models, routers and ML service. 
                    And sqlite is chose as the backend database because of its convinience. 
                    After finishing all the tasks above, the website is deployed on pythonanywhere.
                </Paragraph>

            </Typography>
            <br/><br/><br/><br/>
        </div>
    )
}

export default OverviewPage
