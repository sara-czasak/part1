import Course from './components/Course'

const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Content = ({parts}) => {
    return <div>
        <ul>
            {parts.map(part =>
              <Part key={part.id} content={part}/>  
            )}
        </ul>
    </div>
}

const Part = ({content}) => {
    return <li>
        {content.name} {content.exercises}
           </li>
}

const ExerciseSum = ({parts}) => {
    const total = parts.reduce((accumulator, currentValue) => {
        return accumulator += currentValue.exercises
    }, 0)
    console.log(total)
    return <div>
        <h4>The total of exercises is: {total}</h4>
    </div>
}

const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return <Course courses={courses} />
  }
  
  export {App, Header, Content, ExerciseSum}