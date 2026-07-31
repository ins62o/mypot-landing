const DEFAULT_POCKET_COUNT_ENDPOINT =
  'https://asia-northeast3-mypot-8558a.cloudfunctions.net/getPublicPocketCount'

type PublicPocketCountResponse = {
  count?: unknown
}

export async function getPublicPocketCount(signal?: AbortSignal): Promise<number> {
  const endpoint =
    import.meta.env.VITE_PUBLIC_POCKET_COUNT_ENDPOINT ?? DEFAULT_POCKET_COUNT_ENDPOINT
  const response = await fetch(endpoint, {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Pocket count request failed with status ${response.status}.`)
  }

  const data = (await response.json()) as PublicPocketCountResponse

  if (
    typeof data.count !== 'number' ||
    !Number.isSafeInteger(data.count) ||
    data.count < 0
  ) {
    throw new Error('Pocket count response is invalid.')
  }

  return data.count
}
