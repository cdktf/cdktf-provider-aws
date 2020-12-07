// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_invocation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLambdaInvocationConfig extends cdktf.TerraformMetaArguments {
  readonly functionName: string;
  readonly input: string;
  readonly qualifier?: string;
}

// Resource

export class DataAwsLambdaInvocation extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLambdaInvocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_invocation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionName = config.functionName;
    this._input = config.input;
    this._qualifier = config.qualifier;
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

  // input - computed: false, optional: false, required: true
  private _input: string;
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string ) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // result_map - computed: true, optional: false, required: false
  public resultMap(key: string): string {
    return new cdktf.StringMap(this, 'result_map').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      input: cdktf.stringToTerraform(this._input),
      qualifier: cdktf.stringToTerraform(this._qualifier),
    };
  }
}
