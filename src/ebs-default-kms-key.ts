// https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html
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
      "key_arn": {
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

export interface EbsDefaultKmsKeyConfig extends TerraformMetaArguments {
  readonly keyArn: string;
}

// Resource

export class EbsDefaultKmsKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EbsDefaultKmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_default_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyArn = config.keyArn;
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

  // key_arn - computed: false, optional: false, required: true
  private _keyArn: string;
  public get keyArn() {
    return this._keyArn;
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_arn: this._keyArn,
    };
  }
}
