// https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbInstanceRoleAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly dbInstanceIdentifier: string;
  readonly featureName: string;
  readonly roleArn: string;
}

// Resource

export class DbInstanceRoleAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbInstanceRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_instance_role_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._featureName = config.featureName;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier: string;
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName: string;
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
      feature_name: cdktf.stringToTerraform(this._featureName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
