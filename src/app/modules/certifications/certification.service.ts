import { Certification } from "./certification.model";
import type { ICertification } from "./certification.interface";

const createCertification = async ({ title, imageUrl }: ICertification) => {
  const cert = await Certification.create({ title, imageUrl });
  return cert;
};

const getAllCertifications = async () => {
  return await Certification.find().sort({ createdAt: -1 });
};

const deleteCertification = async (id: string) => {
  return await Certification.findByIdAndDelete(id);
};

export const certificationService = {
  createCertification,
  getAllCertifications,
  deleteCertification,
};
