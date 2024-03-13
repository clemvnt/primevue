export default {
    css: ({ dt }) => `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    border: 1px solid transparent;
    background: var(--p-selectbutton-background);
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-selectbutton .p-button {
    flex: 1 1 auto;
    background: transparent;
    border: 0 none;
    color: var(--p-selectbutton-item-text-color);
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    padding: 0.5rem 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${dt('rounded.base')};
    gap: 0.5rem;
    position: relative;
    cursor: pointer;
}

.p-selectbutton .p-button::before {
    content: "";
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.5rem);
    border-radius: var(--p-rounded-sm);
}

.p-selectbutton .p-button .p-button-label {
    position: relative;
    transition: none;
}

.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    color: var(--p-selectbutton-item-text-color-hover);
}

.p-selectbutton .p-button.p-highlight {
    color: var(--p-selectbutton-item-text-color-checked);
}

.p-selectbutton .p-button.p-highlight::before {
    background: var(--p-selectbutton-item-background-checked);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
}

.p-selectbutton .p-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
    --p-focus-ring-offset: 0;
}

.p-selectbutton.p-invalid {
    border-color: var(--p-selectbutton-border-color-invalid);
}

.p-selectbutton.p-disabled {
    opacity: 1;
    background: var(--p-selectbutton-background-disabled);
}

.p-selectbutton.p-disabled .p-button,
.p-selectbutton .p-button.p-disabled {
    background: var(--p-selectbutton-background-disabled);
    color: var(--p-selectbutton-item-text-color-disabled);
}
`
};