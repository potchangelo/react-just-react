import './LayoutPage.css';

function LayoutPage(props) {
    return (
        <section className="layout-page-section">
            <div className="layout-page-container">
                {props.children}
            </div>
        </section>
    );
}

export default LayoutPage;