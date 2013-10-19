var movieServices = angular.module('MovWid', []);

function CarouselController ($scope) {
 $scope.myInterval = 5000;
 $scope.slides =[
    {
        "Title": "21 & Over",
        "Release_Date": "01-Mar-13",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "The night before his big medical school interview, a promising student celebrates his 21st birthday with his two best friends.",
        "images": "0001.jpg"
    },
    {
        "Title": "42",
        "Release_Date": "12-Apr-13",
        "Genre": "Biography/Drama/Sport",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "The life story of Jackie Robinson and his history-making signing with the Brooklyn Dodgers under the guidance of team executive Branch Rickey.",
        "images": "0002.jpg"
    },
    {
        "Title": "Alex Cross",
        "Release_Date": "19-Oct-12",
        "Genre": "Action/Crime/Mystery",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A homicide detective is pushed to the brink of his moral and physical limits as he tangles with a ferociously skilled serial killer who specializes in torture and pain.",
        "images": "0003.jpg"
    },
    {
        "Title": "American Horror Story: Season 1 Murder House",
        "Release_Date": "05-Oct-11",
        "Genre": "Horror/Thriller/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The Harmon family: Ben, Vivien and their daughter Violet, move from Boston to Los Angeles after Vivien has a stillbirth and Ben has an affair.They move into a restored mansion, unaware that the home is haunted by its former inhabitants.",
        "images": "0004.jpg"
    },
    {
        "Title": "American Horror Story  Season 2 Asylum",
        "Release_Date": "17-Oct-12",
        "Genre": "Horror/Thriller/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "American Horror Story: Asylum begins in 1964 at the Briarcliff Mental Institution, following the stories of the patients, doctors and nuns who occupy it, and intercuts with events in the past and present.",
        "images": "0005.jpg"
    },
    {
        "Title": "Anna Karenina",
        "Release_Date": "07-Sep-12",
        "Genre": "Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Set in late-19th-century Russia high-society, the aristocrat Anna Karenina enters into a life-changing affair with the affluent Count Vronsky.",
        "images": "0006.jpg"
    },
    {
        "Title": "Assault on Wall Street",
        "Release_Date": "10-May-13",
        "Genre": "Action/Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Jim is an average New Yorker living a peaceful life with a well paying job and a loving family. Suddenly, everything changes when the economy crashes causing Jim to lose everything. Filled with anger and rage, Jim snaps….",
        "images": "0007.jpg"
    },
    {
        "Title": "Boardwalk Empire: Season 1",
        "Release_Date": "19-Sep-10",
        "Genre": "Drama/Action",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Set in Atlantic City, New Jersey, during the Prohibition era, the series stars Steve Buscemi as Enoch \"\"Nucky\"\" Thompson a political figure who rose to prominence and controlled Atlantic City, New Jersey, during the 1920s and early 1930s.",
        "images": "0008.jpg"
    },
    {
        "Title": "Boardwalk Empire: Season 2",
        "Release_Date": "25-Sep-11",
        "Genre": "Drama/Action",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Set in Atlantic City, New Jersey, during the Prohibition era, the series stars Steve Buscemi as Enoch \"\"Nucky\"\" Thompson a political figure who rose to prominence and controlled Atlantic City, New Jersey, during the 1920s and early 1930s.",
        "images": "0009.jpg"
    },
    {
        "Title": "Boardwalk Empire: Season 3",
        "Release_Date": "16-Sep-12",
        "Genre": "Drama/Action",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Set in Atlantic City, New Jersey, during the Prohibition era, the series stars Steve Buscemi as Enoch \"\"Nucky\"\" Thompson a political figure who rose to prominence and controlled Atlantic City, New Jersey, during the 1920s and early 1930s.",
        "images": "0010.jpg"
    },
    {
        "Title": "Brave",
        "Release_Date": "22-Jun-12",
        "Genre": "Animation/Action/Adventure/Family",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse.",
        "images": "0011.jpg"
    },
    {
        "Title": "Broken City",
        "Release_Date": "18-Jan-13",
        "Genre": "Crime/Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In a city rife with injustice, ex-cop Billy Taggart seeks redemption and revenge after being double-crossed and then framed by its most powerful figure: Mayor Nicholas Hostetler.",
        "images": "0012.jpg"
    },
    {
        "Title": "Dark Skies",
        "Release_Date": "22-Feb-13",
        "Genre": "Horror/Sci-Fi/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "As the Barret family's peaceful suburban life is rocked by an escalating series of disturbing events, they come to learn that a terrifying and deadly force is after them.",
        "images": "0013.jpg"
    },
    {
        "Title": "Dead Man Down",
        "Release_Date": "08-Mar-13",
        "Genre": "Action/Crime/Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In New York City, a crime lord's right-hand man is seduced by a woman seeking retribution.",
        "images": "0014.jpg"
    },
    {
        "Title": "Despicable Me 2",
        "Release_Date": "03-Jul-13",
        "Genre": "Animation/Adventure/Comdey",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
        "images": "0015.jpg"
    },
    {
        "Title": "Dexter: Season 7",
        "Release_Date": "30-Sep-12",
        "Genre": "Horror/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The series centers on Dexter Morgan (Michael C. Hall), a blood spatter pattern analyst for a fictional Miami Metro Police Department (based on the real life Miami-Dade Police Department) who also leads a secret life as a serial killer.",
        "images": "0016.jpg"
    },
    {
        "Title": "Django Unchained",
        "Release_Date": "25-Dec-12",
        "Genre": "Adventure/Drama/Western",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        "images": "0017.jpg"
    },
    {
        "Title": "Dredd",
        "Release_Date": "21-Sep-12",
        "Genre": "Action/Sci-Fi/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In a violent, futuristic city where the police have the authority to act as judge, jury and executioner, a cop teams with a trainee to take down a gang that deals the reality-altering drug, SLO-MO.",
        "images": "0015.jpg"
    },
    {
        "Title": "Eden",
        "Release_Date": "19-Jul-13",
        "Genre": "Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A young Korean-American girl, abducted and forced into prostitution by domestic human traffickers, joins forces with her captors in a desperate plea to survive.",
        "images": "0019.jpg"
    },
    {
        "Title": "End of Watch",
        "Release_Date": "21-Sep-12",
        "Genre": "Crime/Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Shot documentary-style, this film follows the daily grind of two young police officers in LA who are partners and friends, and what happens when they meet criminal forces greater than themselves.",
        "images": "0020.jpg"
    },
    {
        "Title": "Epic",
        "Release_Date": "24-May-13",
        "Genre": "Animation/Adventure/Family",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A teenager finds herself transported to a deep forest setting where a battle between the forces of good and the forces of evil is taking place. She bands together with a rag-tag group characters in order to save their world -- and ours.",
        "images": "0021.jpg"
    },
    {
        "Title": "Escape From Planet Earth",
        "Release_Date": "15-Feb-13",
        "Genre": "Animation/Adventure/Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Astronaut Scorch Supernova finds himself caught in a trap when he responds to an SOS from a notoriously dangerous alien planet.",
        "images": "0022.jpg"
    },
    {
        "Title": "Evidence",
        "Release_Date": "19-Jul-13",
        "Genre": "Horror/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A detective hunts down a killer using video footage shot by the victims of a massacre at an abandoned gas station.",
        "images": "0023.jpg"
    },
    {
        "Title": "Evil Dead",
        "Release_Date": "05-Apr-13",
        "Genre": "Horror",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods. The evil presence possesses them until only one is left to fight for survival.",
        "images": "0024.jpg"
    },
    {
        "Title": "Fast & Furious 6",
        "Release_Date": "24-May-13",
        "Genre": "Action/Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Hobbs has Dom and Brian reassemble their crew in order to take down a mastermind who commands an organization of mercenary drivers across 12 countries. Payment? Full pardons for them all.",
        "images": "0025.jpg"
    },
    {
        "Title": "Flight",
        "Release_Date": "02-Nov-12",
        "Genre": "Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
        "images": "0026.jpg"
    },
    {
        "Title": "G.I Joe Retaliation",
        "Release_Date": "28-Mar-13",
        "Genre": "Action/Adventure/Sci-Fi",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "The G.I. Joes are not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.",
        "images": "0027.jpg"
    },
    {
        "Title": "Game of Thrones: Season 1",
        "Release_Date": "19-Jun-11",
        "Genre": "Fantasy/Drama/Adventure",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The cable television series closely follows the multiple story lines of the A Song of Ice and Fire novel series.",
        "images": "0028.jpg"
    },
    {
        "Title": "Game of Thrones: Season 2",
        "Release_Date": "01-Apr-12",
        "Genre": "Fantasy/Drama/Adventure",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The cable television series closely follows the multiple story lines of the A Song of Ice and Fire novel series.",
        "images": "0029.jpg"
    },
    {
        "Title": "Game of Thrones: Season 3",
        "Release_Date": "31-Mar-13",
        "Genre": "Fantasy/Drama/Adventure",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The cable television series closely follows the multiple story lines of the A Song of Ice and Fire novel series.",
        "images": "0030.jpg"
    },
    {
        "Title": "Gangster Squad",
        "Release_Date": "11-Jan-13",
        "Genre": "Action/Crime/Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Los Angeles, 1949: A secret crew of police officers led by two determined sergeants work together in an effort to take down the ruthless mob king Mickey Cohen who runs the city.",
        "images": "0031.jpg"
    },
    {
        "Title": "Grown Ups 2",
        "Release_Date": "12-Jul-13",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "After moving his family back to his hometown to be with his friends and their kids, Lenny finds out that between old bullies, new bullies, schizo bus drivers, drunk cops on skis, and 400 costumed party crashers sometimes crazy follows you.",
        "images": "0032.jpg"
    },
    {
        "Title": "Hansel & Gretel: Witch Hunters",
        "Release_Date": "23-Jan-13",
        "Genre": "Action/Fantasy/Horror",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Hansel & Gretel are bounty hunters who track and kill witches all over the world. As the fabled Blood Moon approaches, the siblings encounter a new form of evil that might hold a secret to their past.",
        "images": "0033.jpg"
    },
    {
        "Title": "Hidden Colors",
        "Release_Date": "17-Apr-11",
        "Genre": "Documentary",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Hidden Colors is a documentary about the real and untold history of people of color around the globe. This film discusses some of the reasons the contributions of African and aboriginal people have been left out of the pages of history.",
        "images": "0034.jpg"
    },
    {
        "Title": "Hidden Colors 2: The Triumph of Melanin",
        "Release_Date": "06-Dec-12",
        "Genre": "Documentary",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "\"\"Hidden Colors 2\"\" is the follow-up to the critically acclaimed 2011 documentary about the untold history of people of African and aboriginal descent.",
        "images": "0035.jpg"
    },
    {
        "Title": "Hotel Transylvania",
        "Release_Date": "28-Sep-12",
        "Genre": "Animation/Comedy/Family",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teen-aged daughter.",
        "images": "0036.jpg"
    },
    {
        "Title": "House At the End of the Street",
        "Release_Date": "21-Sep-12",
        "Genre": "Horror/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When a teenager and her mother move to a little town, the girl finds that an accident happened in the house at the end of the street. But things get complicated when she befriends a boy who is the only survivor in the accident.",
        "images": "0037.jpg"
    },
    {
        "Title": "Identity Thief",
        "Release_Date": "08-Feb-13",
        "Genre": "Comedy/Crime",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Mild-mannered businessman Sandy Patterson travels from Denver to Florida to confront the deceptively harmless-looking woman who has been living it up after stealing Sandy's identity.",
        "images": "0038.jpg"
    },
    {
        "Title": "Iron Man 3",
        "Release_Date": "03-May-13",
        "Genre": "Action/Adventure/Sci-Fi",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        "images": "0039.jpg"
    },
    {
        "Title": "Jack Reacher",
        "Release_Date": "21-Dec-12",
        "Genre": "Action/Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A homicide investigator digs deeper into a case involving a trained military sniper who shot five random victims.",
        "images": "0040.jpg"
    },
    {
        "Title": "Jack the Giant Slayer",
        "Release_Date": "01-Mar-13",
        "Genre": "Adventure/Fantasy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "The ancient war between humans and a race of giants is reignited when Jack, a young farmhand fighting for a kingdom and the love of a princess, opens a gateway between the two worlds.",
        "images": "0041.jpg"
    },
    {
        "Title": "Jorge Cervantes: The Ultimate Grow Collection",
        "Release_Date": "29-Aug-06",
        "Genre": "Documentary/DIY",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Other",
        "Summary": "Step-by-step marijuana growing techniques from the master Jorge Cervantes! (3) part DVD collection.",
        "images": "0042.jpg"
    },
    {
        "Title": "Kevin Hart: Let Me Explain",
        "Release_Date": "03-Jul-13",
        "Genre": "Comedy/Documentary",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Filmed at a sold-out performance at Madison Square Garden, comedian Kevin Hart delivers material from his 2012 \"\"Let Me Explain\"\" concert tour.",
        "images": "0043.jpg"
    },
    {
        "Title": "Killing Season",
        "Release_Date": "25-Jul-13",
        "Genre": "Action/Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Two veterans of the Bosnian War -- one American, one Serbian -- find their unlikely friendship turn tense with one of them reveals their true intentions.",
        "images": "0044.jpg"
    },
    {
        "Title": "Les Misérables",
        "Release_Date": "25-Dec-12",
        "Genre": "Drama/Musical/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after he breaks parole, agrees to care for factory worker Fantine's daughter, Cosette. The fateful decision changes their lives forever.",
        "images": "0045.jpg"
    },
    {
        "Title": "Life of Pi",
        "Release_Date": "21-Nov-12",
        "Genre": "Adventure/Drama/Fantasy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
        "images": "0046.jpg"
    },
    {
        "Title": "Lincoln",
        "Release_Date": "16-Nov-12",
        "Genre": "Biography/Drama/History",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "As the Civil War continues to rage, America's president struggles with continuing carnage on the battlefield and as he fights with many inside his own cabinet on the decision to emancipate the slaves.",
        "images": "0047.jpg"
    },
    {
        "Title": "Looper",
        "Release_Date": "28-Sep-12",
        "Genre": "Action/Crime/Sci-fi",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In 2074, when the mob wants to get rid of someone, the target is sent 30 years into the past, where a hired gun awaits. Someone like Joe, who one day learns the mob wants to 'close the loop' by transporting back Joe's future self.",
        "images": "0048.jpg"
    },
    {
        "Title": "Love & Hip Hop: Season 3 \"\"New York\"\"images",
        "Release_Date": "07-Jan-13",
        "Genre": "Reality/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Love & Hip Hop is an American reality television series on VH1. The series debuted on March 14, 2011. The series follows the lives of several women who are involved with hip hop.",
        "images": "0049.jpg"
    },
    {
        "Title": "Mama",
        "Release_Date": "18-Jan-13",
        "Genre": "Horror/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Annabel and Lucas are faced with the challenge of raising his young nieces that were left alone in the forest for 5 years.... but how alone were they?",
        "images": "0050.jpg"
    },
    {
        "Title": "Man of Steel",
        "Release_Date": "14-Jun-13",
        "Genre": "Action/Adventure/Fantasy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A young itinerant worker is forced to confront his secret extraterrestrial heritage when Earth is invaded by members of his race.",
        "images": "0051.jpg"
    },
    {
        "Title": "Movie 43",
        "Release_Date": "25-Jan-13",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A series of interconnected short films follows a washed-up producer as he pitches insane story lines featuring some of the biggest stars in Hollywood.",
        "images": "0052.jpg"
    },
    {
        "Title": "Mud",
        "Release_Date": "10-Jun-13",
        "Genre": "Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Two young boys encounter a fugitive and form a pact to help him evade the bounty hunters on his trail and to reunite him with his true love.",
        "images": "0053.jpg"
    },
    {
        "Title": "Oblivion",
        "Release_Date": "19-Apr-13",
        "Genre": "Action/Adventure/Mystery",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
        "images": "0054.jpg"
    },
    {
        "Title": "Odd Thomas",
        "Release_Date": "17-Jul-13",
        "Genre": "Mystery/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In a California desert town, a short-order cook with clairvoyant abilities encounters a mysterious man with a link to dark, threatening forces.",
        "images": "0055.jpg"
    },
    {
        "Title": "Olympus Has Fallen",
        "Release_Date": "22-Mar-13",
        "Genre": "Action/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Disgraced former Presidential guard Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack; using his inside knowledge, Banning works with national security to rescue the President from his kidnappers.",
        "images": "0056.jpg"
    },
    {
        "Title": "Orange is the New Black - Season 1",
        "Release_Date": "11-Jul-13",
        "Genre": "Comedy/Crime/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The story of Piper Chapman (Taylor Schilling), a woman in her thirties who is sentenced to 15 months in prison after she is convicted of a decade old crime of transporting money for her drug dealing girlfriend (Laura Prepon).",
        "images": "0057.jpg"
    },
    {
        "Title": "Oz the Great and Powerful",
        "Release_Date": "08-Mar-13",
        "Genre": "Adventure/Family/Fantasy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A small-time magician is swept away to an enchanted land and is forced into a power struggle between three witches.",
        "images": "0058.jpg"
    },
    {
        "Title": "P90X: Extreme Workout Series",
        "Release_Date": "01-Jan-03",
        "Genre": "Exercise/Fitness",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "Other",
        "Summary": "P90X, or Power 90 Extreme, is a commercial home exercise regimen, known for its intensity. It is designed to take 90 days, and consists of a training program which uses cross-trainingwhich uses cross-training.",
        "images": "0059.jpg"
    },
    {
        "Title": "Pain & Gain",
        "Release_Date": "26-Apr-13",
        "Genre": "Comedy/Crime/Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "images": "0060.jpg"
    },
    {
        "Title": "Parker",
        "Release_Date": "25-Jan-13",
        "Genre": "Crime/Action",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead. Assuming a new disguise and forming an unlikely alliance with a woman on the inside, he looks to hijack the score of the crew's latest heist.",
        "images": "0061.jpg"
    },
    {
        "Title": "R.I.P.D",
        "Release_Date": "19-Jul-13",
        "Genre": "Action/Comedy/Crime",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A recently slain cop joins a team of undead police officers working for the Rest in Peace Department and tries to find the man who murdered him.",
        "images": "0062.jpg"
    },
    {
        "Title": "Rise of the Guardians",
        "Release_Date": "21-Nov-12",
        "Genre": "Animation/Adventure/Family",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When the evil spirit Pitch launches an assault on Earth, the Immortal Guardians team up to protect the innocence of children all around the world.",
        "images": "0063.jpg"
    },
    {
        "Title": "Robot & Frank",
        "Release_Date": "12-Sep-12",
        "Genre": "Comedy/Crime/Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Set in the near future, an ex-jewel thief receives a gift from his son: a robot butler programmed to look after him. But soon the two companions try their luck as a heist team.",
        "images": "0064.jpg"
    },
    {
        "Title": "Safe Haven",
        "Release_Date": "14-Feb-13",
        "Genre": "Drama/Mystery/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her.",
        "images": "0065.jpg"
    },
    {
        "Title": "Scandal: Season 1",
        "Release_Date": "05-Apr-12",
        "Genre": "Drama/Romance",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Olivia Pope (Kerry Washington) is a former White House Communications Director for the president, but has left to start her own crisis management firm, Olivia Pope and Associates. She is hoping to begin a new chapter of her life, but….",
        "images": "0066.jpg"
    },
    {
        "Title": "Seven Psychopaths",
        "Release_Date": "12-Oct-12",
        "Genre": "Comedy/Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.",
        "images": "0067.jpg"
    },
    {
        "Title": "Shaun T's Insanity Workout Series",
        "Release_Date": "01-Jan-10",
        "Genre": "Exercise/Fitness",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "Other",
        "Summary": "Insanity is a workout regimen similar to P90X in that it claims to improve fitness in 60 days through strenuous stamina training. Developed by Shaun T., Insanity's advertising emphasizes \"\"max interval training\"\". 10 workout videos.",
        "images": "0068.jpg"
    },
    {
        "Title": "Side Effects",
        "Release_Date": "08-Feb-13",
        "Genre": "Crime/Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A young woman's world unravels when a drug prescribed by her psychiatrist has unexpected side effects.",
        "images": "0069.jpg"
    },
    {
        "Title": "Silver Linings Playbook",
        "Release_Date": "25-Dec-12",
        "Genre": "Comedy/Drama/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
        "images": "0070.jpg"
    },
    {
        "Title": "Sinister",
        "Release_Date": "12-Oct-12",
        "Genre": "Horror/Mystery/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A true-crime writer finds a cache of 8mm home movies films that suggest the murder he is currently researching is the work of a serial killer whose career dates back to the 1960s.",
        "images": "0071.jpg"
    },
    {
        "Title": "Skyfall",
        "Release_Date": "09-Nov-12",
        "Genre": "Action/Adventure/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Bond's loyalty to M is tested when her past comes back to haunt her. Whilst MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
        "images": "0072.jpg"
    },
    {
        "Title": "Snitch",
        "Release_Date": "22-Feb-13",
        "Genre": "Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A father goes undercover for the DEA in order to free his son who was imprisoned after being set up in drug deal.",
        "images": "0073.jpg"
    },
    {
        "Title": "Snow White and the Huntsman",
        "Release_Date": "01-Jun-12",
        "Genre": "Adventure/Drama/Fantasy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen.",
        "images": "0074.jpg"
    },
    {
        "Title": "Sons of Anarachy: Season 5",
        "Release_Date": "11-Sep-12",
        "Genre": "Drama/Action/Crime",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Following the death of Veronica Pope, the Niners attack SAMCRO and ambush one of their cargo. The growing conflict along with several home invasions to people linked to the Club make Jax attempt to deal with Damon Pope. Bobby is released by….",
        "images": "0075.jpg"
    },
    {
        "Title": "Spartacus: Mini-Series Gods of the Arena",
        "Release_Date": "21-Jan-11",
        "Genre": "Action/Adventure",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Watch the story of history's greatest gladiator unfold with graphic violence and explicit sex. This is Spartacus.",
        "images": "0076.jpg"
    },
    {
        "Title": "Spartacus: Season 1 \"\"Blood And Sand\"\"images",
        "Release_Date": "22-Jan-10",
        "Genre": "Action/Adventure",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Watch the story of history's greatest gladiator unfold with graphic violence and explicit sex. This is Spartacus.",
        "images": "0077.jpg"
    },
    {
        "Title": "Spartacus: Season 2 \"\"Vengeance\"\"images",
        "Release_Date": "27-Jan-12",
        "Genre": "Action/Adventure",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Watch the story of history's greatest gladiator unfold with graphic violence and explicit sex. This is Spartacus.",
        "images": "0078.jpg"
    },
    {
        "Title": "Spartacus: Season 3 \"\"War of the Damned\"\"images",
        "Release_Date": "25-Jan-13",
        "Genre": "Action/Adventure/Biography",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Watch the story of history's greatest gladiator unfold with graphic violence and explicit sex. This is Spartacus.",
        "images": "0079.jpg"
    },
    {
        "Title": "Spring Breakers",
        "Release_Date": "22-Mar-13",
        "Genre": "Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Four college girls who land in jail after robbing a restaurant in order to fund their spring break vacation find themselves bailed out by a drug and arms dealer who wants them to do some dirty work.",
        "images": "0080.jpg"
    },
    {
        "Title": "Taken 2",
        "Release_Date": "05-Oct-12",
        "Genre": "Action/Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",
        "images": "0081.jpg"
    },
    {
        "Title": "Ted",
        "Release_Date": "29-Jun-12",
        "Genre": "Comedy/Fantasy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "As the result of a childhood wish, John Bennett's teddy bear, Ted, came to life and has been by John's side ever since - a friendship that's tested when Lori, John's girlfriend of four years, wants more from their relationship.",
        "images": "0082.jpg"
    },
    {
        "Title": "Texas Chainsaw 3D",
        "Release_Date": "04-Jan-13",
        "Genre": "Horror/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A young woman travels to Texas to collect an inheritance; little does she know that an encounter with a chainsaw-wielding killer is part of the reward.",
        "images": "0083.jpg"
    },
    {
        "Title": "The Boondocks: Season 1",
        "Release_Date": "06-Nov-05",
        "Genre": "Animation/Comedy",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The Boondocks follows the adventures of the Freemans, an African-American family, having moved from the South Side of Chicago, Illinois to the fictional, peaceful and mostly white suburb of Woodcrest.",
        "images": "0084.jpg"
    },
    {
        "Title": "The Boondocks: Season 2",
        "Release_Date": "08-Oct-07",
        "Genre": "Animation/Comedy",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The Boondocks follows the adventures of the Freemans, an African-American family, having moved from the South Side of Chicago, Illinois to the fictional, peaceful and mostly white suburb of Woodcrest.",
        "images": "0085.jpg"
    },
    {
        "Title": "The Boondocks: Season 3",
        "Release_Date": "02-May-10",
        "Genre": "Animation/Comedy",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "The Boondocks follows the adventures of the Freemans, an African-American family, having moved from the South Side of Chicago, Illinois to the fictional, peaceful and mostly white suburb of Woodcrest.",
        "images": "0086.jpg"
    },
    {
        "Title": "The Call",
        "Release_Date": "15-Mar-13",
        "Genre": "Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When a veteran 911 operator takes a life-altering call from a teenage girl who has just been abducted, she realizes that she must confront a killer from her past in order to save the girl's life.",
        "images": "0087.jpg"
    },
    {
        "Title": "The Colony",
        "Release_Date": "20-Sep-13",
        "Genre": "Action/Sci-Fi/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Forced underground by the next ice age, a struggling outpost of survivors must fight to preserve humanity against a threat even more savage than nature.",
        "images": "0088.jpg"
    },
    {
        "Title": "The Conjuring",
        "Release_Date": "19-Jul-13",
        "Genre": "Horror/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        "images": "0089.jpg"
    },
    {
        "Title": "The Frozen Ground",
        "Release_Date": "23-Aug-13",
        "Genre": "Biography/Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "An Alaska State Trooper partners with a young woman who escaped the clutches of serial killer Robert Hansen to bring the murderer to justice. Based on actual events.",
        "images": "0090.jpg"
    },
    {
        "Title": "The Grandmaster",
        "Release_Date": "23-Aug-13",
        "Genre": "Action/Biography/Drama",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "The story of martial-arts master Ip Man, the man who trained Bruce Lee. (Subtitled)",
        "images": "0091.jpg"
    },
   
    {
        "Title": "The Great Gatsby",
        "Release_Date": "10-May-13",
        "Genre": "Drama/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A Midwestern war veteran finds himself drawn to the past and lifestyle of his millionaire neighbor.",
        "images": "0092.jpg"
    },
    {
        "Title": "The Hangover Part III",
        "Release_Date": "23-May-13",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the lam.",
        "images": "0093.jpg"
    },
    {
        "Title": "The Heat",
        "Release_Date": "28-Jun-13",
        "Genre": "Action/Comedy/Crime",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "An uptight FBI Special Agent is paired with a foul-mouthed Boston cop to take down a ruthless drug lord.",
        "images": "0094.jpg"
    },
    {
        "Title": "The Host",
        "Release_Date": "29-Mar-13",
        "Genre": "Action/Adventure/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When an unseen enemy threatens mankind by taking over their bodies and erasing their memories, Melanie will risk everything to protect the people she cares most about, proving that love can conquer all in a dangerous new world.",
        "images": "0095.jpg"
    },
    {
        "Title": "The Incredible Burt Wonderstone",
        "Release_Date": "15-Mar-13",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When a street magician's stunts begins to make their show look stale, superstar magicians Burt Wonderstone and Anton Marvelton look to salvage on their act - and their friendship - by staging their own daring stunt.",
        "images": "0096.jpg"
    },
    {
        "Title": "The Last Stand",
        "Release_Date": "18-Jan-13",
        "Genre": "Action/Crime/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "The leader of a drug cartel busts out of a courthouse and speeds to the Mexican border, where the only thing in his path is a sheriff and his inexperienced staff.",
        "images": "0097.jpg"
    },
    {
        "Title": "The Purge",
        "Release_Date": "07-Jun-13",
        "Genre": "Horror/Sci-Fi/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A family is held hostage for harboring the target of a murderous syndicate during the Purge, a 12-hour period in which any and all crime is legalized.",
        "images": "0098.jpg"
    },
    {
        "Title": "The Walking Dead: Season 1",
        "Release_Date": "31-Oct-10",
        "Genre": "Horror/Thriller/Drama",
        "Number of Discs": "1",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Sheriff's Deputy Rick Grimes is shot and wounded in an altercation with criminals. After slipping into a coma for an indeterminate amount of time, Rick awakens in an abandoned hospital to find a post-apocalyptic world overrun by infectious zombies…",
        "images": "0099.jpg"
    },
    {
        "Title": "The Walking Dead: Season 2",
        "Release_Date": "26-Oct-11",
        "Genre": "Horror/Thriller/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "he second season begins with Rick and his group of survivors leaving Atlanta. They decide Fort Benning will be their next destination. Along the way, they encounter…..",
        "images": "0100.jpg"
    },
    {
        "Title": "The Walking Dead: Season 3",
        "Release_Date": "14-Oct-12",
        "Genre": "Horror/Thriller/Drama",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "TV Series",
        "Summary": "Several months after the group escaped the farm, and Lori is in the final days of her pregnancy. The group stumbles upon an overrun prison and sets about converting it into their new home. While trying to clear the prison of walkers…",
        "images": "0101.jpg"
    },
    {
        "Title": "This is 40",
        "Release_Date": "21-Dec-12",
        "Genre": "Comedy",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Pete and Debbie are both about to turn 40, their kids hate each other, both of their businesses are failing, they're on the verge of losing their house, and their relationship is threatening to fall apart.",
        "images": "0102.jpg"
    },
    {
        "Title": "Trance",
        "Release_Date": "27-Mar-13",
        "Genre": "Crime/Drama/Mystery",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "An art auctioneer who has become mixed up with a group of criminals partners with a hypnotherapist in order to recover a lost painting.",
        "images": "0103.jpg"
    },
    {
        "Title": "Tunnel Vision",
        "Release_Date": "22-Jan-13",
        "Genre": "Crime/Drama/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "When a jury fails to convict the serial killer who savagely murdered his family, one man must rise above his desire for revenge and descend into the deranged world of a sadistic predator to uncover the truth and finally get justice.",
        "images": "0104.jpg"
    },
    {
        "Title": "Upside Down",
        "Release_Date": "01-May-12",
        "Genre": "Drama/Fantasy/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "Adam and Eden fell in love as teens despite the fact that they live on twinned worlds with gravities that pull in opposite directions. Ten years after a forced separation, Adam sets out on a dangerous quest to reconnect with his love.",
        "images": "0105.jpg"
    },
    {
        "Title": "V/H/S AND V/H/S  2 - Double-Feature",
        "Release_Date": "06-Sep-12",
        "Genre": "Horror",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "(2) Movie collection. VHS and VHS 2. When a group of misfits is hired by an unknown third party to burglarize a desolate house and acquire a rare VHS tape, they discover more found footage than they bargained for.",
        "images": "0106.jpg"
    },
    {
        "Title": "Warm Bodies",
        "Release_Date": "01-Feb-13",
        "Genre": "Comedy/Horror/Romance",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "After a highly unusual zombie saves a still-living girl from an attack, the two form a relationship that sets in motion events that might transform the entire lifeless world.",
        "images": "0107.jpg"
    },
    {
        "Title": "We're The Millers",
        "Release_Date": "07-Aug-13",
        "Genre": "Comedy/Crime",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
        "images": "0108.jpg"
    },
    {
        "Title": "World War Z",
        "Release_Date": "21-Jun-13",
        "Genre": "Action/Horror/Adventure",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.",
        "images": "0109.jpg"
    },
    {
        "Title": "Wreck-It Ralph",
        "Release_Date": "02-Nov-12",
        "Genre": "Animation/Adventure/Comedy/Family",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
        "images": "0110.jpg"
    },
    {
        "Title": "Zeitgeist - Triple Feature",
        "Release_Date": "01-Jun-07",
        "Genre": "Documentary/History",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "(3) Movies. Zeitgeist, Zeitgeist - Addendum, and Zeitgeist: Moving Forward, Triple Feature. Mythology and belief in society today, presenting uncommon perspectives of common cultural issues.",
        "images": "0111.jpg"
    },
    {
        "Title": "Zero Dark Thirty",
        "Release_Date": "11-Jan-13",
        "Genre": "Drama/History/Thriller",
        "Number of Discs": "1",
        "Price_Tier": "1",
        "Type": "Movie",
        "Summary": "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May 2011.",
        "images": "0112.jpg"
    },
    {
        "Title": "Zumba Fitness Workout Series",
        "Release_Date": "01-Jan-10",
        "Genre": "Exercise/Fitness",
        "Number of Discs": "2",
        "Price_Tier": "2",
        "Type": "Other",
        "Summary": "Zumba involves dance and aerobic elements. Zumba's choreography incorporates hip-hop, soca, samba, salsa, merengue, mambo, martial arts, and some Bollywood and belly dance moves. Squats and lunges are also included.",
        "images": "0113.jpg"
    }
];   
    





}