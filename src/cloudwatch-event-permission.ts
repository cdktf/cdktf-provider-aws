// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#action CloudwatchEventPermission#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#event_bus_name CloudwatchEventPermission#event_bus_name}
  */
  readonly eventBusName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#principal CloudwatchEventPermission#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#statement_id CloudwatchEventPermission#statement_id}
  */
  readonly statementId: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#condition CloudwatchEventPermission#condition}
  */
  readonly condition?: CloudwatchEventPermissionCondition[];
}
export interface CloudwatchEventPermissionCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#key CloudwatchEventPermission#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#type CloudwatchEventPermission#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#value CloudwatchEventPermission#value}
  */
  readonly value: string;
}

function cloudwatchEventPermissionConditionToTerraform(struct?: CloudwatchEventPermissionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission}
*/
export class CloudwatchEventPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_event_permission";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._eventBusName = config.eventBusName;
    this._principal = config.principal;
    this._statementId = config.statementId;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string ) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // event_bus_name - computed: false, optional: true, required: false
  private _eventBusName?: string;
  public get eventBusName() {
    return this.getStringAttribute('event_bus_name');
  }
  public set eventBusName(value: string ) {
    this._eventBusName = value;
  }
  public resetEventBusName() {
    this._eventBusName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusNameInput() {
    return this._eventBusName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal
  }

  // statement_id - computed: false, optional: false, required: true
  private _statementId: string;
  public get statementId() {
    return this.getStringAttribute('statement_id');
  }
  public set statementId(value: string) {
    this._statementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdInput() {
    return this._statementId
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: CloudwatchEventPermissionCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: CloudwatchEventPermissionCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      event_bus_name: cdktf.stringToTerraform(this._eventBusName),
      principal: cdktf.stringToTerraform(this._principal),
      statement_id: cdktf.stringToTerraform(this._statementId),
      condition: cdktf.listMapper(cloudwatchEventPermissionConditionToTerraform)(this._condition),
    };
  }
}
