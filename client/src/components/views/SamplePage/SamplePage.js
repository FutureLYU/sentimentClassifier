import React from 'react'
import {Divider, Typography} from 'antd'
const {Paragraph, Title} = Typography


function SamplePage() {
    return (
        <div style = {{height : "100%", width : "70%", maxWidth : "60rem",
            margin: "10rem auto", color : "blue"}}>
            
            <Typography>
                <Title level = {2}>IRON MAN 2008</Title>
                <Paragraph copyable>
                    What gives this its distinction is Robert Downey Jr, who is terrific.
                </Paragraph>
                <Divider/>
                <Title level = {2}>DUMBO 2019</Title>
                <Paragraph copyable>
                It sputters through its first act, jolts us through its last and, worst of all, 
                reveals Dumbo's special ability too early, leaving little to the imagination and no reprieve from the nagging horrors of reality.
                </Paragraph>
                <Divider/>
                <Title level = {2}>THE DARK KNIGHT 2008</Title>
                <Paragraph copyable>
                This may seem like faint praise, 
                but about the highest compliment I can give Christopher Nolan's The Dark Knight right now
                 is to say that there were many long stretches during which I didn't even realize it was a superhero movie.
                </Paragraph>
                <Divider/>
                <br/><br/><br/><br/><br/><br/>
            </Typography>   
        </div>
    )
}

export default SamplePage
