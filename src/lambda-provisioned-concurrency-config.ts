// https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html
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
      "provisioned_concurrent_executions": {
        "type": "number",
        "required": true
      },
      "qualifier": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LambdaProvisionedConcurrencyConfigConfig extends TerraformMetaArguments {
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

// Resource

export class LambdaProvisionedConcurrencyConfig extends TerraformResource {

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

  // provisioned_concurrent_executions - computed: false, optional: false, required: true
  private _provisionedConcurrentExecutions: number;
  public get provisionedConcurrentExecutions() {
    return this._provisionedConcurrentExecutions;
  }
  public set provisionedConcurrentExecutions(value: number) {
    this._provisionedConcurrentExecutions = value;
  }

  // qualifier - computed: false, optional: false, required: true
  private _qualifier: string;
  public get qualifier() {
    return this._qualifier;
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LambdaProvisionedConcurrencyConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: this._functionName,
      provisioned_concurrent_executions: this._provisionedConcurrentExecutions,
      qualifier: this._qualifier,
      timeouts: this._timeouts,
    };
  }
}
