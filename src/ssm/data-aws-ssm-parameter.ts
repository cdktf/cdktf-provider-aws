// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface DataAwsSsmParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#name DataAwsSsmParameter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#with_decryption DataAwsSsmParameter#with_decryption}
  */
  readonly withDecryption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter}
*/
export class DataAwsSsmParameter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_parameter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsmParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsmParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_parameter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._withDecryption = config.withDecryption;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // with_decryption - computed: false, optional: true, required: false
  private _withDecryption?: boolean | cdktf.IResolvable; 
  public get withDecryption() {
    return this.getBooleanAttribute('with_decryption') as any;
  }
  public set withDecryption(value: boolean | cdktf.IResolvable) {
    this._withDecryption = value;
  }
  public resetWithDecryption() {
    this._withDecryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDecryptionInput() {
    return this._withDecryption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      with_decryption: cdktf.booleanToTerraform(this._withDecryption),
    };
  }
}
