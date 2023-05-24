import { FaCoins } from "react-icons/fa";

const RewardWindow = () => {
    return (
        <div>
            <h3 className="text-primary text-3xl text-center">Reward</h3>
            <div className="mt-0">
                <p>Experience: +10xp</p>
                <p>
                    Coins: +10
                    <FaCoins className="inline text-yellow-400  ml-2" />
                </p>
            </div>
        </div>
    );
};
export default RewardWindow;
