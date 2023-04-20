import SwaggerUI from '../../src/index-swagger-ui-react-5'

test('imports swagger-ui-react@5', () => {
    expect(typeof SwaggerUI).toBe('function')
});