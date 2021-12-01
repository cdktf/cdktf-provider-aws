// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface KmsAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#name KmsAlias#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#name_prefix KmsAlias#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#target_key_id KmsAlias#target_key_id}
  */
  readonly targetKeyId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias}
*/
export class KmsAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsAliasConfig
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // target_key_arn - computed: true, optional: false, required: false
  public get targetKeyArn() {
    return this.getStringAttribute('target_key_arn');
  }

  // target_key_id - computed: false, optional: false, required: true
  private _targetKeyId?: string; 
  public get targetKeyId() {
    return this.getStringAttribute('target_key_id');
  }
  public set targetKeyId(value: string) {
    this._targetKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKeyIdInput() {
    return this._targetKeyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      target_key_id: cdktf.stringToTerraform(this._targetKeyId),
    };
  }
}
