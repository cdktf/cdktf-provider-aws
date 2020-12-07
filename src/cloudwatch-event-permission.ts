// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventPermissionConfig extends cdktf.TerraformMetaArguments {
  readonly action?: string;
  readonly principal: string;
  readonly statementId: string;
  /** condition block */
  readonly condition?: CloudwatchEventPermissionCondition[];
}
export interface CloudwatchEventPermissionCondition {
  readonly key: string;
  readonly type: string;
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


// Resource

export class CloudwatchEventPermission extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      principal: cdktf.stringToTerraform(this._principal),
      statement_id: cdktf.stringToTerraform(this._statementId),
      condition: cdktf.listMapper(cloudwatchEventPermissionConditionToTerraform)(this._condition),
    };
  }
}
