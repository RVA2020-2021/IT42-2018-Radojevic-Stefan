-- Data for Preduzece

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (1, 'Faculty of Philosophics', 12345, 'Trg Dositeja Obradovica 9, Novi Sad', 'An educational facility');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (2, 'Brush IT', 54321, 'Bulevar Oslobodjenja 55, Novi Sad', 'A software outsourcing company that also sells brooms');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (3, 'Belgrade Turistic Agency', 56789, 'Bulevar Oslobodjenja 33, Beograd', 'An agency that will take you anywhere in Belgrade');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (4, 'Positive Technologies', 98765, 'Bulevar Oslobodjenja 33, Beograd', 'A software company that offers outsourcing to other companies');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (5, 'Mikromarket D.O.O', 22334, 'Dobanovacki put, Surcin', 'A store that sells all types of basic necessities');
INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (6, 'Smile', 44556, 'Dobanovacki put, Surcin', 'A medical clinic');

-- Data for Obrazovanje

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (1, 'FTN', 'VII-1', 'Diplomirani inzenjer informacionih tehnologija');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (2, 'MEDFAKS', 'VII-1', 'Diplomirani lekar opste prakse');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (3, 'PMF', 'VII-1', 'Diplomirani informaticar');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (4, 'FTN', 'VIII', 'Doktor inzenjerskih nauka');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (5, 'PMF', 'VII-2', 'Magistar prirodnih nauka');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (6, 'EKOF', 'IV', 'Diplomirani ekonomista');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (7, 'FF', 'VII-1', 'Diplomirani sociolog');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (8, 'PMF', 'VII-1', 'Diplomirani turizmolog');
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (9, 'FTN', 'VII-1', 'Diplomirani inzenjer saobracaja');

-- Data for Sektor

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (1, 'Human Resources', 'HR', 2);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (2, 'Software development', 'SWD', 4);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (3, 'Sociology', 'SOC', 1);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (4, 'Shipment', 'SH', 5);
INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (5, 'Outsourcing', 'IT', 2);

-- Data for Radnik

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (1, 'Milan', 'Dostojevski', 45678978, 1, 1);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (2, 'Marko', 'Petrovic', 45612322, 2, 2);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (3, 'Dimitrije', 'Despotovic', 12322123, 3, 3);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (4, 'Danica', 'Milivojevic', 78912345, 4, 4);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (5, 'Milica', 'Kasalovic', 96396478, 5, 5);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (6, 'Sofija', 'Radic', 74174178, 6, 1);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (7, 'David', 'Milutinovic', 1451235, 7, 2);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (8, 'Dejan', 'Mirkovic', 32659878, 8, 3);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (9, 'Milica', 'Markovic', 78451232, 9, 4);

-- Test Data

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (-100, 'FTN', 'V', 'Test');

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (-100, 'Faculty of Technical Sciences', 45645, 'Trg Dositeja Obradovica 4, Novi Sad', 'An educational facility');

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (-100, 'Test name', 'TN', 1);

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (-100, 'Milan', 'Milanovic', 85225845, 2, 2);
