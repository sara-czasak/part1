import {Header, Content, ExerciseSum} from '../App'

const Course = ({courses}) => {
    console.log(courses)
    
    return <div>
        {courses.map(course => {
            console.log('name, ', course.name)
            console.log('parts, ', course.parts)
            return <div key={course.id}>
                <Header name={course.name} />
                <Content parts={course.parts} />
                <ExerciseSum parts={course.parts} />
            </div>
            
        })}
     
    </div>
}

export default Course