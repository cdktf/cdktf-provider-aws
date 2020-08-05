// https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "standards_arn": {
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

export interface SecurityhubStandardsSubscriptionConfig extends TerraformMetaArguments {
  readonly standardsArn: string;
}

// Resource

export class SecurityhubStandardsSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityhubStandardsSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_standards_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._standardsArn = config.standardsArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // standards_arn - computed: false, optional: false, required: true
  private _standardsArn: string;
  public get standardsArn() {
    return this._standardsArn;
  }
  public set standardsArn(value: string) {
    this._standardsArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      standards_arn: this._standardsArn,
    };
  }
}
