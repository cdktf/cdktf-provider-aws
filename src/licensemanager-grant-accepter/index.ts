// https://www.terraform.io/docs/providers/aws/r/licensemanager_grant_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerGrantAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Amazon Resource Name (ARN) of the grant.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant_accepter#grant_arn LicensemanagerGrantAccepter#grant_arn}
  */
  readonly grantArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant_accepter#id LicensemanagerGrantAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant_accepter aws_licensemanager_grant_accepter}
*/
export class LicensemanagerGrantAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_licensemanager_grant_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_grant_accepter aws_licensemanager_grant_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerGrantAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerGrantAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_licensemanager_grant_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._grantArn = config.grantArn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_operations - computed: true, optional: false, required: false
  public get allowedOperations() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operations'));
  }

  // grant_arn - computed: false, optional: false, required: true
  private _grantArn?: string; 
  public get grantArn() {
    return this.getStringAttribute('grant_arn');
  }
  public set grantArn(value: string) {
    this._grantArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantArnInput() {
    return this._grantArn;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // license_arn - computed: true, optional: false, required: false
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_arn - computed: true, optional: false, required: false
  public get parentArn() {
    return this.getStringAttribute('parent_arn');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_arn: cdktf.stringToTerraform(this._grantArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
