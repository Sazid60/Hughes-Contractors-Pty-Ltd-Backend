import { ILabour } from "./labour.interface";
import { Labour } from "./labour.model";


const createLabour = async (payload: ILabour) => {
    return await Labour.create(payload);
};

const getAllLabours = async () => {
    return await Labour.find();
};

const getSingleLabour = async (id: string) => {
    return await Labour.findById(id);
};

const updateLabour = async (id: string, payload: Partial<ILabour>) => {
    return await Labour.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
};

const deleteLabour = async (id: string) => {
    return await Labour.findByIdAndDelete(id);
};

export const labourService = {
    createLabour,
    getAllLabours,
    getSingleLabour,
    updateLabour,
    deleteLabour,
};
