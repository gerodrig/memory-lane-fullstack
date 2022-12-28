export const Loader = () => {

    // cricle spinner loader in bootsrap
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="spinner-border" role="status" style={{color: '#b97292', scale: "1.5"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
