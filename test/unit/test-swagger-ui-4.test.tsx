import SwaggerUI from '../../src/index-swagger-ui-4'

test('imports swagger-ui@4', () => {
    expect(typeof SwaggerUI).toBe('function')
});