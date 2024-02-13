import ThreatDegreePage from "../../occurrence/threatDegree/threatDegree"
import Class from "../forms/class/class"
import CultureSpecie from "../forms/cultureSpecie/cultureSpecie"
import Domain from "../forms/domain/domain"
import Family from "../forms/family/family"
import Genus from "../forms/genus/genus"
import Kingdom from "../forms/kingdom/kingdom"
import Order from "../forms/order/order"
import Phylum from "../forms/phylum/phylum"
import Specie from "../forms/specie/specie"
import FirstStep from "./firstStep"

export const steps = [
    {
        key: 'First',
        title: 'Taxonomia',
    },
    {
        key: 'Domain',
        title: 'Domínio',
    },
    {
        key: 'Kingdom',
        title: 'Reino'
    },
    {
        key: 'Phylum',
        title: 'Filo'
    },
    {
        key: 'Class',
        title: 'Classe'
    },
    {
        key: 'Order',
        title: 'Ordem'
    },
    {
        key: 'Family',
        title: 'Família'
    },
    {
        key: 'Genus',
        title: 'Gênero'
    },
    {
        key: 'Specie',
        title: 'Espécie'
    },
    {
        key: 'CultureSpecie',
        title: 'Cultura'
    },
    {
        key: 'ThreatDegree',
        title: 'Ameaça'
    }
]

export const stepContents = [
    {
        key: 'First',
        content: FirstStep
    },
    {
        key: 'Domain',
        content: Domain
    },
    {
        key: 'Kingdom',
        content: Kingdom
    },
    {
        key: 'Phylum',
        content: Phylum
    },
    {
        key: 'Class',
        content: Class
    },
    {
        key: 'Order',
        content: Order
    },
    {
        key: 'Family',
        content: Family
    },
    {
        key: 'Genus',
        content: Genus
    },
    {
        key: 'Specie',
        content: Specie
    },
    {
        key: 'CultureSpecie',
        content: CultureSpecie
    },
    {
        key: 'ThreatDegree',
        content: ThreatDegreePage
    }
]

export type StepProps = {
    visible?: boolean
    pickStep?: (key: string) => void
}