// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS QuickSight
*/
export interface QuicksightGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group#aws_account_id QuicksightGroup#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group#description QuicksightGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group#group_name QuicksightGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group#namespace QuicksightGroup#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group aws_quicksight_group}
*/
export class QuicksightGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_quicksight_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group aws_quicksight_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightGroupConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsAccountId = config.awsAccountId;
    this._description = config.description;
    this._groupName = config.groupName;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      description: cdktf.stringToTerraform(this._description),
      group_name: cdktf.stringToTerraform(this._groupName),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
