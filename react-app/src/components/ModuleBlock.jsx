import PropTypes from "prop-types";

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

ModuleBlock.propTypes = {
    children: PropTypes.element,
    name: PropTypes.string,
};

export default ModuleBlock;
