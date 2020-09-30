import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `

        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "languages" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Languages
                    </TabSelector>
                    <TabSelector className={this.state.tab === "technologies" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Technologies
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "languages" ? "block" : "none"
                    }}>
                        <Progress value={90} text="C#" />
                        <Progress value={80} text="Java" />
                        <Progress value={80} text="Javascript" />
                        <Progress value={80} text="SQL" />
                        <Progress value={60} text="Python" />
                        <Progress value={70} text="C++" />
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "technologies" ? "block" : "none"
                    }}>
                        <Progress value={90} text=".NET" />
                        <Progress value={90} text="ASP.NET" />
                        <Progress value={80} text=".NET Core" />
                        <Progress value={70} text="React" />
                        <Progress value={80} text="Node" />
                        <Progress value={70} text="Angular" />
                        <Progress value={60} text="Django" />
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                            "2019 - 2020" : {
                                title: "Junior Developer",
                                institution: "Mapfre - UK",
                                description: "Worked as part of small, highly skilled generalist team. Worked on maintaining and upgrading an ecosystem of30+ websites, webservices and backend applications. Personally in charge of managing BAU Service Desk/JIRAqueue, liasing with end users and colleagues of various departments and specialities to solve issues quickly andefficiently.Also worked with a variety of high profile clients and partners (BMW, VW, IBM) to push forward major projectsfor the business at large, both as the main developer and as part of larger multi-disciplinary teams.Tech Stack: .NET, .NET Core, C#, VB, Access, Angular, React, Azure DevOps, Git"
                              },
                                "2018 - 2019" :  {
                                    title: "Tech Team Member",
                                    institution: "NTS Events",
                                    description: "Team member - unpaid - helping to improve events through tech development. Helped setup python-based ATM systems, and develop NFC communication"
                                }
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{

                          "2016 - 2019" : {
                              title: "Software Engineering (BSc Hons)",
                              institution: "Swansea University",
                              description: "Graduated with First Class Honors. 3rd Year Student Representative. Represented as part of a team for NHS Wales hackathon. Final year project: A Land Registry Solution using Hyperledger Fabric and Docker, and an alternative option using Ethereum. Designed and developed a Blockchain system, smart contracts, and REST API and website (React.JS) which was hosted on AWS Cloud"
                          },
                          "2014 - 2016" :  {
                                    title: "College",
                                    institution: "North Bristol Post 16",
                                    description: "A-Level specialisation: Computing, Mathematics, and Biology"
                                },
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart
