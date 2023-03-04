// https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key#id EbsDefaultKmsKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  public static readonly tfResourceType = "aws_ebs_default_kms_key";

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
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._keyArn = config.keyArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      id: cdktf.stringToTerraform(this._id),
      key_arn: cdktf.stringToTerraform(this._keyArn),
    };
  }
}
