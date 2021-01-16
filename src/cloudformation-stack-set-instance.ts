// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly parameterOverrides?: { [key: string]: string };
  readonly region?: string;
  readonly retainStack?: boolean;
  readonly stackSetName: string;
  /** timeouts block */
  readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudformationStackSetInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_set_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._parameterOverrides = config.parameterOverrides;
    this._region = config.region;
    this._retainStack = config.retainStack;
    this._stackSetName = config.stackSetName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides?: { [key: string]: string };
  public get parameterOverrides() {
    return this.interpolationForAttribute('parameter_overrides') as any;
  }
  public set parameterOverrides(value: { [key: string]: string } ) {
    this._parameterOverrides = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // retain_stack - computed: false, optional: true, required: false
  private _retainStack?: boolean;
  public get retainStack() {
    return this.getBooleanAttribute('retain_stack');
  }
  public set retainStack(value: boolean ) {
    this._retainStack = value;
  }
  public resetRetainStack() {
    this._retainStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStackInput() {
    return this._retainStack
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_set_name - computed: false, optional: false, required: true
  private _stackSetName: string;
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackSetInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudformationStackSetInstanceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      parameter_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameterOverrides),
      region: cdktf.stringToTerraform(this._region),
      retain_stack: cdktf.booleanToTerraform(this._retainStack),
      stack_set_name: cdktf.stringToTerraform(this._stackSetName),
      timeouts: cloudformationStackSetInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
