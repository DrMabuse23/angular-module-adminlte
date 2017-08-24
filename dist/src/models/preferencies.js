var Preferencies = (function () {
    function Preferencies(data) {
        if (data === void 0) { data = {}; }
        this.avatarUrl = data.avatarUrl || '';
        this.preferredLang = data.preferredLang || null;
    }
    return Preferencies;
}());
export { Preferencies };
//# sourceMappingURL=preferencies.js.map