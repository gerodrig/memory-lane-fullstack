export default function Loading(){
    //loading spinner in the middle of the screen in bootstrap
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>

            </div>
        </div>
    )
}