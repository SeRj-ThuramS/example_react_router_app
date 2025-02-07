import React, { useState, useEffect } from 'react'
import axios from 'axios'

function About() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "About Page"; // Устанавливаем title для страницы "About"
        // Запрос данных при монтировании компонента
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);  // Сохраняем полученные данные в стейт
                setLoading(false);         // Убираем индикатор загрузки
            })
            .catch((err) => {
                setError(err.message);    // Если ошибка, сохраняем её в стейт
                setLoading(false);        // Убираем индикатор загрузки
            });
    }, []);  // Массив зависимостей пуст, чтобы запрос был выполнен только один раз при монтировании

    if (loading) return <p>Loading...</p>;  // Показываем индикатор загрузки
    if (error) return <p>Error: {error}</p>;  // Показываем ошибку, если она возникла

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>  // Отображаем список пользователей
                ))}
            </ul>
        </div>
    );
}

export default About