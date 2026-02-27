import { type Action, type WorkspaceState } from '@/redux/types';

const initialState: WorkspaceState = {
    editor: {
        loading: false,
        error: '',
        data: '',
    },
    preview: {
        loading: false,
        error: '',
        data: '',
    },
    actions: {
        loading: false,
        error: '',
        type: null,
        message: '',
    },
};

const initialActionWorkspace: Action = {
    type: '',
};

export const workspaceReducer = (
    state = initialState,
    action = initialActionWorkspace
) => {
    switch (action.type) {
        case 'WORKSPACE_EDITOR_SUCCESS':
            return {
                ...state,
                editor: {
                    ...state.editor,
                    loading: false,
                    data: action.payload,
                },
            };
        case 'WORKSPACE_EDITOR_LOADING':
            return {
                ...state,
                editor: {
                    ...state.editor,
                    loading: true,
                    error: '',
                },
            };
        case 'WORKSPACE_EDITOR_ERROR':
            return {
                ...state,
                editor: {
                    loading: false,
                    data: '',
                    error: action.payload,
                },
            };

        case 'WORKSPACE_EDITOR_CLEAR':
            return {
                ...state,
                editor: {
                    loading: false,
                    data: '',
                    error: '',
                },
            };

        // preview
        case 'WORKSPACE_PREVIEW_SUCCESS':
            return {
                ...state,
                preview: {
                    ...state.preview,
                    loading: false,
                    data: action.payload,
                },
            };
        case 'WORKSPACE_PREVIEW_LOADING':
            return {
                ...state,
                preview: {
                    ...state.preview,
                    loading: true,
                    error: '',
                },
            };
        case 'WORKSPACE_PREVIEW_ERROR':
            return {
                ...state,
                preview: {
                    loading: false,
                    data: '',
                    error: action.payload,
                },
            };

        //  actions
        case 'WORKSPACE_ACTION_LOADING':
            return {
                ...state,
                actions: {
                    ...state.actions,
                    loading: true,
                    error: '',
                    message: '',
                },
            };
        case 'WORKSPACE_ACTION_SUCCESS':
            return {
                ...state,
                actions: {
                    ...state.actions,
                    loading: false,
                    type: 'success',
                    message: action.payload,
                },
            };
        case 'WORKSPACE_ACTION_ERROR':
            return {
                ...state,
                actions: {
                    ...state.actions,
                    loading: false,
                    error: action.payload,
                    type: 'failed',
                },
            };
        case 'WORKSPACE_ACTION_CLEAR':
            return {
                ...state,
                actions: initialState.actions,
            };

        default:
            return state;
    }
};
