// https://www.terraform.io/docs/providers/aws/r/data_aws_secretsmanager_secret_rotation.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
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
      "secret_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsSecretsmanagerSecretRotationConfig extends TerraformMetaArguments {
  readonly secretId: string;
}
export class DataAwsSecretsmanagerSecretRotationRotationRules extends ComplexComputedList {

  // automatically_after_days - computed: true, optional: false, required: true
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }
}

// Resource

export class DataAwsSecretsmanagerSecretRotation extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_rotation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secretId = config.secretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
    return new DataAwsSecretsmanagerSecretRotationRotationRules(this, 'rotation_rules', index);
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_id: this._secretId,
    };
  }
}
