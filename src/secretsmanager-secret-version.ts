// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html
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
        "optional": true,
        "sensitive": true
      },
      "secret_id": {
        "type": "string",
        "required": true
      },
      "secret_string": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "version_id": {
        "type": "string",
        "computed": true
      },
      "version_stages": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretsmanagerSecretVersionConfig extends TerraformMetaArguments {
  readonly secretBinary?: string;
  readonly secretId: string;
  readonly secretString?: string;
  readonly versionStages?: string[];
}

// Resource

export class SecretsmanagerSecretVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig) {
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
    this._secretBinary = config.secretBinary;
    this._secretId = config.secretId;
    this._secretString = config.secretString;
    this._versionStages = config.versionStages;
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

  // secret_binary - computed: false, optional: true, required: false
  private _secretBinary?: string;
  public get secretBinary() {
    return this._secretBinary;
  }
  public set secretBinary(value: string | undefined) {
    this._secretBinary = value;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string;
  public get secretString() {
    return this._secretString;
  }
  public set secretString(value: string | undefined) {
    this._secretString = value;
  }

  // version_id - computed: true, optional: false, required: true
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_stages - computed: true, optional: true, required: false
  private _versionStages?: string[];
  public get versionStages() {
    return this._versionStages ?? this.getListAttribute('version_stages');
  }
  public set versionStages(value: string[] | undefined) {
    this._versionStages = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_binary: this._secretBinary,
      secret_id: this._secretId,
      secret_string: this._secretString,
      version_stages: this._versionStages,
    };
  }
}
