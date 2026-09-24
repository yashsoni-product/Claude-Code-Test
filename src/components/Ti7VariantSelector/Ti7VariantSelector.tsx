import { type KeyboardEvent, useCallback, useId, useMemo, useRef, useState } from 'react'

import { CURRENCY, MAX_COMPARE, TI7_DATA } from './data'
import { CompareIcon, DownloadIcon } from './icons'
import styles from './Ti7VariantSelector.module.css'
import type { CompareEntry, SeaterKey, Ti7Data, Variant } from './types'

/** A trim plus the body type it belongs to. */
export interface Ti7Selection {
  seater: SeaterKey
  variant: Variant
}

export interface Ti7VariantSelectorProps {
  /** Body type shown on first render. Defaults to the 5-seater. */
  defaultSeater?: SeaterKey
  /** Trim catalogue. Defaults to the bundled Ti 7 data. */
  data?: Ti7Data
  /** Target for the "Download full specifications" link. */
  specSheetHref?: string
  /** Called when the configurator CTA is pressed. */
  onGoToConfigurator?: (selection: Ti7Selection) => void
  /** Called when the compare CTA is pressed, with everything pinned. */
  onCompare?: (selections: Ti7Selection[]) => void
}

const SEATERS: readonly SeaterKey[] = ['5', '7']

export function Ti7VariantSelector({
  defaultSeater = '5',
  data = TI7_DATA,
  specSheetHref = '#',
  onGoToConfigurator,
  onCompare,
}: Ti7VariantSelectorProps) {
  const [seater, setSeater] = useState<SeaterKey>(defaultSeater)
  const [variantIndex, setVariantIndex] = useState(0)
  const [compare, setCompare] = useState<CompareEntry[]>([])

  const baseId = useId()
  const panelId = `${baseId}-panel`
  const tabId = (index: number) => `${baseId}-tab-${index}`
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const config = data[seater]
  const variants = config.variants
  // The seater toggle keeps the selected trim, so clamp rather than reset.
  const current = variants[variantIndex] ?? variants[0]

  const compareKey = `${seater}-${variantIndex}`
  const isPinned = compare.some((entry) => entry.key === compareKey)
  const isCompareFull = compare.length >= MAX_COMPARE

  const pinCurrent = useCallback(() => {
    if (isPinned || isCompareFull) return
    setCompare((previous) => [...previous, { key: compareKey, seater, variantIndex }])
  }, [compareKey, isCompareFull, isPinned, seater, variantIndex])

  const unpin = useCallback((key: string) => {
    setCompare((previous) => previous.filter((entry) => entry.key !== key))
  }, [])

  const compareItems = useMemo(
    () =>
      compare.map((entry) => {
        const entryVariants = data[entry.seater].variants
        const variant = entryVariants[entry.variantIndex] ?? entryVariants[0]
        return {
          key: entry.key,
          label: `Ti 7 ${variant.name} · ${entry.seater} seater`,
          price: variant.price,
          seater: entry.seater,
          variant,
        }
      }),
    [compare, data],
  )

  /** Left/Right/Home/End move between tabs, per the ARIA tabs pattern. */
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = variants.length - 1
    let next: number | null = null

    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last

    if (next === null) return
    event.preventDefault()
    setVariantIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className={styles.section} aria-labelledby={`${baseId}-heading`}>
      <h2 className={styles.heading} id={`${baseId}-heading`}>
        Choose your <strong>perfect variant</strong>
      </h2>

      <div className={styles.tabs} role="tablist" aria-label="Ti 7 variants">
        {variants.map((variant, index) => {
          const selected = index === variantIndex
          return (
            <button
              key={variant.name}
              type="button"
              role="tab"
              id={tabId(index)}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              className={selected ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setVariantIndex(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {variant.name}
            </button>
          )
        })}
      </div>

      <div className={styles.card} role="tabpanel" id={panelId} aria-labelledby={tabId(variantIndex)}>
        <div className={styles.media}>
          <img className={styles.mediaImage} src={config.image} alt="BYD Ti 7 front view" />
          <span className={styles.mediaNote}>{config.imageNote}</span>
        </div>

        <div className={styles.details}>
          <h3 className={styles.modelName}>{`BYD Ti 7 ${current.name}`}</h3>

          <div className={styles.seating} role="group" aria-labelledby={`${baseId}-seating`}>
            <span className={styles.seatingLabel} id={`${baseId}-seating`}>
              Seating
            </span>
            <div className={styles.segmented}>
              {SEATERS.map((key) => {
                const active = key === seater
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={active}
                    className={active ? `${styles.segment} ${styles.segmentActive}` : styles.segment}
                    onClick={() => setSeater(key)}
                  >
                    {key} Seater
                    {key === '7' && <span className={styles.newBadge}>New</span>}
                  </button>
                )
              })}
            </div>
            <span className={styles.seatChip}>{config.chip}</span>
          </div>

          {/* Built as one string so the glyphs shape as a single text run. */}
          <div className={styles.price}>{`${CURRENCY} ${current.price}`}</div>
          <div className={styles.monthly}>
            {`starting from ${CURRENCY} ${current.monthly} / month`}
          </div>
          <p className={styles.blurb}>{current.blurb}</p>

          {/* Term before definition keeps the list valid; the column-reverse
              in `.specItem` is what puts the figure on top. */}
          <dl className={styles.specs}>
            <div className={styles.specItem}>
              <dt className={styles.specLabel}>0-100 km/h</dt>
              <dd className={styles.specValue}>{current.accel}</dd>
            </div>
            <div className={styles.specDivider} aria-hidden="true" />
            <div className={styles.specItem}>
              <dt className={styles.specLabel}>Combined max power</dt>
              <dd className={styles.specValue}>{current.power}</dd>
            </div>
            <div className={styles.specDivider} aria-hidden="true" />
            <div className={styles.specItem}>
              <dt className={styles.specLabel}>Range km</dt>
              <dd className={styles.specValue}>{current.range}</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <a className={styles.actionLink} href={specSheetHref}>
              <DownloadIcon />
              Download full specifications
            </a>
            <button
              type="button"
              className={styles.compareToggle}
              onClick={pinCurrent}
              /*
               * The prototype let this click silently no-op once the bar held
               * three trims. Marking it disabled in that one case dims it via
               * Chassis' own `[aria-disabled]` rule and tells assistive tech
               * the truth. The pinned state stays at full strength — there the
               * label already reads as confirmation, not unavailability.
               */
              aria-disabled={isCompareFull && !isPinned}
            >
              <CompareIcon />
              {isPinned ? 'Added to comparison' : 'Add to comparison'}
            </button>
          </div>

          <button
            type="button"
            className={styles.cta}
            onClick={() => onGoToConfigurator?.({ seater, variant: current })}
          >
            Go to configurator
          </button>
        </div>
      </div>

      {compareItems.length > 0 && (
        <div className={styles.compareBar}>
          <div className={styles.compareInner}>
            <span className={styles.compareLabel}>Compare</span>
            <ul className={styles.compareItems}>
              {compareItems.map((item) => (
                <li className={styles.compareChip} key={item.key}>
                  {item.label}
                  <span className={styles.compareChipPrice}>{`${CURRENCY} ${item.price}`}</span>
                  <button
                    type="button"
                    className={styles.compareChipRemove}
                    aria-label={`Remove ${item.label} from comparison`}
                    onClick={() => unpin(item.key)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" className={styles.compareClear} onClick={() => setCompare([])}>
              Clear
            </button>
            <button
              type="button"
              className={styles.compareCta}
              onClick={() =>
                onCompare?.(compareItems.map(({ seater: s, variant }) => ({ seater: s, variant })))
              }
            >
              {`Compare (${compareItems.length})`}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
