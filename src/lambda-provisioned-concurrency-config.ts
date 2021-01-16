// https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
  readonly functionName: string;
  readonly provisionedConcurrentExecutions: number;
  readonly qualifier: string;
  /** timeouts block */
  readonly timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
}
export interface LambdaProvisionedConcurrencyConfigTimeouts {
  readonly create?: string;
  readonly update?: string;
}

function lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(struct?: LambdaProvisionedConcurrencyConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LambdaProvisionedConcurrencyConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_provisioned_concurrency_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionName = config.functionName;
    this._provisionedConcurrentExecutions = config.provisionedConcurrentExecutions;
    this._qualifier = config.qualifier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provisioned_concurrent_executions - computed: false, optional: false, required: true
  private _provisionedConcurrentExecutions: number;
  public get provisionedConcurrentExecutions() {
    return this.getNumberAttribute('provisioned_concurrent_executions');
  }
  public set provisionedConcurrentExecutions(value: number) {
    this._provisionedConcurrentExecutions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrentExecutionsInput() {
    return this._provisionedConcurrentExecutions
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier: string;
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LambdaProvisionedConcurrencyConfigTimeouts ) {
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
      function_name: cdktf.stringToTerraform(this._functionName),
      provisioned_concurrent_executions: cdktf.numberToTerraform(this._provisionedConcurrentExecutions),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      timeouts: lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
