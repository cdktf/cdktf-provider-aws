// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFormation
*/
export interface DataAwsCloudformationStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack#name DataAwsCloudformationStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack#tags DataAwsCloudformationStack#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack aws_cloudformation_stack}
*/
export class DataAwsCloudformationStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudformation_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack aws_cloudformation_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudformationStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudformationStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_rollback - computed: true, optional: false, required: false
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notification_arns - computed: true, optional: false, required: false
  public get notificationArns() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_arns'));
  }

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: false, required: false
  public parameters(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'parameters').lookup(key);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_body - computed: true, optional: false, required: false
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // timeout_in_minutes - computed: true, optional: false, required: false
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
