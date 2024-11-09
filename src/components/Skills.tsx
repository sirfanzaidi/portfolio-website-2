import React from 'react'

const Skills = () => {
  return (
    <div id= "skills" className=" container pt-40  ">
            <div className=" grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in-up ">
            <div className="space-y-10">
            <h2 className=" text-4xl md:text-5xl ">Skills</h2>
           <ul data-aos="zoom-in-up" className="space-y-5 " >
              <li ><h1 className="text-2xl text-white">
                  Associate Producer / Video Editor, Express News, Programming Department (June 2008 - Present)</h1> </li>
              <li className="text-yellow-300">
                  Edited various programs (sports, documentaries, talk shows)
                  using Adobe Premiere Pro Produced engaging content for
                  television and digital platforms Collaborated with team
                  members to increase viewership and brand awareness</li>
              <li><h1 className="text-2xl text-white">Layout Designer, Express Newspaper (2004 - 2008) -</h1></li>
              <li className="text-yellow-300">Designed visually appealing layouts for print publication</li>
              <li><h1 className="text-2xl text-white">Graphic Designer, Jaraim International (2003) -</h1></li>
              <li className="text-yellow-300">Developed creative graphic
            designs for diverse projects using Adobe Photoshop and Corel Draw
            Let me know if you would like me to help with anything else!</li>
            </ul>
           </div>
           </div>
           <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                <div className="space-y-8">
                    <h2 data-aos="zoom-in-up">Premiere</h2>
                    <h2 data-aos="zoom-in-up">FCPro</h2>
                    <h2 data-aos="zoom-in-up">PhotoShop</h2>
                </div>
                <div className="space-y-8">
                    <h2 data-aos="zoom-in-up">Inpage</h2>
                    <h2 data-aos="zoom-in-up">Corel Draw</h2>
                    <h2 data-aos="zoom-in-up">Illustrator</h2>
      </div>
      </div>
      </div>
          </div>
  )
}

export default Skills
