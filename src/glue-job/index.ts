// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#connections GlueJob#connections}
  */
  readonly connections?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}
  */
  readonly defaultArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#description GlueJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#execution_class GlueJob#execution_class}
  */
  readonly executionClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#glue_version GlueJob#glue_version}
  */
  readonly glueVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#id GlueJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}
  */
  readonly jobRunQueuingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#max_retries GlueJob#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#name GlueJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}
  */
  readonly nonOverridableArguments?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}
  */
  readonly numberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#role_arn GlueJob#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}
  */
  readonly securityConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#tags GlueJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#tags_all GlueJob#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#timeout GlueJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#worker_type GlueJob#worker_type}
  */
  readonly workerType?: string;
  /**
  * command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#command GlueJob#command}
  */
  readonly command: GlueJobCommand;
  /**
  * execution_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#execution_property GlueJob#execution_property}
  */
  readonly executionProperty?: GlueJobExecutionProperty;
  /**
  * notification_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#notification_property GlueJob#notification_property}
  */
  readonly notificationProperty?: GlueJobNotificationProperty;
  /**
  * source_control_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#source_control_details GlueJob#source_control_details}
  */
  readonly sourceControlDetails?: GlueJobSourceControlDetails;
}
export interface GlueJobCommand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#name GlueJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#python_version GlueJob#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#runtime GlueJob#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#script_location GlueJob#script_location}
  */
  readonly scriptLocation: string;
}

export function glueJobCommandToTerraform(struct?: GlueJobCommandOutputReference | GlueJobCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    script_location: cdktf.stringToTerraform(struct!.scriptLocation),
  }
}


export function glueJobCommandToHclTerraform(struct?: GlueJobCommandOutputReference | GlueJobCommand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_version: {
      value: cdktf.stringToHclTerraform(struct!.pythonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: cdktf.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_location: {
      value: cdktf.stringToHclTerraform(struct!.scriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueJobCommandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueJobCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._scriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptLocation = this._scriptLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueJobCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._pythonVersion = undefined;
      this._runtime = undefined;
      this._scriptLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._pythonVersion = value.pythonVersion;
      this._runtime = value.runtime;
      this._scriptLocation = value.scriptLocation;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // python_version - computed: true, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // runtime - computed: true, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // script_location - computed: false, optional: false, required: true
  private _scriptLocation?: string; 
  public get scriptLocation() {
    return this.getStringAttribute('script_location');
  }
  public set scriptLocation(value: string) {
    this._scriptLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptLocationInput() {
    return this._scriptLocation;
  }
}
export interface GlueJobExecutionProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
}

export function glueJobExecutionPropertyToTerraform(struct?: GlueJobExecutionPropertyOutputReference | GlueJobExecutionProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_runs: cdktf.numberToTerraform(struct!.maxConcurrentRuns),
  }
}


export function glueJobExecutionPropertyToHclTerraform(struct?: GlueJobExecutionPropertyOutputReference | GlueJobExecutionProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_runs: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueJobExecutionPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueJobExecutionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueJobExecutionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentRuns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentRuns = value.maxConcurrentRuns;
    }
  }

  // max_concurrent_runs - computed: false, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }
}
export interface GlueJobNotificationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}
  */
  readonly notifyDelayAfter?: number;
}

export function glueJobNotificationPropertyToTerraform(struct?: GlueJobNotificationPropertyOutputReference | GlueJobNotificationProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_delay_after: cdktf.numberToTerraform(struct!.notifyDelayAfter),
  }
}


export function glueJobNotificationPropertyToHclTerraform(struct?: GlueJobNotificationPropertyOutputReference | GlueJobNotificationProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_delay_after: {
      value: cdktf.numberToHclTerraform(struct!.notifyDelayAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueJobNotificationPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueJobNotificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyDelayAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDelayAfter = this._notifyDelayAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueJobNotificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifyDelayAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifyDelayAfter = value.notifyDelayAfter;
    }
  }

  // notify_delay_after - computed: false, optional: true, required: false
  private _notifyDelayAfter?: number; 
  public get notifyDelayAfter() {
    return this.getNumberAttribute('notify_delay_after');
  }
  public set notifyDelayAfter(value: number) {
    this._notifyDelayAfter = value;
  }
  public resetNotifyDelayAfter() {
    this._notifyDelayAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDelayAfterInput() {
    return this._notifyDelayAfter;
  }
}
export interface GlueJobSourceControlDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#auth_strategy GlueJob#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#auth_token GlueJob#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#branch GlueJob#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#folder GlueJob#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#last_commit_id GlueJob#last_commit_id}
  */
  readonly lastCommitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#owner GlueJob#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#provider GlueJob#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#repository GlueJob#repository}
  */
  readonly repository?: string;
}

export function glueJobSourceControlDetailsToTerraform(struct?: GlueJobSourceControlDetailsOutputReference | GlueJobSourceControlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_strategy: cdktf.stringToTerraform(struct!.authStrategy),
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    branch: cdktf.stringToTerraform(struct!.branch),
    folder: cdktf.stringToTerraform(struct!.folder),
    last_commit_id: cdktf.stringToTerraform(struct!.lastCommitId),
    owner: cdktf.stringToTerraform(struct!.owner),
    provider: cdktf.stringToTerraform(struct!.provider),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function glueJobSourceControlDetailsToHclTerraform(struct?: GlueJobSourceControlDetailsOutputReference | GlueJobSourceControlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_strategy: {
      value: cdktf.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_commit_id: {
      value: cdktf.stringToHclTerraform(struct!.lastCommitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueJobSourceControlDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueJobSourceControlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._lastCommitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCommitId = this._lastCommitId;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueJobSourceControlDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authStrategy = undefined;
      this._authToken = undefined;
      this._branch = undefined;
      this._folder = undefined;
      this._lastCommitId = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._repository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authStrategy = value.authStrategy;
      this._authToken = value.authToken;
      this._branch = value.branch;
      this._folder = value.folder;
      this._lastCommitId = value.lastCommitId;
      this._owner = value.owner;
      this._provider = value.provider;
      this._repository = value.repository;
    }
  }

  // auth_strategy - computed: false, optional: true, required: false
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  public resetAuthStrategy() {
    this._authStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // last_commit_id - computed: false, optional: true, required: false
  private _lastCommitId?: string; 
  public get lastCommitId() {
    return this.getStringAttribute('last_commit_id');
  }
  public set lastCommitId(value: string) {
    this._lastCommitId = value;
  }
  public resetLastCommitId() {
    this._lastCommitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCommitIdInput() {
    return this._lastCommitId;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job aws_glue_job}
*/
export class GlueJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueJob to import
  * @param importFromId The id of the existing GlueJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_job aws_glue_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueJobConfig
  */
  public constructor(scope: Construct, id: string, config: GlueJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_job',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connections = config.connections;
    this._defaultArguments = config.defaultArguments;
    this._description = config.description;
    this._executionClass = config.executionClass;
    this._glueVersion = config.glueVersion;
    this._id = config.id;
    this._jobRunQueuingEnabled = config.jobRunQueuingEnabled;
    this._maintenanceWindow = config.maintenanceWindow;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._nonOverridableArguments = config.nonOverridableArguments;
    this._numberOfWorkers = config.numberOfWorkers;
    this._roleArn = config.roleArn;
    this._securityConfiguration = config.securityConfiguration;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._command.internalValue = config.command;
    this._executionProperty.internalValue = config.executionProperty;
    this._notificationProperty.internalValue = config.notificationProperty;
    this._sourceControlDetails.internalValue = config.sourceControlDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[]; 
  public get connections() {
    return this.getListAttribute('connections');
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections;
  }

  // default_arguments - computed: false, optional: true, required: false
  private _defaultArguments?: { [key: string]: string }; 
  public get defaultArguments() {
    return this.getStringMapAttribute('default_arguments');
  }
  public set defaultArguments(value: { [key: string]: string }) {
    this._defaultArguments = value;
  }
  public resetDefaultArguments() {
    this._defaultArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultArgumentsInput() {
    return this._defaultArguments;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_class - computed: false, optional: true, required: false
  private _executionClass?: string; 
  public get executionClass() {
    return this.getStringAttribute('execution_class');
  }
  public set executionClass(value: string) {
    this._executionClass = value;
  }
  public resetExecutionClass() {
    this._executionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionClassInput() {
    return this._executionClass;
  }

  // glue_version - computed: true, optional: true, required: false
  private _glueVersion?: string; 
  public get glueVersion() {
    return this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string) {
    this._glueVersion = value;
  }
  public resetGlueVersion() {
    this._glueVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueVersionInput() {
    return this._glueVersion;
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

  // job_run_queuing_enabled - computed: false, optional: true, required: false
  private _jobRunQueuingEnabled?: boolean | cdktf.IResolvable; 
  public get jobRunQueuingEnabled() {
    return this.getBooleanAttribute('job_run_queuing_enabled');
  }
  public set jobRunQueuingEnabled(value: boolean | cdktf.IResolvable) {
    this._jobRunQueuingEnabled = value;
  }
  public resetJobRunQueuingEnabled() {
    this._jobRunQueuingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRunQueuingEnabledInput() {
    return this._jobRunQueuingEnabled;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // non_overridable_arguments - computed: false, optional: true, required: false
  private _nonOverridableArguments?: { [key: string]: string }; 
  public get nonOverridableArguments() {
    return this.getStringMapAttribute('non_overridable_arguments');
  }
  public set nonOverridableArguments(value: { [key: string]: string }) {
    this._nonOverridableArguments = value;
  }
  public resetNonOverridableArguments() {
    this._nonOverridableArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonOverridableArgumentsInput() {
    return this._nonOverridableArguments;
  }

  // number_of_workers - computed: true, optional: true, required: false
  private _numberOfWorkers?: number; 
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string; 
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration;
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

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // worker_type - computed: true, optional: true, required: false
  private _workerType?: string; 
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType;
  }

  // command - computed: false, optional: false, required: true
  private _command = new GlueJobCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }
  public putCommand(value: GlueJobCommand) {
    this._command.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command.internalValue;
  }

  // execution_property - computed: false, optional: true, required: false
  private _executionProperty = new GlueJobExecutionPropertyOutputReference(this, "execution_property");
  public get executionProperty() {
    return this._executionProperty;
  }
  public putExecutionProperty(value: GlueJobExecutionProperty) {
    this._executionProperty.internalValue = value;
  }
  public resetExecutionProperty() {
    this._executionProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionPropertyInput() {
    return this._executionProperty.internalValue;
  }

  // notification_property - computed: false, optional: true, required: false
  private _notificationProperty = new GlueJobNotificationPropertyOutputReference(this, "notification_property");
  public get notificationProperty() {
    return this._notificationProperty;
  }
  public putNotificationProperty(value: GlueJobNotificationProperty) {
    this._notificationProperty.internalValue = value;
  }
  public resetNotificationProperty() {
    this._notificationProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPropertyInput() {
    return this._notificationProperty.internalValue;
  }

  // source_control_details - computed: false, optional: true, required: false
  private _sourceControlDetails = new GlueJobSourceControlDetailsOutputReference(this, "source_control_details");
  public get sourceControlDetails() {
    return this._sourceControlDetails;
  }
  public putSourceControlDetails(value: GlueJobSourceControlDetails) {
    this._sourceControlDetails.internalValue = value;
  }
  public resetSourceControlDetails() {
    this._sourceControlDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlDetailsInput() {
    return this._sourceControlDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connections),
      default_arguments: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultArguments),
      description: cdktf.stringToTerraform(this._description),
      execution_class: cdktf.stringToTerraform(this._executionClass),
      glue_version: cdktf.stringToTerraform(this._glueVersion),
      id: cdktf.stringToTerraform(this._id),
      job_run_queuing_enabled: cdktf.booleanToTerraform(this._jobRunQueuingEnabled),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      name: cdktf.stringToTerraform(this._name),
      non_overridable_arguments: cdktf.hashMapper(cdktf.stringToTerraform)(this._nonOverridableArguments),
      number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      worker_type: cdktf.stringToTerraform(this._workerType),
      command: glueJobCommandToTerraform(this._command.internalValue),
      execution_property: glueJobExecutionPropertyToTerraform(this._executionProperty.internalValue),
      notification_property: glueJobNotificationPropertyToTerraform(this._notificationProperty.internalValue),
      source_control_details: glueJobSourceControlDetailsToTerraform(this._sourceControlDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connections),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_arguments: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultArguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_class: {
        value: cdktf.stringToHclTerraform(this._executionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glue_version: {
        value: cdktf.stringToHclTerraform(this._glueVersion),
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
      job_run_queuing_enabled: {
        value: cdktf.booleanToHclTerraform(this._jobRunQueuingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_window: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_overridable_arguments: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nonOverridableArguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      number_of_workers: {
        value: cdktf.numberToHclTerraform(this._numberOfWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_configuration: {
        value: cdktf.stringToHclTerraform(this._securityConfiguration),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_type: {
        value: cdktf.stringToHclTerraform(this._workerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: glueJobCommandToHclTerraform(this._command.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueJobCommandList",
      },
      execution_property: {
        value: glueJobExecutionPropertyToHclTerraform(this._executionProperty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueJobExecutionPropertyList",
      },
      notification_property: {
        value: glueJobNotificationPropertyToHclTerraform(this._notificationProperty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueJobNotificationPropertyList",
      },
      source_control_details: {
        value: glueJobSourceControlDetailsToHclTerraform(this._sourceControlDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueJobSourceControlDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
