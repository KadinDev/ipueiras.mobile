

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Login: undefined;
            Register: undefined;
            Home: undefined;
            Map: undefined;
            Favorites: undefined;
            
            RegisterStore: undefined;
            DetailStore: { store: StoreProps | undefined };
            
            Me: undefined;
        }
    }
}