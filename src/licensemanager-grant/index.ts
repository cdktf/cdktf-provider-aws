// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed operations for the grant. This is a subset of the allowed operations on the license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant#allowed_operations LicensemanagerGrant#allowed_operations}
  */
  readonly allowedOperations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant#id LicensemanagerGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * License ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant#license_arn LicensemanagerGrant#license_arn}
  */
  readonly licenseArn: string;
  /**
  * Name of the grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant#name LicensemanagerGrant#name}
  */
  readonly name: string;
  /**
  * The grantee principal ARN. The target account for the grant in the form of the ARN for an account principal of the root user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant#principal LicensemanagerGrant#principal}
  */
  readonly principal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant aws_licensemanager_grant}
*/
export class LicensemanagerGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_licensemanager_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicensemanagerGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensemanagerGrant to import
  * @param importFromId The id of the existing LicensemanagerGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensemanagerGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_licensemanager_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/licensemanager_grant aws_licensemanager_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerGrantConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_licensemanager_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedOperations = config.allowedOperations;
    this._id = config.id;
    this._licenseArn = config.licenseArn;
    this._name = config.name;
    this._principal = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_operations - computed: false, optional: false, required: true
  private _allowedOperations?: string[]; 
  public get allowedOperations() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operations'));
  }
  public set allowedOperations(value: string[]) {
    this._allowedOperations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOperationsInput() {
    return this._allowedOperations;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // license_arn - computed: false, optional: false, required: true
  private _licenseArn?: string; 
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }
  public set licenseArn(value: string) {
    this._licenseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseArnInput() {
    return this._licenseArn;
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

  // parent_arn - computed: true, optional: false, required: false
  public get parentArn() {
    return this.getStringAttribute('parent_arn');
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
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
      allowed_operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOperations),
      id: cdktf.stringToTerraform(this._id),
      license_arn: cdktf.stringToTerraform(this._licenseArn),
      name: cdktf.stringToTerraform(this._name),
      principal: cdktf.stringToTerraform(this._principal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_operations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOperations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_arn: {
        value: cdktf.stringToHclTerraform(this._licenseArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
