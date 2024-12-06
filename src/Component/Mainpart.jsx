import img1 from "../IMG/Thumbnail-8.png";
import img2 from "../IMG/Ellipse 4 (1).png";
import img3 from "../IMG/verified.png";
import img4 from "../IMG/Ellipse 4-1.png";
import img5 from "../IMG/Thumbnail-9.png";
import img6 from "../IMG/Ellipse 4 (2).png";
import img7 from "../IMG/Thumbnail-10.png";
import img8 from "../IMG/Ellipse 4 (3).png";
import img9 from "../IMG/Thumbnail-11.png";
import img10 from "../IMG/live.png";
import img11 from "../IMG/Thumbnail-4.png";
import img12 from "../IMG/Ellipse 4 (4).png";
import img13 from "../IMG/Thumbnail-5.png";
import img14 from "../IMG/Thumbnail-6.png";
import img15 from "../IMG/Ellipse 4 (5).png";
import img16 from "../IMG/Thumbnail-7.png";
import img17 from "../IMG/Ellipse 4 (6).png";
import img18 from "../IMG/Thumbnail.png";
import img19 from "../IMG/Thumbnail-1.png";
import img20 from "../IMG/Thumbnail-2.png";
import img21 from "../IMG/Thumbnail-3.png";

function App() {

  const data1 = [
    {id:2, img01:img1, img:img2, tick:img3, dot:img4, title:"Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", chname:"Coke Studio Bangla", views:"1.5M views", time:"2 days ago", className:"cname27"},
    {id:2, img01:img5, img:img6, tick:img3, dot:img4, title:"Infinix Note 12:Amoled Helio G88 SoC!", chname:"ATC Android ToTo Company", views:"4.2M views", time:"2 days ago", className:"cname2"},
    {id:2, img01:img7, img:img8, tick:"", dot:img4, title:"MY first UX Design case study-this got me my first job.", chname:"Saptarshi Prakash", views:"4.8K views", time:"1 years ago", className:"cname23"},
    {id:1, img01:img9, img:img10, tick:"", dot:"", title:"My Mix", chname:"Lopamundra Mitra, Anupam Roy, and more",cname:"thumb4", cname2:"mixbox1"},
    {id:2, img01:img11, img:img12, tick:img3, dot:img4, title:"UX Design-What is it? (From AJ&Smart)", chname:"AJ&Smar", views:"150K views", time:"3 years ago", className:"cname24"},
    {id:1, img01:img13, img:img10, title:"Mix-Mombati | Mohan Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika", chname:"Mohan Sharif, Odd Signature, Shayan Chowdhury Arnob, and more",cname:"thumb4a", cname2:"mixbox2"},
    {id:2, img01:img14, img:img15, tick:"", dot:img4, title:"| 48 VISA-FREE", chname:"Nadir On The Go", views:"1.7M views", time:"1 years ago", className:"cname25"},
    {id:2, img01:img16, img:img17, tick:img3, dot:img4, title:"14 Advanced Tips to Design FASTER in Figma", chname:"Mizko", views:"53k views", time:"1 years ago", className:"cname26"},
    {id:2, img01:img18, img:img2, tick:img3, dot:img4, title:"Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", chname:"ATC Android ToTo Company", views:"1.5M views", time:"2 days ago", className:"cname2"},
    {id:2, img01:img19, img:img2, tick:img3, dot:img4, title:"Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", chname:"ATC Android ToTo Company", views:"1.5M views", time:"2 days ago", className:"cname2"},
    {id:2, img01:img20, img:img2, tick:img3, dot:img4, title:"Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", chname:"ATC Android ToTo Company", views:"1.5M views", time:"2 days ago", className:"cname2"},
    {id:2, img01:img21, img:img2, tick:img3, dot:img4, title:"Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", chname:"ATC Android ToTo Company", views:"1.5M views", time:"2 days ago", className:"cname2"},
  ]

  return (
    <>
    <div id="main">
        {data1.map((i)=>(

          i.id==2 ? (
            <div className="container">
              <div className="thumb">
                <div><img src={i.img01} alt="" /></div>
                <div className="vtitle">
                    <div><img src={i.img} alt="" /></div>
                    <div>{i.title}</div>
                </div>
                <div className="cname">
                    <div className={i.className}>{i.chname}<img src={i.tick} alt="" height="40%"/>
                    </div>
                </div>
                <div className="views">
                  <div>{i.views}</div>
                  <div>
                    <img src={i.dot} style={{ height: '20%', paddingBottom: '28%' }} />
                  </div>
                  <div>{i.time}</div>

                </div>
            </div>
          </div>
        ): <div className="container">
        <div className={i.cname}>
            <div><img src={i.img01} alt="" /></div>
            <div className={i.cname2}>
                 <div><img src={i.img} alt="" /></div>
            </div>
            <div className="vtitle2">
                <div>{i.title}</div>
            </div>
            <div className="cname1a" style={{ fontSize: '80%' }}>
                <div className="cnamea" style={{ color: 'rgb(100, 100, 100)' }}>{i.chname}
                </div>
            </div>
        </div>
    </div>
        ))}
        {/* <div className="container">
            <div className="thumb">
                <div><img src={img1} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img2} alt="" /></div>
                    <div>Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita</div>
                </div>
                <div className="cname" style={{fontSize: "80%"}}>
                    <div className="cname27" style={{ color: 'rgb(100, 100, 100)' }}>Coke Studio Bangla <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                  <div style={{ color: 'rgb(100, 100, 100)' }}>1.5M views</div>
                  <div style={{ color: 'rgb(100, 100, 100)' }}>
                    <img src={img4} alt="" style={{ height: '20%', paddingBottom: '28%' }} />
                  </div>
                  <div style={{ color: 'rgb(100, 100, 100)' }}>2 days ago</div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img5} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img6} alt="" height="70%"/></div>
                    <div>Infinix Note 12:Amoled Helio G88 SoC!</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname2" style={{ color: 'rgb(100, 100, 100)' }}>ATC Android ToTo Company <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                  <div style={{ color: 'rgb(100, 100, 100)' }}>4.2M views</div>
                  <div style={{ color: 'rgb(100, 100, 100)' }}>
                    <img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }} />
                  </div>
                  <div style={{ color: 'rgb(100, 100, 100)' }}>2 days ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img7} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img8} alt="" /></div>
                    <div>MY first UX Design case study-this got me my first job.</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname23" style={{ color: 'rgb(100, 100, 100)' }}>Saptarshi Prakash 
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>4.8K views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1 years ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb4">
                <div><img src={img9} alt="" /></div>
                <div className="mixbox1">
                     <div><img src={img10} alt="" /></div>
                </div>
                <div className="vtitle2">
                    <div>My Mix</div>
                </div>
                <div className="cname1a" style={{ fontSize: '80%' }}>
                    <div className="cnamea" style={{ color: 'rgb(100, 100, 100)' }}>Lopamundra Mitra, Anupam Roy, and more
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img11} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img12} alt="" /></div>
                    <div>UX Design-What is it? (From AJ&Smart)</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname24" style={{ color: 'rgb(100, 100, 100)' }}>AJ&Smar <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>150K views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>3 years ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb4a">
                <div><img src={img13} alt="" /></div>
                <div className="mixbox2">
                    <div><img src={img10} alt="" /></div>
                </div>
                <div className="vtitle2">
                    <div>Mix-Mombati | Mohan Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika</div>
                </div>
                <div className="cname1a" style={{ fontSize: '80%' }}>
                    <div className="cnamea" style={{ color: 'rgb(100, 100, 100)' }}>Mohan Sharif, Odd Signature, Shayan Chowdhury Arnob, and more</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumbn">
                <div><img src={img14} alt="" /></div>
                <div className="vtitlen">
                    <div><img src={img15} alt="" /></div>
                    <div style={{ display: 'grid', justifyContent: 'center' }}>-</div>
                    <div></div>
                    <div>| 48 VISA-FREE</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname25" style={{ color: 'rgb(100, 100, 100)' }}>Nadir On The Go
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1.7M views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1 years ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img16} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img17} alt="" /></div>
                    <div>14 Advanced Tips to Design FASTER in Figma</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname26" style={{ color: 'rgb(100, 100, 100)' }}>Mizko <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>53k views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1 years ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img18} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img2} alt="" /></div>
                    <div>Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname2" style={{ color: 'rgb(100, 100, 100)' }}>ATC Android ToTo Company <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1.5M views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>2 days ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img19} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img2} alt="" /></div>
                    <div>Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname2" style={{ color: 'rgb(100, 100, 100)' }}>ATC Android ToTo Company <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1.5M views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>2 days ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img20} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img2} alt="" /></div>
                    <div>Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname2" style={{ color: 'rgb(100, 100, 100)' }}>ATC Android ToTo Company <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1.5M views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>2 days ago</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="thumb">
                <div><img src={img21} alt="" /></div>
                <div className="vtitle">
                    <div><img src={img2} alt="" /></div>
                    <div>Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita</div>
                </div>
                <div className="cname" style={{ fontSize: '80%' }}>
                    <div className="cname2" style={{ color: 'rgb(100, 100, 100)' }}>ATC Android ToTo Company <img src={img3} alt="" height="40%" style={{ paddingTop: '3px', paddingLeft: '3px' }}/>
                    </div>
                </div>
                <div className="views" style={{ fontSize: '80%' }}>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>1.5M views</div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}><img src={img4} alt="" height="20%" style={{ paddingBottom: '28%' }}/></div>
                    <div style={{ color: 'rgb(100, 100, 100)' }}>2 days ago</div>
                </div>
            </div>
        </div> */}
    </div>
    </>
  );
}

export default App;
