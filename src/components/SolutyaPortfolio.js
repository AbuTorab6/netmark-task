import React,{Fragment,useState,useEffect} from 'react';

import portfolio1 from '../asset/image/portfolio1.png'
import portfolio2 from '../asset/image/portfolio2.png'
import portfolio3 from '../asset/image/portfolio3.png'
import portfolio4 from '../asset/image/portfolio4.png'



const SolutyaPortfolio = () => 
{

    const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

    const portfolio = [
        {
          title: 'solutya',
          category: ['all', 'web_design', 'web_development'],
          img: portfolio1,
          url: 'https://solutya.com',
        },
        {
          title: 'Abu Torab',
          category: ['all', 'web_design', 'mobile_app'],
          img: portfolio2,
          url: 'https://abutorab.me',
        },
        {
          title: 'rabbil hasan',
          category: ['all', 'web_design', 'web_development'],
          img: portfolio3,
          url: 'https://rabbil.com/',
        },
        {
          title: 'shonod',
          category: ['all', 'branding'],
          img: portfolio4,
          url: 'https://shonod.com',
        },
        
      ];


  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => 
  {
    setProjects([]);
    const filtered = portfolio.map
    (
      (p) => 
      (
        {
        ...p,
        filtered: p.category.includes(filter),
        }
      )
    );
    setProjects(filtered);
  }, [filter]);

      


    return (
        <Fragment>
            <section className='portfolio-section'>
                <div className='row'>
                    <button className='buttonProject' >Projects</button>
                    <h2>Take A Look At Our Latest Portfolio</h2>

                    <div className='btn-group'>
                        <button className={` ${filter === 'all' ? 'portfolioActive' : ''}`} onClick={() => setFilter('all')} active={(filter === 'all').toString()}>All</button>
                        <button className={` ${filter === 'web_design' ? 'portfolioActive' : ''}`} onClick={() => setFilter('web_design')} active={(filter === 'web_design').toString()}>Web Design</button>
                        <button className={` ${filter === 'web_development' ? 'portfolioActive' : ''}`} onClick={() => setFilter('web_development')} active={(filter === 'web_development').toString()}>Web Development</button>
                        <button className={` ${filter === 'branding' ? 'portfolioActive' : ''}`} onClick={() => setFilter('branding')} active={(filter === 'branding').toString()}>Branding</button>
                        <button className={` ${filter === 'mobile_app' ? 'portfolioActive' : ''}`} onClick={() => setFilter('mobile_app')} active={(filter === 'mobile_app').toString()}>Mobile App</button>
                    </div>

                   
                    <div className='portfolio-grid'>
                    {
                        
                        projects.map(
                            (item, idx) =>
                            item.filtered === true ? 
                            (
                                <div className='col'>
                                    <a  href={item.url} target="_blank"><img src={item.img} className='portfolio-image portfolio-image'/></a>
                                    <h3><a className='underline'  href="https://abutorab.me" target="_blank">{item.title}</a></h3>
                                </div>
                            )
                            :
                            ('')
                        )}
                        
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default SolutyaPortfolio;