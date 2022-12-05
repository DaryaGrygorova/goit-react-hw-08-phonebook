export type SCThemeType = {
  colors: {
    black: string;
    white: string;
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    header: string;
    avatar: string;
    muted: string;
  };
  space: number[];
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
  };
  lineHeights: {
    body: number;
    heading: number;
  };
  borders: {
    none: string;
    normal: string;
  };
  radii: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    round: string;
  };
};

export type UserStateType = {
  profile: { email: string; name: string };
  isLogIn: boolean;
  token: string | null;
  isLoading: boolean;
  error: any;
};

export type ContactType = {
  id: string;
  name: string;
  number: string;
};

export type ContactStateType = {
  items: Array<ContactType>;
  isLoading: boolean;
  error: any;
};

export type RegisterFormValuesType = { name: string, email: string, password: string };

export type LoginFormValuesType = { email: string, password: string };

