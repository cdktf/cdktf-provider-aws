// https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubProductSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly productArn: string;
}

// Resource

export class SecurityhubProductSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityhubProductSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_product_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._productArn = config.productArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // product_arn - computed: false, optional: false, required: true
  private _productArn: string;
  public get productArn() {
    return this.getStringAttribute('product_arn');
  }
  public set productArn(value: string) {
    this._productArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      product_arn: cdktf.stringToTerraform(this._productArn),
    };
  }
}
