import SwaggerUI from '../../src/index-swagger-ui-react-4'

test('imports swagger-ui-react@4', () => {
    expect(typeof SwaggerUI).toBe('function')
});