import SwaggerUI from 'swagger-ui'

test('imports swagger-ui', () => {
    expect(typeof SwaggerUI).toBe('function')
});