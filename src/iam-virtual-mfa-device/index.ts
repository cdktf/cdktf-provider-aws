// https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamVirtualMfaDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}
  */
  readonly virtualMfaDeviceName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device aws_iam_virtual_mfa_device}
*/
export class IamVirtualMfaDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_virtual_mfa_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_virtual_mfa_device aws_iam_virtual_mfa_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamVirtualMfaDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: IamVirtualMfaDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_virtual_mfa_device',
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
    this._path = config.path;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualMfaDeviceName = config.virtualMfaDeviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_32_string_seed - computed: true, optional: false, required: false
  public get base32StringSeed() {
    return this.getStringAttribute('base_32_string_seed');
  }

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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // qr_code_png - computed: true, optional: false, required: false
  public get qrCodePng() {
    return this.getStringAttribute('qr_code_png');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // virtual_mfa_device_name - computed: false, optional: false, required: true
  private _virtualMfaDeviceName?: string; 
  public get virtualMfaDeviceName() {
    return this.getStringAttribute('virtual_mfa_device_name');
  }
  public set virtualMfaDeviceName(value: string) {
    this._virtualMfaDeviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMfaDeviceNameInput() {
    return this._virtualMfaDeviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      virtual_mfa_device_name: cdktf.stringToTerraform(this._virtualMfaDeviceName),
    };
  }
}
