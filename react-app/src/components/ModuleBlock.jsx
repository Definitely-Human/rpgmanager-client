const ModuleBlock = ({ children, name }) => {
    return (
        <div className="w-full h-full border-b-2 border-gray-900 px-3 pt-1 overflow-auto min-h-0">
            {name ? (
                <h3 className="text-2xl text-center mb-2">{name}</h3>
            ) : (
                <></>
            )}
            {children}
        </div>
    );
};
export default ModuleBlock;
