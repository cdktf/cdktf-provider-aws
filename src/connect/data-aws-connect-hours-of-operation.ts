// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface DataAwsConnectHoursOfOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation.html#hours_of_operation_id DataAwsConnectHoursOfOperation#hours_of_operation_id}
  */
  readonly hoursOfOperationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation.html#instance_id DataAwsConnectHoursOfOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation.html#name DataAwsConnectHoursOfOperation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation.html#tags DataAwsConnectHoursOfOperation#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsConnectHoursOfOperationConfigEndTime extends cdktf.ComplexComputedList {

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export class DataAwsConnectHoursOfOperationConfigStartTime extends cdktf.ComplexComputedList {

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export class DataAwsConnectHoursOfOperationConfigA extends cdktf.ComplexComputedList {

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('end_time') as any;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('start_time') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation.html aws_connect_hours_of_operation}
*/
export class DataAwsConnectHoursOfOperation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_hours_of_operation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation.html aws_connect_hours_of_operation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectHoursOfOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectHoursOfOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_hours_of_operation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hoursOfOperationId = config.hoursOfOperationId;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  public config(index: string) {
    return new DataAwsConnectHoursOfOperationConfigA(this, 'config', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hours_of_operation_arn - computed: true, optional: false, required: false
  public get hoursOfOperationArn() {
    return this.getStringAttribute('hours_of_operation_arn');
  }

  // hours_of_operation_id - computed: true, optional: true, required: false
  private _hoursOfOperationId?: string; 
  public get hoursOfOperationId() {
    return this.getStringAttribute('hours_of_operation_id');
  }
  public set hoursOfOperationId(value: string) {
    this._hoursOfOperationId = value;
  }
  public resetHoursOfOperationId() {
    this._hoursOfOperationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfOperationIdInput() {
    return this._hoursOfOperationId;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hours_of_operation_id: cdktf.stringToTerraform(this._hoursOfOperationId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
