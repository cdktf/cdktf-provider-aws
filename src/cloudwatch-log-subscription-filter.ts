// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "destination_arn": {
        "type": "string",
        "required": true
      },
      "distribution": {
        "type": "string",
        "optional": true
      },
      "filter_pattern": {
        "type": "string",
        "required": true
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
      },
      "role_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchLogSubscriptionFilterConfig extends TerraformMetaArguments {
  readonly destinationArn: string;
  readonly distribution?: string;
  readonly filterPattern: string;
  readonly logGroupName: string;
  readonly name: string;
  readonly roleArn?: string;
}

// Resource

export class CloudwatchLogSubscriptionFilter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogSubscriptionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_subscription_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationArn = config.destinationArn;
    this._distribution = config.distribution;
    this._filterPattern = config.filterPattern;
    this._logGroupName = config.logGroupName;
    this._name = config.name;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn: string;
  public get destinationArn() {
    return this._destinationArn;
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string;
  public get distribution() {
    return this._distribution;
  }
  public set distribution(value: string | undefined) {
    this._distribution = value;
  }

  // filter_pattern - computed: false, optional: false, required: true
  private _filterPattern: string;
  public get filterPattern() {
    return this._filterPattern;
  }
  public set filterPattern(value: string) {
    this._filterPattern = value;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn ?? this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_arn: this._destinationArn,
      distribution: this._distribution,
      filter_pattern: this._filterPattern,
      log_group_name: this._logGroupName,
      name: this._name,
      role_arn: this._roleArn,
    };
  }
}
