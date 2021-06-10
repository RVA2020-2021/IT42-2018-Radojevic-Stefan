-- Data for Preduzece

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Faculty of Philosophics', 12345, 'Trg Dositeja Obradovica 9, Novi Sad', 'An educational facility');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Brush IT', 54321, 'Bulevar Oslobodjenja 55, Novi Sad', 'A software outsourcing company that also sells brooms');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Belgrade Turistic Agency', 56789, 'Bulevar Oslobodjenja 33, Beograd', 'An agency that will take you anywhere in Belgrade');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Positive Technologies', 98765, 'Bulevar Oslobodjenja 33, Beograd', 'A software company that offers outsourcing to other companies');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Mikromarket D.O.O', 22334, 'Dobanovacki put, Surcin', 'A store that sells all types of basic necessities');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Smile', 44556, 'Dobanovacki put, Surcin', 'A medical clinic');

-- Data for Obrazovanje

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'FTN', 'VII-1', 'Diplomirani inzenjer informacionih tehnologija');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'MEDFAKS', 'VII-1', 'Diplomirani lekar opste prakse');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'PMF', 'VII-1', 'Diplomirani informaticar');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'FTN', 'VIII', 'Doktor inzenjerskih nauka');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'PMF', 'VII-2', 'Magistar prirodnih nauka');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'EKOF', 'IV', 'Diplomirani ekonomista');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'FF', 'VII-1', 'Diplomirani sociolog');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'PMF', 'VII-1', 'Diplomirani turizmolog');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'FTN', 'VII-1', 'Diplomirani inzenjer saobracaja');

-- Data for Sektor

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Human Resources', 'HR', 2);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Software development', 'SWD', 4);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Sociology', 'SOC', 1);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Shipment', 'SH', 5);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Outsourcing', 'IT', 2);

-- Data for Radnik

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Milan', 'Dostojevski', 45678978, 1, 1);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Marko', 'Petrovic', 45612322, 2, 2);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Dimitrije', 'Despotovic', 12322123, 3, 3);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Danica', 'Milivojevic', 78912345, 4, 4);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Milica', 'Kasalovic', 96396478, 5, 5);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Sofija', 'Radic', 74174178, 6, 1);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'David', 'Milutinovic', 1451235, 7, 2);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Dejan', 'Mirkovic', 32659878, 8, 3);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Milica', 'Markovic', 78451232, 9, 4);

-- Test Data

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (-100, 'FTN', 'V', 'Test');

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (-100, 'Faculty of Technical Sciences', 45645, 'Trg Dositeja Obradovica 4','test');

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (-100, 'Test name', 'TN', 1);

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (-100, 'Milan', 'Milanovic', 85225845, 2, 2);
