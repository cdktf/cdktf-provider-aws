// https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html
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
      "license_configuration_arn": {
        "type": "string",
        "required": true
      },
      "resource_arn": {
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

export interface LicensemanagerAssociationConfig extends TerraformMetaArguments {
  readonly licenseConfigurationArn: string;
  readonly resourceArn: string;
}

// Resource

export class LicensemanagerAssociation extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // license_configuration_arn - computed: false, optional: false, required: true
  private _licenseConfigurationArn: string;
  public get licenseConfigurationArn() {
    return this._licenseConfigurationArn;
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this._resourceArn;
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      license_configuration_arn: this._licenseConfigurationArn,
      resource_arn: this._resourceArn,
    };
  }
}
