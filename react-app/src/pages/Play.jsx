import {
    CategoriesList,
    CharacterStats,
    FilteringOptions,
    ModuleBlock,
    RemindersList,
    TopBar,
} from "../components";
import ItemList from "../components/ItemList";

const Play = () => {
    return (
        <div className="grid grid-rows-[60px_minmax(300px,_1fr)] h-screen dark:text-slate-100 font-semibold">
            <TopBar />

            <main className="grid grid-cols-[1fr_3fr_1fr]">
                <div className="bg-gray-blue-800 border-r-2 border-gray-900 grid grid-rows-[1fr_3fr_1fr] min-h-0 min-w-0">
                    <ModuleBlock>
                        <FilteringOptions />
                    </ModuleBlock>
                    <ModuleBlock>
                        <CategoriesList />
                    </ModuleBlock>
                    <ModuleBlock>
                        <RemindersList />
                    </ModuleBlock>
                </div>
                <div className="bg-gray-blue-900">
                    <ModuleBlock>
                        <ItemList />
                    </ModuleBlock>
                </div>
                <div className="bg-gray-blue-800 border-l-2 border-gray-900">
                    <ModuleBlock>
                        <CharacterStats />
                    </ModuleBlock>
                </div>
            </main>
        </div>
    );
};
export default Play;
