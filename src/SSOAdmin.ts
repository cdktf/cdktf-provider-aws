// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SSO Admin
*/
export namespace SSOAdmin {
  export interface SsoadminAccountAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#instance_arn SsoadminAccountAssignment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#permission_set_arn SsoadminAccountAssignment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#principal_id SsoadminAccountAssignment#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#principal_type SsoadminAccountAssignment#principal_type}
    */
    readonly principalType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#target_id SsoadminAccountAssignment#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#target_type SsoadminAccountAssignment#target_type}
    */
    readonly targetType?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html aws_ssoadmin_account_assignment}
  */
  export class SsoadminAccountAssignment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssoadmin_account_assignment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html aws_ssoadmin_account_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminAccountAssignmentConfig
    */
    public constructor(scope: Construct, id: string, config: SsoadminAccountAssignmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssoadmin_account_assignment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceArn = config.instanceArn;
      this._permissionSetArn = config.permissionSetArn;
      this._principalId = config.principalId;
      this._principalType = config.principalType;
      this._targetId = config.targetId;
      this._targetType = config.targetType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
      return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
      this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
      return this._instanceArn
    }

    // permission_set_arn - computed: false, optional: false, required: true
    private _permissionSetArn?: string; 
    public get permissionSetArn() {
      return this.getStringAttribute('permission_set_arn');
    }
    public set permissionSetArn(value: string) {
      this._permissionSetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionSetArnInput() {
      return this._permissionSetArn
    }

    // principal_id - computed: false, optional: false, required: true
    private _principalId?: string; 
    public get principalId() {
      return this.getStringAttribute('principal_id');
    }
    public set principalId(value: string) {
      this._principalId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalIdInput() {
      return this._principalId
    }

    // principal_type - computed: false, optional: false, required: true
    private _principalType?: string; 
    public get principalType() {
      return this.getStringAttribute('principal_type');
    }
    public set principalType(value: string) {
      this._principalType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalTypeInput() {
      return this._principalType
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId?: string; 
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // target_type - computed: false, optional: true, required: false
    private _targetType?: string | undefined; 
    public get targetType() {
      return this.getStringAttribute('target_type');
    }
    public set targetType(value: string | undefined) {
      this._targetType = value;
    }
    public resetTargetType() {
      this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
      return this._targetType
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_arn: cdktf.stringToTerraform(this._instanceArn),
        permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
        principal_id: cdktf.stringToTerraform(this._principalId),
        principal_type: cdktf.stringToTerraform(this._principalType),
        target_id: cdktf.stringToTerraform(this._targetId),
        target_type: cdktf.stringToTerraform(this._targetType),
      };
    }
  }
  export interface SsoadminManagedPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html#instance_arn SsoadminManagedPolicyAttachment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html#managed_policy_arn SsoadminManagedPolicyAttachment#managed_policy_arn}
    */
    readonly managedPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html#permission_set_arn SsoadminManagedPolicyAttachment#permission_set_arn}
    */
    readonly permissionSetArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html aws_ssoadmin_managed_policy_attachment}
  */
  export class SsoadminManagedPolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssoadmin_managed_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html aws_ssoadmin_managed_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminManagedPolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: SsoadminManagedPolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssoadmin_managed_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceArn = config.instanceArn;
      this._managedPolicyArn = config.managedPolicyArn;
      this._permissionSetArn = config.permissionSetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
      return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
      this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
      return this._instanceArn
    }

    // managed_policy_arn - computed: false, optional: false, required: true
    private _managedPolicyArn?: string; 
    public get managedPolicyArn() {
      return this.getStringAttribute('managed_policy_arn');
    }
    public set managedPolicyArn(value: string) {
      this._managedPolicyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get managedPolicyArnInput() {
      return this._managedPolicyArn
    }

    // managed_policy_name - computed: true, optional: false, required: false
    public get managedPolicyName() {
      return this.getStringAttribute('managed_policy_name');
    }

    // permission_set_arn - computed: false, optional: false, required: true
    private _permissionSetArn?: string; 
    public get permissionSetArn() {
      return this.getStringAttribute('permission_set_arn');
    }
    public set permissionSetArn(value: string) {
      this._permissionSetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionSetArnInput() {
      return this._permissionSetArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_arn: cdktf.stringToTerraform(this._instanceArn),
        managed_policy_arn: cdktf.stringToTerraform(this._managedPolicyArn),
        permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
      };
    }
  }
  export interface SsoadminPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#description SsoadminPermissionSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#instance_arn SsoadminPermissionSet#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#name SsoadminPermissionSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#relay_state SsoadminPermissionSet#relay_state}
    */
    readonly relayState?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#session_duration SsoadminPermissionSet#session_duration}
    */
    readonly sessionDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#tags SsoadminPermissionSet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#tags_all SsoadminPermissionSet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html aws_ssoadmin_permission_set}
  */
  export class SsoadminPermissionSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssoadmin_permission_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html aws_ssoadmin_permission_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetConfig
    */
    public constructor(scope: Construct, id: string, config: SsoadminPermissionSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssoadmin_permission_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._instanceArn = config.instanceArn;
      this._name = config.name;
      this._relayState = config.relayState;
      this._sessionDuration = config.sessionDuration;
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

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
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

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
      return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
      this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
      return this._instanceArn
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

    // relay_state - computed: false, optional: true, required: false
    private _relayState?: string | undefined; 
    public get relayState() {
      return this.getStringAttribute('relay_state');
    }
    public set relayState(value: string | undefined) {
      this._relayState = value;
    }
    public resetRelayState() {
      this._relayState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relayStateInput() {
      return this._relayState
    }

    // session_duration - computed: false, optional: true, required: false
    private _sessionDuration?: string | undefined; 
    public get sessionDuration() {
      return this.getStringAttribute('session_duration');
    }
    public set sessionDuration(value: string | undefined) {
      this._sessionDuration = value;
    }
    public resetSessionDuration() {
      this._sessionDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionDurationInput() {
      return this._sessionDuration
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
        description: cdktf.stringToTerraform(this._description),
        instance_arn: cdktf.stringToTerraform(this._instanceArn),
        name: cdktf.stringToTerraform(this._name),
        relay_state: cdktf.stringToTerraform(this._relayState),
        session_duration: cdktf.stringToTerraform(this._sessionDuration),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SsoadminPermissionSetInlinePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}
    */
    readonly inlinePolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}
    */
    readonly permissionSetArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html aws_ssoadmin_permission_set_inline_policy}
  */
  export class SsoadminPermissionSetInlinePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssoadmin_permission_set_inline_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html aws_ssoadmin_permission_set_inline_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetInlinePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: SsoadminPermissionSetInlinePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssoadmin_permission_set_inline_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._inlinePolicy = config.inlinePolicy;
      this._instanceArn = config.instanceArn;
      this._permissionSetArn = config.permissionSetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // inline_policy - computed: false, optional: false, required: true
    private _inlinePolicy?: string; 
    public get inlinePolicy() {
      return this.getStringAttribute('inline_policy');
    }
    public set inlinePolicy(value: string) {
      this._inlinePolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inlinePolicyInput() {
      return this._inlinePolicy
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
      return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
      this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
      return this._instanceArn
    }

    // permission_set_arn - computed: false, optional: false, required: true
    private _permissionSetArn?: string; 
    public get permissionSetArn() {
      return this.getStringAttribute('permission_set_arn');
    }
    public set permissionSetArn(value: string) {
      this._permissionSetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionSetArnInput() {
      return this._permissionSetArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        inline_policy: cdktf.stringToTerraform(this._inlinePolicy),
        instance_arn: cdktf.stringToTerraform(this._instanceArn),
        permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
      };
    }
  }
  export interface DataAwsSsoadminInstancesConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_instances.html aws_ssoadmin_instances}
  */
  export class DataAwsSsoadminInstances extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssoadmin_instances";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_instances.html aws_ssoadmin_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminInstancesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsSsoadminInstancesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_ssoadmin_instances',
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

    // identity_store_ids - computed: true, optional: false, required: false
    public get identityStoreIds() {
      return this.getListAttribute('identity_store_ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsSsoadminPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html#instance_arn DataAwsSsoadminPermissionSet#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html#name DataAwsSsoadminPermissionSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html#tags DataAwsSsoadminPermissionSet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html aws_ssoadmin_permission_set}
  */
  export class DataAwsSsoadminPermissionSet extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ssoadmin_permission_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html aws_ssoadmin_permission_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminPermissionSetConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSsoadminPermissionSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ssoadmin_permission_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceArn = config.instanceArn;
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
      return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
      this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
      return this._instanceArn
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // relay_state - computed: true, optional: false, required: false
    public get relayState() {
      return this.getStringAttribute('relay_state');
    }

    // session_duration - computed: true, optional: false, required: false
    public get sessionDuration() {
      return this.getStringAttribute('session_duration');
    }

    // tags - computed: true, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_arn: cdktf.stringToTerraform(this._instanceArn),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
