import Todoitem from "./Todoitem";

const Todoitems = ({ todoitems ,onDeleteClick}) => {
    return (
        <div className="todoitems container">
            {todoitems.map((item) => [
                <Todoitem todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick}>
                </Todoitem>
            ])}
        </div>
    );

};
export default Todoitems;       