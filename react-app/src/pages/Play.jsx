import {
    CategoriesList,
    CharacterStats,
    FilteringOptions,
    ModuleBlock,
    RemindersList,
    TopBar,
} from "../components";
import EditorSelector from "../components/EditorSelector";
import ItemList from "../components/ItemList";

const Play = () => {
    return (
        <div className="grid grid-rows-[60px_minmax(300px,_1fr)] h-screen dark:text-slate-100 font-semibold">
            <TopBar />

            <main className="grid grid-cols-[1fr_3fr_1fr]">
                <div className="bg-gray-blue-800 border-r-2 border-gray-900 grid grid-rows-[1fr_3fr_1fr] min-h-0 min-w-0">
                    <ModuleBlock name="Filtering options">
                        <FilteringOptions />
                    </ModuleBlock>
                    <ModuleBlock name="Categories">
                        <CategoriesList />
                    </ModuleBlock>
                    <ModuleBlock name="Reminders">
                        <RemindersList />
                    </ModuleBlock>
                </div>
                <div className="bg-gray-blue-900 grid grid-rows-[2fr_3fr] min-h-0 min-w-0">
                    <ModuleBlock>
                        <ItemList />
                    </ModuleBlock>
                    <EditorSelector />
                </div>
                <div className="bg-gray-blue-800 border-l-2 border-gray-900">
                    <ModuleBlock name="Character">
                        <CharacterStats />
                    </ModuleBlock>
                </div>
            </main>
        </div>
    );
};
export default Play;
