import charIcon from "../assets/icons/swordsman.png";

const CharacterStats = () => {
    const percentage = "20";
    const xp = 200;
    return (
        <div>
            <h2 className="text-center text-3xl text-primary">Charname</h2>
            <div className="flex justify-between m-2">
                <span>0</span>
                <span>24 LVL</span>
                <span>999</span>
            </div>
            <div className="block w-full bg-slate-500 h-2 ">
                <div
                    className={` w-[${percentage}%] bg-secondary h-full`}
                ></div>
            </div>
            <div className="text-center mt-1">{`${xp} xp (${percentage}%)`}</div>
            <div className="grid grid-cols-2 mt-2">
                <img src={charIcon} />
                <div className="flex flex-col justify-evenly">
                    <span>Title: Master</span>
                    <span>
                        Coins: <span className="text-yellow-300">999</span>
                    </span>
                    <span>Xp To Next LVL: 799</span>
                    <span>
                        Skill closest to LVL-up:{" "}
                        <span className="text-primary">Cooking</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default CharacterStats;
