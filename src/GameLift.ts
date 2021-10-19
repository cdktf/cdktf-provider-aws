// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS GameLift
*/
export namespace GameLift {
  export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#description GameliftAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#name GameliftAlias#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags GameliftAlias#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags_all GameliftAlias#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * routing_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#routing_strategy GameliftAlias#routing_strategy}
    */
    readonly routingStrategy: GameliftAliasRoutingStrategy;
  }
  export interface GameliftAliasRoutingStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#fleet_id GameliftAlias#fleet_id}
    */
    readonly fleetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#message GameliftAlias#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#type GameliftAlias#type}
    */
    readonly type: string;
  }

  function gameliftAliasRoutingStrategyToTerraform(struct?: GameliftAliasRoutingStrategyOutputReference | GameliftAliasRoutingStrategy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      fleet_id: cdktf.stringToTerraform(struct!.fleetId),
      message: cdktf.stringToTerraform(struct!.message),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class GameliftAliasRoutingStrategyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // fleet_id - computed: false, optional: true, required: false
    private _fleetId?: string | undefined; 
    public get fleetId() {
      return this.getStringAttribute('fleet_id');
    }
    public set fleetId(value: string | undefined) {
      this._fleetId = value;
    }
    public resetFleetId() {
      this._fleetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetIdInput() {
      return this._fleetId
    }

    // message - computed: false, optional: true, required: false
    private _message?: string | undefined; 
    public get message() {
      return this.getStringAttribute('message');
    }
    public set message(value: string | undefined) {
      this._message = value;
    }
    public resetMessage() {
      this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
      return this._message
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias}
  */
  export class GameliftAlias extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_gamelift_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftAliasConfig
    */
    public constructor(scope: Construct, id: string, config: GameliftAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_gamelift_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._routingStrategy = config.routingStrategy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // routing_strategy - computed: false, optional: false, required: true
    private _routingStrategy?: GameliftAliasRoutingStrategy; 
    private __routingStrategyOutput = new GameliftAliasRoutingStrategyOutputReference(this as any, "routing_strategy", true);
    public get routingStrategy() {
      return this.__routingStrategyOutput;
    }
    public putRoutingStrategy(value: GameliftAliasRoutingStrategy) {
      this._routingStrategy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routingStrategyInput() {
      return this._routingStrategy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        routing_strategy: gameliftAliasRoutingStrategyToTerraform(this._routingStrategy),
      };
    }
  }
  export interface GameliftBuildConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#name GameliftBuild#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#operating_system GameliftBuild#operating_system}
    */
    readonly operatingSystem: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#tags GameliftBuild#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#tags_all GameliftBuild#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#version GameliftBuild#version}
    */
    readonly version?: string;
    /**
    * storage_location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#storage_location GameliftBuild#storage_location}
    */
    readonly storageLocation: GameliftBuildStorageLocation;
  }
  export interface GameliftBuildStorageLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#bucket GameliftBuild#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#key GameliftBuild#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#role_arn GameliftBuild#role_arn}
    */
    readonly roleArn: string;
  }

  function gameliftBuildStorageLocationToTerraform(struct?: GameliftBuildStorageLocationOutputReference | GameliftBuildStorageLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      key: cdktf.stringToTerraform(struct!.key),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export class GameliftBuildStorageLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
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
      return this._roleArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build}
  */
  export class GameliftBuild extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_gamelift_build";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftBuildConfig
    */
    public constructor(scope: Construct, id: string, config: GameliftBuildConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_gamelift_build',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._operatingSystem = config.operatingSystem;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._version = config.version;
      this._storageLocation = config.storageLocation;
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

    // operating_system - computed: false, optional: false, required: true
    private _operatingSystem?: string; 
    public get operatingSystem() {
      return this.getStringAttribute('operating_system');
    }
    public set operatingSystem(value: string) {
      this._operatingSystem = value;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemInput() {
      return this._operatingSystem
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

    // storage_location - computed: false, optional: false, required: true
    private _storageLocation?: GameliftBuildStorageLocation; 
    private __storageLocationOutput = new GameliftBuildStorageLocationOutputReference(this as any, "storage_location", true);
    public get storageLocation() {
      return this.__storageLocationOutput;
    }
    public putStorageLocation(value: GameliftBuildStorageLocation) {
      this._storageLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storageLocationInput() {
      return this._storageLocation
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        operating_system: cdktf.stringToTerraform(this._operatingSystem),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        version: cdktf.stringToTerraform(this._version),
        storage_location: gameliftBuildStorageLocationToTerraform(this._storageLocation),
      };
    }
  }
  export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#build_id GameliftFleet#build_id}
    */
    readonly buildId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#description GameliftFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ec2_instance_type GameliftFleet#ec2_instance_type}
    */
    readonly ec2InstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#fleet_type GameliftFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#instance_role_arn GameliftFleet#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#metric_groups GameliftFleet#metric_groups}
    */
    readonly metricGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#name GameliftFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}
    */
    readonly newGameSessionProtectionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#tags GameliftFleet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#tags_all GameliftFleet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ec2_inbound_permission block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}
    */
    readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
    /**
    * resource_creation_limit_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}
    */
    readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy;
    /**
    * runtime_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#runtime_configuration GameliftFleet#runtime_configuration}
    */
    readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#timeouts GameliftFleet#timeouts}
    */
    readonly timeouts?: GameliftFleetTimeouts;
  }
  export interface GameliftFleetEc2InboundPermission {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#from_port GameliftFleet#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ip_range GameliftFleet#ip_range}
    */
    readonly ipRange: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#protocol GameliftFleet#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#to_port GameliftFleet#to_port}
    */
    readonly toPort: number;
  }

  function gameliftFleetEc2InboundPermissionToTerraform(struct?: GameliftFleetEc2InboundPermission): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      ip_range: cdktf.stringToTerraform(struct!.ipRange),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface GameliftFleetResourceCreationLimitPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}
    */
    readonly newGameSessionsPerCreator?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}
    */
    readonly policyPeriodInMinutes?: number;
  }

  function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicyOutputReference | GameliftFleetResourceCreationLimitPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      new_game_sessions_per_creator: cdktf.numberToTerraform(struct!.newGameSessionsPerCreator),
      policy_period_in_minutes: cdktf.numberToTerraform(struct!.policyPeriodInMinutes),
    }
  }

  export class GameliftFleetResourceCreationLimitPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // new_game_sessions_per_creator - computed: false, optional: true, required: false
    private _newGameSessionsPerCreator?: number | undefined; 
    public get newGameSessionsPerCreator() {
      return this.getNumberAttribute('new_game_sessions_per_creator');
    }
    public set newGameSessionsPerCreator(value: number | undefined) {
      this._newGameSessionsPerCreator = value;
    }
    public resetNewGameSessionsPerCreator() {
      this._newGameSessionsPerCreator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newGameSessionsPerCreatorInput() {
      return this._newGameSessionsPerCreator
    }

    // policy_period_in_minutes - computed: false, optional: true, required: false
    private _policyPeriodInMinutes?: number | undefined; 
    public get policyPeriodInMinutes() {
      return this.getNumberAttribute('policy_period_in_minutes');
    }
    public set policyPeriodInMinutes(value: number | undefined) {
      this._policyPeriodInMinutes = value;
    }
    public resetPolicyPeriodInMinutes() {
      this._policyPeriodInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyPeriodInMinutesInput() {
      return this._policyPeriodInMinutes
    }
  }
  export interface GameliftFleetRuntimeConfigurationServerProcess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#concurrent_executions GameliftFleet#concurrent_executions}
    */
    readonly concurrentExecutions: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#launch_path GameliftFleet#launch_path}
    */
    readonly launchPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#parameters GameliftFleet#parameters}
    */
    readonly parameters?: string;
  }

  function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcess): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      concurrent_executions: cdktf.numberToTerraform(struct!.concurrentExecutions),
      launch_path: cdktf.stringToTerraform(struct!.launchPath),
      parameters: cdktf.stringToTerraform(struct!.parameters),
    }
  }

  export interface GameliftFleetRuntimeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}
    */
    readonly gameSessionActivationTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}
    */
    readonly maxConcurrentGameSessionActivations?: number;
    /**
    * server_process block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#server_process GameliftFleet#server_process}
    */
    readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[];
  }

  function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfigurationOutputReference | GameliftFleetRuntimeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct!.gameSessionActivationTimeoutSeconds),
      max_concurrent_game_session_activations: cdktf.numberToTerraform(struct!.maxConcurrentGameSessionActivations),
      server_process: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessToTerraform)(struct!.serverProcess),
    }
  }

  export class GameliftFleetRuntimeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // game_session_activation_timeout_seconds - computed: false, optional: true, required: false
    private _gameSessionActivationTimeoutSeconds?: number | undefined; 
    public get gameSessionActivationTimeoutSeconds() {
      return this.getNumberAttribute('game_session_activation_timeout_seconds');
    }
    public set gameSessionActivationTimeoutSeconds(value: number | undefined) {
      this._gameSessionActivationTimeoutSeconds = value;
    }
    public resetGameSessionActivationTimeoutSeconds() {
      this._gameSessionActivationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gameSessionActivationTimeoutSecondsInput() {
      return this._gameSessionActivationTimeoutSeconds
    }

    // max_concurrent_game_session_activations - computed: false, optional: true, required: false
    private _maxConcurrentGameSessionActivations?: number | undefined; 
    public get maxConcurrentGameSessionActivations() {
      return this.getNumberAttribute('max_concurrent_game_session_activations');
    }
    public set maxConcurrentGameSessionActivations(value: number | undefined) {
      this._maxConcurrentGameSessionActivations = value;
    }
    public resetMaxConcurrentGameSessionActivations() {
      this._maxConcurrentGameSessionActivations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentGameSessionActivationsInput() {
      return this._maxConcurrentGameSessionActivations
    }

    // server_process - computed: false, optional: true, required: false
    private _serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[] | undefined; 
    public get serverProcess() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('server_process') as any;
    }
    public set serverProcess(value: GameliftFleetRuntimeConfigurationServerProcess[] | undefined) {
      this._serverProcess = value;
    }
    public resetServerProcess() {
      this._serverProcess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverProcessInput() {
      return this._serverProcess
    }
  }
  export interface GameliftFleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#create GameliftFleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#delete GameliftFleet#delete}
    */
    readonly delete?: string;
  }

  function gameliftFleetTimeoutsToTerraform(struct?: GameliftFleetTimeoutsOutputReference | GameliftFleetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class GameliftFleetTimeoutsOutputReference extends cdktf.ComplexObject {
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
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet}
  */
  export class GameliftFleet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_gamelift_fleet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig
    */
    public constructor(scope: Construct, id: string, config: GameliftFleetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_gamelift_fleet',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._buildId = config.buildId;
      this._description = config.description;
      this._ec2InstanceType = config.ec2InstanceType;
      this._fleetType = config.fleetType;
      this._instanceRoleArn = config.instanceRoleArn;
      this._metricGroups = config.metricGroups;
      this._name = config.name;
      this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ec2InboundPermission = config.ec2InboundPermission;
      this._resourceCreationLimitPolicy = config.resourceCreationLimitPolicy;
      this._runtimeConfiguration = config.runtimeConfiguration;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // build_id - computed: false, optional: false, required: true
    private _buildId?: string; 
    public get buildId() {
      return this.getStringAttribute('build_id');
    }
    public set buildId(value: string) {
      this._buildId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get buildIdInput() {
      return this._buildId
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

    // ec2_instance_type - computed: false, optional: false, required: true
    private _ec2InstanceType?: string; 
    public get ec2InstanceType() {
      return this.getStringAttribute('ec2_instance_type');
    }
    public set ec2InstanceType(value: string) {
      this._ec2InstanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceTypeInput() {
      return this._ec2InstanceType
    }

    // fleet_type - computed: false, optional: true, required: false
    private _fleetType?: string | undefined; 
    public get fleetType() {
      return this.getStringAttribute('fleet_type');
    }
    public set fleetType(value: string | undefined) {
      this._fleetType = value;
    }
    public resetFleetType() {
      this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetTypeInput() {
      return this._fleetType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_role_arn - computed: false, optional: true, required: false
    private _instanceRoleArn?: string | undefined; 
    public get instanceRoleArn() {
      return this.getStringAttribute('instance_role_arn');
    }
    public set instanceRoleArn(value: string | undefined) {
      this._instanceRoleArn = value;
    }
    public resetInstanceRoleArn() {
      this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleArnInput() {
      return this._instanceRoleArn
    }

    // log_paths - computed: true, optional: false, required: false
    public get logPaths() {
      return this.getListAttribute('log_paths');
    }

    // metric_groups - computed: true, optional: true, required: false
    private _metricGroups?: string[] | undefined; 
    public get metricGroups() {
      return this.getListAttribute('metric_groups');
    }
    public set metricGroups(value: string[] | undefined) {
      this._metricGroups = value;
    }
    public resetMetricGroups() {
      this._metricGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricGroupsInput() {
      return this._metricGroups
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

    // new_game_session_protection_policy - computed: false, optional: true, required: false
    private _newGameSessionProtectionPolicy?: string | undefined; 
    public get newGameSessionProtectionPolicy() {
      return this.getStringAttribute('new_game_session_protection_policy');
    }
    public set newGameSessionProtectionPolicy(value: string | undefined) {
      this._newGameSessionProtectionPolicy = value;
    }
    public resetNewGameSessionProtectionPolicy() {
      this._newGameSessionProtectionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newGameSessionProtectionPolicyInput() {
      return this._newGameSessionProtectionPolicy
    }

    // operating_system - computed: true, optional: false, required: false
    public get operatingSystem() {
      return this.getStringAttribute('operating_system');
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

    // ec2_inbound_permission - computed: false, optional: true, required: false
    private _ec2InboundPermission?: GameliftFleetEc2InboundPermission[] | undefined; 
    public get ec2InboundPermission() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ec2_inbound_permission') as any;
    }
    public set ec2InboundPermission(value: GameliftFleetEc2InboundPermission[] | undefined) {
      this._ec2InboundPermission = value;
    }
    public resetEc2InboundPermission() {
      this._ec2InboundPermission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InboundPermissionInput() {
      return this._ec2InboundPermission
    }

    // resource_creation_limit_policy - computed: false, optional: true, required: false
    private _resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy | undefined; 
    private __resourceCreationLimitPolicyOutput = new GameliftFleetResourceCreationLimitPolicyOutputReference(this as any, "resource_creation_limit_policy", true);
    public get resourceCreationLimitPolicy() {
      return this.__resourceCreationLimitPolicyOutput;
    }
    public putResourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy | undefined) {
      this._resourceCreationLimitPolicy = value;
    }
    public resetResourceCreationLimitPolicy() {
      this._resourceCreationLimitPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceCreationLimitPolicyInput() {
      return this._resourceCreationLimitPolicy
    }

    // runtime_configuration - computed: false, optional: true, required: false
    private _runtimeConfiguration?: GameliftFleetRuntimeConfiguration | undefined; 
    private __runtimeConfigurationOutput = new GameliftFleetRuntimeConfigurationOutputReference(this as any, "runtime_configuration", true);
    public get runtimeConfiguration() {
      return this.__runtimeConfigurationOutput;
    }
    public putRuntimeConfiguration(value: GameliftFleetRuntimeConfiguration | undefined) {
      this._runtimeConfiguration = value;
    }
    public resetRuntimeConfiguration() {
      this._runtimeConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeConfigurationInput() {
      return this._runtimeConfiguration
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GameliftFleetTimeouts | undefined; 
    private __timeoutsOutput = new GameliftFleetTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GameliftFleetTimeouts | undefined) {
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
        build_id: cdktf.stringToTerraform(this._buildId),
        description: cdktf.stringToTerraform(this._description),
        ec2_instance_type: cdktf.stringToTerraform(this._ec2InstanceType),
        fleet_type: cdktf.stringToTerraform(this._fleetType),
        instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
        metric_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._metricGroups),
        name: cdktf.stringToTerraform(this._name),
        new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ec2_inbound_permission: cdktf.listMapper(gameliftFleetEc2InboundPermissionToTerraform)(this._ec2InboundPermission),
        resource_creation_limit_policy: gameliftFleetResourceCreationLimitPolicyToTerraform(this._resourceCreationLimitPolicy),
        runtime_configuration: gameliftFleetRuntimeConfigurationToTerraform(this._runtimeConfiguration),
        timeouts: gameliftFleetTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface GameliftGameSessionQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#destinations GameliftGameSessionQueue#destinations}
    */
    readonly destinations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#name GameliftGameSessionQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#tags GameliftGameSessionQueue#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#tags_all GameliftGameSessionQueue#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
    /**
    * player_latency_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#player_latency_policy GameliftGameSessionQueue#player_latency_policy}
    */
    readonly playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[];
  }
  export interface GameliftGameSessionQueuePlayerLatencyPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}
    */
    readonly maximumIndividualPlayerLatencyMilliseconds: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}
    */
    readonly policyDurationSeconds?: number;
  }

  function gameliftGameSessionQueuePlayerLatencyPolicyToTerraform(struct?: GameliftGameSessionQueuePlayerLatencyPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      maximum_individual_player_latency_milliseconds: cdktf.numberToTerraform(struct!.maximumIndividualPlayerLatencyMilliseconds),
      policy_duration_seconds: cdktf.numberToTerraform(struct!.policyDurationSeconds),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html aws_gamelift_game_session_queue}
  */
  export class GameliftGameSessionQueue extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_gamelift_game_session_queue";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue.html aws_gamelift_game_session_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftGameSessionQueueConfig
    */
    public constructor(scope: Construct, id: string, config: GameliftGameSessionQueueConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_gamelift_game_session_queue',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._destinations = config.destinations;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeoutInSeconds = config.timeoutInSeconds;
      this._playerLatencyPolicy = config.playerLatencyPolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // destinations - computed: false, optional: true, required: false
    private _destinations?: string[] | undefined; 
    public get destinations() {
      return this.getListAttribute('destinations');
    }
    public set destinations(value: string[] | undefined) {
      this._destinations = value;
    }
    public resetDestinations() {
      this._destinations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
      return this._destinations
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

    // timeout_in_seconds - computed: false, optional: true, required: false
    private _timeoutInSeconds?: number | undefined; 
    public get timeoutInSeconds() {
      return this.getNumberAttribute('timeout_in_seconds');
    }
    public set timeoutInSeconds(value: number | undefined) {
      this._timeoutInSeconds = value;
    }
    public resetTimeoutInSeconds() {
      this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInSecondsInput() {
      return this._timeoutInSeconds
    }

    // player_latency_policy - computed: false, optional: true, required: false
    private _playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[] | undefined; 
    public get playerLatencyPolicy() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('player_latency_policy') as any;
    }
    public set playerLatencyPolicy(value: GameliftGameSessionQueuePlayerLatencyPolicy[] | undefined) {
      this._playerLatencyPolicy = value;
    }
    public resetPlayerLatencyPolicy() {
      this._playerLatencyPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get playerLatencyPolicyInput() {
      return this._playerLatencyPolicy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform)(this._destinations),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
        player_latency_policy: cdktf.listMapper(gameliftGameSessionQueuePlayerLatencyPolicyToTerraform)(this._playerLatencyPolicy),
      };
    }
  }
}
