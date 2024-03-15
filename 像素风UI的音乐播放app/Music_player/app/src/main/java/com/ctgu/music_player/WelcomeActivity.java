package com.ctgu.music_player;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

public class WelcomeActivity extends Activity implements View.OnClickListener {
    private Button last0, start0,next0;
    private TextView name;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        last0 = findViewById(R.id.last);
        start0 = findViewById(R.id.start);
        next0 = findViewById(R.id.next);
        name = findViewById(R.id.tv_name);

        //页面传值：用户名
        Intent intent=getIntent();
        String Username=intent.getStringExtra("name");
        name.setText(Username);

        //设置点击监听事件
        last0.setOnClickListener(this);
        start0.setOnClickListener(this);
        next0.setOnClickListener(this);

    }


    @Override
    public void onClick(View view) {
        int id = view.getId();
        switch (id) {
            case R.id.last:
                    Intent i = new Intent(this, LoginActivity.class);
                    startActivity(i);
                    finish();
                    break;
            case R.id.start:
                Intent i1 = new Intent(this, MainActivity.class);
                startActivity(i1);
                finish();
                break;

            case R.id.next:
                Intent i2 = new Intent(this, MainActivity.class);
                startActivity(i2);
                break;
        }
    }
}