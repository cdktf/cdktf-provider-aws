// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeCommit
*/
export namespace CodeCommit {
  export interface CodecommitApprovalRuleTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html#content CodecommitApprovalRuleTemplate#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html#description CodecommitApprovalRuleTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html#name CodecommitApprovalRuleTemplate#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template}
  */
  export class CodecommitApprovalRuleTemplate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codecommit_approval_rule_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitApprovalRuleTemplateConfig
    */
    public constructor(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codecommit_approval_rule_template',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._content = config.content;
      this._description = config.description;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // approval_rule_template_id - computed: true, optional: false, required: false
    public get approvalRuleTemplateId() {
      return this.getStringAttribute('approval_rule_template_id');
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string) {
      this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified_date - computed: true, optional: false, required: false
    public get lastModifiedDate() {
      return this.getStringAttribute('last_modified_date');
    }

    // last_modified_user - computed: true, optional: false, required: false
    public get lastModifiedUser() {
      return this.getStringAttribute('last_modified_user');
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

    // rule_content_sha256 - computed: true, optional: false, required: false
    public get ruleContentSha256() {
      return this.getStringAttribute('rule_content_sha256');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        content: cdktf.stringToTerraform(this._content),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface CodecommitRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#default_branch CodecommitRepository#default_branch}
    */
    readonly defaultBranch?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#description CodecommitRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#repository_name CodecommitRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#tags CodecommitRepository#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#tags_all CodecommitRepository#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html aws_codecommit_repository}
  */
  export class CodecommitRepository extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codecommit_repository";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html aws_codecommit_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitRepositoryConfig
    */
    public constructor(scope: Construct, id: string, config: CodecommitRepositoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codecommit_repository',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultBranch = config.defaultBranch;
      this._description = config.description;
      this._repositoryName = config.repositoryName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // clone_url_http - computed: true, optional: false, required: false
    public get cloneUrlHttp() {
      return this.getStringAttribute('clone_url_http');
    }

    // clone_url_ssh - computed: true, optional: false, required: false
    public get cloneUrlSsh() {
      return this.getStringAttribute('clone_url_ssh');
    }

    // default_branch - computed: false, optional: true, required: false
    private _defaultBranch?: string | undefined; 
    public get defaultBranch() {
      return this.getStringAttribute('default_branch');
    }
    public set defaultBranch(value: string | undefined) {
      this._defaultBranch = value;
    }
    public resetDefaultBranch() {
      this._defaultBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBranchInput() {
      return this._defaultBranch
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // repository_id - computed: true, optional: false, required: false
    public get repositoryId() {
      return this.getStringAttribute('repository_id');
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName?: string; 
    public get repositoryName() {
      return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
      this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
      return this._repositoryName
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_branch: cdktf.stringToTerraform(this._defaultBranch),
        description: cdktf.stringToTerraform(this._description),
        repository_name: cdktf.stringToTerraform(this._repositoryName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CodecommitTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#repository_name CodecommitTrigger#repository_name}
    */
    readonly repositoryName: string;
    /**
    * trigger block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#trigger CodecommitTrigger#trigger}
    */
    readonly trigger: CodecommitTriggerTrigger[];
  }
  export interface CodecommitTriggerTrigger {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#branches CodecommitTrigger#branches}
    */
    readonly branches?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#custom_data CodecommitTrigger#custom_data}
    */
    readonly customData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#destination_arn CodecommitTrigger#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#events CodecommitTrigger#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html#name CodecommitTrigger#name}
    */
    readonly name: string;
  }

  function codecommitTriggerTriggerToTerraform(struct?: CodecommitTriggerTrigger): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      branches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.branches),
      custom_data: cdktf.stringToTerraform(struct!.customData),
      destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
      events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger}
  */
  export class CodecommitTrigger extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codecommit_trigger";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitTriggerConfig
    */
    public constructor(scope: Construct, id: string, config: CodecommitTriggerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codecommit_trigger',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._repositoryName = config.repositoryName;
      this._trigger = config.trigger;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration_id - computed: true, optional: false, required: false
    public get configurationId() {
      return this.getStringAttribute('configuration_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName?: string; 
    public get repositoryName() {
      return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
      this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
      return this._repositoryName
    }

    // trigger - computed: false, optional: false, required: true
    private _trigger?: CodecommitTriggerTrigger[]; 
    public get trigger() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('trigger') as any;
    }
    public set trigger(value: CodecommitTriggerTrigger[]) {
      this._trigger = value;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerInput() {
      return this._trigger
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        repository_name: cdktf.stringToTerraform(this._repositoryName),
        trigger: cdktf.listMapper(codecommitTriggerTriggerToTerraform)(this._trigger),
      };
    }
  }
  export interface DataAwsCodecommitApprovalRuleTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html#name DataAwsCodecommitApprovalRuleTemplate#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template}
  */
  export class DataAwsCodecommitApprovalRuleTemplate extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codecommit_approval_rule_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecommitApprovalRuleTemplateConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCodecommitApprovalRuleTemplateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codecommit_approval_rule_template',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // approval_rule_template_id - computed: true, optional: false, required: false
    public get approvalRuleTemplateId() {
      return this.getStringAttribute('approval_rule_template_id');
    }

    // content - computed: true, optional: false, required: false
    public get content() {
      return this.getStringAttribute('content');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified_date - computed: true, optional: false, required: false
    public get lastModifiedDate() {
      return this.getStringAttribute('last_modified_date');
    }

    // last_modified_user - computed: true, optional: false, required: false
    public get lastModifiedUser() {
      return this.getStringAttribute('last_modified_user');
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

    // rule_content_sha256 - computed: true, optional: false, required: false
    public get ruleContentSha256() {
      return this.getStringAttribute('rule_content_sha256');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsCodecommitRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html#repository_name DataAwsCodecommitRepository#repository_name}
    */
    readonly repositoryName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html aws_codecommit_repository}
  */
  export class DataAwsCodecommitRepository extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codecommit_repository";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html aws_codecommit_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecommitRepositoryConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCodecommitRepositoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codecommit_repository',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._repositoryName = config.repositoryName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // clone_url_http - computed: true, optional: false, required: false
    public get cloneUrlHttp() {
      return this.getStringAttribute('clone_url_http');
    }

    // clone_url_ssh - computed: true, optional: false, required: false
    public get cloneUrlSsh() {
      return this.getStringAttribute('clone_url_ssh');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // repository_id - computed: true, optional: false, required: false
    public get repositoryId() {
      return this.getStringAttribute('repository_id');
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName?: string; 
    public get repositoryName() {
      return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
      this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
      return this._repositoryName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        repository_name: cdktf.stringToTerraform(this._repositoryName),
      };
    }
  }
}
