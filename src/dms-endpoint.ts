// https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "database_name": {
        "type": "string",
        "optional": true
      },
      "endpoint_arn": {
        "type": "string",
        "computed": true
      },
      "endpoint_id": {
        "type": "string",
        "required": true
      },
      "endpoint_type": {
        "type": "string",
        "required": true
      },
      "engine_name": {
        "type": "string",
        "required": true
      },
      "extra_connection_attributes": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "password": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "server_name": {
        "type": "string",
        "optional": true
      },
      "service_access_role": {
        "type": "string",
        "optional": true
      },
      "ssl_mode": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "username": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "elasticsearch_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "endpoint_uri": {
              "type": "string",
              "required": true
            },
            "error_retry_duration": {
              "type": "number",
              "optional": true
            },
            "full_load_error_percentage": {
              "type": "number",
              "optional": true
            },
            "service_access_role_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "kafka_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "broker": {
              "type": "string",
              "required": true
            },
            "topic": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "kinesis_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "message_format": {
              "type": "string",
              "optional": true
            },
            "service_access_role_arn": {
              "type": "string",
              "optional": true
            },
            "stream_arn": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "mongodb_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "auth_mechanism": {
              "type": "string",
              "optional": true
            },
            "auth_source": {
              "type": "string",
              "optional": true
            },
            "auth_type": {
              "type": "string",
              "optional": true
            },
            "docs_to_investigate": {
              "type": "string",
              "optional": true
            },
            "extract_doc_id": {
              "type": "string",
              "optional": true
            },
            "nesting_level": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "s3_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_folder": {
              "type": "string",
              "optional": true
            },
            "bucket_name": {
              "type": "string",
              "optional": true
            },
            "compression_type": {
              "type": "string",
              "optional": true
            },
            "csv_delimiter": {
              "type": "string",
              "optional": true
            },
            "csv_row_delimiter": {
              "type": "string",
              "optional": true
            },
            "external_table_definition": {
              "type": "string",
              "optional": true
            },
            "service_access_role_arn": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DmsEndpointConfig extends TerraformMetaArguments {
  readonly certificateArn?: string;
  readonly databaseName?: string;
  readonly endpointId: string;
  readonly endpointType: string;
  readonly engineName: string;
  readonly extraConnectionAttributes?: string;
  readonly kmsKeyArn?: string;
  readonly password?: string;
  readonly port?: number;
  readonly serverName?: string;
  readonly serviceAccessRole?: string;
  readonly sslMode?: string;
  readonly tags?: { [key: string]: string };
  readonly username?: string;
  /** elasticsearch_settings block */
  readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings[];
  /** kafka_settings block */
  readonly kafkaSettings?: DmsEndpointKafkaSettings[];
  /** kinesis_settings block */
  readonly kinesisSettings?: DmsEndpointKinesisSettings[];
  /** mongodb_settings block */
  readonly mongodbSettings?: DmsEndpointMongodbSettings[];
  /** s3_settings block */
  readonly s3Settings?: DmsEndpointS3Settings[];
}
export interface DmsEndpointElasticsearchSettings {
  readonly endpointUri: string;
  readonly errorRetryDuration?: number;
  readonly fullLoadErrorPercentage?: number;
  readonly serviceAccessRoleArn: string;
}
export interface DmsEndpointKafkaSettings {
  readonly broker: string;
  readonly topic?: string;
}
export interface DmsEndpointKinesisSettings {
  readonly messageFormat?: string;
  readonly serviceAccessRoleArn?: string;
  readonly streamArn?: string;
}
export interface DmsEndpointMongodbSettings {
  readonly authMechanism?: string;
  readonly authSource?: string;
  readonly authType?: string;
  readonly docsToInvestigate?: string;
  readonly extractDocId?: string;
  readonly nestingLevel?: string;
}
export interface DmsEndpointS3Settings {
  readonly bucketFolder?: string;
  readonly bucketName?: string;
  readonly compressionType?: string;
  readonly csvDelimiter?: string;
  readonly csvRowDelimiter?: string;
  readonly externalTableDefinition?: string;
  readonly serviceAccessRoleArn?: string;
}

// Resource

export class DmsEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DmsEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateArn = config.certificateArn;
    this._databaseName = config.databaseName;
    this._endpointId = config.endpointId;
    this._endpointType = config.endpointType;
    this._engineName = config.engineName;
    this._extraConnectionAttributes = config.extraConnectionAttributes;
    this._kmsKeyArn = config.kmsKeyArn;
    this._password = config.password;
    this._port = config.port;
    this._serverName = config.serverName;
    this._serviceAccessRole = config.serviceAccessRole;
    this._sslMode = config.sslMode;
    this._tags = config.tags;
    this._username = config.username;
    this._elasticsearchSettings = config.elasticsearchSettings;
    this._kafkaSettings = config.kafkaSettings;
    this._kinesisSettings = config.kinesisSettings;
    this._mongodbSettings = config.mongodbSettings;
    this._s3Settings = config.s3Settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this._certificateArn ?? this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string | undefined) {
    this._certificateArn = value;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string | undefined) {
    this._databaseName = value;
  }

  // endpoint_arn - computed: true, optional: false, required: true
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId: string;
  public get endpointId() {
    return this._endpointId;
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType: string;
  public get endpointType() {
    return this._endpointType;
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName: string;
  public get engineName() {
    return this._engineName;
  }
  public set engineName(value: string) {
    this._engineName = value;
  }

  // extra_connection_attributes - computed: true, optional: true, required: false
  private _extraConnectionAttributes?: string;
  public get extraConnectionAttributes() {
    return this._extraConnectionAttributes ?? this.getStringAttribute('extra_connection_attributes');
  }
  public set extraConnectionAttributes(value: string | undefined) {
    this._extraConnectionAttributes = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn ?? this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string | undefined) {
    this._serverName = value;
  }

  // service_access_role - computed: false, optional: true, required: false
  private _serviceAccessRole?: string;
  public get serviceAccessRole() {
    return this._serviceAccessRole;
  }
  public set serviceAccessRole(value: string | undefined) {
    this._serviceAccessRole = value;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string;
  public get sslMode() {
    return this._sslMode ?? this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string | undefined) {
    this._sslMode = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string;
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }

  // elasticsearch_settings - computed: false, optional: true, required: false
  private _elasticsearchSettings?: DmsEndpointElasticsearchSettings[];
  public get elasticsearchSettings() {
    return this._elasticsearchSettings;
  }
  public set elasticsearchSettings(value: DmsEndpointElasticsearchSettings[] | undefined) {
    this._elasticsearchSettings = value;
  }

  // kafka_settings - computed: false, optional: true, required: false
  private _kafkaSettings?: DmsEndpointKafkaSettings[];
  public get kafkaSettings() {
    return this._kafkaSettings;
  }
  public set kafkaSettings(value: DmsEndpointKafkaSettings[] | undefined) {
    this._kafkaSettings = value;
  }

  // kinesis_settings - computed: false, optional: true, required: false
  private _kinesisSettings?: DmsEndpointKinesisSettings[];
  public get kinesisSettings() {
    return this._kinesisSettings;
  }
  public set kinesisSettings(value: DmsEndpointKinesisSettings[] | undefined) {
    this._kinesisSettings = value;
  }

  // mongodb_settings - computed: false, optional: true, required: false
  private _mongodbSettings?: DmsEndpointMongodbSettings[];
  public get mongodbSettings() {
    return this._mongodbSettings;
  }
  public set mongodbSettings(value: DmsEndpointMongodbSettings[] | undefined) {
    this._mongodbSettings = value;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings?: DmsEndpointS3Settings[];
  public get s3Settings() {
    return this._s3Settings;
  }
  public set s3Settings(value: DmsEndpointS3Settings[] | undefined) {
    this._s3Settings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: this._certificateArn,
      database_name: this._databaseName,
      endpoint_id: this._endpointId,
      endpoint_type: this._endpointType,
      engine_name: this._engineName,
      extra_connection_attributes: this._extraConnectionAttributes,
      kms_key_arn: this._kmsKeyArn,
      password: this._password,
      port: this._port,
      server_name: this._serverName,
      service_access_role: this._serviceAccessRole,
      ssl_mode: this._sslMode,
      tags: this._tags,
      username: this._username,
      elasticsearch_settings: this._elasticsearchSettings,
      kafka_settings: this._kafkaSettings,
      kinesis_settings: this._kinesisSettings,
      mongodb_settings: this._mongodbSettings,
      s3_settings: this._s3Settings,
    };
  }
}
