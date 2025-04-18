
"use client";
export default function FilterError({error}){
    return <div id='root'>
        <h2>An error occured!</h2>
        <>{error.message}</>

    </div>
}