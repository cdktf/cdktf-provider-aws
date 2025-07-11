/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftUsageLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}
  */
  readonly breachAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}
  */
  readonly featureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#id RedshiftUsageLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}
  */
  readonly limitType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}
  */
  readonly period?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#region RedshiftUsageLimit#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit aws_redshift_usage_limit}
*/
export class RedshiftUsageLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_usage_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftUsageLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftUsageLimit to import
  * @param importFromId The id of the existing RedshiftUsageLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftUsageLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_usage_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/redshift_usage_limit aws_redshift_usage_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftUsageLimitConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftUsageLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_usage_limit',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
        providerVersionConstraint: '~> 6.0'
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
    this._clusterIdentifier = config.clusterIdentifier;
    this._featureType = config.featureType;
    this._id = config.id;
    this._limitType = config.limitType;
    this._period = config.period;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // feature_type - computed: false, optional: false, required: true
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
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

  // limit_type - computed: false, optional: false, required: true
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount: cdktf.numberToTerraform(this._amount),
      breach_action: cdktf.stringToTerraform(this._breachAction),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      feature_type: cdktf.stringToTerraform(this._featureType),
      id: cdktf.stringToTerraform(this._id),
      limit_type: cdktf.stringToTerraform(this._limitType),
      period: cdktf.stringToTerraform(this._period),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      breach_action: {
        value: cdktf.stringToHclTerraform(this._breachAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_type: {
        value: cdktf.stringToHclTerraform(this._featureType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_type: {
        value: cdktf.stringToHclTerraform(this._limitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
