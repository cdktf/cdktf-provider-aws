// https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
  readonly clusterName: string;
  readonly fargateProfileName: string;
  readonly podExecutionRoleArn: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** selector block */
  readonly selector: EksFargateProfileSelector[];
  /** timeouts block */
  readonly timeouts?: EksFargateProfileTimeouts;
}
export interface EksFargateProfileSelector {
  readonly labels?: { [key: string]: string };
  readonly namespace: string;
}

function eksFargateProfileSelectorToTerraform(struct?: EksFargateProfileSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface EksFargateProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function eksFargateProfileTimeoutsToTerraform(struct?: EksFargateProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class EksFargateProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EksFargateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_fargate_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._fargateProfileName = config.fargateProfileName;
    this._podExecutionRoleArn = config.podExecutionRoleArn;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._selector = config.selector;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // fargate_profile_name - computed: false, optional: false, required: true
  private _fargateProfileName: string;
  public get fargateProfileName() {
    return this.getStringAttribute('fargate_profile_name');
  }
  public set fargateProfileName(value: string) {
    this._fargateProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fargateProfileNameInput() {
    return this._fargateProfileName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pod_execution_role_arn - computed: false, optional: false, required: true
  private _podExecutionRoleArn: string;
  public get podExecutionRoleArn() {
    return this.getStringAttribute('pod_execution_role_arn');
  }
  public set podExecutionRoleArn(value: string) {
    this._podExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podExecutionRoleArnInput() {
    return this._podExecutionRoleArn
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] ) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // selector - computed: false, optional: false, required: true
  private _selector: EksFargateProfileSelector[];
  public get selector() {
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: EksFargateProfileSelector[]) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksFargateProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EksFargateProfileTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      fargate_profile_name: cdktf.stringToTerraform(this._fargateProfileName),
      pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      selector: cdktf.listMapper(eksFargateProfileSelectorToTerraform)(this._selector),
      timeouts: eksFargateProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
