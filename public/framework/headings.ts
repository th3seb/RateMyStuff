import { Base } from "./base.js";
import { child } from "./types.js";

export function H1(...children: child[]) {
    return new Base("h1", ...children);
}

export function H2(...children: child[]) {
    return new Base("h2", ...children);
}

export function H3(...children: child[]) {
    return new Base("h3", ...children);
}

export function H4(...children: child[]) {
    return new Base("h4", ...children);
}

export function H5(...children: child[]) {
    return new Base("h5", ...children);
}

export function H6(...children: child[]) {
    return new Base("h6", ...children);
}

export default class Headings {
    static H1(...children: child[]): Base {
        return H1(...children);
    }
    static H2(...children: child[]): Base {
        return H2(...children);
    }
    static H3(...children: child[]): Base {
        return H3(...children);
    }
    static H4(...children: child[]): Base {
        return H4(...children);
    }
    static H5(...children: child[]): Base {
        return H5(...children);
    }
    static H6(...children: child[]): Base {
        return H6(...children);
    }
}
