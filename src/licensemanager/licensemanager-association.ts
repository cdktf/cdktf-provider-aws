// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS License Manager
*/
export interface LicensemanagerAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association#license_configuration_arn LicensemanagerAssociation#license_configuration_arn}
  */
  readonly licenseConfigurationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association#resource_arn LicensemanagerAssociation#resource_arn}
  */
  readonly resourceArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association aws_licensemanager_association}
*/
export class LicensemanagerAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_licensemanager_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association aws_licensemanager_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_licensemanager_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._licenseConfigurationArn = config.licenseConfigurationArn;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_configuration_arn - computed: false, optional: false, required: true
  private _licenseConfigurationArn?: string; 
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnInput() {
    return this._licenseConfigurationArn;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      license_configuration_arn: cdktf.stringToTerraform(this._licenseConfigurationArn),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
    };
  }
}
