// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogSubscriptionFilterConfig extends cdktf.TerraformMetaArguments {
  readonly destinationArn: string;
  readonly distribution?: string;
  readonly filterPattern: string;
  readonly logGroupName: string;
  readonly name: string;
  readonly roleArn?: string;
}

// Resource

export class CloudwatchLogSubscriptionFilter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogSubscriptionFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_subscription_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationArn = config.destinationArn;
    this._distribution = config.distribution;
    this._filterPattern = config.filterPattern;
    this._logGroupName = config.logGroupName;
    this._name = config.name;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn: string;
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string;
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string ) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution
  }

  // filter_pattern - computed: false, optional: false, required: true
  private _filterPattern: string;
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }
  public set filterPattern(value: string) {
    this._filterPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPatternInput() {
    return this._filterPattern
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName: string;
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_arn: cdktf.stringToTerraform(this._destinationArn),
      distribution: cdktf.stringToTerraform(this._distribution),
      filter_pattern: cdktf.stringToTerraform(this._filterPattern),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
