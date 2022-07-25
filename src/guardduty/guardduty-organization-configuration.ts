// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS GuardDuty
*/
export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * datasources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}
  */
  readonly datasources?: GuarddutyOrganizationConfigurationDatasources;
}
export interface GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#enable GuarddutyOrganizationConfiguration#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
}

export function guarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}

export class GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface GuarddutyOrganizationConfigurationDatasourcesKubernetes {
  /**
  * audit_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#audit_logs GuarddutyOrganizationConfiguration#audit_logs}
  */
  readonly auditLogs: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs;
}

export function guarddutyOrganizationConfigurationDatasourcesKubernetesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference | GuarddutyOrganizationConfigurationDatasourcesKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_logs: guarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsToTerraform(struct!.auditLogs),
  }
}

export class GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyOrganizationConfigurationDatasourcesKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogs = this._auditLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogs.internalValue = value.auditLogs;
    }
  }

  // audit_logs - computed: false, optional: false, required: true
  private _auditLogs = new GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
  public putAuditLogs(value: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs) {
    this._auditLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs.internalValue;
  }
}
export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
}

export function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_enable: cdktf.booleanToTerraform(struct!.autoEnable),
  }
}

export class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnable = this._autoEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoEnable = value.autoEnable;
    }
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }
}
export interface GuarddutyOrganizationConfigurationDatasources {
  /**
  * kubernetes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#kubernetes GuarddutyOrganizationConfiguration#kubernetes}
  */
  readonly kubernetes?: GuarddutyOrganizationConfigurationDatasourcesKubernetes;
  /**
  * s3_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
  */
  readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
}

export function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes: guarddutyOrganizationConfigurationDatasourcesKubernetesToTerraform(struct!.kubernetes),
    s3_logs: guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct!.s3Logs),
  }
}

export class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GuarddutyOrganizationConfigurationDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._s3Logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Logs = this._s3Logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyOrganizationConfigurationDatasources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetes.internalValue = undefined;
      this._s3Logs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetes.internalValue = value.kubernetes;
      this._s3Logs.internalValue = value.s3Logs;
    }
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: GuarddutyOrganizationConfigurationDatasourcesKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // s3_logs - computed: false, optional: true, required: false
  private _s3Logs = new GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(this, "s3_logs");
  public get s3Logs() {
    return this._s3Logs;
  }
  public putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs) {
    this._s3Logs.internalValue = value;
  }
  public resetS3Logs() {
    this._s3Logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogsInput() {
    return this._s3Logs.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration aws_guardduty_organization_configuration}
*/
export class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_organization_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration aws_guardduty_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.23.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoEnable = config.autoEnable;
    this._detectorId = config.detectorId;
    this._id = config.id;
    this._datasources.internalValue = config.datasources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
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

  // datasources - computed: false, optional: true, required: false
  private _datasources = new GuarddutyOrganizationConfigurationDatasourcesOutputReference(this, "datasources");
  public get datasources() {
    return this._datasources;
  }
  public putDatasources(value: GuarddutyOrganizationConfigurationDatasources) {
    this._datasources.internalValue = value;
  }
  public resetDatasources() {
    this._datasources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesInput() {
    return this._datasources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      id: cdktf.stringToTerraform(this._id),
      datasources: guarddutyOrganizationConfigurationDatasourcesToTerraform(this._datasources.internalValue),
    };
  }
}
