// https://www.terraform.io/docs/providers/aws/r/data_aws_secretsmanager_secret_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "secret_binary": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "secret_id": {
        "type": "string",
        "required": true
      },
      "secret_string": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "version_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "version_stage": {
        "type": "string",
        "optional": true
      },
      "version_stages": {
        "type": [
          "set",
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

// Configuration

export interface DataAwsSecretsmanagerSecretVersionConfig extends TerraformMetaArguments {
  readonly secretId: string;
  readonly versionId?: string;
  readonly versionStage?: string;
}

// Resource

export class DataAwsSecretsmanagerSecretVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secretId = config.secretId;
    this._versionId = config.versionId;
    this._versionStage = config.versionStage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // secret_binary - computed: true, optional: false, required: true
  public get secretBinary() {
    return this.getStringAttribute('secret_binary');
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // secret_string - computed: true, optional: false, required: true
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this._versionId ?? this.getStringAttribute('version_id');
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string;
  public get versionStage() {
    return this._versionStage;
  }
  public set versionStage(value: string | undefined) {
    this._versionStage = value;
  }

  // version_stages - computed: true, optional: false, required: true
  public get versionStages() {
    return this.getListAttribute('version_stages');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_id: this._secretId,
      version_id: this._versionId,
      version_stage: this._versionStage,
    };
  }
}
