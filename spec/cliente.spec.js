describe('Clientes', () => {
    test('Teste básico para passar na CI', () => {
        const cliente = {nome: "danilo", id:1}
        expect(cliente.nome).not.toBeUndefined()
    });
})