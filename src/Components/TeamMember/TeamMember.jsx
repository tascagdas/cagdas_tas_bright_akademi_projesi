import { React, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppContext } from '../../Contexts/AppContext';

const TeamMember = () => {
    const context = useContext(AppContext);

    const [teachers,selectedTeacher] = useSelector((state) => [
        state.TeacherReducer.teachers,
        state.TeacherReducer.selectedTeacher
    ])

    useEffect(() => {
      console.log(teachers)
    
    }, [])
    
  return (
      <>
          <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
              <img src="https://source.unsplash.com/200x200/?portrait?2" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
              <div>
                  <h2 className="text-xl font-semibold">{teachers[selectedTeacher] }</h2>
                  <span className="block pb-2 text-sm dark:text-gray-400">CTO of Company Inc.</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
              </div>
          </div>
    </>
  )
}

export default TeamMember