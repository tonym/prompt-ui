import { ActionTypes, SET_THEME, SET_TOKENS, State } from '../types/index';

export const initialState: State = {
  theme: {
    direction: 'ltr',
    color: {
      primary: {
        background: '#2563EB',
        text: '#FFFFFF',
        border: '#2563EB',
        hoverBackground: '#1E40AF',
        disabledBackground: '#93C5FD'
      },
      secondary: {
        background: '#6B7280',
        text: '#FFFFFF',
        border: '#6B7280',
        hoverBackground: '#4B5563',
        disabledBackground: '#D1D5DB'
      },
      danger: {
        background: '#DC2626',
        text: '#FFFFFF',
        border: '#DC2626',
        hoverBackground: '#B91C1C',
        disabledBackground: '#FECACA'
      },
      success: {
        background: '#16A34A',
        text: '#FFFFFF',
        border: '#16A34A',
        hoverBackground: '#15803D',
        disabledBackground: '#BBF7D0'
      },
      warning: {
        background: '#D97706',
        text: '#FFFFFF',
        border: '#D97706',
        hoverBackground: '#B45309',
        disabledBackground: '#FDE68A'
      },
      info: {
        background: '#0EA5E9',
        text: '#FFFFFF',
        border: '#0EA5E9',
        hoverBackground: '#0284C7',
        disabledBackground: '#BAE6FD'
      },
      neutral: {
        background: '#374151',
        text: '#FFFFFF',
        border: '#374151',
        hoverBackground: '#1F2937',
        disabledBackground: '#9CA3AF'
      }
    },
    border: {
      radius: {
        default: 8,
        inner: 4
      }
    },
    spacing: {
      layout: 8,
      component: 8
    }
  },
  tokens: {
    color: {
      primary: {
        background: '#2563EB',
        text: '#FFFFFF',
        border: '#2563EB',
        hoverBackground: '#1E40AF',
        disabledBackground: '#93C5FD'
      },
      secondary: {
        background: '#6B7280',
        text: '#FFFFFF',
        border: '#6B7280',
        hoverBackground: '#4B5563',
        disabledBackground: '#D1D5DB'
      },
      danger: {
        background: '#DC2626',
        text: '#FFFFFF',
        border: '#DC2626',
        hoverBackground: '#B91C1C',
        disabledBackground: '#FECACA'
      },
      success: {
        background: '#16A34A',
        text: '#FFFFFF',
        border: '#16A34A',
        hoverBackground: '#15803D',
        disabledBackground: '#BBF7D0'
      },
      warning: {
        background: '#D97706',
        text: '#FFFFFF',
        border: '#D97706',
        hoverBackground: '#B45309',
        disabledBackground: '#FDE68A'
      },
      info: {
        background: '#0EA5E9',
        text: '#FFFFFF',
        border: '#0EA5E9',
        hoverBackground: '#0284C7',
        disabledBackground: '#BAE6FD'
      },
      neutral: {
        background: '#374151',
        text: '#FFFFFF',
        border: '#374151',
        hoverBackground: '#1F2937',
        disabledBackground: '#9CA3AF'
      }
    },
    border: {
      radius: {
        default: 8,
        inner: 4
      }
    },
    spacing: {
      layout: 8,
      component: 8
    }
  }
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme };
    case SET_TOKENS:
      return { ...state, tokens: action.tokens };
    default:
      return state;
  }
}
