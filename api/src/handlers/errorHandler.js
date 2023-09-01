const Error = (res, status, error, message = "") => {

    // Si el error es un objeto con propiedades de mensaje, código, etc., se extrae info
    const errorMessage = error.message || error;

    console.error(`Error (${status}): ${errorMessage}`);

    res.status(status).json({
        error: `${message}: ${error}`,
    });
}

const ValidateError = (res, data) => {
    if (data?.response === false) {
        const { status, error } = data;
        Error(res, status, error, "Error al consultar la API");
    }
}

module.exports = {
    Error,
    ValidateError
}