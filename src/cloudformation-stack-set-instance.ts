// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "parameter_overrides": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "retain_stack": {
        "type": "bool",
        "optional": true
      },
      "stack_id": {
        "type": "string",
        "computed": true
      },
      "stack_set_name": {
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
            "delete": {
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

export interface CloudformationStackSetInstanceConfig extends TerraformMetaArguments {
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

// Resource

export class CloudformationStackSetInstance extends TerraformResource {

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
    return this._accountId ?? this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides?: { [key: string]: string };
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public set parameterOverrides(value: { [key: string]: string } | undefined) {
    this._parameterOverrides = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // retain_stack - computed: false, optional: true, required: false
  private _retainStack?: boolean;
  public get retainStack() {
    return this._retainStack;
  }
  public set retainStack(value: boolean | undefined) {
    this._retainStack = value;
  }

  // stack_id - computed: true, optional: false, required: true
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_set_name - computed: false, optional: false, required: true
  private _stackSetName: string;
  public get stackSetName() {
    return this._stackSetName;
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackSetInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudformationStackSetInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      parameter_overrides: this._parameterOverrides,
      region: this._region,
      retain_stack: this._retainStack,
      stack_set_name: this._stackSetName,
      timeouts: this._timeouts,
    };
  }
}
