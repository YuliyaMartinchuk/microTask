import s from "./NewComponent.module.css"

type ListCarsPropsType = {
    Cars: Array<TopCarsPropsType>
}

type TopCarsPropsType = {
    manufacturer: string
    model: string
}
export const TopCars = (props: ListCarsPropsType) => {
    return (
        <table className={s.table}>
            <thead>
            <tr>
                <th className={s.th}>Manufacture</th>
                <th className={s.th}>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.Cars.map((carArray, index) => {
                return (<tr key={index}>
                        <td className={s.td}>{carArray.manufacturer}</td>
                        <td className={s.td}> {carArray.model}</td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    )
}


// type NewComponentType = {
//     // students: Array<StudentType>
//     students: StudentType[]
// }
//
// type StudentType = {
//     id: number;
//     name: string
//     age: number
// }
// export const NewComponent = (props: NewComponentType) => {
//     const topCars = [
//         {manufacturer:'BMW', model:'m5cs'},
//         {manufacturer:'Mercedes', model:'e63s'},
//         {manufacturer:'Audi', model:'rs6'}
//     ]
//
//     return (
//         <ul>
//             {props.students.map((objectFromStudentArray, index) => {
//                 return (
//                     <li key={objectFromStudentArray.id}>
//                         <span>{objectFromStudentArray.name}</span>
//                         <span>: {objectFromStudentArray.age}</span>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }