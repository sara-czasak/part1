const CourseHeader = ({courses}) => {
    return <div>
        {courses.map(course => {
            <h1>
                {course.content}
            </h1>
        })}
    </div>
}

export default CourseHeader