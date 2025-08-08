import { Term } from "./term.model";


const createOrReplaceTerm = async (pdfUrl: string) => {
    const existing = await Term.findOne();
    if (existing) {
        await Term.findByIdAndDelete(existing._id);
    }

    return await Term.create({ pdfUrl });
};

const getTerm = async () => {
    return await Term.findOne();
};

const deleteTerm = async () => {
    return await Term.findOneAndDelete();
};

export const termService = {
    createOrReplaceTerm,
    getTerm,
    deleteTerm,
};
