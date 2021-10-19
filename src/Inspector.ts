// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Inspector
*/
export namespace Inspector {
  export interface InspectorAssessmentTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html#name InspectorAssessmentTarget#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html#resource_group_arn InspectorAssessmentTarget#resource_group_arn}
    */
    readonly resourceGroupArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html aws_inspector_assessment_target}
  */
  export class InspectorAssessmentTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_inspector_assessment_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html aws_inspector_assessment_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTargetConfig
    */
    public constructor(scope: Construct, id: string, config: InspectorAssessmentTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_inspector_assessment_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._resourceGroupArn = config.resourceGroupArn;
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
      return this._name
    }

    // resource_group_arn - computed: false, optional: true, required: false
    private _resourceGroupArn?: string | undefined; 
    public get resourceGroupArn() {
      return this.getStringAttribute('resource_group_arn');
    }
    public set resourceGroupArn(value: string | undefined) {
      this._resourceGroupArn = value;
    }
    public resetResourceGroupArn() {
      this._resourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceGroupArnInput() {
      return this._resourceGroupArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        resource_group_arn: cdktf.stringToTerraform(this._resourceGroupArn),
      };
    }
  }
  export interface InspectorAssessmentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#duration InspectorAssessmentTemplate#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#name InspectorAssessmentTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}
    */
    readonly rulesPackageArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#tags InspectorAssessmentTemplate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#tags_all InspectorAssessmentTemplate#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#target_arn InspectorAssessmentTemplate#target_arn}
    */
    readonly targetArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template}
  */
  export class InspectorAssessmentTemplate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_inspector_assessment_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTemplateConfig
    */
    public constructor(scope: Construct, id: string, config: InspectorAssessmentTemplateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_inspector_assessment_template',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._duration = config.duration;
      this._name = config.name;
      this._rulesPackageArns = config.rulesPackageArns;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetArn = config.targetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // duration - computed: false, optional: false, required: true
    private _duration?: number; 
    public get duration() {
      return this.getNumberAttribute('duration');
    }
    public set duration(value: number) {
      this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
      return this._duration
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // rules_package_arns - computed: false, optional: false, required: true
    private _rulesPackageArns?: string[]; 
    public get rulesPackageArns() {
      return this.getListAttribute('rules_package_arns');
    }
    public set rulesPackageArns(value: string[]) {
      this._rulesPackageArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesPackageArnsInput() {
      return this._rulesPackageArns
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // target_arn - computed: false, optional: false, required: true
    private _targetArn?: string; 
    public get targetArn() {
      return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
      this._targetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
      return this._targetArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        duration: cdktf.numberToTerraform(this._duration),
        name: cdktf.stringToTerraform(this._name),
        rules_package_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._rulesPackageArns),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_arn: cdktf.stringToTerraform(this._targetArn),
      };
    }
  }
  export interface InspectorResourceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html#tags InspectorResourceGroup#tags}
    */
    readonly tags: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html aws_inspector_resource_group}
  */
  export class InspectorResourceGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_inspector_resource_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_resource_group.html aws_inspector_resource_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorResourceGroupConfig
    */
    public constructor(scope: Construct, id: string, config: InspectorResourceGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_inspector_resource_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
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

    // tags - computed: false, optional: false, required: true
    private _tags?: { [key: string]: string } | cdktf.IResolvable; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tags = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsInspectorRulesPackagesConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html aws_inspector_rules_packages}
  */
  export class DataAwsInspectorRulesPackages extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_inspector_rules_packages";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html aws_inspector_rules_packages} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInspectorRulesPackagesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsInspectorRulesPackagesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_inspector_rules_packages',
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

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
}
