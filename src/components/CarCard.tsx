import { Flex, Link, Row, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"
import Image from "next/image"

import styles from "../../public/css/CarCar.module.css"

interface CardProps {
  car: Car
}

export function CarCard({ car }: CardProps) {
  return (
    <div className={styles.cardWrapper}>

      <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
      <Flex extend={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
      }}>

        <Text variant="amundsen">{car?.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>

      </Flex>
      <Spacer />
      <Image src={car.imageUrl} alt={car.modelName} width={250} height={200} />
      <Spacer />
      <Flex extend={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <Row>
          <Link href="https://www.volvocars.com/" arrow="right">
            SHOP
          </Link>
          <Link href="https://www.volvocars.com/" arrow="right">
            LEARN
          </Link>
        </Row>
      </Flex>

    </div>
  )
}