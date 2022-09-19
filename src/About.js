import React, {Component} from "react";
import "./About.css"

class About extends Component {
    render(){
        return(
            <div className="about">
                <h2>Who am i?</h2>
                <div className="border"></div>
                <p className="p">I am a Computer Science student at DSATM, bangalore. I love learning new things besides working on some projects of my intrest in my free time.I also enjoy listening music, dancing or writing stories and poetry sometimes.Ever since I got to know more about data science and analytics and powerful technologies such as python, Power BI, etc. I got more curious and got addicted to gaining more and more knowledge in this field. I've attended many workshops, and webinars
                 and I often see myself working on some python or power BI-based projects or practicing my coding skills on websites that are dedicated to coding practices.Though I'm still
                 a novice in this field, I have always been confident about the precious knowledge I own.I strongly belive that my tireless efforts to aid my love and passion for data analysis will someday become a solid
                 platform for my growth.</p>
            </div>

        )
    }   
}
export default About;
