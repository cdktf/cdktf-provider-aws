// https://www.terraform.io/docs/providers/aws/d/backup_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBackupSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection#id DataAwsBackupSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection#plan_id DataAwsBackupSelection#plan_id}
  */
  readonly planId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_selection#selection_id DataAwsBackupSelection#selection_id}
  */
  readonly selectionId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_selection aws_backup_selection}
*/
export class DataAwsBackupSelection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_selection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_selection aws_backup_selection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBackupSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBackupSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_selection',
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan_id - computed: false, optional: false, required: true
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }

  // selection_id - computed: false, optional: false, required: true
  private _selectionId?: string; 
  public get selectionId() {
    return this.getStringAttribute('selection_id');
  }
  public set selectionId(value: string) {
    this._selectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionIdInput() {
    return this._selectionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      plan_id: cdktf.stringToTerraform(this._planId),
      selection_id: cdktf.stringToTerraform(this._selectionId),
    };
  }
}
