import SwaggerUI from '../../src/index-swagger-ui-5'

test('imports swagger-ui@5', () => {
    expect(typeof SwaggerUI).toBe('function')
});