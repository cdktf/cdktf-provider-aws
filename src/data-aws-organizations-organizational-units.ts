// https://www.terraform.io/docs/providers/aws/r/data_aws_organizations_organizational_units.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOrganizationsOrganizationalUnitsConfig extends cdktf.TerraformMetaArguments {
  readonly parentId: string;
}
export class DataAwsOrganizationsOrganizationalUnitsChildren extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

// Resource

export class DataAwsOrganizationsOrganizationalUnits extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_organizational_units',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: true, optional: false, required: false
  public children(index: string) {
    return new DataAwsOrganizationsOrganizationalUnitsChildren(this, 'children', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId: string;
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_id: cdktf.stringToTerraform(this._parentId),
    };
  }
}
