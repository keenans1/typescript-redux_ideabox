// const getIdeas = (): any => {
//     return (
//         fetch('http://localhost:3001/api/v1/ideas')
//             .then(resp => resp.json())
//     )
// }

// export default getIdeas

const getIdeas = () => {
    return (
        fetch('http://localhost:3001/api/v1/ideas')
            .then(resp => resp.json())
    )
}

export default getIdeas