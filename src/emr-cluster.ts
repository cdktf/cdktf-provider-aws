// https://www.terraform.io/docs/providers/aws/r/emr_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
  readonly additionalInfo?: string;
  readonly applications?: string[];
  readonly autoscalingRole?: string;
  readonly configurations?: string;
  readonly configurationsJson?: string;
  readonly coreInstanceCount?: number;
  readonly coreInstanceType?: string;
  readonly customAmiId?: string;
  readonly ebsRootVolumeSize?: number;
  readonly keepJobFlowAliveWhenNoSteps?: boolean;
  readonly logUri?: string;
  readonly masterInstanceType?: string;
  readonly name: string;
  readonly releaseLabel: string;
  readonly scaleDownBehavior?: string;
  readonly securityConfiguration?: string;
  readonly serviceRole: string;
  readonly step?: EmrClusterStep[];
  readonly stepConcurrencyLevel?: number;
  readonly tags?: { [key: string]: string };
  readonly terminationProtection?: boolean;
  readonly visibleToAllUsers?: boolean;
  /** bootstrap_action block */
  readonly bootstrapAction?: EmrClusterBootstrapAction[];
  /** core_instance_group block */
  readonly coreInstanceGroup?: EmrClusterCoreInstanceGroup[];
  /** ec2_attributes block */
  readonly ec2Attributes?: EmrClusterEc2Attributes[];
  /** instance_group block */
  readonly instanceGroup?: EmrClusterInstanceGroup[];
  /** kerberos_attributes block */
  readonly kerberosAttributes?: EmrClusterKerberosAttributes[];
  /** master_instance_group block */
  readonly masterInstanceGroup?: EmrClusterMasterInstanceGroup[];
}
export interface EmrClusterStepHadoopJarStep {
  readonly args?: string[];
  readonly jar?: string;
  readonly mainClass?: string;
  readonly properties?: { [key: string]: string };
}

function emrClusterStepHadoopJarStepToTerraform(struct?: EmrClusterStepHadoopJarStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    jar: cdktf.stringToTerraform(struct!.jar),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
  }
}

export interface EmrClusterStep {
  readonly actionOnFailure?: string;
  readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[];
  readonly name?: string;
}

function emrClusterStepToTerraform(struct?: EmrClusterStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_on_failure: cdktf.stringToTerraform(struct!.actionOnFailure),
    hadoop_jar_step: cdktf.listMapper(emrClusterStepHadoopJarStepToTerraform)(struct!.hadoopJarStep),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface EmrClusterBootstrapAction {
  readonly args?: string[];
  readonly name: string;
  readonly path: string;
}

function emrClusterBootstrapActionToTerraform(struct?: EmrClusterBootstrapAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface EmrClusterCoreInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}

function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct?: EmrClusterCoreInstanceGroupEbsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterCoreInstanceGroup {
  readonly autoscalingPolicy?: string;
  readonly bidPrice?: string;
  readonly instanceCount?: number;
  readonly instanceType: string;
  readonly name?: string;
  /** ebs_config block */
  readonly ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[];
}

function emrClusterCoreInstanceGroupToTerraform(struct?: EmrClusterCoreInstanceGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    autoscaling_policy: cdktf.stringToTerraform(struct!.autoscalingPolicy),
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    ebs_config: cdktf.listMapper(emrClusterCoreInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export interface EmrClusterEc2Attributes {
  readonly additionalMasterSecurityGroups?: string;
  readonly additionalSlaveSecurityGroups?: string;
  readonly emrManagedMasterSecurityGroup?: string;
  readonly emrManagedSlaveSecurityGroup?: string;
  readonly instanceProfile: string;
  readonly keyName?: string;
  readonly serviceAccessSecurityGroup?: string;
  readonly subnetId?: string;
}

function emrClusterEc2AttributesToTerraform(struct?: EmrClusterEc2Attributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    additional_master_security_groups: cdktf.stringToTerraform(struct!.additionalMasterSecurityGroups),
    additional_slave_security_groups: cdktf.stringToTerraform(struct!.additionalSlaveSecurityGroups),
    emr_managed_master_security_group: cdktf.stringToTerraform(struct!.emrManagedMasterSecurityGroup),
    emr_managed_slave_security_group: cdktf.stringToTerraform(struct!.emrManagedSlaveSecurityGroup),
    instance_profile: cdktf.stringToTerraform(struct!.instanceProfile),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    service_access_security_group: cdktf.stringToTerraform(struct!.serviceAccessSecurityGroup),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface EmrClusterInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}

function emrClusterInstanceGroupEbsConfigToTerraform(struct?: EmrClusterInstanceGroupEbsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterInstanceGroup {
  readonly autoscalingPolicy?: string;
  readonly bidPrice?: string;
  readonly instanceCount?: number;
  readonly instanceRole: string;
  readonly instanceType: string;
  readonly name?: string;
  /** ebs_config block */
  readonly ebsConfig?: EmrClusterInstanceGroupEbsConfig[];
}

function emrClusterInstanceGroupToTerraform(struct?: EmrClusterInstanceGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    autoscaling_policy: cdktf.stringToTerraform(struct!.autoscalingPolicy),
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_role: cdktf.stringToTerraform(struct!.instanceRole),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    ebs_config: cdktf.listMapper(emrClusterInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export interface EmrClusterKerberosAttributes {
  readonly adDomainJoinPassword?: string;
  readonly adDomainJoinUser?: string;
  readonly crossRealmTrustPrincipalPassword?: string;
  readonly kdcAdminPassword: string;
  readonly realm: string;
}

function emrClusterKerberosAttributesToTerraform(struct?: EmrClusterKerberosAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ad_domain_join_password: cdktf.stringToTerraform(struct!.adDomainJoinPassword),
    ad_domain_join_user: cdktf.stringToTerraform(struct!.adDomainJoinUser),
    cross_realm_trust_principal_password: cdktf.stringToTerraform(struct!.crossRealmTrustPrincipalPassword),
    kdc_admin_password: cdktf.stringToTerraform(struct!.kdcAdminPassword),
    realm: cdktf.stringToTerraform(struct!.realm),
  }
}

export interface EmrClusterMasterInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}

function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct?: EmrClusterMasterInstanceGroupEbsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrClusterMasterInstanceGroup {
  readonly bidPrice?: string;
  readonly instanceCount?: number;
  readonly instanceType: string;
  readonly name?: string;
  /** ebs_config block */
  readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[];
}

function emrClusterMasterInstanceGroupToTerraform(struct?: EmrClusterMasterInstanceGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    ebs_config: cdktf.listMapper(emrClusterMasterInstanceGroupEbsConfigToTerraform)(struct!.ebsConfig),
  }
}


// Resource

export class EmrCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalInfo = config.additionalInfo;
    this._applications = config.applications;
    this._autoscalingRole = config.autoscalingRole;
    this._configurations = config.configurations;
    this._configurationsJson = config.configurationsJson;
    this._coreInstanceCount = config.coreInstanceCount;
    this._coreInstanceType = config.coreInstanceType;
    this._customAmiId = config.customAmiId;
    this._ebsRootVolumeSize = config.ebsRootVolumeSize;
    this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
    this._logUri = config.logUri;
    this._masterInstanceType = config.masterInstanceType;
    this._name = config.name;
    this._releaseLabel = config.releaseLabel;
    this._scaleDownBehavior = config.scaleDownBehavior;
    this._securityConfiguration = config.securityConfiguration;
    this._serviceRole = config.serviceRole;
    this._step = config.step;
    this._stepConcurrencyLevel = config.stepConcurrencyLevel;
    this._tags = config.tags;
    this._terminationProtection = config.terminationProtection;
    this._visibleToAllUsers = config.visibleToAllUsers;
    this._bootstrapAction = config.bootstrapAction;
    this._coreInstanceGroup = config.coreInstanceGroup;
    this._ec2Attributes = config.ec2Attributes;
    this._instanceGroup = config.instanceGroup;
    this._kerberosAttributes = config.kerberosAttributes;
    this._masterInstanceGroup = config.masterInstanceGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string;
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string ) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[];
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[] ) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_role - computed: false, optional: true, required: false
  private _autoscalingRole?: string;
  public get autoscalingRole() {
    return this.getStringAttribute('autoscaling_role');
  }
  public set autoscalingRole(value: string ) {
    this._autoscalingRole = value;
  }
  public resetAutoscalingRole() {
    this._autoscalingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingRoleInput() {
    return this._autoscalingRole
  }

  // cluster_state - computed: true, optional: false, required: false
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations?: string;
  public get configurations() {
    return this.getStringAttribute('configurations');
  }
  public set configurations(value: string ) {
    this._configurations = value;
  }
  public resetConfigurations() {
    this._configurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string;
  public get configurationsJson() {
    return this.getStringAttribute('configurations_json');
  }
  public set configurationsJson(value: string ) {
    this._configurationsJson = value;
  }
  public resetConfigurationsJson() {
    this._configurationsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsJsonInput() {
    return this._configurationsJson
  }

  // core_instance_count - computed: true, optional: true, required: false
  private _coreInstanceCount?: number;
  public get coreInstanceCount() {
    return this.getNumberAttribute('core_instance_count');
  }
  public set coreInstanceCount(value: number) {
    this._coreInstanceCount = value;
  }
  public resetCoreInstanceCount() {
    this._coreInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceCountInput() {
    return this._coreInstanceCount
  }

  // core_instance_type - computed: true, optional: true, required: false
  private _coreInstanceType?: string;
  public get coreInstanceType() {
    return this.getStringAttribute('core_instance_type');
  }
  public set coreInstanceType(value: string) {
    this._coreInstanceType = value;
  }
  public resetCoreInstanceType() {
    this._coreInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceTypeInput() {
    return this._coreInstanceType
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string;
  public get customAmiId() {
    return this.getStringAttribute('custom_ami_id');
  }
  public set customAmiId(value: string ) {
    this._customAmiId = value;
  }
  public resetCustomAmiId() {
    this._customAmiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAmiIdInput() {
    return this._customAmiId
  }

  // ebs_root_volume_size - computed: false, optional: true, required: false
  private _ebsRootVolumeSize?: number;
  public get ebsRootVolumeSize() {
    return this.getNumberAttribute('ebs_root_volume_size');
  }
  public set ebsRootVolumeSize(value: number ) {
    this._ebsRootVolumeSize = value;
  }
  public resetEbsRootVolumeSize() {
    this._ebsRootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsRootVolumeSizeInput() {
    return this._ebsRootVolumeSize
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_job_flow_alive_when_no_steps - computed: true, optional: true, required: false
  private _keepJobFlowAliveWhenNoSteps?: boolean;
  public get keepJobFlowAliveWhenNoSteps() {
    return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
  }
  public set keepJobFlowAliveWhenNoSteps(value: boolean) {
    this._keepJobFlowAliveWhenNoSteps = value;
  }
  public resetKeepJobFlowAliveWhenNoSteps() {
    this._keepJobFlowAliveWhenNoSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobFlowAliveWhenNoStepsInput() {
    return this._keepJobFlowAliveWhenNoSteps
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string;
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string ) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri
  }

  // master_instance_type - computed: true, optional: true, required: false
  private _masterInstanceType?: string;
  public get masterInstanceType() {
    return this.getStringAttribute('master_instance_type');
  }
  public set masterInstanceType(value: string) {
    this._masterInstanceType = value;
  }
  public resetMasterInstanceType() {
    this._masterInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceTypeInput() {
    return this._masterInstanceType
  }

  // master_public_dns - computed: true, optional: false, required: false
  public get masterPublicDns() {
    return this.getStringAttribute('master_public_dns');
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel: string;
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel
  }

  // scale_down_behavior - computed: true, optional: true, required: false
  private _scaleDownBehavior?: string;
  public get scaleDownBehavior() {
    return this.getStringAttribute('scale_down_behavior');
  }
  public set scaleDownBehavior(value: string) {
    this._scaleDownBehavior = value;
  }
  public resetScaleDownBehavior() {
    this._scaleDownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownBehaviorInput() {
    return this._scaleDownBehavior
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }
  public set securityConfiguration(value: string ) {
    this._securityConfiguration = value;
  }
  public resetSecurityConfiguration() {
    this._securityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationInput() {
    return this._securityConfiguration
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole: string;
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole
  }

  // step - computed: true, optional: true, required: false
  private _step?: EmrClusterStep[]
  public get step(): EmrClusterStep[] {
    return this.interpolationForAttribute('step') as any; // Getting the computed value is not yet implemented
  }
  public set step(value: EmrClusterStep[]) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step
  }

  // step_concurrency_level - computed: false, optional: true, required: false
  private _stepConcurrencyLevel?: number;
  public get stepConcurrencyLevel() {
    return this.getNumberAttribute('step_concurrency_level');
  }
  public set stepConcurrencyLevel(value: number ) {
    this._stepConcurrencyLevel = value;
  }
  public resetStepConcurrencyLevel() {
    this._stepConcurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConcurrencyLevelInput() {
    return this._stepConcurrencyLevel
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

  // termination_protection - computed: true, optional: true, required: false
  private _terminationProtection?: boolean;
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection
  }

  // visible_to_all_users - computed: false, optional: true, required: false
  private _visibleToAllUsers?: boolean;
  public get visibleToAllUsers() {
    return this.getBooleanAttribute('visible_to_all_users');
  }
  public set visibleToAllUsers(value: boolean ) {
    this._visibleToAllUsers = value;
  }
  public resetVisibleToAllUsers() {
    this._visibleToAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleToAllUsersInput() {
    return this._visibleToAllUsers
  }

  // bootstrap_action - computed: false, optional: true, required: false
  private _bootstrapAction?: EmrClusterBootstrapAction[];
  public get bootstrapAction() {
    return this.interpolationForAttribute('bootstrap_action') as any;
  }
  public set bootstrapAction(value: EmrClusterBootstrapAction[] ) {
    this._bootstrapAction = value;
  }
  public resetBootstrapAction() {
    this._bootstrapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionInput() {
    return this._bootstrapAction
  }

  // core_instance_group - computed: false, optional: true, required: false
  private _coreInstanceGroup?: EmrClusterCoreInstanceGroup[];
  public get coreInstanceGroup() {
    return this.interpolationForAttribute('core_instance_group') as any;
  }
  public set coreInstanceGroup(value: EmrClusterCoreInstanceGroup[] ) {
    this._coreInstanceGroup = value;
  }
  public resetCoreInstanceGroup() {
    this._coreInstanceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceGroupInput() {
    return this._coreInstanceGroup
  }

  // ec2_attributes - computed: false, optional: true, required: false
  private _ec2Attributes?: EmrClusterEc2Attributes[];
  public get ec2Attributes() {
    return this.interpolationForAttribute('ec2_attributes') as any;
  }
  public set ec2Attributes(value: EmrClusterEc2Attributes[] ) {
    this._ec2Attributes = value;
  }
  public resetEc2Attributes() {
    this._ec2Attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2AttributesInput() {
    return this._ec2Attributes
  }

  // instance_group - computed: false, optional: true, required: false
  private _instanceGroup?: EmrClusterInstanceGroup[];
  public get instanceGroup() {
    return this.interpolationForAttribute('instance_group') as any;
  }
  public set instanceGroup(value: EmrClusterInstanceGroup[] ) {
    this._instanceGroup = value;
  }
  public resetInstanceGroup() {
    this._instanceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupInput() {
    return this._instanceGroup
  }

  // kerberos_attributes - computed: false, optional: true, required: false
  private _kerberosAttributes?: EmrClusterKerberosAttributes[];
  public get kerberosAttributes() {
    return this.interpolationForAttribute('kerberos_attributes') as any;
  }
  public set kerberosAttributes(value: EmrClusterKerberosAttributes[] ) {
    this._kerberosAttributes = value;
  }
  public resetKerberosAttributes() {
    this._kerberosAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAttributesInput() {
    return this._kerberosAttributes
  }

  // master_instance_group - computed: false, optional: true, required: false
  private _masterInstanceGroup?: EmrClusterMasterInstanceGroup[];
  public get masterInstanceGroup() {
    return this.interpolationForAttribute('master_instance_group') as any;
  }
  public set masterInstanceGroup(value: EmrClusterMasterInstanceGroup[] ) {
    this._masterInstanceGroup = value;
  }
  public resetMasterInstanceGroup() {
    this._masterInstanceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceGroupInput() {
    return this._masterInstanceGroup
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      applications: cdktf.listMapper(cdktf.stringToTerraform)(this._applications),
      autoscaling_role: cdktf.stringToTerraform(this._autoscalingRole),
      configurations: cdktf.stringToTerraform(this._configurations),
      configurations_json: cdktf.stringToTerraform(this._configurationsJson),
      core_instance_count: cdktf.numberToTerraform(this._coreInstanceCount),
      core_instance_type: cdktf.stringToTerraform(this._coreInstanceType),
      custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
      ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
      keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
      log_uri: cdktf.stringToTerraform(this._logUri),
      master_instance_type: cdktf.stringToTerraform(this._masterInstanceType),
      name: cdktf.stringToTerraform(this._name),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
      security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      step: cdktf.listMapper(emrClusterStepToTerraform)(this._step),
      step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
      bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform)(this._bootstrapAction),
      core_instance_group: cdktf.listMapper(emrClusterCoreInstanceGroupToTerraform)(this._coreInstanceGroup),
      ec2_attributes: cdktf.listMapper(emrClusterEc2AttributesToTerraform)(this._ec2Attributes),
      instance_group: cdktf.listMapper(emrClusterInstanceGroupToTerraform)(this._instanceGroup),
      kerberos_attributes: cdktf.listMapper(emrClusterKerberosAttributesToTerraform)(this._kerberosAttributes),
      master_instance_group: cdktf.listMapper(emrClusterMasterInstanceGroupToTerraform)(this._masterInstanceGroup),
    };
  }
}
