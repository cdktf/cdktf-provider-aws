// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/ses_active_receipt_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesActiveReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/ses_active_receipt_rule_set#id SesActiveReceiptRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/ses_active_receipt_rule_set#rule_set_name SesActiveReceiptRuleSet#rule_set_name}
  */
  readonly ruleSetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/ses_active_receipt_rule_set aws_ses_active_receipt_rule_set}
*/
export class SesActiveReceiptRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ses_active_receipt_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SesActiveReceiptRuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesActiveReceiptRuleSet to import
  * @param importFromId The id of the existing SesActiveReceiptRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/ses_active_receipt_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesActiveReceiptRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ses_active_receipt_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/ses_active_receipt_rule_set aws_ses_active_receipt_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesActiveReceiptRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: SesActiveReceiptRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_active_receipt_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
        providerVersionConstraint: '~> 5.0'
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
    this._ruleSetName = config.ruleSetName;
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

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_set_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
