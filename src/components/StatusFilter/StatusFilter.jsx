// import { useDispatch, useSelector } from "react-redux";
// import s from './StatusFilter.module.css'
// import Button from "../Button/Button";
// import { setStatusFilter } from "../../redux/filtersSlice";

// export default function StatusFilter() {
//     // 1. Отримуємо значення фільтра із стану Redux
//     const filter = useSelector(state => state.filters.status)
//     const dispatch = useDispatch()
//     const handleFilterChange = (filter) => dispatch(setStatusFilter(filter))
//     return (
//         <div className={s.wrapper}>
//             <Button selected={filter === 'all'} onClick={() => handleFilterChange('all')}>All</Button>
//             <Button selected={filter === 'active'} onClick={() => handleFilterChange('active')}>Active</Button>
//             <Button selected={filter === 'completed'} onClick={() => handleFilterChange('completed')}>Completed</Button>
//         </div>
//     )
// }