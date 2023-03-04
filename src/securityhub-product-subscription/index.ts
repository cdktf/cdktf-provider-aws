// https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubProductSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription#id SecurityhubProductSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription#product_arn SecurityhubProductSubscription#product_arn}
  */
  readonly productArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription aws_securityhub_product_subscription}
*/
export class SecurityhubProductSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_product_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription aws_securityhub_product_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubProductSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubProductSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_product_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // product_arn - computed: false, optional: false, required: true
  private _productArn?: string; 
  public get productArn() {
    return this.getStringAttribute('product_arn');
  }
  public set productArn(value: string) {
    this._productArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      product_arn: cdktf.stringToTerraform(this._productArn),
    };
  }
}
