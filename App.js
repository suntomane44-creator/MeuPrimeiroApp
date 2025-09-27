import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Bem-vindo ao Sistema de Gestão Escolar</Text>
            <Text style={styles.text}>
              Oferecemos soluções completas para gerenciar sua instituição de ensino, 
              desde o controle acadêmico até a administração financeira.
            </Text>
            <View style={styles.featureContainer}>
              <Text style={styles.featureTitle}>Recursos Principais:</Text>
              <Text style={styles.featureItem}>• Gestão de Matrículas</Text>
              <Text style={styles.featureItem}>• Controle Acadêmico</Text>
              <Text style={styles.featureItem}>• Financeiro Escolar</Text>
              <Text style={styles.featureItem}>• Comunicação com Pais e Alunos</Text>
            </View>
          </View>
        );
      case 'services':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Nossos Serviços</Text>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Sistema de Gestão Acadêmica</Text>
              <Text style={styles.serviceDescription}>
                Controle de notas, frequência, boletins e histórico escolar de forma integrada.
              </Text>
            </View>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Gestão Financeira</Text>
              <Text style={styles.serviceDescription}>
                Controle de mensalidades, boletos, inadimplência e fluxo de caixa.
              </Text>
            </View>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Portal do Aluno</Text>
              <Text style={styles.serviceDescription}>
                Acesso personalizado para alunos e responsáveis com informações acadêmicas e financeiras.
              </Text>
            </View>
            <View style={styles.serviceItem}>
              <Text style={styles.serviceTitle}>Comunicação Escolar</Text>
              <Text style={styles.serviceDescription}>
                Sistema de comunicados, ocorrências e notificações para manter todos informados.
              </Text>
            </View>
          </View>
        );
      case 'about':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Sobre Nós</Text>
            <Text style={styles.text}>
              Somos uma empresa especializada em soluções de gestão escolar, com mais de 10 anos 
              de experiência no mercado educacional.
            </Text>
            <Text style={styles.text}>
              Nossa missão é simplificar a administração escolar através de tecnologia inovadora, 
              permitindo que instituições de ensino foquem no que realmente importa: a educação de qualidade.
            </Text>
            <View style={styles.missionVision}>
              <Text style={styles.subtitle}>Missão</Text>
              <Text style={styles.text}>
                Fornecer soluções tecnológicas que otimizem a gestão escolar e contribuam para o 
                desenvolvimento educacional.
              </Text>
              <Text style={styles.subtitle}>Visão</Text>
              <Text style={styles.text}>
                Ser referência em sistemas de gestão escolar, reconhecida pela inovação e qualidade 
                dos serviços prestados.
              </Text>
            </View>
          </View>
        );
      case 'contact':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Entre em Contato</Text>
            <Text style={styles.text}>
              Estamos à disposição para esclarecer dúvidas, apresentar nossas soluções 
              ou receber sugestões.
            </Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>Informações de Contato:</Text>
              <Text style={styles.contactItem}>📞 Telefone: (245) 95-5112827</Text>
              <Text style={styles.contactItem}>📧 Email:  suntomane44@gmail.com</Text>
              <Text style={styles.contactItem}>📍 Endereço: São Paulo/SP</Text>
            </View>
            <View style={styles.contactForm}>
              <Text style={styles.formTitle}>Envie sua mensagem:</Text>
              <Text style={styles.formNote}>
                [Aqui seria implementado um formulário de contato]
              </Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1e88e5" barStyle="light-content" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sistema de Gestão Escolar</Text>
      </View>
      
      {/* Conteúdo */}
      <ScrollView style={styles.mainContent}>
        {renderContent()}
      </ScrollView>
      
      {/* Menu de Navegação */}
      <View style={styles.navContainer}>
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'home' && styles.activeNavItem]} 
          onPress={() => setActiveTab('home')}
        >
          <Text style={[styles.navText, activeTab === 'home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'services' && styles.activeNavItem]} 
          onPress={() => setActiveTab('services')}
        >
          <Text style={[styles.navText, activeTab === 'services' && styles.activeNavText]}>Serviços</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'about' && styles.activeNavItem]} 
          onPress={() => setActiveTab('about')}
        >
          <Text style={[styles.navText, activeTab === 'about' && styles.activeNavText]}>Sobre Nós</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'contact' && styles.activeNavItem]} 
          onPress={() => setActiveTab('contact')}
        >
          <Text style={[styles.navText, activeTab === 'contact' && styles.activeNavText]}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos com CSS interno
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1e88e5',
    paddingTop: 40,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'justify',
  },
  featureContainer: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  serviceItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
  },
  missionVision: {
    marginTop: 20,
  },
  contactInfo: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  contactForm: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 10,
  },
  formNote: {
    fontSize: 15,
    color: '#888',
    fontStyle: 'italic',
  },
  navContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  activeNavItem: {
    backgroundColor: '#1e88e5',
  },
  navText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  activeNavText: {
    color: 'white',
  },
});

export default App;