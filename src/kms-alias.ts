// https://www.terraform.io/docs/providers/aws/r/kms_alias.html
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
      "name": {
        "type": "string",
        "optional": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "target_key_arn": {
        "type": "string",
        "computed": true
      },
      "target_key_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsAliasConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly targetKeyId: string;
}

// Resource

export class KmsAlias extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._targetKeyId = config.targetKeyId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // target_key_arn - computed: true, optional: false, required: true
  public get targetKeyArn() {
    return this.getStringAttribute('target_key_arn');
  }

  // target_key_id - computed: false, optional: false, required: true
  private _targetKeyId: string;
  public get targetKeyId() {
    return this._targetKeyId;
  }
  public set targetKeyId(value: string) {
    this._targetKeyId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      name_prefix: this._namePrefix,
      target_key_id: this._targetKeyId,
    };
  }
}
