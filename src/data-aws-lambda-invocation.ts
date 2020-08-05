// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_invocation.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "function_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "input": {
        "type": "string",
        "required": true
      },
      "qualifier": {
        "type": "string",
        "optional": true
      },
      "result": {
        "type": "string",
        "computed": true
      },
      "result_map": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsLambdaInvocationConfig extends TerraformMetaArguments {
  readonly functionName: string;
  readonly input: string;
  readonly qualifier?: string;
}

// Resource

export class DataAwsLambdaInvocation extends TerraformDataSource {

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
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input - computed: false, optional: false, required: true
  private _input: string;
  public get input() {
    return this._input;
  }
  public set input(value: string) {
    this._input = value;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this._qualifier;
  }
  public set qualifier(value: string | undefined) {
    this._qualifier = value;
  }

  // result - computed: true, optional: false, required: true
  public get result() {
    return this.getStringAttribute('result');
  }

  // result_map - computed: true, optional: false, required: true
  public resultMap(key: string): string {
    return new StringMap(this, 'result_map').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: this._functionName,
      input: this._input,
      qualifier: this._qualifier,
    };
  }
}
