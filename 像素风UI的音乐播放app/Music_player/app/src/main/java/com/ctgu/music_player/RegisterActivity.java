package com.ctgu.music_player;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class RegisterActivity extends AppCompatActivity {
        private Button register;
        private EditText name1,password1;
        private DatabaseHelper databaseHelper1;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_register);
            databaseHelper1 = new DatabaseHelper(this);
            register = findViewById(R.id.btn_register);
            name1 = findViewById(R.id.re_username);
            password1 = findViewById(R.id.re_password);
        }

                public void Register(View view) {
                    String s = name1.getText().toString();
                    String s1 = password1.getText().toString();
                    User u = new User(s, s1);
                    long l = databaseHelper1.register(u);
                    if (l != -1) {
                        Toast.makeText(this, "注册成功！", Toast.LENGTH_SHORT).show();
                        Intent i3 = new Intent(RegisterActivity.this, LoginActivity.class);
                        startActivity(i3);
                        finish();
                    } else {
                        Toast.makeText(this, "注册失败！", Toast.LENGTH_SHORT).show();
                        finish();
                    }
                }
                }


