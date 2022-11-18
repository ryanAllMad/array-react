import React, { useState } from 'react'
import Button from './Button'
import { List } from './List'

const BestNovel = () => {
    const [newList, setNewList] = useState([<li></li>])
    const [newTitle, setNewTitle] = useState('')
    const handleFilter = () => {
       const updatedList = List.filter(list => {
            if(list.Year < 2000) {  
                return
                // we aren't filtering jack shit below. let's think it through
            }
            return list
        })
        
        setNewList(updatedList.map(list => (
            <li key={list.id}>
                <span className='author'>{list.Author} - </span>
                <span className='title'>{list.Title} - </span>
                <span className='year'>{list.Year} </span>
            </li>
        ))
            
        )
        setNewTitle("Novel's that won after the year 2000")
        console.log(updatedList) 
        }

    const handleSort = () => {
        const updatedList = List.sort((a, b) => a.Author > b.Author ? 1 : -1)
        setNewList(updatedList.map(list => (
            <li key={list.id}>
                <span className='author'>{list.Author} - </span>
                <span className='title'>{list.Title} - </span>
                <span className='year'>{list.Year} </span>
                </li>
        ))
        )
        setNewTitle("Author's sorted by Author first name")
        console.log(updatedList)
    }
    const handleSome = () => {
        const updatedList = List.some(list => {
            const ursula = list.Author === 'Ursula K. Le Guin'
            return ursula
        })
        if(updatedList){
        setNewList([<span>'Author by the name Ursula K. Le Guin exists in the list'</span>])
        }
        setNewTitle("Does an Author by the name Ursula K. Le Guin exist in the list?")
        console.log(updatedList)
    }
    return (
        <>
        <h1>Novels by Women who've won a Nebula Award:</h1>
        <ul>
            {List.map(list => (
                <li key={list.id}>
                    <span className='author'>{list.Author} - </span>
                    <span className='title'>{list.Title} - </span>
                    <span className='year'>{list.Year} </span>
                    </li>
            ))}
        </ul>
        <>
        <div className='filtered-list'>
            <h2>{`${newTitle}`}</h2>
            <ul>{newList}</ul>
            </div>
        <div className='buttons-bar'>
            <Button onClick={handleFilter} name="Filter Novels that won in the 2000's" />
            <Button onClick={handleSort} name='Sort the authors by first name' />
            <Button onClick={handleSome} name="Some Author's names Ursula exist" />
        </div>
        </>
        </>
    )
}
export default BestNovel