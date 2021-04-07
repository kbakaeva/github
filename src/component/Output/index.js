import React from 'react'
import './output.css';

export default function Output({data}) {
    return (
        <div className='userInform'>
            {data ?
            <div className='block'>
            <div className='side'>
            <img 
            className = 'avatarImage'
            src = {data.avatar_url}
            />
            <p className='userName'>{data.name}</p>
            <p className='userLogin'>{data.login}</p>
            <p className='userBio'>{data.bio}</p>
            <div className='follInform'>
            <p className='userFollowers'>{data.followers} followers</p>
            <p className='userFollowing'>{data.following} following</p>
            </div>
            <div className='aboutCompany'>
            <img className='icon' src='https://img.icons8.com/cotton/2x/company.png'></img>
            <p className='job'>{data.company}</p>
            </div>
            <div className='aboutCompany'>    
            <img className='icon' src='https://www.clipartmax.com/png/middle/319-3193163_location-svg-png-icon-free-download-392730-great-day-free-white-location.png'></img>
            <p className='job'>{data.location} </p>
            </div>
            </div>

            <div className='side'>
            <p className='usersRepos'>repositories {data.public_repos}</p>
            </div>
            </div>
            :<h3>Empty</h3>}
        </div>
    )
}


//вывести информацию followers & following