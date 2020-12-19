import static javafx.application.Application.launch;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class Calculadora extends Application {
    
    int n1,n2=0;
    
    TextField t1 = new TextField();
    TextField t2 = new TextField();
    
    Label resul = new Label("Resultado:");
    
    @Override
    public void start(Stage primaryStage) {
        
        primaryStage.setTitle("Calculadora con Java FX");
        
        VBox box= new VBox(10);
              
        box.getChildren().add(new Label("1er Numero"));
        box.getChildren().add(t1);
        box.getChildren().add(new Label("2do Numero"));
        box.getChildren().add(t2);
        box.getChildren().add(resul);
        Button sum = new Button("Sumar"); sum.setId("1");
        sum.setOnAction(operacion);
        box.getChildren().add(sum);
        Button res = new Button("Restar"); res.setId("2");
        res.setOnAction(operacion);
        box.getChildren().add(res);
        Button mul = new Button("Multiplicar"); mul.setId("3");
        mul.setOnAction(operacion);
        box.getChildren().add(mul);
        Button div = new Button("Dividir"); div.setId("4");
        div.setOnAction(operacion);
        box.getChildren().add(div);
        
        
        BorderPane root = new BorderPane();
        root.setPadding(new Insets(10));
        root.setCenter(box);

        Scene sc = new Scene(root, 500, 350);
        
        primaryStage.setScene(sc);
        primaryStage.setResizable(true);
        primaryStage.show();
    }

    
    final EventHandler<ActionEvent> operacion = new EventHandler<ActionEvent>(){

        @Override
        public void handle(final ActionEvent event) {
            Button x = (Button) event.getSource();
            n1 = Integer.parseInt(t1.getText());
            n2 = Integer.parseInt(t2.getText());
            switch (x.getId()){
                case "1":
                    resul.setText("Resultado: " + (n1+n2));
                    System.out.println("Resultado: " + (n1+n2));
                    break;
                case "2":
                    resul.setText("Resultado: " + (n1-n2));
                    System.out.println("Resultado: " + (n1-n2));
                    break;
                case "3":
                    resul.setText("Resultado: " + (n1*n2));
                    System.out.println("Resultado: " + (n1*n2));
                    break;
                case "4":
                    resul.setText("Resultado: " + (n1/n2));
                    System.out.println("Resultado: " + (n1/n2));                    
                    break;
            }
        }
    };
    
    public static void main(String[] args) {
        launch(args);
    }
    
}