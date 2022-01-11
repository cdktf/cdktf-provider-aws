// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface EbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key#key_arn EbsDefaultKmsKey#key_arn}
  */
  readonly keyArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key aws_ebs_default_kms_key}
*/
export class EbsDefaultKmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ebs_default_kms_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key aws_ebs_default_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsDefaultKmsKeyConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_arn - computed: false, optional: false, required: true
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_arn: cdktf.stringToTerraform(this._keyArn),
    };
  }
}
