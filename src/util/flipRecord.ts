export function flipRecord<K extends string | number | symbol, V extends string | number | symbol>(record: Record<K, V>): Record<V, K> {
  const flipped: Record<V, K> = {} as Record<V, K>;
  for (const key in record) {
    const value = record[key];
    flipped[value] = key as K;
  }
  return flipped;
}
