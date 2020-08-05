// https://www.terraform.io/docs/providers/aws/r/data_aws_secretsmanager_secret.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "policy": {
        "type": "string",
        "computed": true
      },
      "rotation_enabled": {
        "type": "bool",
        "computed": true
      },
      "rotation_lambda_arn": {
        "type": "string",
        "computed": true
      },
      "rotation_rules": {
        "type": [
          "list",
          [
            "object",
            {
              "automatically_after_days": "number"
            }
          ]
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsSecretsmanagerSecretConfig extends TerraformMetaArguments {
  readonly name?: string;
}
export class DataAwsSecretsmanagerSecretRotationRules extends ComplexComputedList {

  // automatically_after_days - computed: true, optional: false, required: true
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }
}

// Resource

export class DataAwsSecretsmanagerSecret extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // policy - computed: true, optional: false, required: true
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // rotation_enabled - computed: true, optional: false, required: true
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: true, optional: false, required: true
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }

  // rotation_rules - computed: true, optional: false, required: true
  public rotationRules(index: string) {
    return new DataAwsSecretsmanagerSecretRotationRules(this, 'rotation_rules', index);
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
