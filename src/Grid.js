import './Grid.css';

function Grid(props) {
    const { columns = 1, children } = props;
    let gridClass = `grid grid-${columns}`;

    return (
        <div className={gridClass}>
            {children}
        </div>
    );
}

export default Grid;