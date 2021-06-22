export const ValidatorServices = {
    cep(cep = ''): boolean {
        return cep.replace(/\D/g, '').length === 8;
    }
}