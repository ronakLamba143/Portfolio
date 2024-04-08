import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
export default function type() {
  return (
    <>
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'yellow',
          fontWeight: 500,
          fontSize: '1em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Frontend Developer',
          'Youtuber',
          'Vlogger',
          'Video Editor',
          'Photo Editor',
          'Frontend Developer',
        ]}
        multiTextDelay={2000}
        typeSpeed={30}
        />
    </>
  )
}

