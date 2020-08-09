// https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "app_server": {
        "type": "string",
        "optional": true
      },
      "app_server_version": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "auto_assign_elastic_ips": {
        "type": "bool",
        "optional": true
      },
      "auto_assign_public_ips": {
        "type": "bool",
        "optional": true
      },
      "auto_healing": {
        "type": "bool",
        "optional": true
      },
      "custom_configure_recipes": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "custom_deploy_recipes": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "custom_instance_profile_arn": {
        "type": "string",
        "optional": true
      },
      "custom_json": {
        "type": "string",
        "optional": true
      },
      "custom_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "custom_setup_recipes": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "custom_shutdown_recipes": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "custom_undeploy_recipes": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "drain_elb_on_shutdown": {
        "type": "bool",
        "optional": true
      },
      "elastic_load_balancer": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "install_updates_on_boot": {
        "type": "bool",
        "optional": true
      },
      "instance_shutdown_timeout": {
        "type": "number",
        "optional": true
      },
      "jvm_options": {
        "type": "string",
        "optional": true
      },
      "jvm_type": {
        "type": "string",
        "optional": true
      },
      "jvm_version": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "stack_id": {
        "type": "string",
        "required": true
      },
      "system_packages": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "use_ebs_optimized_instances": {
        "type": "bool",
        "optional": true
      }
    },
    "block_types": {
      "ebs_volume": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "encrypted": {
              "type": "bool",
              "optional": true
            },
            "iops": {
              "type": "number",
              "optional": true
            },
            "mount_point": {
              "type": "string",
              "required": true
            },
            "number_of_disks": {
              "type": "number",
              "required": true
            },
            "raid_level": {
              "type": "string",
              "optional": true
            },
            "size": {
              "type": "number",
              "required": true
            },
            "type": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OpsworksJavaAppLayerConfig extends TerraformMetaArguments {
  readonly appServer?: string;
  readonly appServerVersion?: string;
  readonly autoAssignElasticIps?: boolean;
  readonly autoAssignPublicIps?: boolean;
  readonly autoHealing?: boolean;
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
  readonly jvmOptions?: string;
  readonly jvmType?: string;
  readonly jvmVersion?: string;
  readonly name?: string;
  readonly stackId: string;
  readonly systemPackages?: string[];
  readonly tags?: { [key: string]: string };
  readonly useEbsOptimizedInstances?: boolean;
  /** ebs_volume block */
  readonly ebsVolume?: OpsworksJavaAppLayerEbsVolume[];
}
export interface OpsworksJavaAppLayerEbsVolume {
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly mountPoint: string;
  readonly numberOfDisks: number;
  readonly raidLevel?: string;
  readonly size: number;
  readonly type?: string;
}

// Resource

export class OpsworksJavaAppLayer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksJavaAppLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_java_app_layer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServer = config.appServer;
    this._appServerVersion = config.appServerVersion;
    this._autoAssignElasticIps = config.autoAssignElasticIps;
    this._autoAssignPublicIps = config.autoAssignPublicIps;
    this._autoHealing = config.autoHealing;
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
    this._jvmOptions = config.jvmOptions;
    this._jvmType = config.jvmType;
    this._jvmVersion = config.jvmVersion;
    this._name = config.name;
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
    return this._appServer;
  }
  public set appServer(value: string | undefined) {
    this._appServer = value;
  }

  // app_server_version - computed: false, optional: true, required: false
  private _appServerVersion?: string;
  public get appServerVersion() {
    return this._appServerVersion;
  }
  public set appServerVersion(value: string | undefined) {
    this._appServerVersion = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_assign_elastic_ips - computed: false, optional: true, required: false
  private _autoAssignElasticIps?: boolean;
  public get autoAssignElasticIps() {
    return this._autoAssignElasticIps;
  }
  public set autoAssignElasticIps(value: boolean | undefined) {
    this._autoAssignElasticIps = value;
  }

  // auto_assign_public_ips - computed: false, optional: true, required: false
  private _autoAssignPublicIps?: boolean;
  public get autoAssignPublicIps() {
    return this._autoAssignPublicIps;
  }
  public set autoAssignPublicIps(value: boolean | undefined) {
    this._autoAssignPublicIps = value;
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean;
  public get autoHealing() {
    return this._autoHealing;
  }
  public set autoHealing(value: boolean | undefined) {
    this._autoHealing = value;
  }

  // custom_configure_recipes - computed: false, optional: true, required: false
  private _customConfigureRecipes?: string[];
  public get customConfigureRecipes() {
    return this._customConfigureRecipes;
  }
  public set customConfigureRecipes(value: string[] | undefined) {
    this._customConfigureRecipes = value;
  }

  // custom_deploy_recipes - computed: false, optional: true, required: false
  private _customDeployRecipes?: string[];
  public get customDeployRecipes() {
    return this._customDeployRecipes;
  }
  public set customDeployRecipes(value: string[] | undefined) {
    this._customDeployRecipes = value;
  }

  // custom_instance_profile_arn - computed: false, optional: true, required: false
  private _customInstanceProfileArn?: string;
  public get customInstanceProfileArn() {
    return this._customInstanceProfileArn;
  }
  public set customInstanceProfileArn(value: string | undefined) {
    this._customInstanceProfileArn = value;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string;
  public get customJson() {
    return this._customJson;
  }
  public set customJson(value: string | undefined) {
    this._customJson = value;
  }

  // custom_security_group_ids - computed: false, optional: true, required: false
  private _customSecurityGroupIds?: string[];
  public get customSecurityGroupIds() {
    return this._customSecurityGroupIds;
  }
  public set customSecurityGroupIds(value: string[] | undefined) {
    this._customSecurityGroupIds = value;
  }

  // custom_setup_recipes - computed: false, optional: true, required: false
  private _customSetupRecipes?: string[];
  public get customSetupRecipes() {
    return this._customSetupRecipes;
  }
  public set customSetupRecipes(value: string[] | undefined) {
    this._customSetupRecipes = value;
  }

  // custom_shutdown_recipes - computed: false, optional: true, required: false
  private _customShutdownRecipes?: string[];
  public get customShutdownRecipes() {
    return this._customShutdownRecipes;
  }
  public set customShutdownRecipes(value: string[] | undefined) {
    this._customShutdownRecipes = value;
  }

  // custom_undeploy_recipes - computed: false, optional: true, required: false
  private _customUndeployRecipes?: string[];
  public get customUndeployRecipes() {
    return this._customUndeployRecipes;
  }
  public set customUndeployRecipes(value: string[] | undefined) {
    this._customUndeployRecipes = value;
  }

  // drain_elb_on_shutdown - computed: false, optional: true, required: false
  private _drainElbOnShutdown?: boolean;
  public get drainElbOnShutdown() {
    return this._drainElbOnShutdown;
  }
  public set drainElbOnShutdown(value: boolean | undefined) {
    this._drainElbOnShutdown = value;
  }

  // elastic_load_balancer - computed: false, optional: true, required: false
  private _elasticLoadBalancer?: string;
  public get elasticLoadBalancer() {
    return this._elasticLoadBalancer;
  }
  public set elasticLoadBalancer(value: string | undefined) {
    this._elasticLoadBalancer = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean;
  public get installUpdatesOnBoot() {
    return this._installUpdatesOnBoot;
  }
  public set installUpdatesOnBoot(value: boolean | undefined) {
    this._installUpdatesOnBoot = value;
  }

  // instance_shutdown_timeout - computed: false, optional: true, required: false
  private _instanceShutdownTimeout?: number;
  public get instanceShutdownTimeout() {
    return this._instanceShutdownTimeout;
  }
  public set instanceShutdownTimeout(value: number | undefined) {
    this._instanceShutdownTimeout = value;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string;
  public get jvmOptions() {
    return this._jvmOptions;
  }
  public set jvmOptions(value: string | undefined) {
    this._jvmOptions = value;
  }

  // jvm_type - computed: false, optional: true, required: false
  private _jvmType?: string;
  public get jvmType() {
    return this._jvmType;
  }
  public set jvmType(value: string | undefined) {
    this._jvmType = value;
  }

  // jvm_version - computed: false, optional: true, required: false
  private _jvmVersion?: string;
  public get jvmVersion() {
    return this._jvmVersion;
  }
  public set jvmVersion(value: string | undefined) {
    this._jvmVersion = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[];
  public get systemPackages() {
    return this._systemPackages;
  }
  public set systemPackages(value: string[] | undefined) {
    this._systemPackages = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // use_ebs_optimized_instances - computed: false, optional: true, required: false
  private _useEbsOptimizedInstances?: boolean;
  public get useEbsOptimizedInstances() {
    return this._useEbsOptimizedInstances;
  }
  public set useEbsOptimizedInstances(value: boolean | undefined) {
    this._useEbsOptimizedInstances = value;
  }

  // ebs_volume - computed: false, optional: true, required: false
  private _ebsVolume?: OpsworksJavaAppLayerEbsVolume[];
  public get ebsVolume() {
    return this._ebsVolume;
  }
  public set ebsVolume(value: OpsworksJavaAppLayerEbsVolume[] | undefined) {
    this._ebsVolume = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_server: this._appServer,
      app_server_version: this._appServerVersion,
      auto_assign_elastic_ips: this._autoAssignElasticIps,
      auto_assign_public_ips: this._autoAssignPublicIps,
      auto_healing: this._autoHealing,
      custom_configure_recipes: this._customConfigureRecipes,
      custom_deploy_recipes: this._customDeployRecipes,
      custom_instance_profile_arn: this._customInstanceProfileArn,
      custom_json: this._customJson,
      custom_security_group_ids: this._customSecurityGroupIds,
      custom_setup_recipes: this._customSetupRecipes,
      custom_shutdown_recipes: this._customShutdownRecipes,
      custom_undeploy_recipes: this._customUndeployRecipes,
      drain_elb_on_shutdown: this._drainElbOnShutdown,
      elastic_load_balancer: this._elasticLoadBalancer,
      install_updates_on_boot: this._installUpdatesOnBoot,
      instance_shutdown_timeout: this._instanceShutdownTimeout,
      jvm_options: this._jvmOptions,
      jvm_type: this._jvmType,
      jvm_version: this._jvmVersion,
      name: this._name,
      stack_id: this._stackId,
      system_packages: this._systemPackages,
      tags: this._tags,
      use_ebs_optimized_instances: this._useEbsOptimizedInstances,
      ebs_volume: this._ebsVolume,
    };
  }
}
