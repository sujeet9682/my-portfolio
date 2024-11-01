import React from 'react'
import { PagesContainer } from '../components/PagesContainer'

const Profile = () => {
    return (
        <PagesContainer>
            <div className='border flex justify-center items-center rounded-full m-auto w-96 overflow-hidden'>
                <img src='/sj.png' />
            </div>
        </PagesContainer>
    )
}

export default Profile