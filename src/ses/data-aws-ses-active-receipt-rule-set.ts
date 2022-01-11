// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface DataAwsSesActiveReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ses_active_receipt_rule_set aws_ses_active_receipt_rule_set}
*/
export class DataAwsSesActiveReceiptRuleSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_active_receipt_rule_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ses_active_receipt_rule_set aws_ses_active_receipt_rule_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSesActiveReceiptRuleSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSesActiveReceiptRuleSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_active_receipt_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // rule_set_name - computed: true, optional: false, required: false
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
