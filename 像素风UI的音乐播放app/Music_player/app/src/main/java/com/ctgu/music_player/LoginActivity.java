package com.ctgu.music_player;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


public class LoginActivity extends Activity implements View.OnClickListener {
    private Button login0, register0;
    private EditText name, password;
    private DatabaseHelper databaseHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        databaseHelper = new DatabaseHelper(this);
        find();}

    private void find() {
        login0 = findViewById(R.id.button2);
        register0 = findViewById(R.id.button3);
        name = findViewById(R.id.username);
        password = findViewById(R.id.password);
        login0.setOnClickListener(this);
        register0.setOnClickListener(this);
    }

    @SuppressLint("NonConstantResourceId")
    @Override
    public void onClick(View view) {
        int id = view.getId();
        switch (id) {
            case R.id.button2:
                //保存用户输入的数据:用户名和密码
                String s = name.getText().toString();
                String s1 = password.getText().toString();
                //判断数据库中是否存在用户名和密码
                boolean login = databaseHelper.login(s, s1);
                if (login) {
                    Toast.makeText(this, "登录成功！", Toast.LENGTH_SHORT).show();
                    Intent i = new Intent(this, WelcomeActivity.class);
                    //bundle对象传值
                    Bundle bundle = new Bundle();
                    bundle.putString("name", s);
                    //intent传值
                    i.putExtras(bundle);

                    startActivity(i);
                    finish();
                } else {
                    Toast.makeText(this, "用户名或密码错误！", Toast.LENGTH_SHORT).show();
                }

                break;
            case R.id.button3:
                Intent i1 = new Intent(this, RegisterActivity.class);
                startActivity(i1);
                finish();
                break;

        }
    }
}