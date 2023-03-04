// https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftserverlessUsageLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#amount RedshiftserverlessUsageLimit#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#breach_action RedshiftserverlessUsageLimit#breach_action}
  */
  readonly breachAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#id RedshiftserverlessUsageLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#period RedshiftserverlessUsageLimit#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#resource_arn RedshiftserverlessUsageLimit#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit#usage_type RedshiftserverlessUsageLimit#usage_type}
  */
  readonly usageType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit aws_redshiftserverless_usage_limit}
*/
export class RedshiftserverlessUsageLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshiftserverless_usage_limit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_usage_limit aws_redshiftserverless_usage_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftserverlessUsageLimitConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftserverlessUsageLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshiftserverless_usage_limit',
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
    this._amount = config.amount;
    this._breachAction = config.breachAction;
    this._id = config.id;
    this._period = config.period;
    this._resourceArn = config.resourceArn;
    this._usageType = config.usageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // breach_action - computed: false, optional: true, required: false
  private _breachAction?: string; 
  public get breachAction() {
    return this.getStringAttribute('breach_action');
  }
  public set breachAction(value: string) {
    this._breachAction = value;
  }
  public resetBreachAction() {
    this._breachAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breachActionInput() {
    return this._breachAction;
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

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // usage_type - computed: false, optional: false, required: true
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount: cdktf.numberToTerraform(this._amount),
      breach_action: cdktf.stringToTerraform(this._breachAction),
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.stringToTerraform(this._period),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      usage_type: cdktf.stringToTerraform(this._usageType),
    };
  }
}
