// https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksRailsAppLayerConfig extends cdktf.TerraformMetaArguments {
  readonly appServer?: string;
  readonly autoAssignElasticIps?: boolean;
  readonly autoAssignPublicIps?: boolean;
  readonly autoHealing?: boolean;
  readonly bundlerVersion?: string;
  readonly customConfigureRecipes?: string[];
  readonly customDeployRecipes?: string[];
  readonly customInstanceProfileArn?: string;
  readonly customJson?: string;
  readonly customSecurityGroupIds?: string[];
  readonly customSetupRecipes?: string[];
  readonly customShutdownRecipes?: string[];
  readonly customUndeployRecipes?: string[];
  readonly drainElbOnShutdown?: boolean;
  readonly elasticLoadBalancer?: string;
  readonly installUpdatesOnBoot?: boolean;
  readonly instanceShutdownTimeout?: number;
  readonly manageBundler?: boolean;
  readonly name?: string;
  readonly passengerVersion?: string;
  readonly rubyVersion?: string;
  readonly rubygemsVersion?: string;
  readonly stackId: string;
  readonly systemPackages?: string[];
  readonly tags?: { [key: string]: string };
  readonly useEbsOptimizedInstances?: boolean;
  /** ebs_volume block */
  readonly ebsVolume?: OpsworksRailsAppLayerEbsVolume[];
}
export interface OpsworksRailsAppLayerEbsVolume {
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly mountPoint: string;
  readonly numberOfDisks: number;
  readonly raidLevel?: string;
  readonly size: number;
  readonly type?: string;
}

function opsworksRailsAppLayerEbsVolumeToTerraform(struct?: OpsworksRailsAppLayerEbsVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
    raid_level: cdktf.stringToTerraform(struct!.raidLevel),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class OpsworksRailsAppLayer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksRailsAppLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_rails_app_layer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServer = config.appServer;
    this._autoAssignElasticIps = config.autoAssignElasticIps;
    this._autoAssignPublicIps = config.autoAssignPublicIps;
    this._autoHealing = config.autoHealing;
    this._bundlerVersion = config.bundlerVersion;
    this._customConfigureRecipes = config.customConfigureRecipes;
    this._customDeployRecipes = config.customDeployRecipes;
    this._customInstanceProfileArn = config.customInstanceProfileArn;
    this._customJson = config.customJson;
    this._customSecurityGroupIds = config.customSecurityGroupIds;
    this._customSetupRecipes = config.customSetupRecipes;
    this._customShutdownRecipes = config.customShutdownRecipes;
    this._customUndeployRecipes = config.customUndeployRecipes;
    this._drainElbOnShutdown = config.drainElbOnShutdown;
    this._elasticLoadBalancer = config.elasticLoadBalancer;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceShutdownTimeout = config.instanceShutdownTimeout;
    this._manageBundler = config.manageBundler;
    this._name = config.name;
    this._passengerVersion = config.passengerVersion;
    this._rubyVersion = config.rubyVersion;
    this._rubygemsVersion = config.rubygemsVersion;
    this._stackId = config.stackId;
    this._systemPackages = config.systemPackages;
    this._tags = config.tags;
    this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
    this._ebsVolume = config.ebsVolume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_server - computed: false, optional: true, required: false
  private _appServer?: string;
  public get appServer() {
    return this.getStringAttribute('app_server');
  }
  public set appServer(value: string ) {
    this._appServer = value;
  }
  public resetAppServer() {
    this._appServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServerInput() {
    return this._appServer
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_assign_elastic_ips - computed: false, optional: true, required: false
  private _autoAssignElasticIps?: boolean;
  public get autoAssignElasticIps() {
    return this.getBooleanAttribute('auto_assign_elastic_ips');
  }
  public set autoAssignElasticIps(value: boolean ) {
    this._autoAssignElasticIps = value;
  }
  public resetAutoAssignElasticIps() {
    this._autoAssignElasticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignElasticIpsInput() {
    return this._autoAssignElasticIps
  }

  // auto_assign_public_ips - computed: false, optional: true, required: false
  private _autoAssignPublicIps?: boolean;
  public get autoAssignPublicIps() {
    return this.getBooleanAttribute('auto_assign_public_ips');
  }
  public set autoAssignPublicIps(value: boolean ) {
    this._autoAssignPublicIps = value;
  }
  public resetAutoAssignPublicIps() {
    this._autoAssignPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignPublicIpsInput() {
    return this._autoAssignPublicIps
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean;
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean ) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing
  }

  // bundler_version - computed: false, optional: true, required: false
  private _bundlerVersion?: string;
  public get bundlerVersion() {
    return this.getStringAttribute('bundler_version');
  }
  public set bundlerVersion(value: string ) {
    this._bundlerVersion = value;
  }
  public resetBundlerVersion() {
    this._bundlerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlerVersionInput() {
    return this._bundlerVersion
  }

  // custom_configure_recipes - computed: false, optional: true, required: false
  private _customConfigureRecipes?: string[];
  public get customConfigureRecipes() {
    return this.getListAttribute('custom_configure_recipes');
  }
  public set customConfigureRecipes(value: string[] ) {
    this._customConfigureRecipes = value;
  }
  public resetCustomConfigureRecipes() {
    this._customConfigureRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigureRecipesInput() {
    return this._customConfigureRecipes
  }

  // custom_deploy_recipes - computed: false, optional: true, required: false
  private _customDeployRecipes?: string[];
  public get customDeployRecipes() {
    return this.getListAttribute('custom_deploy_recipes');
  }
  public set customDeployRecipes(value: string[] ) {
    this._customDeployRecipes = value;
  }
  public resetCustomDeployRecipes() {
    this._customDeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeployRecipesInput() {
    return this._customDeployRecipes
  }

  // custom_instance_profile_arn - computed: false, optional: true, required: false
  private _customInstanceProfileArn?: string;
  public get customInstanceProfileArn() {
    return this.getStringAttribute('custom_instance_profile_arn');
  }
  public set customInstanceProfileArn(value: string ) {
    this._customInstanceProfileArn = value;
  }
  public resetCustomInstanceProfileArn() {
    this._customInstanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstanceProfileArnInput() {
    return this._customInstanceProfileArn
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string;
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string ) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson
  }

  // custom_security_group_ids - computed: false, optional: true, required: false
  private _customSecurityGroupIds?: string[];
  public get customSecurityGroupIds() {
    return this.getListAttribute('custom_security_group_ids');
  }
  public set customSecurityGroupIds(value: string[] ) {
    this._customSecurityGroupIds = value;
  }
  public resetCustomSecurityGroupIds() {
    this._customSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupIdsInput() {
    return this._customSecurityGroupIds
  }

  // custom_setup_recipes - computed: false, optional: true, required: false
  private _customSetupRecipes?: string[];
  public get customSetupRecipes() {
    return this.getListAttribute('custom_setup_recipes');
  }
  public set customSetupRecipes(value: string[] ) {
    this._customSetupRecipes = value;
  }
  public resetCustomSetupRecipes() {
    this._customSetupRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupRecipesInput() {
    return this._customSetupRecipes
  }

  // custom_shutdown_recipes - computed: false, optional: true, required: false
  private _customShutdownRecipes?: string[];
  public get customShutdownRecipes() {
    return this.getListAttribute('custom_shutdown_recipes');
  }
  public set customShutdownRecipes(value: string[] ) {
    this._customShutdownRecipes = value;
  }
  public resetCustomShutdownRecipes() {
    this._customShutdownRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customShutdownRecipesInput() {
    return this._customShutdownRecipes
  }

  // custom_undeploy_recipes - computed: false, optional: true, required: false
  private _customUndeployRecipes?: string[];
  public get customUndeployRecipes() {
    return this.getListAttribute('custom_undeploy_recipes');
  }
  public set customUndeployRecipes(value: string[] ) {
    this._customUndeployRecipes = value;
  }
  public resetCustomUndeployRecipes() {
    this._customUndeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUndeployRecipesInput() {
    return this._customUndeployRecipes
  }

  // drain_elb_on_shutdown - computed: false, optional: true, required: false
  private _drainElbOnShutdown?: boolean;
  public get drainElbOnShutdown() {
    return this.getBooleanAttribute('drain_elb_on_shutdown');
  }
  public set drainElbOnShutdown(value: boolean ) {
    this._drainElbOnShutdown = value;
  }
  public resetDrainElbOnShutdown() {
    this._drainElbOnShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainElbOnShutdownInput() {
    return this._drainElbOnShutdown
  }

  // elastic_load_balancer - computed: false, optional: true, required: false
  private _elasticLoadBalancer?: string;
  public get elasticLoadBalancer() {
    return this.getStringAttribute('elastic_load_balancer');
  }
  public set elasticLoadBalancer(value: string ) {
    this._elasticLoadBalancer = value;
  }
  public resetElasticLoadBalancer() {
    this._elasticLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancerInput() {
    return this._elasticLoadBalancer
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean;
  public get installUpdatesOnBoot() {
    return this.getBooleanAttribute('install_updates_on_boot');
  }
  public set installUpdatesOnBoot(value: boolean ) {
    this._installUpdatesOnBoot = value;
  }
  public resetInstallUpdatesOnBoot() {
    this._installUpdatesOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installUpdatesOnBootInput() {
    return this._installUpdatesOnBoot
  }

  // instance_shutdown_timeout - computed: false, optional: true, required: false
  private _instanceShutdownTimeout?: number;
  public get instanceShutdownTimeout() {
    return this.getNumberAttribute('instance_shutdown_timeout');
  }
  public set instanceShutdownTimeout(value: number ) {
    this._instanceShutdownTimeout = value;
  }
  public resetInstanceShutdownTimeout() {
    this._instanceShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShutdownTimeoutInput() {
    return this._instanceShutdownTimeout
  }

  // manage_bundler - computed: false, optional: true, required: false
  private _manageBundler?: boolean;
  public get manageBundler() {
    return this.getBooleanAttribute('manage_bundler');
  }
  public set manageBundler(value: boolean ) {
    this._manageBundler = value;
  }
  public resetManageBundler() {
    this._manageBundler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageBundlerInput() {
    return this._manageBundler
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // passenger_version - computed: false, optional: true, required: false
  private _passengerVersion?: string;
  public get passengerVersion() {
    return this.getStringAttribute('passenger_version');
  }
  public set passengerVersion(value: string ) {
    this._passengerVersion = value;
  }
  public resetPassengerVersion() {
    this._passengerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passengerVersionInput() {
    return this._passengerVersion
  }

  // ruby_version - computed: false, optional: true, required: false
  private _rubyVersion?: string;
  public get rubyVersion() {
    return this.getStringAttribute('ruby_version');
  }
  public set rubyVersion(value: string ) {
    this._rubyVersion = value;
  }
  public resetRubyVersion() {
    this._rubyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubyVersionInput() {
    return this._rubyVersion
  }

  // rubygems_version - computed: false, optional: true, required: false
  private _rubygemsVersion?: string;
  public get rubygemsVersion() {
    return this.getStringAttribute('rubygems_version');
  }
  public set rubygemsVersion(value: string ) {
    this._rubygemsVersion = value;
  }
  public resetRubygemsVersion() {
    this._rubygemsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rubygemsVersionInput() {
    return this._rubygemsVersion
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[];
  public get systemPackages() {
    return this.getListAttribute('system_packages');
  }
  public set systemPackages(value: string[] ) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages
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

  // use_ebs_optimized_instances - computed: false, optional: true, required: false
  private _useEbsOptimizedInstances?: boolean;
  public get useEbsOptimizedInstances() {
    return this.getBooleanAttribute('use_ebs_optimized_instances');
  }
  public set useEbsOptimizedInstances(value: boolean ) {
    this._useEbsOptimizedInstances = value;
  }
  public resetUseEbsOptimizedInstances() {
    this._useEbsOptimizedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEbsOptimizedInstancesInput() {
    return this._useEbsOptimizedInstances
  }

  // ebs_volume - computed: false, optional: true, required: false
  private _ebsVolume?: OpsworksRailsAppLayerEbsVolume[];
  public get ebsVolume() {
    return this.interpolationForAttribute('ebs_volume') as any;
  }
  public set ebsVolume(value: OpsworksRailsAppLayerEbsVolume[] ) {
    this._ebsVolume = value;
  }
  public resetEbsVolume() {
    this._ebsVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeInput() {
    return this._ebsVolume
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_server: cdktf.stringToTerraform(this._appServer),
      auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
      auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      bundler_version: cdktf.stringToTerraform(this._bundlerVersion),
      custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
      custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
      custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
      custom_json: cdktf.stringToTerraform(this._customJson),
      custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
      custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
      custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
      custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
      drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
      elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
      install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
      instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
      manage_bundler: cdktf.booleanToTerraform(this._manageBundler),
      name: cdktf.stringToTerraform(this._name),
      passenger_version: cdktf.stringToTerraform(this._passengerVersion),
      ruby_version: cdktf.stringToTerraform(this._rubyVersion),
      rubygems_version: cdktf.stringToTerraform(this._rubygemsVersion),
      stack_id: cdktf.stringToTerraform(this._stackId),
      system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
      ebs_volume: cdktf.listMapper(opsworksRailsAppLayerEbsVolumeToTerraform)(this._ebsVolume),
    };
  }
}
