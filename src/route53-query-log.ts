// https://www.terraform.io/docs/providers/aws/r/route53_query_log.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cloudwatch_log_group_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "zone_id": {
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

export interface Route53QueryLogConfig extends TerraformMetaArguments {
  readonly cloudwatchLogGroupArn: string;
  readonly zoneId: string;
}

// Resource

export class Route53QueryLog extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53QueryLogConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_query_log',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_log_group_arn - computed: false, optional: false, required: true
  private _cloudwatchLogGroupArn: string;
  public get cloudwatchLogGroupArn() {
    return this._cloudwatchLogGroupArn;
  }
  public set cloudwatchLogGroupArn(value: string) {
    this._cloudwatchLogGroupArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId: string;
  public get zoneId() {
    return this._zoneId;
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_log_group_arn: this._cloudwatchLogGroupArn,
      zone_id: this._zoneId,
    };
  }
}
