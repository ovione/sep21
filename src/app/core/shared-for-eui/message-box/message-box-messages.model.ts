import {MessageBoxConfigInterface} from './message-box-config.interface';

export const messageBoxMessageConfirmation: Partial<MessageBoxConfigInterface> = {
    variant : 'primary',
    title: 'Confirmation',
    content: '<p>Any open changes will be lost ?</p>',
    acceptLabel: 'Confirm',
    dismissLabel: "Cancel"
}

export const messageBoxMessageConfirmationAnyOpenChangesWillBeLost: Partial<MessageBoxConfigInterface> = {
    variant: 'primary',
    title: 'Confirmation',
    content: '<p>Any open changes will be lost ?</p>',
    acceptLabel: 'Confirm'
}

export const messageBoxMessageSaveSuccess: Partial<MessageBoxConfigInterface> = {
    variant: 'success',
    title: 'Success',
    content: '<p>Saved successfully</p>',
    acceptLabel: 'Ok',
    hasDismissButton: false
}

export const messageBoxMessageDeleteSuccess: Partial<MessageBoxConfigInterface> = {
    variant: 'success',
    title: 'Success',
    content: '<p>Deleted successfully</p>',
    acceptLabel: 'Ok',
    hasDismissButton: false
}

export const messageBoxMessageWarning: Partial<MessageBoxConfigInterface> = {
    variant: 'warning',
    title: 'WARNING',
    content: '<p>Warning</p>',
    acceptLabel: 'Ok',
    hasDismissButton: false
}

export const messageBoxMessageError: Partial<MessageBoxConfigInterface> = {
    variant: 'danger',
    title: 'Error',
    content: '<p>An Error ocurred</p>',
    acceptLabel: 'Ok',
    hasDismissButton: false
}
