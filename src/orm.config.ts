import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
	const commonConf = {
        SYNCRONIZE: false,
        ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
        MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
        CLI: {
            migrationsDir: 'src/migrations',
        },
        MIGRATIONS_RUN: false,
    };

    const ormconfig: TypeOrmModuleOptions = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'akdlfem12',
        database: 'test',
        entities: commonConf.ENTITIES,
        synchronize: commonConf.SYNCRONIZE,
        // loggin query를 로그로 벼웆ㅁ
        logging: true,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN

    };

    return ormconfig;
}

export {ormConfig }