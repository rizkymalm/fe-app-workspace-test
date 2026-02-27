import DeskType1 from '@/public/images/workspace/desk-1.png';
import DeskType2 from '@/public/images/workspace/desk-2.png';
import BoxPanelSelection from '@/components/panel/BoxPanelSelection';

const deskOption = [
    {
        id: 1,
        name: 'Desk Type 1',
        image: DeskType1,
    },
    {
        id: 2,
        name: 'Desk Type 2',
        image: DeskType2,
    },
];

const PanelDesk = () => {
    return (
        <div className="grid w-full max-w-full grid-cols-2 gap-6 overflow-hidden">
            {deskOption.map(item => (
                <BoxPanelSelection
                    image={item.image}
                    name={item.name}
                />
            ))}
        </div>
    );
};

export default PanelDesk;
