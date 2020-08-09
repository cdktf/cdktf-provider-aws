// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_alias.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "function_name": {
        "type": "string",
        "required": true
      },
      "function_version": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invoke_arn": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsLambdaAliasConfig extends TerraformMetaArguments {
  readonly functionName: string;
  readonly name: string;
}

// Resource

export class DataAwsLambdaAlias extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLambdaAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionName = config.functionName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // function_version - computed: true, optional: false, required: true
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invoke_arn - computed: true, optional: false, required: true
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: this._functionName,
      name: this._name,
    };
  }
}
