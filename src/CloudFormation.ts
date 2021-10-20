// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFormation
*/
export namespace CloudFormation {
  export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#capabilities CloudformationStack#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#disable_rollback CloudformationStack#disable_rollback}
    */
    readonly disableRollback?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#iam_role_arn CloudformationStack#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#name CloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#notification_arns CloudformationStack#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#on_failure CloudformationStack#on_failure}
    */
    readonly onFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#parameters CloudformationStack#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_body CloudformationStack#policy_body}
    */
    readonly policyBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_url CloudformationStack#policy_url}
    */
    readonly policyUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags CloudformationStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags_all CloudformationStack#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_body CloudformationStack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_url CloudformationStack#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeout_in_minutes CloudformationStack#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeouts CloudformationStack#timeouts}
    */
    readonly timeouts?: CloudformationStackTimeouts;
  }
  export interface CloudformationStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#create CloudformationStack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#delete CloudformationStack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#update CloudformationStack#update}
    */
    readonly update?: string;
  }

  function cloudformationStackTimeoutsToTerraform(struct?: CloudformationStackTimeoutsOutputReference | CloudformationStackTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class CloudformationStackTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack}
  */
  export class CloudformationStack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._capabilities = config.capabilities;
      this._disableRollback = config.disableRollback;
      this._iamRoleArn = config.iamRoleArn;
      this._name = config.name;
      this._notificationArns = config.notificationArns;
      this._onFailure = config.onFailure;
      this._parameters = config.parameters;
      this._policyBody = config.policyBody;
      this._policyUrl = config.policyUrl;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._templateBody = config.templateBody;
      this._templateUrl = config.templateUrl;
      this._timeoutInMinutes = config.timeoutInMinutes;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capabilities - computed: false, optional: true, required: false
    private _capabilities?: string[] | undefined; 
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[] | undefined) {
      this._capabilities = value;
    }
    public resetCapabilities() {
      this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
      return this._capabilities
    }

    // disable_rollback - computed: false, optional: true, required: false
    private _disableRollback?: boolean | cdktf.IResolvable | undefined; 
    public get disableRollback() {
      return this.getBooleanAttribute('disable_rollback') as any;
    }
    public set disableRollback(value: boolean | cdktf.IResolvable | undefined) {
      this._disableRollback = value;
    }
    public resetDisableRollback() {
      this._disableRollback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableRollbackInput() {
      return this._disableRollback
    }

    // iam_role_arn - computed: false, optional: true, required: false
    private _iamRoleArn?: string | undefined; 
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string | undefined) {
      this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
      this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
      return this._iamRoleArn
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

    // notification_arns - computed: false, optional: true, required: false
    private _notificationArns?: string[] | undefined; 
    public get notificationArns() {
      return this.getListAttribute('notification_arns');
    }
    public set notificationArns(value: string[] | undefined) {
      this._notificationArns = value;
    }
    public resetNotificationArns() {
      this._notificationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArnsInput() {
      return this._notificationArns
    }

    // on_failure - computed: false, optional: true, required: false
    private _onFailure?: string | undefined; 
    public get onFailure() {
      return this.getStringAttribute('on_failure');
    }
    public set onFailure(value: string | undefined) {
      this._onFailure = value;
    }
    public resetOnFailure() {
      this._onFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureInput() {
      return this._onFailure
    }

    // outputs - computed: true, optional: false, required: false
    public outputs(key: string): string {
      return new cdktf.StringMap(this, 'outputs').lookup(key);
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // policy_body - computed: true, optional: true, required: false
    private _policyBody?: string | undefined; 
    public get policyBody() {
      return this.getStringAttribute('policy_body');
    }
    public set policyBody(value: string | undefined) {
      this._policyBody = value;
    }
    public resetPolicyBody() {
      this._policyBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyBodyInput() {
      return this._policyBody
    }

    // policy_url - computed: false, optional: true, required: false
    private _policyUrl?: string | undefined; 
    public get policyUrl() {
      return this.getStringAttribute('policy_url');
    }
    public set policyUrl(value: string | undefined) {
      this._policyUrl = value;
    }
    public resetPolicyUrl() {
      this._policyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyUrlInput() {
      return this._policyUrl
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

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string | undefined; 
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string | undefined) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_url - computed: false, optional: true, required: false
    private _templateUrl?: string | undefined; 
    public get templateUrl() {
      return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string | undefined) {
      this._templateUrl = value;
    }
    public resetTemplateUrl() {
      this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
      return this._templateUrl
    }

    // timeout_in_minutes - computed: false, optional: true, required: false
    private _timeoutInMinutes?: number | undefined; 
    public get timeoutInMinutes() {
      return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number | undefined) {
      this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
      this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
      return this._timeoutInMinutes
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudformationStackTimeouts | undefined; 
    private __timeoutsOutput = new CloudformationStackTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: CloudformationStackTimeouts | undefined) {
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
        capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
        disable_rollback: cdktf.booleanToTerraform(this._disableRollback),
        iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
        name: cdktf.stringToTerraform(this._name),
        notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
        on_failure: cdktf.stringToTerraform(this._onFailure),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        policy_body: cdktf.stringToTerraform(this._policyBody),
        policy_url: cdktf.stringToTerraform(this._policyUrl),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_url: cdktf.stringToTerraform(this._templateUrl),
        timeout_in_minutes: cdktf.numberToTerraform(this._timeoutInMinutes),
        timeouts: cloudformationStackTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#administration_role_arn CloudformationStackSet#administration_role_arn}
    */
    readonly administrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#capabilities CloudformationStackSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#description CloudformationStackSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#execution_role_name CloudformationStackSet#execution_role_name}
    */
    readonly executionRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#name CloudformationStackSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#parameters CloudformationStackSet#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#permission_model CloudformationStackSet#permission_model}
    */
    readonly permissionModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags CloudformationStackSet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags_all CloudformationStackSet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_body CloudformationStackSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_url CloudformationStackSet#template_url}
    */
    readonly templateUrl?: string;
    /**
    * auto_deployment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#auto_deployment CloudformationStackSet#auto_deployment}
    */
    readonly autoDeployment?: CloudformationStackSetAutoDeployment;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#timeouts CloudformationStackSet#timeouts}
    */
    readonly timeouts?: CloudformationStackSetTimeouts;
  }
  export interface CloudformationStackSetAutoDeployment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#enabled CloudformationStackSet#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
    */
    readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
  }

  function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeploymentOutputReference | CloudformationStackSetAutoDeployment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
    }
  }

  export class CloudformationStackSetAutoDeploymentOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // retain_stacks_on_account_removal - computed: false, optional: true, required: false
    private _retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable | undefined; 
    public get retainStacksOnAccountRemoval() {
      return this.getBooleanAttribute('retain_stacks_on_account_removal') as any;
    }
    public set retainStacksOnAccountRemoval(value: boolean | cdktf.IResolvable | undefined) {
      this._retainStacksOnAccountRemoval = value;
    }
    public resetRetainStacksOnAccountRemoval() {
      this._retainStacksOnAccountRemoval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainStacksOnAccountRemovalInput() {
      return this._retainStacksOnAccountRemoval
    }
  }
  export interface CloudformationStackSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#update CloudformationStackSet#update}
    */
    readonly update?: string;
  }

  function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeoutsOutputReference | CloudformationStackSetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class CloudformationStackSetTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set}
  */
  export class CloudformationStackSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationStackSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._administrationRoleArn = config.administrationRoleArn;
      this._capabilities = config.capabilities;
      this._description = config.description;
      this._executionRoleName = config.executionRoleName;
      this._name = config.name;
      this._parameters = config.parameters;
      this._permissionModel = config.permissionModel;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._templateBody = config.templateBody;
      this._templateUrl = config.templateUrl;
      this._autoDeployment = config.autoDeployment;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // administration_role_arn - computed: false, optional: true, required: false
    private _administrationRoleArn?: string | undefined; 
    public get administrationRoleArn() {
      return this.getStringAttribute('administration_role_arn');
    }
    public set administrationRoleArn(value: string | undefined) {
      this._administrationRoleArn = value;
    }
    public resetAdministrationRoleArn() {
      this._administrationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get administrationRoleArnInput() {
      return this._administrationRoleArn
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capabilities - computed: false, optional: true, required: false
    private _capabilities?: string[] | undefined; 
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[] | undefined) {
      this._capabilities = value;
    }
    public resetCapabilities() {
      this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
      return this._capabilities
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

    // execution_role_name - computed: true, optional: true, required: false
    private _executionRoleName?: string | undefined; 
    public get executionRoleName() {
      return this.getStringAttribute('execution_role_name');
    }
    public set executionRoleName(value: string | undefined) {
      this._executionRoleName = value;
    }
    public resetExecutionRoleName() {
      this._executionRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleNameInput() {
      return this._executionRoleName
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

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // permission_model - computed: false, optional: true, required: false
    private _permissionModel?: string | undefined; 
    public get permissionModel() {
      return this.getStringAttribute('permission_model');
    }
    public set permissionModel(value: string | undefined) {
      this._permissionModel = value;
    }
    public resetPermissionModel() {
      this._permissionModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionModelInput() {
      return this._permissionModel
    }

    // stack_set_id - computed: true, optional: false, required: false
    public get stackSetId() {
      return this.getStringAttribute('stack_set_id');
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

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string | undefined; 
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string | undefined) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_url - computed: false, optional: true, required: false
    private _templateUrl?: string | undefined; 
    public get templateUrl() {
      return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string | undefined) {
      this._templateUrl = value;
    }
    public resetTemplateUrl() {
      this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
      return this._templateUrl
    }

    // auto_deployment - computed: false, optional: true, required: false
    private _autoDeployment?: CloudformationStackSetAutoDeployment | undefined; 
    private __autoDeploymentOutput = new CloudformationStackSetAutoDeploymentOutputReference(this as any, "auto_deployment", true);
    public get autoDeployment() {
      return this.__autoDeploymentOutput;
    }
    public putAutoDeployment(value: CloudformationStackSetAutoDeployment | undefined) {
      this._autoDeployment = value;
    }
    public resetAutoDeployment() {
      this._autoDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeploymentInput() {
      return this._autoDeployment
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudformationStackSetTimeouts | undefined; 
    private __timeoutsOutput = new CloudformationStackSetTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: CloudformationStackSetTimeouts | undefined) {
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
        administration_role_arn: cdktf.stringToTerraform(this._administrationRoleArn),
        capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
        description: cdktf.stringToTerraform(this._description),
        execution_role_name: cdktf.stringToTerraform(this._executionRoleName),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        permission_model: cdktf.stringToTerraform(this._permissionModel),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_url: cdktf.stringToTerraform(this._templateUrl),
        auto_deployment: cloudformationStackSetAutoDeploymentToTerraform(this._autoDeployment),
        timeouts: cloudformationStackSetTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#account_id CloudformationStackSetInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
    */
    readonly parameterOverrides?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#region CloudformationStackSetInstance#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#retain_stack CloudformationStackSetInstance#retain_stack}
    */
    readonly retainStack?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#stack_set_name CloudformationStackSetInstance#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * deployment_targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#deployment_targets CloudformationStackSetInstance#deployment_targets}
    */
    readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#timeouts CloudformationStackSetInstance#timeouts}
    */
    readonly timeouts?: CloudformationStackSetInstanceTimeouts;
  }
  export interface CloudformationStackSetInstanceDeploymentTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
  }

  function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnitIds),
    }
  }

  export class CloudformationStackSetInstanceDeploymentTargetsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // organizational_unit_ids - computed: false, optional: true, required: false
    private _organizationalUnitIds?: string[] | undefined; 
    public get organizationalUnitIds() {
      return this.getListAttribute('organizational_unit_ids');
    }
    public set organizationalUnitIds(value: string[] | undefined) {
      this._organizationalUnitIds = value;
    }
    public resetOrganizationalUnitIds() {
      this._organizationalUnitIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitIdsInput() {
      return this._organizationalUnitIds
    }
  }
  export interface CloudformationStackSetInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#create CloudformationStackSetInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#delete CloudformationStackSetInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#update CloudformationStackSetInstance#update}
    */
    readonly update?: string;
  }

  function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeoutsOutputReference | CloudformationStackSetInstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class CloudformationStackSetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance}
  */
  export class CloudformationStackSetInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack_set_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack_set_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._parameterOverrides = config.parameterOverrides;
      this._region = config.region;
      this._retainStack = config.retainStack;
      this._stackSetName = config.stackSetName;
      this._deploymentTargets = config.deploymentTargets;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string | undefined; 
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string | undefined) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // organizational_unit_id - computed: true, optional: false, required: false
    public get organizationalUnitId() {
      return this.getStringAttribute('organizational_unit_id');
    }

    // parameter_overrides - computed: false, optional: true, required: false
    private _parameterOverrides?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameterOverrides() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter_overrides') as any;
    }
    public set parameterOverrides(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._parameterOverrides = value;
    }
    public resetParameterOverrides() {
      this._parameterOverrides = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterOverridesInput() {
      return this._parameterOverrides
    }

    // region - computed: true, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // retain_stack - computed: false, optional: true, required: false
    private _retainStack?: boolean | cdktf.IResolvable | undefined; 
    public get retainStack() {
      return this.getBooleanAttribute('retain_stack') as any;
    }
    public set retainStack(value: boolean | cdktf.IResolvable | undefined) {
      this._retainStack = value;
    }
    public resetRetainStack() {
      this._retainStack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainStackInput() {
      return this._retainStack
    }

    // stack_id - computed: true, optional: false, required: false
    public get stackId() {
      return this.getStringAttribute('stack_id');
    }

    // stack_set_name - computed: false, optional: false, required: true
    private _stackSetName?: string; 
    public get stackSetName() {
      return this.getStringAttribute('stack_set_name');
    }
    public set stackSetName(value: string) {
      this._stackSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetNameInput() {
      return this._stackSetName
    }

    // deployment_targets - computed: false, optional: true, required: false
    private _deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets | undefined; 
    private __deploymentTargetsOutput = new CloudformationStackSetInstanceDeploymentTargetsOutputReference(this as any, "deployment_targets", true);
    public get deploymentTargets() {
      return this.__deploymentTargetsOutput;
    }
    public putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets | undefined) {
      this._deploymentTargets = value;
    }
    public resetDeploymentTargets() {
      this._deploymentTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTargetsInput() {
      return this._deploymentTargets
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudformationStackSetInstanceTimeouts | undefined; 
    private __timeoutsOutput = new CloudformationStackSetInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: CloudformationStackSetInstanceTimeouts | undefined) {
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
        account_id: cdktf.stringToTerraform(this._accountId),
        parameter_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameterOverrides),
        region: cdktf.stringToTerraform(this._region),
        retain_stack: cdktf.booleanToTerraform(this._retainStack),
        stack_set_name: cdktf.stringToTerraform(this._stackSetName),
        deployment_targets: cloudformationStackSetInstanceDeploymentTargetsToTerraform(this._deploymentTargets),
        timeouts: cloudformationStackSetInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#execution_role_arn CloudformationType#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#schema_handler_package CloudformationType#schema_handler_package}
    */
    readonly schemaHandlerPackage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type CloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type_name CloudformationType#type_name}
    */
    readonly typeName: string;
    /**
    * logging_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#logging_config CloudformationType#logging_config}
    */
    readonly loggingConfig?: CloudformationTypeLoggingConfig;
  }
  export interface CloudformationTypeLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_group_name CloudformationType#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_role_arn CloudformationType#log_role_arn}
    */
    readonly logRoleArn: string;
  }

  function cloudformationTypeLoggingConfigToTerraform(struct?: CloudformationTypeLoggingConfigOutputReference | CloudformationTypeLoggingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
    }
  }

  export class CloudformationTypeLoggingConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._logGroupName
    }

    // log_role_arn - computed: false, optional: false, required: true
    private _logRoleArn?: string; 
    public get logRoleArn() {
      return this.getStringAttribute('log_role_arn');
    }
    public set logRoleArn(value: string) {
      this._logRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logRoleArnInput() {
      return this._logRoleArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type}
  */
  export class CloudformationType extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._executionRoleArn = config.executionRoleArn;
      this._schemaHandlerPackage = config.schemaHandlerPackage;
      this._type = config.type;
      this._typeName = config.typeName;
      this._loggingConfig = config.loggingConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_version_id - computed: true, optional: false, required: false
    public get defaultVersionId() {
      return this.getStringAttribute('default_version_id');
    }

    // deprecated_status - computed: true, optional: false, required: false
    public get deprecatedStatus() {
      return this.getStringAttribute('deprecated_status');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // documentation_url - computed: true, optional: false, required: false
    public get documentationUrl() {
      return this.getStringAttribute('documentation_url');
    }

    // execution_role_arn - computed: false, optional: true, required: false
    private _executionRoleArn?: string | undefined; 
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string | undefined) {
      this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
      this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
      return this._executionRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_default_version - computed: true, optional: false, required: false
    public get isDefaultVersion() {
      return this.getBooleanAttribute('is_default_version') as any;
    }

    // provisioning_type - computed: true, optional: false, required: false
    public get provisioningType() {
      return this.getStringAttribute('provisioning_type');
    }

    // schema - computed: true, optional: false, required: false
    public get schema() {
      return this.getStringAttribute('schema');
    }

    // schema_handler_package - computed: false, optional: false, required: true
    private _schemaHandlerPackage?: string; 
    public get schemaHandlerPackage() {
      return this.getStringAttribute('schema_handler_package');
    }
    public set schemaHandlerPackage(value: string) {
      this._schemaHandlerPackage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaHandlerPackageInput() {
      return this._schemaHandlerPackage
    }

    // source_url - computed: true, optional: false, required: false
    public get sourceUrl() {
      return this.getStringAttribute('source_url');
    }

    // type - computed: true, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // type_arn - computed: true, optional: false, required: false
    public get typeArn() {
      return this.getStringAttribute('type_arn');
    }

    // type_name - computed: false, optional: false, required: true
    private _typeName?: string; 
    public get typeName() {
      return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
      this._typeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
      return this._typeName
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
      return this.getStringAttribute('version_id');
    }

    // visibility - computed: true, optional: false, required: false
    public get visibility() {
      return this.getStringAttribute('visibility');
    }

    // logging_config - computed: false, optional: true, required: false
    private _loggingConfig?: CloudformationTypeLoggingConfig | undefined; 
    private __loggingConfigOutput = new CloudformationTypeLoggingConfigOutputReference(this as any, "logging_config", true);
    public get loggingConfig() {
      return this.__loggingConfigOutput;
    }
    public putLoggingConfig(value: CloudformationTypeLoggingConfig | undefined) {
      this._loggingConfig = value;
    }
    public resetLoggingConfig() {
      this._loggingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
      return this._loggingConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
        schema_handler_package: cdktf.stringToTerraform(this._schemaHandlerPackage),
        type: cdktf.stringToTerraform(this._type),
        type_name: cdktf.stringToTerraform(this._typeName),
        logging_config: cloudformationTypeLoggingConfigToTerraform(this._loggingConfig),
      };
    }
  }
  export interface DataAwsCloudformationExportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html#name DataAwsCloudformationExport#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html aws_cloudformation_export}
  */
  export class DataAwsCloudformationExport extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_export";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html aws_cloudformation_export} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationExportConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudformationExportConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_export',
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

    // exporting_stack_id - computed: true, optional: false, required: false
    public get exportingStackId() {
      return this.getStringAttribute('exporting_stack_id');
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

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
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
  export interface DataAwsCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#name DataAwsCloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#tags DataAwsCloudformationStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack}
  */
  export class DataAwsCloudformationStack extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationStackConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudformationStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capabilities - computed: true, optional: false, required: false
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // disable_rollback - computed: true, optional: false, required: false
    public get disableRollback() {
      return this.getBooleanAttribute('disable_rollback') as any;
    }

    // iam_role_arn - computed: true, optional: false, required: false
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
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

    // notification_arns - computed: true, optional: false, required: false
    public get notificationArns() {
      return this.getListAttribute('notification_arns');
    }

    // outputs - computed: true, optional: false, required: false
    public outputs(key: string): string {
      return new cdktf.StringMap(this, 'outputs').lookup(key);
    }

    // parameters - computed: true, optional: false, required: false
    public parameters(key: string): string {
      return new cdktf.StringMap(this, 'parameters').lookup(key);
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

    // template_body - computed: true, optional: false, required: false
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }

    // timeout_in_minutes - computed: true, optional: false, required: false
    public get timeoutInMinutes() {
      return this.getNumberAttribute('timeout_in_minutes');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsCloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#type DataAwsCloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#type_name DataAwsCloudformationType#type_name}
    */
    readonly typeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#version_id DataAwsCloudformationType#version_id}
    */
    readonly versionId?: string;
  }
  export class DataAwsCloudformationTypeLoggingConfig extends cdktf.ComplexComputedList {

    // log_group_name - computed: true, optional: false, required: false
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }

    // log_role_arn - computed: true, optional: false, required: false
    public get logRoleArn() {
      return this.getStringAttribute('log_role_arn');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type}
  */
  export class DataAwsCloudformationType extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationTypeConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudformationTypeConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._type = config.type;
      this._typeName = config.typeName;
      this._versionId = config.versionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_version_id - computed: true, optional: false, required: false
    public get defaultVersionId() {
      return this.getStringAttribute('default_version_id');
    }

    // deprecated_status - computed: true, optional: false, required: false
    public get deprecatedStatus() {
      return this.getStringAttribute('deprecated_status');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // documentation_url - computed: true, optional: false, required: false
    public get documentationUrl() {
      return this.getStringAttribute('documentation_url');
    }

    // execution_role_arn - computed: true, optional: false, required: false
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_default_version - computed: true, optional: false, required: false
    public get isDefaultVersion() {
      return this.getBooleanAttribute('is_default_version') as any;
    }

    // logging_config - computed: true, optional: false, required: false
    public loggingConfig(index: string) {
      return new DataAwsCloudformationTypeLoggingConfig(this, 'logging_config', index);
    }

    // provisioning_type - computed: true, optional: false, required: false
    public get provisioningType() {
      return this.getStringAttribute('provisioning_type');
    }

    // schema - computed: true, optional: false, required: false
    public get schema() {
      return this.getStringAttribute('schema');
    }

    // source_url - computed: true, optional: false, required: false
    public get sourceUrl() {
      return this.getStringAttribute('source_url');
    }

    // type - computed: true, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // type_arn - computed: true, optional: false, required: false
    public get typeArn() {
      return this.getStringAttribute('type_arn');
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string | undefined; 
    public get typeName() {
      return this.getStringAttribute('type_name');
    }
    public set typeName(value: string | undefined) {
      this._typeName = value;
    }
    public resetTypeName() {
      this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
      return this._typeName
    }

    // version_id - computed: false, optional: true, required: false
    private _versionId?: string | undefined; 
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string | undefined) {
      this._versionId = value;
    }
    public resetVersionId() {
      this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
      return this._versionId
    }

    // visibility - computed: true, optional: false, required: false
    public get visibility() {
      return this.getStringAttribute('visibility');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        type: cdktf.stringToTerraform(this._type),
        type_name: cdktf.stringToTerraform(this._typeName),
        version_id: cdktf.stringToTerraform(this._versionId),
      };
    }
  }
}
