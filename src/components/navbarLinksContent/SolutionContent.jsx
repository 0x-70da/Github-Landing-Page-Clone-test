import React from 'react'

const SolutionContent = ({display, onHover, onLeave}) => {
        if(!display){
        return null;
    }
  return (
    <div className={`py-5 px-3 rounded-2xl bg-gray-50 text-gray-800 flex justify-between max-w-100 absolute left-40`} onMouseOver={onHover} onMouseLeave={onLeave}>
        <div>
            <div className="firstContent">
                <p className='content-title'>Github Copilot</p>
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
                <p>Codespaces</p>
                <p>Instant dev environments</p>
            </div>
            <div className="secondContent">
                <p>Issues</p>
                <p>Plan and track work</p>
            </div>
            <div className="secondContent">
                <p>Code Review</p>
                <p>Manage code changes</p>
            </div>
            <div className="secondContent">
                <p>Discussions</p>
                <p>Collaborate outside of code</p>
            </div>
            <div className="secondContent">
                <p>Code Search</p>
                <p>Find more, search less</p>
            </div>
        </div>
    </div>  )
}

export default SolutionContent