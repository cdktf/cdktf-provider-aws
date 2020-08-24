// https://www.terraform.io/docs/providers/aws/r/emr_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EmrClusterConfig extends TerraformMetaArguments {
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
export interface EmrClusterStep {
  readonly actionOnFailure?: string;
  readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[];
  readonly name?: string;
}
export interface EmrClusterBootstrapAction {
  readonly args?: string[];
  readonly name: string;
  readonly path: string;
}
export interface EmrClusterCoreInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
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
export interface EmrClusterInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
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
export interface EmrClusterKerberosAttributes {
  readonly adDomainJoinPassword?: string;
  readonly adDomainJoinUser?: string;
  readonly crossRealmTrustPrincipalPassword?: string;
  readonly kdcAdminPassword: string;
  readonly realm: string;
}
export interface EmrClusterMasterInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}
export interface EmrClusterMasterInstanceGroup {
  readonly bidPrice?: string;
  readonly instanceCount?: number;
  readonly instanceType: string;
  readonly name?: string;
  /** ebs_config block */
  readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[];
}

// Resource

export class EmrCluster extends TerraformResource {

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
    return this._additionalInfo;
  }
  public set additionalInfo(value: string | undefined) {
    this._additionalInfo = value;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[];
  public get applications() {
    return this._applications;
  }
  public set applications(value: string[] | undefined) {
    this._applications = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_role - computed: false, optional: true, required: false
  private _autoscalingRole?: string;
  public get autoscalingRole() {
    return this._autoscalingRole;
  }
  public set autoscalingRole(value: string | undefined) {
    this._autoscalingRole = value;
  }

  // cluster_state - computed: true, optional: false, required: true
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations?: string;
  public get configurations() {
    return this._configurations;
  }
  public set configurations(value: string | undefined) {
    this._configurations = value;
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string;
  public get configurationsJson() {
    return this._configurationsJson;
  }
  public set configurationsJson(value: string | undefined) {
    this._configurationsJson = value;
  }

  // core_instance_count - computed: true, optional: true, required: false
  private _coreInstanceCount?: number;
  public get coreInstanceCount() {
    return this._coreInstanceCount ?? this.getNumberAttribute('core_instance_count');
  }
  public set coreInstanceCount(value: number | undefined) {
    this._coreInstanceCount = value;
  }

  // core_instance_type - computed: true, optional: true, required: false
  private _coreInstanceType?: string;
  public get coreInstanceType() {
    return this._coreInstanceType ?? this.getStringAttribute('core_instance_type');
  }
  public set coreInstanceType(value: string | undefined) {
    this._coreInstanceType = value;
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string;
  public get customAmiId() {
    return this._customAmiId;
  }
  public set customAmiId(value: string | undefined) {
    this._customAmiId = value;
  }

  // ebs_root_volume_size - computed: false, optional: true, required: false
  private _ebsRootVolumeSize?: number;
  public get ebsRootVolumeSize() {
    return this._ebsRootVolumeSize;
  }
  public set ebsRootVolumeSize(value: number | undefined) {
    this._ebsRootVolumeSize = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // keep_job_flow_alive_when_no_steps - computed: true, optional: true, required: false
  private _keepJobFlowAliveWhenNoSteps?: boolean;
  public get keepJobFlowAliveWhenNoSteps() {
    return this._keepJobFlowAliveWhenNoSteps ?? this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
  }
  public set keepJobFlowAliveWhenNoSteps(value: boolean | undefined) {
    this._keepJobFlowAliveWhenNoSteps = value;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string;
  public get logUri() {
    return this._logUri;
  }
  public set logUri(value: string | undefined) {
    this._logUri = value;
  }

  // master_instance_type - computed: true, optional: true, required: false
  private _masterInstanceType?: string;
  public get masterInstanceType() {
    return this._masterInstanceType ?? this.getStringAttribute('master_instance_type');
  }
  public set masterInstanceType(value: string | undefined) {
    this._masterInstanceType = value;
  }

  // master_public_dns - computed: true, optional: false, required: true
  public get masterPublicDns() {
    return this.getStringAttribute('master_public_dns');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel: string;
  public get releaseLabel() {
    return this._releaseLabel;
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }

  // scale_down_behavior - computed: true, optional: true, required: false
  private _scaleDownBehavior?: string;
  public get scaleDownBehavior() {
    return this._scaleDownBehavior ?? this.getStringAttribute('scale_down_behavior');
  }
  public set scaleDownBehavior(value: string | undefined) {
    this._scaleDownBehavior = value;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this._securityConfiguration;
  }
  public set securityConfiguration(value: string | undefined) {
    this._securityConfiguration = value;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole: string;
  public get serviceRole() {
    return this._serviceRole;
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }

  // step - computed: true, optional: true, required: false
  private _step?: EmrClusterStep[]
  public get step(): EmrClusterStep[] | undefined {
    return this._step; // Getting the computed value is not yet implemented
  }
  public set step(value: EmrClusterStep[] | undefined) {
    this._step = value;
  }

  // step_concurrency_level - computed: false, optional: true, required: false
  private _stepConcurrencyLevel?: number;
  public get stepConcurrencyLevel() {
    return this._stepConcurrencyLevel;
  }
  public set stepConcurrencyLevel(value: number | undefined) {
    this._stepConcurrencyLevel = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // termination_protection - computed: true, optional: true, required: false
  private _terminationProtection?: boolean;
  public get terminationProtection() {
    return this._terminationProtection ?? this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | undefined) {
    this._terminationProtection = value;
  }

  // visible_to_all_users - computed: false, optional: true, required: false
  private _visibleToAllUsers?: boolean;
  public get visibleToAllUsers() {
    return this._visibleToAllUsers;
  }
  public set visibleToAllUsers(value: boolean | undefined) {
    this._visibleToAllUsers = value;
  }

  // bootstrap_action - computed: false, optional: true, required: false
  private _bootstrapAction?: EmrClusterBootstrapAction[];
  public get bootstrapAction() {
    return this._bootstrapAction;
  }
  public set bootstrapAction(value: EmrClusterBootstrapAction[] | undefined) {
    this._bootstrapAction = value;
  }

  // core_instance_group - computed: false, optional: true, required: false
  private _coreInstanceGroup?: EmrClusterCoreInstanceGroup[];
  public get coreInstanceGroup() {
    return this._coreInstanceGroup;
  }
  public set coreInstanceGroup(value: EmrClusterCoreInstanceGroup[] | undefined) {
    this._coreInstanceGroup = value;
  }

  // ec2_attributes - computed: false, optional: true, required: false
  private _ec2Attributes?: EmrClusterEc2Attributes[];
  public get ec2Attributes() {
    return this._ec2Attributes;
  }
  public set ec2Attributes(value: EmrClusterEc2Attributes[] | undefined) {
    this._ec2Attributes = value;
  }

  // instance_group - computed: false, optional: true, required: false
  private _instanceGroup?: EmrClusterInstanceGroup[];
  public get instanceGroup() {
    return this._instanceGroup;
  }
  public set instanceGroup(value: EmrClusterInstanceGroup[] | undefined) {
    this._instanceGroup = value;
  }

  // kerberos_attributes - computed: false, optional: true, required: false
  private _kerberosAttributes?: EmrClusterKerberosAttributes[];
  public get kerberosAttributes() {
    return this._kerberosAttributes;
  }
  public set kerberosAttributes(value: EmrClusterKerberosAttributes[] | undefined) {
    this._kerberosAttributes = value;
  }

  // master_instance_group - computed: false, optional: true, required: false
  private _masterInstanceGroup?: EmrClusterMasterInstanceGroup[];
  public get masterInstanceGroup() {
    return this._masterInstanceGroup;
  }
  public set masterInstanceGroup(value: EmrClusterMasterInstanceGroup[] | undefined) {
    this._masterInstanceGroup = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: this._additionalInfo,
      applications: this._applications,
      autoscaling_role: this._autoscalingRole,
      configurations: this._configurations,
      configurations_json: this._configurationsJson,
      core_instance_count: this._coreInstanceCount,
      core_instance_type: this._coreInstanceType,
      custom_ami_id: this._customAmiId,
      ebs_root_volume_size: this._ebsRootVolumeSize,
      keep_job_flow_alive_when_no_steps: this._keepJobFlowAliveWhenNoSteps,
      log_uri: this._logUri,
      master_instance_type: this._masterInstanceType,
      name: this._name,
      release_label: this._releaseLabel,
      scale_down_behavior: this._scaleDownBehavior,
      security_configuration: this._securityConfiguration,
      service_role: this._serviceRole,
      step: this._step,
      step_concurrency_level: this._stepConcurrencyLevel,
      tags: this._tags,
      termination_protection: this._terminationProtection,
      visible_to_all_users: this._visibleToAllUsers,
      bootstrap_action: this._bootstrapAction,
      core_instance_group: this._coreInstanceGroup,
      ec2_attributes: this._ec2Attributes,
      instance_group: this._instanceGroup,
      kerberos_attributes: this._kerberosAttributes,
      master_instance_group: this._masterInstanceGroup,
    };
  }
}
