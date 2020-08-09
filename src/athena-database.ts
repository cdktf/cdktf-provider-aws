// https://www.terraform.io/docs/providers/aws/r/athena_database.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "force_destroy": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "encryption_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "encryption_option": {
              "type": "string",
              "required": true
            },
            "kms_key": {
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

export interface AthenaDatabaseConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly forceDestroy?: boolean;
  readonly name: string;
  /** encryption_configuration block */
  readonly encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration[];
}
export interface AthenaDatabaseEncryptionConfiguration {
  readonly encryptionOption: string;
  readonly kmsKey?: string;
}

// Resource

export class AthenaDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AthenaDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_database',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._encryptionConfiguration = config.encryptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public set encryptionConfiguration(value: AthenaDatabaseEncryptionConfiguration[] | undefined) {
    this._encryptionConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      force_destroy: this._forceDestroy,
      name: this._name,
      encryption_configuration: this._encryptionConfiguration,
    };
  }
}
