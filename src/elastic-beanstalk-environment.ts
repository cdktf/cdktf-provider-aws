// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "all_settings": {
        "type": [
          "set",
          [
            "object",
            {
              "name": "string",
              "namespace": "string",
              "resource": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "application": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "autoscaling_groups": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "cname": {
        "type": "string",
        "computed": true
      },
      "cname_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "endpoint_url": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instances": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "launch_configurations": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "load_balancers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "platform_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "poll_interval": {
        "type": "string",
        "optional": true
      },
      "queues": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "solution_stack_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "template_name": {
        "type": "string",
        "optional": true
      },
      "tier": {
        "type": "string",
        "optional": true
      },
      "triggers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "version_label": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "wait_for_ready_timeout": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "setting": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "namespace": {
              "type": "string",
              "required": true
            },
            "resource": {
              "type": "string",
              "optional": true
            },
            "value": {
              "type": "string",
              "required": true
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ElasticBeanstalkEnvironmentConfig extends TerraformMetaArguments {
  readonly application: string;
  readonly cnamePrefix?: string;
  readonly description?: string;
  readonly name: string;
  readonly platformArn?: string;
  readonly pollInterval?: string;
  readonly solutionStackName?: string;
  readonly tags?: { [key: string]: string };
  readonly templateName?: string;
  readonly tier?: string;
  readonly versionLabel?: string;
  readonly waitForReadyTimeout?: string;
  /** setting block */
  readonly setting?: ElasticBeanstalkEnvironmentSetting[];
}
export class ElasticBeanstalkEnvironmentAllSettings extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ElasticBeanstalkEnvironmentSetting {
  readonly name: string;
  readonly namespace: string;
  readonly resource?: string;
  readonly value: string;
}

// Resource

export class ElasticBeanstalkEnvironment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._application = config.application;
    this._cnamePrefix = config.cnamePrefix;
    this._description = config.description;
    this._name = config.name;
    this._platformArn = config.platformArn;
    this._pollInterval = config.pollInterval;
    this._solutionStackName = config.solutionStackName;
    this._tags = config.tags;
    this._templateName = config.templateName;
    this._tier = config.tier;
    this._versionLabel = config.versionLabel;
    this._waitForReadyTimeout = config.waitForReadyTimeout;
    this._setting = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_settings - computed: true, optional: false, required: true
  public allSettings(index: string) {
    return new ElasticBeanstalkEnvironmentAllSettings(this, 'all_settings', index);
  }

  // application - computed: false, optional: false, required: true
  private _application: string;
  public get application() {
    return this._application;
  }
  public set application(value: string) {
    this._application = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_groups - computed: true, optional: false, required: true
  public get autoscalingGroups() {
    return this.getListAttribute('autoscaling_groups');
  }

  // cname - computed: true, optional: false, required: true
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // cname_prefix - computed: true, optional: true, required: false
  private _cnamePrefix?: string;
  public get cnamePrefix() {
    return this._cnamePrefix ?? this.getStringAttribute('cname_prefix');
  }
  public set cnamePrefix(value: string | undefined) {
    this._cnamePrefix = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // endpoint_url - computed: true, optional: false, required: true
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: false, required: true
  public get instances() {
    return this.getListAttribute('instances');
  }

  // launch_configurations - computed: true, optional: false, required: true
  public get launchConfigurations() {
    return this.getListAttribute('launch_configurations');
  }

  // load_balancers - computed: true, optional: false, required: true
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_arn - computed: true, optional: true, required: false
  private _platformArn?: string;
  public get platformArn() {
    return this._platformArn ?? this.getStringAttribute('platform_arn');
  }
  public set platformArn(value: string | undefined) {
    this._platformArn = value;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: string;
  public get pollInterval() {
    return this._pollInterval;
  }
  public set pollInterval(value: string | undefined) {
    this._pollInterval = value;
  }

  // queues - computed: true, optional: false, required: true
  public get queues() {
    return this.getListAttribute('queues');
  }

  // solution_stack_name - computed: true, optional: true, required: false
  private _solutionStackName?: string;
  public get solutionStackName() {
    return this._solutionStackName ?? this.getStringAttribute('solution_stack_name');
  }
  public set solutionStackName(value: string | undefined) {
    this._solutionStackName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string;
  public get templateName() {
    return this._templateName;
  }
  public set templateName(value: string | undefined) {
    this._templateName = value;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string | undefined) {
    this._tier = value;
  }

  // triggers - computed: true, optional: false, required: true
  public get triggers() {
    return this.getListAttribute('triggers');
  }

  // version_label - computed: true, optional: true, required: false
  private _versionLabel?: string;
  public get versionLabel() {
    return this._versionLabel ?? this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string | undefined) {
    this._versionLabel = value;
  }

  // wait_for_ready_timeout - computed: false, optional: true, required: false
  private _waitForReadyTimeout?: string;
  public get waitForReadyTimeout() {
    return this._waitForReadyTimeout;
  }
  public set waitForReadyTimeout(value: string | undefined) {
    this._waitForReadyTimeout = value;
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: ElasticBeanstalkEnvironmentSetting[];
  public get setting() {
    return this._setting;
  }
  public set setting(value: ElasticBeanstalkEnvironmentSetting[] | undefined) {
    this._setting = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application: this._application,
      cname_prefix: this._cnamePrefix,
      description: this._description,
      name: this._name,
      platform_arn: this._platformArn,
      poll_interval: this._pollInterval,
      solution_stack_name: this._solutionStackName,
      tags: this._tags,
      template_name: this._templateName,
      tier: this._tier,
      version_label: this._versionLabel,
      wait_for_ready_timeout: this._waitForReadyTimeout,
      setting: this._setting,
    };
  }
}
