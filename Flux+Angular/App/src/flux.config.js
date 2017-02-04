flux.$inject = ['fluxProvider'];

export default function flux(fluxProvider) {
  fluxProvider.setImmutableDefaults({ immutable: false });
}