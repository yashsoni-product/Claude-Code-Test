import { Ti7VariantSelector } from './components/Ti7VariantSelector'

export default function App() {
  return (
    <Ti7VariantSelector
      onGoToConfigurator={(selection) => {
        // Wire to the real configurator route.
        console.log('configurator', selection)
      }}
      onCompare={(selections) => {
        // Wire to the real comparison page.
        console.log('compare', selections)
      }}
    />
  )
}
