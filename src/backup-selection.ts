// https://www.terraform.io/docs/providers/aws/r/backup_selection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupSelectionConfig extends cdktf.TerraformMetaArguments {
  readonly iamRoleArn: string;
  readonly name: string;
  readonly planId: string;
  readonly resources?: string[];
  /** selection_tag block */
  readonly selectionTag?: BackupSelectionSelectionTag[];
}
export interface BackupSelectionSelectionTag {
  readonly key: string;
  readonly type: string;
  readonly value: string;
}

function backupSelectionSelectionTagToTerraform(struct?: BackupSelectionSelectionTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class BackupSelection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupSelectionConfig) {
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
    this._iamRoleArn = config.iamRoleArn;
    this._name = config.name;
    this._planId = config.planId;
    this._resources = config.resources;
    this._selectionTag = config.selectionTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn: string;
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // resources - computed: false, optional: true, required: false
  private _resources?: string[];
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[] ) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // selection_tag - computed: false, optional: true, required: false
  private _selectionTag?: BackupSelectionSelectionTag[];
  public get selectionTag() {
    return this.interpolationForAttribute('selection_tag') as any;
  }
  public set selectionTag(value: BackupSelectionSelectionTag[] ) {
    this._selectionTag = value;
  }
  public resetSelectionTag() {
    this._selectionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTagInput() {
    return this._selectionTag
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      name: cdktf.stringToTerraform(this._name),
      plan_id: cdktf.stringToTerraform(this._planId),
      resources: cdktf.listMapper(cdktf.stringToTerraform)(this._resources),
      selection_tag: cdktf.listMapper(backupSelectionSelectionTagToTerraform)(this._selectionTag),
    };
  }
}
