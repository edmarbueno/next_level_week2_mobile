# next_level_week2_mobile
Mobile project developed over the event called "Next Level Week 2" given by Rocketseat
This project doesn't have the challenges suggested by Diego Fernandes

Componentes instalados yarn

#Aula 01
Adiciona o typescript como dependência de desenvolvimento
	yarn add typescript -D

Adiciona componente mais utilizado para rotas em sites
	yarn add react-router-dom

Alguns modulos não são feitos nativamente com typescript, esse modulo resolve essa dependência ao importar o react-router-dom
	yarn add @types/react-router-dom -D
o -D indica apenas ambiente de desenvolvimento, não é adicionado no release

#Aula 02
Adiciona o typescript como dependência de desenvolvimento
	yarn add typescript -D

Criar o arquivo de configurações do typescript
	yarn tsc --init

Executa o servidor e observa se tem alteração, se tiver restart o servidor
	yarn add ts-node-dev -D
	
Micro framework
	yarn add express

yarn add @types/express -D

sqlite3 é o driver para que o node possa se conectar com o sqlite
knex é um query builder - permite escrever as queries para o SQL em JS
	yarn add knex sqlite3

Permite que endereços diferentes acesse nossa API
	yarn add cors
	yarn add @types/cors -D
	
#Aula 03
Facilita consumir APIs externas
	yarn add axios
	
#Aula 04
Criar um template para mobile com typescript
	expo init mobile
	Choose the template: expo-template-black-typescript
	
Importar as fontes do Google
	expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
	
Componente para navegação
	yarn add @react-navigation/native
	expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	yarn add @react-navigation/stack
	yarn add @react-navigation/bottom-tabs
	
#Aula 05
Facilita consumir APIs externas
	yarn add axios
	
	
	expo install @react-native-community/async-storage
