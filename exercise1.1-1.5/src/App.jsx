
const Header = ({name}) => {
    // console.log("HEADER course", name)
    return <h1>{name}</h1>
}

const Content = ({parts}) => {
    // console.log('Content ', parts[0].name)
    return <div>
        <ul>
            {parts.map(part =>
              <Part key={part.id} content={part}/>  
            )}
        </ul>
    </div>
}

const Part = ({content}) => {
    // console.log("Part ", content.name)
    return <li>
        {content.name} {content.exercises}
           </li>
}

const ExerciseSum = ({parts}) => {
    // let sum = 0
    const total = parts.reduce((accumulator, currentValue) => {
        return accumulator += currentValue.exercises
    }, 0)
    console.log(total)
    return <div>
        <h4>The total of exercises is: {total}</h4>
    </div>


    // <div>
    //     {parts.map(part => {
    //         total += part.exercises
    //     })}
    //     <h4>The total of exercises is: {total}</h4>
    // </div>
}

const Course = ({course}) => {
    // console.log("course ",course)
    // console.log("course.id ",course.id)
    // console.log("course.name ",course.name)
    // console.log("course.parts ",course.parts[0])
    return <div>
     <Header name={course.name} />
     <Content parts={course.parts} />
     <ExerciseSum parts={course.parts} />
    </div>
}

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }
  
    return <Course course={course} />
  }
  
  export default App