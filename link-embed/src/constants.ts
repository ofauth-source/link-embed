export const OFAUTH_EVENT = "OFAUTH_LINK";

export const Selectors = {
    loader: "#ofauth-loader",
    iframe: "#ofauth-iframe",
    overlay: "#ofauth-modal-overlay",
    sandboxBanner: "#ofauth-sandbox-banner",
}

export const OFAUTH_ORIGINS = [
    "https://link.ofauth.com",
    "https://link.staging.ofauth.com"
];

export function isAllowedOrigin(origin: string): boolean {
    try {
        const url = new URL(origin);
        if (url.origin !== origin) return false;
        if (url.protocol === "http:" && (url.hostname === "localhost" || url.hostname === "127.0.0.1")) return true;
        return url.protocol === "https:" && (
            OFAUTH_ORIGINS.includes(origin) ||
            /^link-preview-pr-[1-9][0-9]*\.pr\.ofauth\.com$/.test(url.hostname)
        );
    } catch {
        return false;
    }
}
