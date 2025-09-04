import React from 'react'

const PlatformContent = ({display, onHover, onLeave}) => {
    if(!display){
        return null;
    }

  return (
    <div className={`py-5 px-3 rounded-2xl bg-gray-50 text-gray-800 flex justify-around w-200 absolute left-20`} onMouseOver={onHover} onMouseLeave={onLeave}>
        <div>
            <div className="firstContent">
                <p className='content-title'> <a href="https://github.com/features/copilot">Github Copilot</a></p>
                <p>write better code with AI</p>
            </div>
            <div className="firstContent">
                <p className='content-title'>Github Spark</p>
                <p>build and deploy intellegent apps</p>
            </div>
            <div className="firstContent">
                <p className='content-title'>Github Models</p>
                <p>manage and compare prompts</p>
            </div>
            <div className="firstContent">
                <p className='content-title'>Github Advanced Security</p>
                <p>find and fix vulnerabilties</p>
            </div>
            <div className="firstContent">
                <p className='content-title'>Actions</p>
                <p>automate any workflow</p>
            </div>
        </div>

        <div>
            <div className="secondContent">
                <p className='content-title'>Codespaces</p>
                <p>Instant dev environments</p>
            </div>
            <div className="secondContent">
                <p className='content-title'>Issues</p>
                <p>Plan and track work</p>
            </div>
            <div className="secondContent">
                <p className='content-title'>Code Review</p>
                <p>Manage code changes</p>
            </div>
            <div className="secondContent">
                <p className='content-title'>Discussions</p>
                <p>Collaborate outside of code</p>
            </div>
            <div className="secondContent">
                <p className='content-title'>Code Search</p>
                <p>Find more, search less</p>
            </div>
        </div>

        <div className='border-l-1 border-gray-400 pl-5'>
            <div className="thirdContent">
                <p className='text-lg font-semibold'>Explore</p>
            </div>
            <div className="thirdContent"><a href="">Why GitHub</a></div>
            <div className="thirdContent"><a href="">All features</a></div>
            <div className="thirdContent"><a href="">Documentation</a></div>
            <div className="thirdContent"><a href="">GitHub Skills</a></div>
            <div className="thirdContent"><a href="">Blog</a></div>
        </div>
    </div>
  )
}

export default PlatformContent