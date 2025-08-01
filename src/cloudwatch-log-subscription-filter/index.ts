/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogSubscriptionFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}
  */
  readonly distribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}
  */
  readonly filterPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#region CloudwatchLogSubscriptionFilter#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}
  */
  readonly roleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter aws_cloudwatch_log_subscription_filter}
*/
export class CloudwatchLogSubscriptionFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_subscription_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchLogSubscriptionFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogSubscriptionFilter to import
  * @param importFromId The id of the existing CloudwatchLogSubscriptionFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogSubscriptionFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_subscription_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cloudwatch_log_subscription_filter aws_cloudwatch_log_subscription_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogSubscriptionFilterConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogSubscriptionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_subscription_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.7.0',
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
    this._destinationArn = config.destinationArn;
    this._distribution = config.distribution;
    this._filterPattern = config.filterPattern;
    this._id = config.id;
    this._logGroupName = config.logGroupName;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // filter_pattern - computed: false, optional: false, required: true
  private _filterPattern?: string; 
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }
  public set filterPattern(value: string) {
    this._filterPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPatternInput() {
    return this._filterPattern;
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

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_arn: cdktf.stringToTerraform(this._destinationArn),
      distribution: cdktf.stringToTerraform(this._distribution),
      filter_pattern: cdktf.stringToTerraform(this._filterPattern),
      id: cdktf.stringToTerraform(this._id),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_arn: {
        value: cdktf.stringToHclTerraform(this._destinationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution: {
        value: cdktf.stringToHclTerraform(this._distribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_pattern: {
        value: cdktf.stringToHclTerraform(this._filterPattern),
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
      log_group_name: {
        value: cdktf.stringToHclTerraform(this._logGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
