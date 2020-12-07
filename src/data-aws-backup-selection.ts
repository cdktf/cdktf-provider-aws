// https://www.terraform.io/docs/providers/aws/r/data_aws_backup_selection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBackupSelectionConfig extends cdktf.TerraformMetaArguments {
  readonly planId: string;
  readonly selectionId: string;
}

// Resource

export class DataAwsBackupSelection extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsBackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_selection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._planId = config.planId;
    this._selectionId = config.selectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan_id - computed: false, optional: false, required: true
  private _planId: string;
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // selection_id - computed: false, optional: false, required: true
  private _selectionId: string;
  public get selectionId() {
    return this.getStringAttribute('selection_id');
  }
  public set selectionId(value: string) {
    this._selectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionIdInput() {
    return this._selectionId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      plan_id: cdktf.stringToTerraform(this._planId),
      selection_id: cdktf.stringToTerraform(this._selectionId),
    };
  }
}
