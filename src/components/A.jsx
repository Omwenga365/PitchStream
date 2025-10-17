import React from "react";
import PropTypes from "prop-types";

/**
 * Simple reusable UI block
 * Usage:
 * <A title="My Title" subtitle="Optional" onAction={() => {}}>Content</A>
 */
export default function A({ title = "Hello", subtitle, onAction, children }) {
    const handleClick = (e) => {
        if (typeof onAction === "function") onAction(e);
    };

    return (
        <section className="component-a" role="region" aria-label={title}>
            <header>
                <h1>{title}</h1>
                {subtitle && <p className="component-a__subtitle">{subtitle}</p>}
            </header>

            <main className="component-a__body">{children}</main>

            <footer>
                <button type="button" onClick={handleClick}>
                    Action
                </button>
            </footer>
        </section>
    );
}

A.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onAction: PropTypes.func,
    children: PropTypes.node,
}