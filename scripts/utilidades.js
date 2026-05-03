const utilidades = {
    cutDecimals: function (num, max = 4) {
        const [entero, decimal] = num.toString().split('.');
        if (!decimal) return num;
        return Number(`${entero}.${decimal.slice(0, max)}`);
    }
};