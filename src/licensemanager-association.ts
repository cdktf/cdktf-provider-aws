// https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly licenseConfigurationArn: string;
  readonly resourceArn: string;
}

// Resource

export class LicensemanagerAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _licenseConfigurationArn: string;
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnInput() {
    return this._licenseConfigurationArn
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
