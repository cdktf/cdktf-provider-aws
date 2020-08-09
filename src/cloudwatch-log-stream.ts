// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "log_group_name": {
        "type": "string",
        "required": true
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchLogStreamConfig extends TerraformMetaArguments {
  readonly logGroupName: string;
  readonly name: string;
}

// Resource

export class CloudwatchLogStream extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logGroupName = config.logGroupName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName: string;
  public get logGroupName() {
    return this._logGroupName;
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
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
      log_group_name: this._logGroupName,
      name: this._name,
    };
  }
}
