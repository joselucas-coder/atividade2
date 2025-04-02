import React, { useState } from "react"; 
import { 
  View, 
  Text, 
  Image, 
  FlatList, 
  StyleSheet,
  TouchableOpacity,
  ScrollView,
 } from "react-native";


import { useFonts, Jost_400Regular, Jost_700Bold } from "@expo-google-fonts/jost"; 


                         {/* Constante para a lista de membros da equipe */}


const teamMembers = [
  { id: "1", 
    name: "Camila Andrade ", 
    role: "Redatora e Especialista em SEO", 
    image: require("./assets/pessoa1.png"), 
    social: "@camis_andrade", 
    contact: "(99) 96789-0123", 
    bio:"Com uma escrita fluida e estratégica, Camila é a mente criativa por trás dos textos do site. Formada em Comunicação Social e com experiência em marketing digital, ela se especializou em SEO para garantir que os conteúdos sejam encontrados com facilidade nos mecanismos de busca. Camila pesquisa constantemente as tendências do mercado para produzir artigos relevantes e de alta qualidade, sempre alinhados às necessidades do público-alvo." },

  { id: "2", 
    name: "Elisa Ramos ", 
    role: "Gerente de Projetos", 
    image: require("./assets/pessoa2.png"), 
    social: "@elisgerencia", 
    contact: "(99) 95678-9012",
    bio: "Elisa é quem mantém tudo organizado e funcionando dentro dos prazos. Com mais de oito anos de experiência em gestão de projetos, ela coordena a equipe e garante que todas as demandas sejam atendidas com qualidade. Especialista em metodologias ágeis, como Scrum e Kanban, Elisa promove reuniões estratégicas para alinhar as tarefas e otimizar os processos. Seu foco é garantir a eficiência do time e a entrega de um produto final impecável aos usuários do site." },

  { id: "3", 
    name: "Bruno Ferreira", 
    role: "Designer Gráfico", 
    image: require("./assets/pessoa4.png"), 
    social: "@brufr", 
    contact: "(99) 94567-8901",
    bio: "Bruno é o responsável por toda a identidade visual do site. Graduado em Design Gráfico, ele tem uma paixão especial por criar layouts inovadores e designs atraentes. Sua experiência inclui projetos para diversas marcas, sempre focado em transmitir a mensagem de forma clara e impactante. Além do design digital, Bruno também trabalha com ilustrações e animações, trazendo elementos visuais que tornam a experiência dos usuários mais envolvente e intuitiva." },

  { id: "4", 
    name: "Ana Clara Souza ", 
    role: "Desenvolvedora Front-end", 
    image: require("./assets/pessoa3.png"), 
    social: "@ana_clarasz", 
    contact: "(99) 93456-7890", 
    bio: "Apaixonada por tecnologia e inovação, Ana Clara é especialista em desenvolvimento front-end, criando interfaces modernas e responsivas para proporcionar a melhor experiência ao usuário. Com formação em Ciência da Computação e mais de cinco anos de experiência no setor, domina tecnologias como HTML, CSS, JavaScript e frameworks como React e Vue.js. Além do seu trabalho técnico, Ana também contribui com artigos e tutoriais sobre boas práticas de desenvolvimento, ajudando outros profissionais da área a aprimorar suas habilidades." },

  { id: "5", 
    name: "Diego Martins ", 
    role: "Desenvolvedor Back-end", 
    image: require("./assets/pessoa5.png"), 
    social: "@didimar", 
    contact: "(99) 92345-6789", 
    bio: "Diego é o responsável por toda a estrutura e funcionamento interno do site. Com formação em Engenharia de Software e experiência em linguagens como Python, PHP e Node.js, ele garante que tudo funcione de forma eficiente e segura. Além do desenvolvimento, Diego também cuida da implementação de APIs, gerenciamento de bancos de dados e otimização da performance do site. Seu compromisso é garantir que a plataforma seja estável e escalável, permitindo um crescimento contínuo." },

    { id: "6", 
      name: "Luciana Sousa", 
      role: "Desenvolvedora Back-end", 
      image: require("./assets/pessoa6.png"), 
      social: "@Lulusouza", 
      contact: "(99) 91234-5678", 
      bio: "Luciana é a responsável por toda a lógica e estrutura interna do sistema. Com formação em Engenharia de Software e experiência em linguagens como Python, Java e Node.js, ela garante que tudo funcione de forma eficiente e segura. Além do desenvolvimento, Luciana também se dedica à criação e integração de APIs, ao gerenciamento de bancos de dados e à otimização da performance do back-end. Seu compromisso é assegurar que a plataforma seja robusta, escalável e preparada para acompanhar o crescimento do projeto." },



];



export default function App() {

  
  const [selectedMember, setSelectedMember] = useState(null);


                  {/* Carregamento das fontes */}
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_700Bold });
if (!fontsLoaded) { return null; }

return (

  <ScrollView>
  <View style={styles.container}>
    <Text style={styles.teamHeader}>Equipe</Text>
    <FlatList
      data={teamMembers}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setSelectedMember(selectedMember === item.id ? null : item.id)}>
          <View style={styles.teamMember}>
            <Image source={item.image} style={styles.teamImage} />
            <Text style={styles.teamName}>{item.name}</Text>
            <Text style={styles.teamRole}>{item.role}</Text>
            {selectedMember === item.id && (
              <View style={styles.details}>
                <Text style={styles.bio}> {item.bio}</Text>
                <Text style={styles.social}>Rede Social: {item.social}</Text>
                <Text style={styles.contact}>Contato: {item.contact}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
    </View>

</ScrollView>
);
}
                        {/* Estilizações */}
const styles = StyleSheet.create({


container: { 
  flex: 1, 
  padding: 10,
  backgroundColor: "black" },


teamHeader: { 
  fontSize: 30, 
  fontFamily: "Jost_700Bold", 
  textAlign: "center", 
  marginTop: 20, 
},


containerteam:{
  borderRadius:30,
  marginTop:5,
  backgroundColor:"white"
  

}, 


teamMember: { 
  backgroundColor: "#f0ecec", 
  padding: 10, 
  marginHorizontal: 10,
  marginVertical:10, 
  borderRadius: 25, 
  paddingLeft:15, 
  paddingVertical:20,
  shadowColor: "#000", 
  shadowOffset: { width: 2, height: 2 }, 
  shadowOpacity: 0.2, 
  shadowRadius: 4, 
  elevation: 3, 
},


teamName: { 
  fontSize: 20, 
  fontFamily: "Jost_700Bold",

},

teamRole: { 
  fontSize: 16, 
  fontFamily: "Jost_400Regular", 
  color: "#666" 
},

teamImage: { 
  width: 70,  
  height: 70, 
  borderRadius: 30,  
  marginBottom: 5,
},





















});