// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeBuild
*/
export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#branch_filter CodebuildWebhook#branch_filter}
  */
  readonly branchFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#build_type CodebuildWebhook#build_type}
  */
  readonly buildType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#project_name CodebuildWebhook#project_name}
  */
  readonly projectName: string;
  /**
  * filter_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter_group CodebuildWebhook#filter_group}
  */
  readonly filterGroup?: CodebuildWebhookFilterGroup[];
}
export interface CodebuildWebhookFilterGroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}
  */
  readonly excludeMatchedPattern?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#pattern CodebuildWebhook#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#type CodebuildWebhook#type}
  */
  readonly type: string;
}

export function codebuildWebhookFilterGroupFilterToTerraform(struct?: CodebuildWebhookFilterGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_matched_pattern: cdktf.booleanToTerraform(struct!.excludeMatchedPattern),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CodebuildWebhookFilterGroup {
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter CodebuildWebhook#filter}
  */
  readonly filter?: CodebuildWebhookFilterGroupFilter[];
}

export function codebuildWebhookFilterGroupToTerraform(struct?: CodebuildWebhookFilterGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform)(struct!.filter),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}
*/
export class CodebuildWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codebuild_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: CodebuildWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_webhook',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branchFilter = config.branchFilter;
    this._buildType = config.buildType;
    this._projectName = config.projectName;
    this._filterGroup = config.filterGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_filter - computed: false, optional: true, required: false
  private _branchFilter?: string; 
  public get branchFilter() {
    return this.getStringAttribute('branch_filter');
  }
  public set branchFilter(value: string) {
    this._branchFilter = value;
  }
  public resetBranchFilter() {
    this._branchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter;
  }

  // build_type - computed: false, optional: true, required: false
  private _buildType?: string; 
  public get buildType() {
    return this.getStringAttribute('build_type');
  }
  public set buildType(value: string) {
    this._buildType = value;
  }
  public resetBuildType() {
    this._buildType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTypeInput() {
    return this._buildType;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // payload_url - computed: true, optional: false, required: false
  public get payloadUrl() {
    return this.getStringAttribute('payload_url');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup?: CodebuildWebhookFilterGroup[]; 
  public get filterGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter_group') as any;
  }
  public set filterGroup(value: CodebuildWebhookFilterGroup[]) {
    this._filterGroup = value;
  }
  public resetFilterGroup() {
    this._filterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupInput() {
    return this._filterGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_filter: cdktf.stringToTerraform(this._branchFilter),
      build_type: cdktf.stringToTerraform(this._buildType),
      project_name: cdktf.stringToTerraform(this._projectName),
      filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform)(this._filterGroup),
    };
  }
}
