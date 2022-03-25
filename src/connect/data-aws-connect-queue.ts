// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface DataAwsConnectQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_queue#instance_id DataAwsConnectQueue#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_queue#name DataAwsConnectQueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_queue#queue_id DataAwsConnectQueue#queue_id}
  */
  readonly queueId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_queue#tags DataAwsConnectQueue#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class DataAwsConnectQueueOutboundCallerConfig extends cdktf.ComplexComputedList {

  // outbound_caller_id_name - computed: true, optional: false, required: false
  public get outboundCallerIdName() {
    return this.getStringAttribute('outbound_caller_id_name');
  }

  // outbound_caller_id_number_id - computed: true, optional: false, required: false
  public get outboundCallerIdNumberId() {
    return this.getStringAttribute('outbound_caller_id_number_id');
  }

  // outbound_flow_id - computed: true, optional: false, required: false
  public get outboundFlowId() {
    return this.getStringAttribute('outbound_flow_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_queue aws_connect_queue}
*/
export class DataAwsConnectQueue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_queue";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_queue aws_connect_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_queue',
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
    this._queueId = config.queueId;
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

  // hours_of_operation_id - computed: true, optional: false, required: false
  public get hoursOfOperationId() {
    return this.getStringAttribute('hours_of_operation_id');
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

  // max_contacts - computed: true, optional: false, required: false
  public get maxContacts() {
    return this.getNumberAttribute('max_contacts');
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

  // outbound_caller_config - computed: true, optional: false, required: false
  public outboundCallerConfig(index: string) {
    return new DataAwsConnectQueueOutboundCallerConfig(this, 'outbound_caller_config', index, false);
  }

  // queue_id - computed: true, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      queue_id: cdktf.stringToTerraform(this._queueId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
