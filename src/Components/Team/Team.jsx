import React from 'react'
import TeamMember from '../TeamMember/TeamMember'

const Team = () => {
  return (
      <>
          <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
              <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                  <p className="p-2 text-sm font-medium tracki text-center uppercase">Development team</p>
                  <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">The talented people behind the scenes</h1>
                  <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    <TeamMember/>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Team