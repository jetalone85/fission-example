module.exports = async function (context) {
    console.log(context.request.headers);
    return {
        status: 200,
        body: "Hello, World!\n"
    };
}
