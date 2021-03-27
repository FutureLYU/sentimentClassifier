import React from 'react'
import { Typography, Divider, Popover, Avatar } from 'antd';
import {TrophyFilled, LinkedinOutlined, GithubOutlined, ContactsOutlined} from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;


function HomePage() {
    return (
        <div style = {{height : "100%", width : "70%", maxWidth : "60rem",
            margin: "10rem auto", color : "blue"}}>
            <Typography>
                <Title level={2}>
                    Hanxi Lyu
                </Title>
                <br/><br/><br/>
                <Avatar size={150} src={process.env.PUBLIC_URL+"/ava.jpg"} />
                <br/><br/><br/>
                <Paragraph>
                A graduate student at University of Southern California,
                 pursuing a Master's degree in Analytics in the school of Viterbi Engineering (Aug 2019 - May 2021). 
                 
                Solid engineer with 3 years of project experience in various fields,
                 including machine learning and web development. Strong knowledge and programming skills in Java, Python,
                  SQL, and JavaScript. Familiar with popular frameworks (TensorFlow, Java Spring, React, Flask, etc.)
                   and cloud platforms including Google Cloud, AWS.
                   <br/> 
                   <br/>  
                   <div>
                    {/* <Popover content={<Text>hanxilyu@gmail.com</Text>} title="email" trigger="click">
                    <ContactsOutlined style={{fontSize:"25px"}}/>
                    </Popover> */}
                    <Link href="https://www.linkedin.com/in/hanxi-lyu-200602193/" target="_blank"><LinkedinOutlined style={{fontSize:"25px" ,margin:"10px"}}/></Link>
                    <Link href="https://github.com/FutureLYU" target="_blank"><GithubOutlined style={{fontSize:"25px"}}/></Link>
                   </div>
                                                                                                
                </Paragraph>
                <Divider/>
                <Title level = {3}>
                    Education
                </Title>
                <Paragraph>
                    <li>University of Southern California, Master of Science in Analytics, GPA: 4.0/4.0, Aug 2019 - May 2021</li>
                    <br/>
                    <li>Dalian Maritime University, Bachelor of Science in Statistics, GPA: 87/100, Sep 2015 - Jul 2019</li>
                </Paragraph>
                <Divider/>
                <Title level = {3}>
                    Experience
                </Title>
                <Paragraph>
                    <li>Software Engineer Intern, Parallel Agile Inc. - Los Angeles, CA, Jan 2021 - Apr 2021</li>
                </Paragraph>
                <Divider/>
                <Title level = {3}>
                    Data Science Competition <Link href = "https://www.kaggle.com/futurelyu" target = "_blank"><TrophyFilled /></Link>
                </Title>
                <Paragraph>
                    <li>Kaggle CV competition: Deepfake Detection Challenge (Silver Medal), Feb 2020 - Mar 2020</li>
                    <br/>
                    <li>Kaggle ML competition: NFL Big Data Bowl (Bronze Metal), Oct 2019 – Dec 2019</li>
                </Paragraph>
                
            </Typography>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default HomePage