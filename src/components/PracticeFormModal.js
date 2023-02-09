function PracticeForm() {
    function formOpen(){
        console.log("clicked the add button")
    }
    return(
        <div>
        Enter how much youve practiced.
            <button className='btn' onClick={formOpen}>Add practice</button>
        </div>
    );
}

export default PracticeForm();
