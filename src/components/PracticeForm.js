function PracticeForm(props) {
    function formOpen(){
        console.log("clicked the add button")
    }
    return(
        <div>
            <button className='btn' onClick={formOpen}>Add practice</button>
        </div>
    );
}

export default PracticeForm();