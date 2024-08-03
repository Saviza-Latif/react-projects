export const Task =(props)=>
{
    return (<div class="tasktab" style={{backgroundColor:props.completed ? "#c8f560":"#4e515c"}}><p >{props.taskName}</p>
    <button onClick={() => props.completetask(props.id)}>Complete</button>
    <button onClick={() => props.deletetask(props.id)}>X</button>
    
</div>);
}