// import Button from '../Button/Button'
// import s from './TaskForm.module.css'
// import { useDispatch } from 'react-redux'
// import { addTask } from '../../redux/tasksSlice'

// export default function TaskForm() {
//     const dispatch = useDispatch()
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const form = e.target
//         dispatch(addTask({
//             id: crypto.randomUUID(),
//             text: form.elements.text.value,
//             completed: false,
//         }))
//         form.reset()
//     }
//     return (
//         <form className={s.form} onSubmit={handleSubmit}>
//             <input type='text' className={s.field} name='text' placeholder='Enter task text...' />
//             <Button type='submit'>Add task</Button>
//         </form>
//     )
// }