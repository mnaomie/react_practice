import { Routes, Route } from "react-router-dom"
import App from "../../App"

const MyRouter = () => {
    return (
        <Routes>
            <Routes path='/' element={<App/>} />
            <Routes path='/user/:id'></Routes>
            <Routes path='*' element={<h1>404 page not found</h1>} />
        </Routes>
    )
}