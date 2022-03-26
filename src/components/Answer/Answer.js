import React from 'react';

const Answer = () => {
     return (
          <div>
         <h5> Q1: How usestate work?</h5>
        <p><strong>Ans:</strong> UseState is a place,where we can placed  variables or any value for temporary time. If we need to chang anything in ui than we use usestate for this change. Maybe it handle by any button or something else.When we put a pair of variables it return one value. in single time UseState take one variable which is before change and another variable use for after change. It return the value of after changing. Like - We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.  </p>
        <h5>Q2: Props vs state.</h5>
        <p>Ans:
          <strong>UseStat:</strong>
          <ol>
            <li>State is a local data storage.It store our value which we need to chang.</li>
            <li>We can not can't modify state value.</li>
            <li>we can read and write state.</li>
          </ol>
          <p><strong>Props:</strong>
            <ol>
              <li>The main job of props is pass the data from one components to another.</li>
              <li>Props are not Mutable.</li>
              <li>We can't write only can read the props value</li>
            </ol>

          </p>
          
        </p>
          </div>
     );
};

export default Answer;