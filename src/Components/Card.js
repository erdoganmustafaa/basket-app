import { Card, Image, Text,Button, Group } from '@mantine/core';

function CardComponent(props) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src={`/img/${props.src}.jpg`}
              border="lg"
              height={200} width={300}  fit="cover"
              alt="Norway"
            />
          </Card.Section>
    
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{props.name}</Text>
           
          </Group>
    
          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>
    
          <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={props.onAdd}>
            Ekle
          </Button>
        </Card>
      );
}

export default CardComponent;