// https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubStandardsSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly standardsArn: string;
}

// Resource

export class SecurityhubStandardsSubscription extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // standards_arn - computed: false, optional: false, required: true
  private _standardsArn: string;
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }
  public set standardsArn(value: string) {
    this._standardsArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsArnInput() {
    return this._standardsArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      standards_arn: cdktf.stringToTerraform(this._standardsArn),
    };
  }
}
