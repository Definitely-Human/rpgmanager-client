const ModuleBlock = ({ children }) => {
    return (
        <div className="w-full h-full border-b-2 border-gray-900 p-3 overflow-auto min-h-0">
            {children}
        </div>
    );
};
export default ModuleBlock;
