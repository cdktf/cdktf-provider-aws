// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface DataAwsConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#instance_id DataAwsConnectQuickConnect#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#name DataAwsConnectQuickConnect#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#quick_connect_id DataAwsConnectQuickConnect#quick_connect_id}
  */
  readonly quickConnectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect#tags DataAwsConnectQuickConnect#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig extends cdktf.ComplexComputedList {

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}
export class DataAwsConnectQuickConnectQuickConnectConfigQueueConfig extends cdktf.ComplexComputedList {

  // contact_flow_id - computed: true, optional: false, required: false
  public get contactFlowId() {
    return this.getStringAttribute('contact_flow_id');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
}
export class DataAwsConnectQuickConnectQuickConnectConfigUserConfig extends cdktf.ComplexComputedList {

  // contact_flow_id - computed: true, optional: false, required: false
  public get contactFlowId() {
    return this.getStringAttribute('contact_flow_id');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export class DataAwsConnectQuickConnectQuickConnectConfig extends cdktf.ComplexComputedList {

  // phone_config - computed: true, optional: false, required: false
  public get phoneConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('phone_config');
  }

  // queue_config - computed: true, optional: false, required: false
  public get queueConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('queue_config');
  }

  // quick_connect_type - computed: true, optional: false, required: false
  public get quickConnectType() {
    return this.getStringAttribute('quick_connect_type');
  }

  // user_config - computed: true, optional: false, required: false
  public get userConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_config');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect aws_connect_quick_connect}
*/
export class DataAwsConnectQuickConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_quick_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_quick_connect aws_connect_quick_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectQuickConnectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectQuickConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_quick_connect',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._quickConnectId = config.quickConnectId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // quick_connect_config - computed: true, optional: false, required: false
  public quickConnectConfig(index: string) {
    return new DataAwsConnectQuickConnectQuickConnectConfig(this, 'quick_connect_config', index, false);
  }

  // quick_connect_id - computed: true, optional: true, required: false
  private _quickConnectId?: string; 
  public get quickConnectId() {
    return this.getStringAttribute('quick_connect_id');
  }
  public set quickConnectId(value: string) {
    this._quickConnectId = value;
  }
  public resetQuickConnectId() {
    this._quickConnectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectIdInput() {
    return this._quickConnectId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      quick_connect_id: cdktf.stringToTerraform(this._quickConnectId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
