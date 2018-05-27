import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  entrees_f: any;
  entrees_c: any;
  sandwish: any;
  chinoises: any;
  potages: any;
  africaines: any;
  viandes: any;
  volailles: any;
  poissons: any;
  garnitures: any;
  pates: any;
  pizzas: any;
  dessert_glaces: any
  dessert_sorbets: any;




  apperitifs: any;
  digestifs: any;
  cognac: any;
  whisky_1: any;
  whisky_2: any;
  whisky_3: any;
  liqueurs: any;
  gins: any;
  rhums: any;

  boissons_s: any;
  cocktails_b: any;
  boissons_p: any;
  cannettes_s: any;
  cannettes_b: any;
  bieres: any;
  boissons_e: any;
  eaux_m: any;
  jus: any;
  boissons_c: any;
  sirops: any;

  images: any;

  constructor() { 

    this.images = [
      {
        'name': 'ga-1.jpg'
      },
      {
        'name': 'ga-2.jpg'
      },
      {
        'name': 'ga-3.jpg'
      },
      {
        'name': 'ga-4.jpg'
      },
      {
        'name': 'ga-5.jpg'
      },
      {
        'name': 'ga-6.jpg'
      },
      {
        'name': 'ga-7.jpg'
      },
      {
        'name': 'ga-8.jpg'
      },
      {
        'name': 'ga-9.jpg'
      }

    ]

    this.entrees_f = [
      { 'titre': 'Salade verte', 'price': '2000' },
      { 'titre': 'Avocat vinaigrette', 'price': '2000' },
      { 'titre': 'Emincées d’Avocat aux crevettes', 'price': '2000' },
      { 'titre': 'Avocat aux crevettes', 'price': '3000' },
      { 'titre': 'Emincées d’Avocat au thon', 'price': '3000' },
      { 'titre': 'Avocat au thon', 'price': '3000' },
      { 'titre': 'Crudités de jambon', 'price': '3000' },
      { 'titre': 'Carotte au thon', 'price': '3000' },
      { 'titre': 'Crudités de saison', 'price': '3000' },
      { 'titre': 'Salade de crevettes', 'price': '3000' },
      { 'titre': 'Salade composée', 'price': '3000' },
      { 'titre': 'Crevettes à la mayonnaise', 'price': '3000' },
      { 'titre': 'Cocktail de crevettes', 'price': '3000' },
      { 'titre': 'Papaye solo au porto', 'price': '3000' },
      { 'titre': 'Salade niçoise', 'price': '3000' },
      { 'titre': 'Salade de la Brise', 'price': '4000' },
      { 'titre': 'Salade de tomate au thon', 'price': '3000' },
      { 'titre': 'Assiette de charcuterie', 'price': '4500' },
      { 'titre': 'Salade frisée aux foies de volailles et lardons', 'price': '4000' },
      { 'titre': 'Salade Frisée aux lardons et croûtons', 'price': '4000' },
      { 'titre': 'Salade de poisson sauce tartare', 'price': '4500' }
    ]

    this.entrees_c = [
      { 'titre': 'Crêpe forestière', 'price': '3500' },
      { 'titre': 'Bouchée à la Reine', 'price': '3500' },
      { 'titre': 'Feuilleté de crevettes au Calva', 'price': '4000' },
      { 'titre': 'Délices de Sassandra', 'price': '6000' },
      { 'titre': 'Omelette au jambon', 'price': '3000' },
      { 'titre': 'Omelette aux champignons', 'price': '3000' },
      { 'titre': 'Omelette aux fruits de mer', 'price': '4000' },
      { 'titre': 'Omelette Mexicaine', 'price': '3000' },
      { 'titre': 'Omelette aux foies de volaille', 'price': '3500' },
      { 'titre': 'Salade aux foies de volaille', 'price': '3000' },
      { 'titre': 'Salade de gésiers confits', 'price': '3000' },
      { 'titre': 'Gésiers grillés', 'price': '4000' },
      { 'titre': 'Soupe de poisson avec sa rouille et ses croûtons', 'price': '4000' }
    ]

    this.sandwish = [
      { 'titre': 'Sandwich au jambon', 'price': '3000' },
      { 'titre': 'Sandwich au poulet', 'price': '3000' },
      { 'titre': 'Sandwich au filet de boeuf', 'price': '3000' },
      { 'titre': 'Sandwich au saucisson', 'price': '3000' },
      { 'titre': 'Sandwich au pâté de campagne', 'price': '3000' },
      { 'titre': 'Sandwich au filet de poisson', 'price': '3000' }
    ]

    this.chinoises = [
      { 'titre': 'Nems', 'price': '2500' },
      { 'titre': 'Beignets de crevettes', 'price': '2500' },
      { 'titre': 'Crabe farci', 'price': '3500' },
      { 'titre': 'Riz cantonais', 'price': '3500' },
      { 'titre': 'Boeuf sauté au bambou', 'price': '4500' },
      { 'titre': 'Boeuf sauté aux champignons de paris', 'price': '4500' },
      { 'titre': 'Boeuf aigre douze', 'price': '4500' },
      { 'titre': 'Beignets de crevettes', 'price': '4500' },
      { 'titre': '1/2 poulet sauté au gingembre', 'price': '4500' },
      { 'titre': '1/2 poulet sauté au concombre', 'price': '4500' },
      { 'titre': 'Jambon sauté aux légumes', 'price': '3500' },
      { 'titre': 'Variété de légumes', 'price': '3000' }
    ]

    this.potages = [
      { 'titre': 'Soupe de boeuf', 'price': '3000' },
      { 'titre': 'Soupe aux vermicelles et crevettes', 'price': '3000' }
    ]

    this.africaines = [
      { 'titre': 'Sauce gouagouassou queue de boeuf / Machoiron fumé', 'price': '5000' },
      { 'titre': 'sauce gouagouassou pâte de boeuf / Machoiron fumé', 'price': '5000' },
      { 'titre': 'Sauce graine queue de boeuf / Machoiron fumé', 'price': '5000' },
      { 'titre': 'Sauce graine pâte de boeuf / Machoiron fumé', 'price': '5000' }
    ]

    this.viandes = [
      { 'titre': 'Mouton braisé', 'price': '6000' },
      { 'titre': 'Filet de boeuf aux poivres verts', 'price': '5000' },
      { 'titre': 'Filet mignon', 'price': '5000' },
      { 'titre': 'Filet de boeuf au roquefort', 'price': '6000' },
      { 'titre': 'Filet de boeuf château brillant', 'price': '6000' },
      { 'titre': 'Filet de boeuf à l’Origan', 'price': '5000' },
      { 'titre': 'Filet de boeuf royal', 'price': '5000' },
      { 'titre': 'Steak grillé', 'price': '4500' },
      { 'titre': 'Rognon sauté', 'price': '4500' },
      { 'titre': 'Rognon de veau sauce Madère', 'price': '4500' },
      { 'titre': 'Agouti braisé', 'price': '5000' },
      { 'titre': 'Kédjénou d’agouti', 'price': '5000' },
      { 'titre': 'Kédjénou de lapin', 'price': '4500' },
      { 'titre': 'Lapin sauté chasseur', 'price': '5000' },
      { 'titre': 'Brochettes de lapin aux 4 épices', 'price': '4500' },
      { 'titre': 'Brochette de filet de boeuf', 'price': '4000' },
      { 'titre': 'Brochette d’escargot', 'price': '5000' },
      { 'titre': 'Brochette de mouton', 'price': '5000' },
      { 'titre': 'Brochette de gésiers', 'price': '5000' },
      { 'titre': 'Cul de lapin à la moutarde', 'price': '4500' },
      { 'titre': 'Cul de lapin braisé', 'price': '4500' },
      { 'titre': 'Côte d’agneau grillée', 'price': '5000' },
      { 'titre': 'Côte d’agneau persillée', 'price': '5000' },
      { 'titre': 'Côte de porc charcutière', 'price': '5000' },
      { 'titre': 'Côte de porc grillée', 'price': '5000' },
      { 'titre': 'Côte de veau grand-mère', 'price': '5000' },
      { 'titre': 'Côte de veau grillée', 'price': '5000' },
      { 'titre': 'Côte de boeuf grillée sur planche', 'price': '5000' },
      { 'titre': 'Mini côte de boeuf aux échalotes', 'price': '5000' },
      { 'titre': 'Entrecôte grillée au beurre maître d’Hôtel', 'price': '5000' },
      { 'titre': 'Escalope de veau à la crème', 'price': '5000' },
      { 'titre': 'Escalope de veau panée', 'price': '5000' }
    ]

    this.volailles = [
      { 'titre': 'Coq au vin', 'price': '9000' },
      { 'titre': '1/2 coq au vin', 'price': '4500' },
      { 'titre': 'Pintade forestière', 'price': '10000' },
      { 'titre': '1/2 pintade forestière', 'price': '5000' },
      { 'titre': 'Kédjénou de pintade', 'price': '10000' },
      { 'titre': '1/2 Kédjénou de pintade', 'price': '5000' },
      { 'titre': 'Pintade au rabili', 'price': '10000' },
      { 'titre': '1/2 Pintade au rabili', 'price': '5000' },
      { 'titre': 'Pintade sautée', 'price': '10000' },
      { 'titre': '1/2 Pintade sautée', 'price': '5000' },
      { 'titre': 'Pintade braisée', 'price': '10000' },
      { 'titre': '1/2 Pintade braisée', 'price': '5000' },
      { 'titre': 'Pintade grillée', 'price': '10000' },
      { 'titre': '1/2 Pintade grillée', 'price': '5000' },
      { 'titre': 'Poulet sauté chasseur', 'price': '10000' },
      { 'titre': '1/2 poulet sauté chasseur', 'price': '5000' },
      { 'titre': 'Kédjénou de poulet', 'price': '7000' },
      { 'titre': '1/2 Kédjénou de poulet', 'price': '4500' },
      { 'titre': 'Poulet au rabili', 'price': '7000' },
      { 'titre': '1/2 Poulet au rabili', 'price': '4500' },
      { 'titre': 'Poulet braisé', 'price': '7000' },
      { 'titre': '1/2 Poulet braisé', 'price': '4500' },
      { 'titre': 'Poulet grillé', 'price': '7000' },
      { 'titre': '1/2 Poulet grillé', 'price': '4500' },
      { 'titre': 'Poulet sauté', 'price': '7000' },
      { 'titre': '1/2 Poulet sauté', 'price': '4500' },
      { 'titre': 'Brochette de poulet', 'price': '5000' },
      { 'titre': 'Poulet rôti', 'price': '7000' },
      { 'titre': '1/2 Poulet rôti', 'price': '4500' },
      { 'titre': 'Kédjénou de poulet africain', 'price': '8000' },
      { 'titre': '1/2 Kédjénou de poulet africain', 'price': '5000' }
    ]

    this.poissons = [
      { 'titre': 'Daurade braisée (barbecue) ou frit', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Kédjénou de daurade', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Barre meunière', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Barre meunière aux amandes', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Sole meunière', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Sole meunière aux amandes', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Sole braisée', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Carpe braisée (au barbecue)', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Carpe frit', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Carpe grillée', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Kédjénou de carpe', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Kédjénou de machoiron', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Machoiron braisé', 'price': '6 000/7 000/8 000 (10 000-12 000)' },
      { 'titre': 'Brochette de gambas', 'price': '9000' },
      { 'titre': 'Brochette de mérou à la menthe', 'price': '4500' },
      { 'titre': 'Brochette d’écrevisses', 'price': '5000' },
      { 'titre': 'Calamar à l’Américaine', 'price': '4500' },
      { 'titre': 'Cuisses de grenouilles à la provençale', 'price': '4000' },
      { 'titre': 'Ecrevisses sautées à la provençale', 'price': '5000' },
      { 'titre': 'Kédjénou d’écrevisses', 'price': '5000' },
      { 'titre': 'Crevettes sautées à la provençale', 'price': '4500' },
      { 'titre': 'Filet de mérou à la crème', 'price': '5000' },
      { 'titre': 'Filet de sole normand', 'price': '5000' },
      { 'titre': 'Filet de mérou persillé', 'price': '4500' },
      { 'titre': 'Filet de mérou au concombre', 'price': '5000' },
      { 'titre': 'Filet de mérou sauce Renée', 'price': '5000' },
      { 'titre': 'Filet de mérou poêlé', 'price': '4500' },
      { 'titre': 'Filet de capitaine poêlé', 'price': '4500' },
      { 'titre': 'Filet de capitaine à la papaye verte', 'price': '5000' },
      { 'titre': 'Langouste grillée au beurre de corail', 'price': '15000' },
      { 'titre': 'Filet de Capitaine à la ratatouille de légumes', 'price': '5000' }
    ]

    this.garnitures = [
      { 'titre': 'Aloco', 'price': '1500' },
      { 'titre': 'Frites d’Ignames', 'price': '1500' },
      { 'titre': 'Haricots verts', 'price': '1500' },
      { 'titre': 'Ignames vapeur', 'price': '1500' },
      { 'titre': 'Pommes frites', 'price': '1500' },
      { 'titre': 'Pommes sautées', 'price': '1500' },
      { 'titre': 'Pommes vapeur', 'price': '1500' },
      { 'titre': 'Jardinière de légumes', 'price': '1500' },
      { 'titre': 'Frites de patate douce', 'price': '1500' },
      { 'titre': 'Pâtes fraîches (spaghettis – Tagliatelles – Farfalle – Tortis - Macaroni)', 'price': '1500' },
      { 'titre': 'Petit pois', 'price': '2500' },
      { 'titre': 'Purée de pomme de terre', 'price': '2500' }
    ]

    this.pates = [
      { 'titre': 'Spaghettis à la Bolognaise', 'price': '3500' },
      { 'titre': 'Spaghettis Carbonara', 'price': '3500' },
      { 'titre': 'Spaghettis Gongorzola', 'price': '3500' },
      { 'titre': 'Spaghettis marinara', 'price': '3500' },
      { 'titre': 'Tagliatelles fraiches à la bolognaises', 'price': '3500' },
      { 'titre': 'Tagliatelles fraiches carbonara', 'price': '3500' },
      { 'titre': 'Tagliatelles fraiches gongorzola', 'price': '3500' },
      { 'titre': 'Tagliatelles fraiches marinara', 'price': '3500' },
      { 'titre': 'Farfalle à la bolognaises', 'price': '3500' },
      { 'titre': 'Farfalle carbonara', 'price': '3500' },
      { 'titre': 'Farfalle gongorzola', 'price': '3500' },
      { 'titre': 'Farfalle marinara', 'price': '3500' },
      { 'titre': 'Tortis à la bolognaises', 'price': '3500' },
      { 'titre': 'Tortis carbonara', 'price': '3500' },
      { 'titre': 'Tortis gongorzola', 'price': '3500' },
      { 'titre': 'Tortis marinara', 'price': '3500' },
    ]

    this.pizzas = [
      { 'titre': 'Napolitaine', 'composition': 'Tomate-Anchois-Olives-Herbes', 'price': '6000' },
      { 'titre': 'Provinciale', 'composition': 'Tomate-Ail-Herbes', 'price': '6000' },
      { 'titre': 'Marinara', 'composition': 'Tomate-Ail-Moules-Persil-Huile', 'price': '6000' },
      { 'titre': 'Orientale', 'composition': 'Tomate-Oignon-Poivrons-Mergues-Herbes-Huile', 'price': '6000' },
      { 'titre': 'Marguerite', 'composition': 'Tomate-Fromage-Herbes', 'price': '6000' },
      { 'titre': 'Oignon', 'composition': 'Tomate-Fromage-Oignon-Herbes-Huile', 'price': '6000' },
      { 'titre': 'Romaine', 'composition': 'Tomate-Fromage-Oignon- Anchois -Herbes-Olives', 'price': '6000' },
      { 'titre': 'Forestière', 'composition': 'Tomate-Fromage-Champignons-Herbes', 'price': '6000' },
      { 'titre': 'Jambon', 'composition': 'Tomate-Fromage-Jambon', 'price': '6000' },
      { 'titre': 'Reine', 'composition': 'Tomate-Fromage-Jambon-Champignons-Herbes', 'price': '6000' },
      { 'titre': 'Pizzaiolo', 'composition': 'Tomate-Fromage-Champignons-Olives Câpres-Artichaut-Herbes', 'price': '6000' },
      { 'titre': 'Royale', 'composition': 'Tomate-Fromage-Jambon- Champignons-Saucisses-Herbes', 'price': '6000' },
      { 'titre': 'Volcan', 'composition': 'Tomate-Fromage-Mergues-Oeuf', 'price': '6000' },
      { 'titre': 'Arlequin', 'composition': 'Tomate-Fromage-Saucisse-Olives-Basilic', 'price': '6000' },
      { 'titre': 'Fruits de mer', 'composition': 'Tomate-Fromage-Moule-Thon-Crevettes-Calamar-Herbes', 'price': '6000' },
      { 'titre': 'Quatre-saisons', 'composition': 'Tomate-Fromage-Jambon-Anchois-Ail', 'price': '6000' },
      { 'titre': 'Cannibale', 'composition': 'Tomate-Fromage-Bolognaise- Olive', 'price': '6000' },
      { 'titre': 'Pantalone', 'composition': 'Tomate-Fromage-Jambon - Saucisse-OEuf', 'price': '6000' },
      { 'titre': 'Mexicaine', 'composition': 'Tomate-Poivron–Oignon-Poulet-Fromage-olives', 'price': '6000' },
      { 'titre': 'Hawaîenne', 'composition': 'Jambon - Tomate – Ananas - Fromage', 'price': '6000' }
    ]

    this.dessert_glaces = [
      { 'titre': 'Café', 'price': '1000' },
      { 'titre': 'Fraise', 'price': '1000' },
      { 'titre': 'Vanille', 'price': '1000' },
      { 'titre': 'Malaga', 'price': '1000' },
      { 'titre': 'Chocolat', 'price': '1000' },
      { 'titre': 'Plombières', 'price': '2000' },
      { 'titre': 'Caramel', 'price': '2000' }
    ]

    this.dessert_sorbets = [
      { 'titre': 'Sorbet citron', 'price': '1000' },
      { 'titre': 'Sorbet ananas', 'price': '1000' },
      { 'titre': 'Sorbet passion', 'price': '1000' },
      { 'titre': 'Sorbet corossol', 'price': '1000' },
      { 'titre': 'Sorbet papaye', 'price': '1000' },
      { 'titre': 'Sorbet mangue', 'price': '1000' },
      { 'titre': 'Salade de fruits au grand Marnier', 'price': '2000' },
      { 'titre': 'Coupe St Jacques sur commande', 'price': '3000' },
      { 'titre': 'Tartes aux fruits sur commande', 'price': '3000' },
      { 'titre': 'Crêpes suzettes (commandez 30 mn à l’avance)', 'price': '2000' },
      { 'titre': 'Ananas flambé (commandez 30 mn à l’avance)', 'price': '2000' },
      { 'titre': 'Banane flambée (commandez 30 mn à l’avance)', 'price': '2000' },
      { 'titre': 'Profiteroles (commandez 30 mn à l’avance)', 'price': '3000' },
      { 'titre': 'Omelettes norvégienne (sur commande) au moins 3 pers.', 'price': '8000 / pers' }
    ]


    // BOISSONS //

    this.apperitifs = [
      { 'name': 'Martini : Rouge/ Blanc / Rosé', 'price': '2000' },
      { 'name': 'Suze : Rouge/ Blanc / Rosé', 'price': '2000' },
      { 'name': 'Porto : rouge / blanc : Rouge/ Blanc / Rosé', 'price': '2000' },
      { 'name': 'Campari', 'price': '2000' },
      { 'name': 'Ricard', 'price': '2500' },
      { 'name': 'Pastis 51', 'price': '2500' }
    ]

    this.digestifs = [
      { 'name': 'Poire William’s', 'price': '3000' },
      { 'name': 'Mirabelle', 'price': '3000' },
      { 'name': 'Framboise', 'price': '3000' },
      { 'name': 'Vodka', 'price': '3000' }
    ]

    this.cognac = [
      { 'name': 'Calvados', 'price': '4000' },
      { 'name': 'Armagnac', 'price': '4000' },
      { 'name': 'Rémy Martin', 'price': '4000' },
      { 'name': 'Hennessy', 'price': '4000' }
    ]

    this.whisky_1 = [
      { 'name': 'J & B', 'price': '2500' },
      { 'name': 'Clan Campbell', 'price': '2000' },
      { 'name': 'Cutty Sark', 'price': '2000' },
      { 'name': 'Ballantine’s', 'price': '2500' },
    ]

    this.whisky_2 = [
      { 'name': 'VAT 69', 'price': '2000' },
      { 'name': 'White Horse', 'price': '2000' },
      { 'name': 'Johnny Walker Red label', 'price': '2500' },
      { 'name': 'Johnny Walker Black label', 'price': '4000' }
    ]

    this.whisky_3 = [
      { 'name': 'Jack Daniel’s', 'price': '4000' },
      { 'name': 'Dimple', 'price': '4000' },
      { 'name': 'Chivas', 'price': '4000' },
      { 'name': 'Blanco Tequila', 'price': '4000' }
    ]

    this.liqueurs = [
      { 'name': 'Cointreau', 'price': '4000' },
      { 'name': 'Grand Marnier', 'price': '4000' },
      { 'name': 'Marie Brizard', 'price': '4000' },
      { 'name': 'Get Pippermint', 'price': '4000' },
      { 'name': 'Crème Cassis', 'price': '4000' },
      { 'name': 'Crème de cacao', 'price': '4000' },
      { 'name': 'Baïley’s', 'price': '4000' },
      { 'name': 'Malibou', 'price': '4000' },
      { 'name': 'Eau de vie', 'price': '4000' }
    ]

    this.gins = [
      { 'name': 'Gordon’s', 'price': '2000' },
      { 'name': 'Beefeater', 'price': '2000' },
      { 'name': 'Royal', 'price': '2000' }
    ]

    this.rhums = [
      { 'name': 'Saint James rouge', 'price': '2000' },
      { 'name': 'Saint James blanc', 'price': '2000' },
      { 'name': 'Clément blanc', 'price': '7000' }
    ]

    // Rafaichissement

    this.boissons_s = [
      { 'name': 'Coca/ Fanta /Tonic / Sprite', 'price': '1000' },
      { 'name': 'Orangina', 'price': '1000' },
      { 'name': 'Soda Water', 'price': '1000' },
      { 'name': 'O.K Tip-Top', 'price': '1000' },
      { 'name': 'Malta Guinness', 'price': '1000' }
    ]

    this.cocktails_b = [
      { 'name': 'Cocktail sans alcool', 'price': '2000' },
      { 'name': 'Cocktail avec alcool', 'price': '3000' },
      { 'name': 'Kir Impérial', 'price': '5000' },
      { 'name': 'Kir Royal', 'price': '10000' },
      { 'name': 'Coupe de champagne', 'price': '10000' }
    ]

    this.boissons_p = [
      { 'name': '7 UP', 'price': '1000' },
      { 'name': 'EVERVESS TONIC', 'price': '1000' },
      { 'name': 'PEPSI', 'price': '1000' },
      { 'name': 'MIRINDA', 'price': '1000' }
    ]

    this.cannettes_s = [
      { 'name': 'Coca', 'price': '1000' },
      { 'name': 'Coca light', 'price': '1000' },
      { 'name': 'Coca Zero', 'price': '1000' },
      { 'name': 'Fanta', 'price': '1000' },
      { 'name': 'Sprite', 'price': '1000' },
      { 'name': 'Tonic', 'price': '1000' }
    ]

    this.bieres = [
      { 'name': 'Number one « 65 cl', 'price': '1500' },
      { 'name': 'Gold 55', 'price': '1000' },
      { 'name': 'Flaguette', 'price': '1000' },
      { 'name': 'Tuborg « 33 cl »', 'price': '1000' },
      { 'name': 'Guiness « 28 »', 'price': '1000' },
      { 'name': 'Heineken', 'price': '2000' },
      { 'name': 'Flag « 65 cl » « 28 »', 'price': '1500' },
      { 'name': 'Bock « 65 cl »', 'price': '1500' }
    ]

    this.cannettes_b = [
      { 'name': 'Grande', 'price': '2000' },
      { 'name': 'Petite', 'price': '1000' }
    ]

    this.boissons_e = [
      { 'name': 'Red Bull', 'price': '2000' },
      { 'name': 'Codis', 'price': '2000' },
      { 'name': 'XXL', 'price': '2000' },
      { 'name': 'Planète', 'price': '2000' }
    ]

    this.eaux_m = [
      { 'name': 'AWA', 'price': '1000' },
      { 'name': 'Olgane', 'price': '1000' },
      { 'name': 'Céleste', 'price': '1000' },
      { 'name': 'AWA Petite bouteille', 'price': '500' },
      { 'name': 'Olgane Petite bouteille', 'price': '500' },
      { 'name': 'Céleste Petite bouteille', 'price': '500' },
      { 'name': 'Eau pétillante', 'price': '2000' },
      { 'name': '1/4 de Perrier', 'price': '1500' },
      { 'name': '½ Perrier', 'price': '2000' }
    ]

    this.jus = [
      { 'name': 'Orange', 'price': '1000' },
      { 'name': 'Pamplemousse', 'price': '1000' },
      { 'name': 'Ananas', 'price': '1000' },
      { 'name': 'Citron', 'price': '1000' }
    ]

    this.sirops = [
      { 'name': 'Menthe', 'price': '1000' },
      { 'name': 'Grenadine', 'price': '1000' },
      { 'name': 'Citron', 'price': '1000' },
      { 'name': 'Menthe au lait', 'price': '2000' },
      { 'name': 'Sam Bitter', 'price': '1000' }
    ]

    this.boissons_c = [
      { 'name': 'Café Expresso', 'price': '1000' },
      { 'name': 'Thé Lipton ordinaire', 'price': '1000' },
      { 'name': 'Infusion (verveine / menthe)', 'price': '1500' },
      { 'name': 'Citronnelle', 'price': '1500' }
    ]

  }

  getImages(){
    return this.images;
  }

  getEntreesFroides(){
    return this.entrees_f;
  }

  getEntreesChaudes(){
    return this.entrees_c;
  }

  getSandwish(){
    return this.sandwish;
  }

  getChinoises(){
    return this.chinoises;
  }

  getPotages(){
    return this.potages;
  }

  getAfricaines(){
    return this.africaines;
  }

  getViandes(){
    return this.viandes;
  }

  getVolailles(){
    return this.volailles;
  }

  getPoissons(){
    return this.poissons;
  }

  getGarnitures(){
    return this.garnitures;
  }

  getPates(){
    return this.pates;
  }

  getPizzas(){
    return this.pizzas;
  }

  getDessertGlasses(){
    return this.dessert_glaces;
  }

  getDessertSorbets(){
    return this.dessert_sorbets;
  }




  getBoissonsSolibra(){
    return this.boissons_s;
  }

  getBoissonsChaudes(){
    return this.boissons_c;
  }

  getBoissonsEnergi(){
    return this.boissons_e;
  }

  getDisgestifs(){
    return this.digestifs;
  }

  getSirops(){
    return this.sirops;
  }

  getJus(){
    return this.jus;
  }

  getCocktail(){
    return this.cocktails_b;
  }

  getCannetteSucrerie(){
    return this.cannettes_s;
  }

  getCannnetteBiere(){
    return this.cannettes_b;
  }

  getEau(){
    return this.eaux_m;
  }

  getApperitif(){
    return this.apperitifs;
  }

  getCognac(){
    return this.cognac;
  }

  getW1(){
    return this.whisky_1;
  }

  getW2(){
    return this.whisky_2;
  }

  getW3(){
    return this.whisky_3;
  }

  getLiqueur(){
    return this.liqueurs;
  }

  getGins(){
    return this.gins;
  }

  getRhums(){
    return this.rhums;
  }

  getBiere(){
    return this.bieres;
  }



}
