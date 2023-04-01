import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h2 className='border-2 border-indigo-600 rounded bg-secondary p-4  text-primary text-center text-2xl font-bold'>Things To Know About React</h2>
            <div tabIndex={0} className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the differences between props and state ?
                </div>
                <div className="collapse-content">
                    <p> a) Props are used to pass data from one component to another but in State data is passed within the component only and cannot be passed to other components. b) Props are read-only but in State data can read and write. c) Props can be used with state and functional components and Props can only be passed from parent component to child but State can be used only with the state components</p>
                </div>
            </div>
            <div tabIndex={0} className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does useState work?
                </div>
                <div className="collapse-content">
                    <p> useState() consists of an array with two values.The first value is the initial value of the state variable, while the second value is a reference to the function that can be used to update the variable. With every render, the function being rendered is a new one . Behind the scenes, there’s an object representing the functional component in the memory, which has a stack of its own. Whenever the useState() hook is used, the value of the state variable is changed and the new variable is stored in a new cell in the stack.</p>
                </div>
            </div>
            <div tabIndex={0} className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the purpose of useEffect() other than fetching data?
                </div>
                <div className="collapse-content">
                    <p> a) When Component Mounts:Usually, fetching initial data is the action executed when the component is mounting.This is easily achieved by useEffect; the only thing you need to make sure of is that you have to pass the dependency array as empty. If there are no dependencies that means it will remain the same all the time. b) On Every Component, Render:To call the useEffect function on every component render, skip adding the dependency list. When the dependency list is not present, react will have nothing to compare the previous value with; as a result, the effect will run every time. c)On Every Component, Render with a Condition d) When Component Unmounts:To clean up the mounting actions like removing event listeners or stopping data fetching with a side effect we call the useEffect after the component unmounts</p>
                </div>
            </div>
            <div tabIndex={0} className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does React work?
                </div>
                <div className="collapse-content">
                    <p>React is a tool for building UI components.React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React finds out what changes have been made, and changes only what needs to be changed.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;