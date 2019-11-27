module.exports = {
    entry:
    {
        shared: './src/shared.js',
        home: './src/home/home.js',
        customer: './src/customer/customer.js'
    },
    output: {
        filename: '../wwwroot/js/[name].js'
    }
};
