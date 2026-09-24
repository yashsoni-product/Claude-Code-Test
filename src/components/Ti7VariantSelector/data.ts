import type { Ti7Data } from './types'

import ti7Front from '../../assets/ti7-front.png'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PLACEHOLDER CONTENT — carried over verbatim from the Claude Design prototype.
 *
 * Confirmed real (matches the live 5-seater page):
 *   - 5-seater DESIGN: price, monthly, accel, power, range.
 *
 * NOT yet confirmed — plausible stand-ins pending real numbers from product:
 *   - every 7-seater figure;
 *   - 5-seater PREMIUM and URBAN ADVENTURE figures;
 *   - all blurb copy.
 *
 * The 7-seater also reuses the 5-seater photograph. `imageNote` surfaces that
 * to the user; clear it (and swap `image`) once real photography lands.
 *
 * This module is the only place these values live — swapping in real content
 * needs no changes to the component.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const TI7_DATA: Ti7Data = {
  '5': {
    chip: '5 seats · 2 rows',
    image: ti7Front,
    imageNote: '',
    variants: [
      {
        name: 'DESIGN',
        price: '157,900',
        monthly: '2,474',
        accel: '5.3S',
        power: '480 HP',
        range: 'UP TO 870',
        blurb:
          'The essential Ti 7 — full electric drive, panoramic roof and 15.6" rotating display.',
      },
      {
        // PLACEHOLDER figures
        name: 'PREMIUM',
        price: '169,900',
        monthly: '2,662',
        accel: '5.1S',
        power: '480 HP',
        range: 'UP TO 870',
        blurb: 'Adds Nappa leather, 12-speaker Dynaudio system and head-up display.',
      },
      {
        // PLACEHOLDER figures
        name: 'URBAN ADVENTURE',
        price: '176,900',
        monthly: '2,772',
        accel: '5.3S',
        power: '480 HP',
        range: 'UP TO 840',
        blurb: 'Raised suspension, roof rails, all-terrain tyres and exterior kit.',
      },
    ],
  },

  // PLACEHOLDER — the entire 7-seater body type is awaiting real data.
  '7': {
    chip: '7 seats · 3 rows',
    image: ti7Front,
    imageNote: 'Image placeholder — 7-seater photography pending',
    variants: [
      {
        name: 'DESIGN',
        price: '164,900',
        monthly: '2,584',
        accel: '5.6S',
        power: '480 HP',
        range: 'UP TO 820',
        blurb:
          'Three-row flexibility with the same electric drive — fold-flat third row and extended wheelbase.',
      },
      {
        name: 'PREMIUM',
        price: '176,900',
        monthly: '2,772',
        accel: '5.6S',
        power: '480 HP',
        range: 'UP TO 820',
        blurb: 'Three rows with Nappa leather, ventilated second row and Dynaudio sound.',
      },
      {
        name: 'URBAN ADVENTURE',
        price: '183,900',
        monthly: '2,881',
        accel: '5.8S',
        power: '480 HP',
        range: 'UP TO 790',
        blurb: 'Seven seats, raised suspension, roof rails and all-terrain capability.',
      },
    ],
  },
}

/** Currency mark used throughout the section (Đ). */
export const CURRENCY = 'Đ'

/** The compare bar holds at most this many trims. */
export const MAX_COMPARE = 3
