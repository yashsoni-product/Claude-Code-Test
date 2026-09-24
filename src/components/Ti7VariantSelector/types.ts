/** The two body types the Ti 7 is offered in. */
export type SeaterKey = '5' | '7'

/** A single trim level within a seater type. */
export interface Variant {
  /** Displayed uppercase, appended to "BYD Ti 7". */
  name: string
  /** Full price, pre-formatted with thousands separators. */
  price: string
  /** Monthly instalment, pre-formatted. */
  monthly: string
  /** 0-100 km/h, e.g. "5.3S". */
  accel: string
  /** Combined max power, e.g. "480 HP". */
  power: string
  /** Range, e.g. "UP TO 870". */
  range: string
  /** One-line description shown under the pricing block. */
  blurb: string
}

/** Everything that changes when the seater toggle flips. */
export interface SeaterConfig {
  /** Caption under the toggle, e.g. "5 seats · 2 rows". */
  chip: string
  /** Hero image for this body type. */
  image: string
  /**
   * Caption under the hero image. Used to flag stand-in photography;
   * leave empty once a real image is wired up.
   */
  imageNote: string
  /** Trims, in tab order. At least one is required. */
  variants: readonly [Variant, ...Variant[]]
}

export type Ti7Data = Readonly<Record<SeaterKey, SeaterConfig>>

/** A trim the user has pinned to the compare bar. */
export interface CompareEntry {
  /** `${seater}-${variantIndex}`, unique per pinned trim. */
  key: string
  seater: SeaterKey
  variantIndex: number
}
