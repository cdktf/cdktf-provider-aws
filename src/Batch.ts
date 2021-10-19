// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Batch
*/
export namespace Batch {
  export interface BatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_environment_name BatchComputeEnvironment#compute_environment_name}
    */
    readonly computeEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_environment_name_prefix BatchComputeEnvironment#compute_environment_name_prefix}
    */
    readonly computeEnvironmentNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#service_role BatchComputeEnvironment#service_role}
    */
    readonly serviceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#state BatchComputeEnvironment#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags BatchComputeEnvironment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags_all BatchComputeEnvironment#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#type BatchComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * compute_resources block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_resources BatchComputeEnvironment#compute_resources}
    */
    readonly computeResources?: BatchComputeEnvironmentComputeResources;
  }
  export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template_id BatchComputeEnvironment#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template_name BatchComputeEnvironment#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#version BatchComputeEnvironment#version}
    */
    readonly version?: string;
  }

  function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | BatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
      launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export class BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // launch_template_id - computed: false, optional: true, required: false
    private _launchTemplateId?: string | undefined; 
    public get launchTemplateId() {
      return this.getStringAttribute('launch_template_id');
    }
    public set launchTemplateId(value: string | undefined) {
      this._launchTemplateId = value;
    }
    public resetLaunchTemplateId() {
      this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateIdInput() {
      return this._launchTemplateId
    }

    // launch_template_name - computed: false, optional: true, required: false
    private _launchTemplateName?: string | undefined; 
    public get launchTemplateName() {
      return this.getStringAttribute('launch_template_name');
    }
    public set launchTemplateName(value: string | undefined) {
      this._launchTemplateName = value;
    }
    public resetLaunchTemplateName() {
      this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateNameInput() {
      return this._launchTemplateName
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }
  }
  export interface BatchComputeEnvironmentComputeResources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#allocation_strategy BatchComputeEnvironment#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#bid_percentage BatchComputeEnvironment#bid_percentage}
    */
    readonly bidPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#desired_vcpus BatchComputeEnvironment#desired_vcpus}
    */
    readonly desiredVcpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}
    */
    readonly ec2KeyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#image_id BatchComputeEnvironment#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#instance_role BatchComputeEnvironment#instance_role}
    */
    readonly instanceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#instance_type BatchComputeEnvironment#instance_type}
    */
    readonly instanceType?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#max_vcpus BatchComputeEnvironment#max_vcpus}
    */
    readonly maxVcpus: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#min_vcpus BatchComputeEnvironment#min_vcpus}
    */
    readonly minVcpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#security_group_ids BatchComputeEnvironment#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}
    */
    readonly spotIamFleetRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#subnets BatchComputeEnvironment#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags BatchComputeEnvironment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#type BatchComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template BatchComputeEnvironment#launch_template}
    */
    readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate;
  }

  function batchComputeEnvironmentComputeResourcesToTerraform(struct?: BatchComputeEnvironmentComputeResourcesOutputReference | BatchComputeEnvironmentComputeResources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
      bid_percentage: cdktf.numberToTerraform(struct!.bidPercentage),
      desired_vcpus: cdktf.numberToTerraform(struct!.desiredVcpus),
      ec2_key_pair: cdktf.stringToTerraform(struct!.ec2KeyPair),
      image_id: cdktf.stringToTerraform(struct!.imageId),
      instance_role: cdktf.stringToTerraform(struct!.instanceRole),
      instance_type: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceType),
      max_vcpus: cdktf.numberToTerraform(struct!.maxVcpus),
      min_vcpus: cdktf.numberToTerraform(struct!.minVcpus),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      spot_iam_fleet_role: cdktf.stringToTerraform(struct!.spotIamFleetRole),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      type: cdktf.stringToTerraform(struct!.type),
      launch_template: batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct!.launchTemplate),
    }
  }

  export class BatchComputeEnvironmentComputeResourcesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allocation_strategy - computed: false, optional: true, required: false
    private _allocationStrategy?: string | undefined; 
    public get allocationStrategy() {
      return this.getStringAttribute('allocation_strategy');
    }
    public set allocationStrategy(value: string | undefined) {
      this._allocationStrategy = value;
    }
    public resetAllocationStrategy() {
      this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationStrategyInput() {
      return this._allocationStrategy
    }

    // bid_percentage - computed: false, optional: true, required: false
    private _bidPercentage?: number | undefined; 
    public get bidPercentage() {
      return this.getNumberAttribute('bid_percentage');
    }
    public set bidPercentage(value: number | undefined) {
      this._bidPercentage = value;
    }
    public resetBidPercentage() {
      this._bidPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bidPercentageInput() {
      return this._bidPercentage
    }

    // desired_vcpus - computed: true, optional: true, required: false
    private _desiredVcpus?: number | undefined; 
    public get desiredVcpus() {
      return this.getNumberAttribute('desired_vcpus');
    }
    public set desiredVcpus(value: number | undefined) {
      this._desiredVcpus = value;
    }
    public resetDesiredVcpus() {
      this._desiredVcpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredVcpusInput() {
      return this._desiredVcpus
    }

    // ec2_key_pair - computed: false, optional: true, required: false
    private _ec2KeyPair?: string | undefined; 
    public get ec2KeyPair() {
      return this.getStringAttribute('ec2_key_pair');
    }
    public set ec2KeyPair(value: string | undefined) {
      this._ec2KeyPair = value;
    }
    public resetEc2KeyPair() {
      this._ec2KeyPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2KeyPairInput() {
      return this._ec2KeyPair
    }

    // image_id - computed: false, optional: true, required: false
    private _imageId?: string | undefined; 
    public get imageId() {
      return this.getStringAttribute('image_id');
    }
    public set imageId(value: string | undefined) {
      this._imageId = value;
    }
    public resetImageId() {
      this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
      return this._imageId
    }

    // instance_role - computed: false, optional: true, required: false
    private _instanceRole?: string | undefined; 
    public get instanceRole() {
      return this.getStringAttribute('instance_role');
    }
    public set instanceRole(value: string | undefined) {
      this._instanceRole = value;
    }
    public resetInstanceRole() {
      this._instanceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleInput() {
      return this._instanceRole
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string[] | undefined; 
    public get instanceType() {
      return this.getListAttribute('instance_type');
    }
    public set instanceType(value: string[] | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // max_vcpus - computed: false, optional: false, required: true
    private _maxVcpus?: number; 
    public get maxVcpus() {
      return this.getNumberAttribute('max_vcpus');
    }
    public set maxVcpus(value: number) {
      this._maxVcpus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxVcpusInput() {
      return this._maxVcpus
    }

    // min_vcpus - computed: false, optional: true, required: false
    private _minVcpus?: number | undefined; 
    public get minVcpus() {
      return this.getNumberAttribute('min_vcpus');
    }
    public set minVcpus(value: number | undefined) {
      this._minVcpus = value;
    }
    public resetMinVcpus() {
      this._minVcpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minVcpusInput() {
      return this._minVcpus
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // spot_iam_fleet_role - computed: false, optional: true, required: false
    private _spotIamFleetRole?: string | undefined; 
    public get spotIamFleetRole() {
      return this.getStringAttribute('spot_iam_fleet_role');
    }
    public set spotIamFleetRole(value: string | undefined) {
      this._spotIamFleetRole = value;
    }
    public resetSpotIamFleetRole() {
      this._spotIamFleetRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotIamFleetRoleInput() {
      return this._spotIamFleetRole
    }

    // subnets - computed: false, optional: false, required: true
    private _subnets?: string[]; 
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
      this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
      return this._subnets
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // launch_template - computed: false, optional: true, required: false
    private _launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined; 
    private __launchTemplateOutput = new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(this as any, "launch_template", true);
    public get launchTemplate() {
      return this.__launchTemplateOutput;
    }
    public putLaunchTemplate(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined) {
      this._launchTemplate = value;
    }
    public resetLaunchTemplate() {
      this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
      return this._launchTemplate
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment}
  */
  export class BatchComputeEnvironment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_batch_compute_environment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchComputeEnvironmentConfig
    */
    public constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_batch_compute_environment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._computeEnvironmentName = config.computeEnvironmentName;
      this._computeEnvironmentNamePrefix = config.computeEnvironmentNamePrefix;
      this._serviceRole = config.serviceRole;
      this._state = config.state;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._computeResources = config.computeResources;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compute_environment_name - computed: true, optional: true, required: false
    private _computeEnvironmentName?: string | undefined; 
    public get computeEnvironmentName() {
      return this.getStringAttribute('compute_environment_name');
    }
    public set computeEnvironmentName(value: string | undefined) {
      this._computeEnvironmentName = value;
    }
    public resetComputeEnvironmentName() {
      this._computeEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentNameInput() {
      return this._computeEnvironmentName
    }

    // compute_environment_name_prefix - computed: true, optional: true, required: false
    private _computeEnvironmentNamePrefix?: string | undefined; 
    public get computeEnvironmentNamePrefix() {
      return this.getStringAttribute('compute_environment_name_prefix');
    }
    public set computeEnvironmentNamePrefix(value: string | undefined) {
      this._computeEnvironmentNamePrefix = value;
    }
    public resetComputeEnvironmentNamePrefix() {
      this._computeEnvironmentNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentNamePrefixInput() {
      return this._computeEnvironmentNamePrefix
    }

    // ecs_cluster_arn - computed: true, optional: false, required: false
    public get ecsClusterArn() {
      return this.getStringAttribute('ecs_cluster_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // service_role - computed: true, optional: true, required: false
    private _serviceRole?: string | undefined; 
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string | undefined) {
      this._serviceRole = value;
    }
    public resetServiceRole() {
      this._serviceRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
      return this._serviceRole
    }

    // state - computed: false, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
      return this.getStringAttribute('status_reason');
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // compute_resources - computed: false, optional: true, required: false
    private _computeResources?: BatchComputeEnvironmentComputeResources | undefined; 
    private __computeResourcesOutput = new BatchComputeEnvironmentComputeResourcesOutputReference(this as any, "compute_resources", true);
    public get computeResources() {
      return this.__computeResourcesOutput;
    }
    public putComputeResources(value: BatchComputeEnvironmentComputeResources | undefined) {
      this._computeResources = value;
    }
    public resetComputeResources() {
      this._computeResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeResourcesInput() {
      return this._computeResources
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
        compute_environment_name_prefix: cdktf.stringToTerraform(this._computeEnvironmentNamePrefix),
        service_role: cdktf.stringToTerraform(this._serviceRole),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        compute_resources: batchComputeEnvironmentComputeResourcesToTerraform(this._computeResources),
      };
    }
  }
  export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#container_properties BatchJobDefinition#container_properties}
    */
    readonly containerProperties?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#parameters BatchJobDefinition#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#platform_capabilities BatchJobDefinition#platform_capabilities}
    */
    readonly platformCapabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#propagate_tags BatchJobDefinition#propagate_tags}
    */
    readonly propagateTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags BatchJobDefinition#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags_all BatchJobDefinition#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#type BatchJobDefinition#type}
    */
    readonly type: string;
    /**
    * retry_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#retry_strategy BatchJobDefinition#retry_strategy}
    */
    readonly retryStrategy?: BatchJobDefinitionRetryStrategy;
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#timeout BatchJobDefinition#timeout}
    */
    readonly timeout?: BatchJobDefinitionTimeout;
  }
  export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#action BatchJobDefinition#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_exit_code BatchJobDefinition#on_exit_code}
    */
    readonly onExitCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_reason BatchJobDefinition#on_reason}
    */
    readonly onReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_status_reason BatchJobDefinition#on_status_reason}
    */
    readonly onStatusReason?: string;
  }

  function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      on_exit_code: cdktf.stringToTerraform(struct!.onExitCode),
      on_reason: cdktf.stringToTerraform(struct!.onReason),
      on_status_reason: cdktf.stringToTerraform(struct!.onStatusReason),
    }
  }

  export interface BatchJobDefinitionRetryStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempts BatchJobDefinition#attempts}
    */
    readonly attempts?: number;
    /**
    * evaluate_on_exit block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
    */
    readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[];
  }

  function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategyOutputReference | BatchJobDefinitionRetryStrategy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      attempts: cdktf.numberToTerraform(struct!.attempts),
      evaluate_on_exit: cdktf.listMapper(batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform)(struct!.evaluateOnExit),
    }
  }

  export class BatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // attempts - computed: false, optional: true, required: false
    private _attempts?: number | undefined; 
    public get attempts() {
      return this.getNumberAttribute('attempts');
    }
    public set attempts(value: number | undefined) {
      this._attempts = value;
    }
    public resetAttempts() {
      this._attempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attemptsInput() {
      return this._attempts
    }

    // evaluate_on_exit - computed: false, optional: true, required: false
    private _evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | undefined; 
    public get evaluateOnExit() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('evaluate_on_exit') as any;
    }
    public set evaluateOnExit(value: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | undefined) {
      this._evaluateOnExit = value;
    }
    public resetEvaluateOnExit() {
      this._evaluateOnExit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluateOnExitInput() {
      return this._evaluateOnExit
    }
  }
  export interface BatchJobDefinitionTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}
    */
    readonly attemptDurationSeconds?: number;
  }

  function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeoutOutputReference | BatchJobDefinitionTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      attempt_duration_seconds: cdktf.numberToTerraform(struct!.attemptDurationSeconds),
    }
  }

  export class BatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // attempt_duration_seconds - computed: false, optional: true, required: false
    private _attemptDurationSeconds?: number | undefined; 
    public get attemptDurationSeconds() {
      return this.getNumberAttribute('attempt_duration_seconds');
    }
    public set attemptDurationSeconds(value: number | undefined) {
      this._attemptDurationSeconds = value;
    }
    public resetAttemptDurationSeconds() {
      this._attemptDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attemptDurationSecondsInput() {
      return this._attemptDurationSeconds
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition}
  */
  export class BatchJobDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_batch_job_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_batch_job_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._containerProperties = config.containerProperties;
      this._name = config.name;
      this._parameters = config.parameters;
      this._platformCapabilities = config.platformCapabilities;
      this._propagateTags = config.propagateTags;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._retryStrategy = config.retryStrategy;
      this._timeout = config.timeout;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // container_properties - computed: false, optional: true, required: false
    private _containerProperties?: string | undefined; 
    public get containerProperties() {
      return this.getStringAttribute('container_properties');
    }
    public set containerProperties(value: string | undefined) {
      this._containerProperties = value;
    }
    public resetContainerProperties() {
      this._containerProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPropertiesInput() {
      return this._containerProperties
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

    // platform_capabilities - computed: false, optional: true, required: false
    private _platformCapabilities?: string[] | undefined; 
    public get platformCapabilities() {
      return this.getListAttribute('platform_capabilities');
    }
    public set platformCapabilities(value: string[] | undefined) {
      this._platformCapabilities = value;
    }
    public resetPlatformCapabilities() {
      this._platformCapabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformCapabilitiesInput() {
      return this._platformCapabilities
    }

    // propagate_tags - computed: false, optional: true, required: false
    private _propagateTags?: boolean | cdktf.IResolvable | undefined; 
    public get propagateTags() {
      return this.getBooleanAttribute('propagate_tags') as any;
    }
    public set propagateTags(value: boolean | cdktf.IResolvable | undefined) {
      this._propagateTags = value;
    }
    public resetPropagateTags() {
      this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
      return this._propagateTags
    }

    // revision - computed: true, optional: false, required: false
    public get revision() {
      return this.getNumberAttribute('revision');
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

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // retry_strategy - computed: false, optional: true, required: false
    private _retryStrategy?: BatchJobDefinitionRetryStrategy | undefined; 
    private __retryStrategyOutput = new BatchJobDefinitionRetryStrategyOutputReference(this as any, "retry_strategy", true);
    public get retryStrategy() {
      return this.__retryStrategyOutput;
    }
    public putRetryStrategy(value: BatchJobDefinitionRetryStrategy | undefined) {
      this._retryStrategy = value;
    }
    public resetRetryStrategy() {
      this._retryStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryStrategyInput() {
      return this._retryStrategy
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: BatchJobDefinitionTimeout | undefined; 
    private __timeoutOutput = new BatchJobDefinitionTimeoutOutputReference(this as any, "timeout", true);
    public get timeout() {
      return this.__timeoutOutput;
    }
    public putTimeout(value: BatchJobDefinitionTimeout | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        container_properties: cdktf.stringToTerraform(this._containerProperties),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        platform_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._platformCapabilities),
        propagate_tags: cdktf.booleanToTerraform(this._propagateTags),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        retry_strategy: batchJobDefinitionRetryStrategyToTerraform(this._retryStrategy),
        timeout: batchJobDefinitionTimeoutToTerraform(this._timeout),
      };
    }
  }
  export interface BatchJobQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#compute_environments BatchJobQueue#compute_environments}
    */
    readonly computeEnvironments: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#name BatchJobQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#priority BatchJobQueue#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#state BatchJobQueue#state}
    */
    readonly state: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#tags BatchJobQueue#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#tags_all BatchJobQueue#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html aws_batch_job_queue}
  */
  export class BatchJobQueue extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_batch_job_queue";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html aws_batch_job_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobQueueConfig
    */
    public constructor(scope: Construct, id: string, config: BatchJobQueueConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_batch_job_queue',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._computeEnvironments = config.computeEnvironments;
      this._name = config.name;
      this._priority = config.priority;
      this._state = config.state;
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

    // compute_environments - computed: false, optional: false, required: true
    private _computeEnvironments?: string[]; 
    public get computeEnvironments() {
      return this.getListAttribute('compute_environments');
    }
    public set computeEnvironments(value: string[]) {
      this._computeEnvironments = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentsInput() {
      return this._computeEnvironments
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

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
      this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
    }

    // state - computed: false, optional: false, required: true
    private _state?: string; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string) {
      this._state = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
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
        compute_environments: cdktf.listMapper(cdktf.stringToTerraform)(this._computeEnvironments),
        name: cdktf.stringToTerraform(this._name),
        priority: cdktf.numberToTerraform(this._priority),
        state: cdktf.stringToTerraform(this._state),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsBatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html#compute_environment_name DataAwsBatchComputeEnvironment#compute_environment_name}
    */
    readonly computeEnvironmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html#tags DataAwsBatchComputeEnvironment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment}
  */
  export class DataAwsBatchComputeEnvironment extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_batch_compute_environment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchComputeEnvironmentConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsBatchComputeEnvironmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_batch_compute_environment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._computeEnvironmentName = config.computeEnvironmentName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compute_environment_name - computed: false, optional: false, required: true
    private _computeEnvironmentName?: string; 
    public get computeEnvironmentName() {
      return this.getStringAttribute('compute_environment_name');
    }
    public set computeEnvironmentName(value: string) {
      this._computeEnvironmentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentNameInput() {
      return this._computeEnvironmentName
    }

    // ecs_cluster_arn - computed: true, optional: false, required: false
    public get ecsClusterArn() {
      return this.getStringAttribute('ecs_cluster_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
      return this.getStringAttribute('status_reason');
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

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsBatchJobQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html#name DataAwsBatchJobQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html#tags DataAwsBatchJobQueue#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsBatchJobQueueComputeEnvironmentOrder extends cdktf.ComplexComputedList {

    // compute_environment - computed: true, optional: false, required: false
    public get computeEnvironment() {
      return this.getStringAttribute('compute_environment');
    }

    // order - computed: true, optional: false, required: false
    public get order() {
      return this.getNumberAttribute('order');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html aws_batch_job_queue}
  */
  export class DataAwsBatchJobQueue extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_batch_job_queue";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html aws_batch_job_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchJobQueueConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsBatchJobQueueConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_batch_job_queue',
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compute_environment_order - computed: true, optional: false, required: false
    public computeEnvironmentOrder(index: string) {
      return new DataAwsBatchJobQueueComputeEnvironmentOrder(this, 'compute_environment_order', index);
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

    // priority - computed: true, optional: false, required: false
    public get priority() {
      return this.getNumberAttribute('priority');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
      return this.getStringAttribute('status_reason');
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
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
