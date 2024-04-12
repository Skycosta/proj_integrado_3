const { createApp,
    ref } = Vue

createApp({
    setup() {
        const horarios = ref([
            "09:30",
            "10:00",
            "10:30",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30"
        ])
        const consultas = ref([
            {
                "id": "001",
                "data": "2024-04-11",
                "hora": "10:00",
                "medico": "Dr. João Souza",
                "status": "Aguardando"
            },
            {
                "id": "002",
                "data": "2024-04-12",
                "hora": "14:00",
                "medico": "Dra. Maria Oliveira",
                "status": "Confirmado"
            },
            {
                "id": "003",
                "data": "2024-04-13",
                "hora": "09:00",
                "medico": "Dr. Pedro Silva",
                "status": "Cancelado"
            },
            {
                "id": "004",
                "data": "2024-04-14",
                "hora": "11:00",
                "medico": "Dra. Ana Costa",
                "status": "Aguardando"
            },
            {
                "id": "005",
                "data": "2024-04-15",
                "hora": "15:00",
                "medico": "Dr. Roberto Oliveira",
                "status": "Confirmado"
            },
        ])
        const pacientes = ref([
            {
                "id": "001",
                "paciente": "Felipe Lima",
                "cpf": "23497487387",
                "telefone": "(99) 92762-8623",
                "status": "Ativo"
            },
            {
                "id": "021",
                "paciente": "Isadora Oliveira",
                "cpf": "87359846321",
                "telefone": "(88) 98745-9321",
                "status": "Ativo"
            },
            {
                "id": "022",
                "paciente": "Enzo Silva",
                "cpf": "12345678900",
                "telefone": "(11) 12345-6789",
                "status": "Inativo"
            },
            {
                "id": "023",
                "paciente": "Gabriela Santos",
                "cpf": "34567890123",
                "telefone": "(22) 23456-7890",
                "status": "Ativo"
            },
            {
                "id": "024",
                "paciente": "Pedro Souza",
                "cpf": "56789012345",
                "telefone": "(33) 34567-8901",
                "status": "Inativo"
            },
            {
                "id": "025",
                "paciente": "Clara Gomes",
                "cpf": "78901234567",
                "telefone": "(44) 45678-9012",
                "status": "Ativo"
            },
            {
                "id": "026",
                "paciente": "Bruno Oliveira",
                "cpf": "90123456789",
                "telefone": "(55) 56789-0123",
                "status": "Inativo"
            },
        ])
        const medicos = ref([
            {
                "id": "036",
                "medico": "Bruno Oliveira",
                "crm": "543210987",
                "telefone": "(55) 56789-0123",
                "status": "Inativo"
              },
              {
                "id": "037",
                "medico": "Ana Costa",
                "crm": "432109876",
                "telefone": "(66) 67890-1234",
                "status": "Ativo"
              },
              {
                "id": "038",
                "medico": "Pedro Souza",
                "crm": "321098765",
                "telefone": "(77) 78901-2345",
                "status": "Inativo"
              },
              {
                "id": "039",
                "medico": "Sofia Santos",
                "crm": "210987654",
                "telefone": "(88) 89012-3456",
                "status": "Ativo"
              },
              {
                "id": "040",
                "medico": "Rafael Silva",
                "crm": "109876543",
                "telefone": "(99) 90123-4567",
                "status": "Inativo"
              }
        ])
        return {
            consultas,
            horarios,
            pacientes,
            medicos
        }
    }
}).mount('#app');
