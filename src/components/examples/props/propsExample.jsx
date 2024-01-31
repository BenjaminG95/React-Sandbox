/**
 *
 * Les "props" dans React sont un concept fondamental et puissant. Le terme "props" est une abréviation
 * de "propriétés". Elles sont utilisées pour passer des données d'un composant à un autre,
 * ainsi que pour passer des fonctions et des événements, permettant une communication et une interaction
 * dynamique entre les composants. Voici quelques points clés pour comprendre l'utilité des props dans React :
 *
 * Passage de Données :
 * Les props permettent de passer des données d'un composant parent à un composant enfant.
 * Cela est crucial pour la réutilisabilité des composants et pour créer des interfaces utilisateur dynamiques.
 * Par exemple, vous pouvez passer une chaîne de caractères, un nombre, un objet, un tableau, etc.
 *
 * Configuration des Composants :
 * Les composants peuvent être conçus pour accepter des configurations spécifiques
 * via les props. Cela permet de personnaliser le comportement et l'apparence d'un
 * composant sans modifier le code source du composant lui-même.
 *
 * Passage de Fonctions :
 * Les props peuvent être utilisées pour passer des fonctions à des composants enfants.
 * Cela est souvent utilisé pour gérer les interactions utilisateur, comme les clics sur un bouton. Le composant
 * enfant peut ainsi informer le composant parent d'un événement ou d'une action.
 *
 * Composants Réutilisables :
 * Grâce aux props, vous pouvez créer des composants hautement réutilisables et modulaires.
 * Un même composant peut être utilisé dans différents contextes avec des données différentes, ce qui améliore
 * la maintenabilité et la cohérence du code.
 *
 * Lecture Seule :
 * Les props sont en lecture seule, ce qui signifie qu'un composant ne peut pas modifier ses props directement.
 * Toute modification des props doit être effectuée par le composant parent. Cette caractéristique favorise un flux
 * de données unidirectionnel, rendant les applications plus prévisibles et plus faciles à déboguer.
 *
 *
 * Children Prop :
 * La prop spéciale children permet de passer des éléments enfants directement entre les balises d'ouverture et de
 * fermeture d'un composant. Cela offre une flexibilité supplémentaire pour composer des composants.
 * En résumé, les props sont essentielles pour créer des composants interactifs et réactifs dans React. Elles
 * permettent aux composants de communiquer entre eux et de rester modulaires et réutilisables, tout en gardant une
 * structure de données cohérente et prévisible.
 *
 * Voir la documentation officielle : https://react.dev/learn/passing-props-to-a-component
 */
import React, {useState} from "react";

// Composant enfant qui affiche le message et permet de le modifier
function MessageDisplay({message, updateMessage}) {
    const [newMessage, setNewMessage] = useState(""); // État local pour stocker le nouveau message saisi

    const handleInputChange = (e) => {
        setNewMessage(e.target.value); // Mettre à jour l'état local avec le texte saisi
    };

    const handleSubmit = () => {
        updateMessage(newMessage); // Appeler la fonction de mise à jour avec le nouveau message
        setNewMessage(""); // Réinitialiser le champ de saisie
    };

    // Afficher le message et le champ de saisie avec le bouton pour modifier le message
    return (<>
        <div
            className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
            <h2 className="text-2xl font-bold">Les props</h2>
            <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-4"
               href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/props/propsExample.jsx"
               target="_blank" rel="noreferrer">
                Code source de propsExample
            </a>
            <p className="text-sm mt-4">
                Remplissez l'input et appuyez sur le bouton pour modifier le texte.
            </p>
            <input type="text"
                   className="text-sm mt-4 block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                   value={newMessage}
                   onChange={handleInputChange}
                   placeholder="Entrez une propriété"/>
            <p className="text-sm mt-4">Message: {message}</p>
            <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={handleSubmit}>
                Utiliser les props
            </button>
        </div>
    </>);
}

// Composant parent qui contient le message et la fonction de mise à jour du message
function PropsExample() {
    const [message, setMessage] = useState("Message initial"); // État local pour stocker le message

    // Fonction de mise à jour du message
    const changeMessage = (newMessage) => {
        setMessage(newMessage);
    };

    // Afficher le composant enfant avec le message et la fonction de mise à jour du message
    return (
        <div className={'flex-column flex-item'}>
            <MessageDisplay message={message} updateMessage={changeMessage}/>
        </div>
    );
}

export default PropsExample;
