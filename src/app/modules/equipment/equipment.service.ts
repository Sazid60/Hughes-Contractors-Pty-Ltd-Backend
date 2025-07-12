import { IEquipment } from "./equipment.interface";
import { Equipment } from "./equipment.model";


const createEquipment = async (payload: IEquipment) => {
    return await Equipment.create(payload);
};

const getAllEquipment = async () => {
    return await Equipment.find();
};

const getSingleEquipment = async (id: string) => {
    return await Equipment.findById(id);
};

const updateEquipment = async (id: string, payload: Partial<IEquipment>) => {
    return await Equipment.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
};

const deleteEquipment = async (id: string) => {
    return await Equipment.findByIdAndDelete(id);
};

export const equipmentService = {
    createEquipment,
    getAllEquipment,
    getSingleEquipment,
    updateEquipment,
    deleteEquipment,
};
