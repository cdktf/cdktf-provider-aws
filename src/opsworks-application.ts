// https://www.terraform.io/docs/providers/aws/r/opsworks_application.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auto_bundle_on_deploy": {
        "type": "string",
        "optional": true
      },
      "aws_flow_ruby_settings": {
        "type": "string",
        "optional": true
      },
      "data_source_arn": {
        "type": "string",
        "optional": true
      },
      "data_source_database_name": {
        "type": "string",
        "optional": true
      },
      "data_source_type": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "document_root": {
        "type": "string",
        "optional": true
      },
      "domains": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "enable_ssl": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "rails_env": {
        "type": "string",
        "optional": true
      },
      "short_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "stack_id": {
        "type": "string",
        "required": true
      },
      "type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "app_source": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "password": {
              "type": "string",
              "optional": true,
              "sensitive": true
            },
            "revision": {
              "type": "string",
              "optional": true
            },
            "ssh_key": {
              "type": "string",
              "optional": true,
              "sensitive": true
            },
            "type": {
              "type": "string",
              "required": true
            },
            "url": {
              "type": "string",
              "optional": true
            },
            "username": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "environment": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "secure": {
              "type": "bool",
              "optional": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "ssl_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "certificate": {
              "type": "string",
              "required": true
            },
            "chain": {
              "type": "string",
              "optional": true
            },
            "private_key": {
              "type": "string",
              "required": true,
              "sensitive": true
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

export interface OpsworksApplicationConfig extends TerraformMetaArguments {
  readonly autoBundleOnDeploy?: string;
  readonly awsFlowRubySettings?: string;
  readonly dataSourceArn?: string;
  readonly dataSourceDatabaseName?: string;
  readonly dataSourceType?: string;
  readonly description?: string;
  readonly documentRoot?: string;
  readonly domains?: string[];
  readonly enableSsl?: boolean;
  readonly name: string;
  readonly railsEnv?: string;
  readonly shortName?: string;
  readonly stackId: string;
  readonly type: string;
  /** app_source block */
  readonly appSource?: OpsworksApplicationAppSource[];
  /** environment block */
  readonly environment?: OpsworksApplicationEnvironment[];
  /** ssl_configuration block */
  readonly sslConfiguration?: OpsworksApplicationSslConfiguration[];
}
export interface OpsworksApplicationAppSource {
  readonly password?: string;
  readonly revision?: string;
  readonly sshKey?: string;
  readonly type: string;
  readonly url?: string;
  readonly username?: string;
}
export interface OpsworksApplicationEnvironment {
  readonly key: string;
  readonly secure?: boolean;
  readonly value: string;
}
export interface OpsworksApplicationSslConfiguration {
  readonly certificate: string;
  readonly chain?: string;
  readonly privateKey: string;
}

// Resource

export class OpsworksApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoBundleOnDeploy = config.autoBundleOnDeploy;
    this._awsFlowRubySettings = config.awsFlowRubySettings;
    this._dataSourceArn = config.dataSourceArn;
    this._dataSourceDatabaseName = config.dataSourceDatabaseName;
    this._dataSourceType = config.dataSourceType;
    this._description = config.description;
    this._documentRoot = config.documentRoot;
    this._domains = config.domains;
    this._enableSsl = config.enableSsl;
    this._name = config.name;
    this._railsEnv = config.railsEnv;
    this._shortName = config.shortName;
    this._stackId = config.stackId;
    this._type = config.type;
    this._appSource = config.appSource;
    this._environment = config.environment;
    this._sslConfiguration = config.sslConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_bundle_on_deploy - computed: false, optional: true, required: false
  private _autoBundleOnDeploy?: string;
  public get autoBundleOnDeploy() {
    return this._autoBundleOnDeploy;
  }
  public set autoBundleOnDeploy(value: string | undefined) {
    this._autoBundleOnDeploy = value;
  }

  // aws_flow_ruby_settings - computed: false, optional: true, required: false
  private _awsFlowRubySettings?: string;
  public get awsFlowRubySettings() {
    return this._awsFlowRubySettings;
  }
  public set awsFlowRubySettings(value: string | undefined) {
    this._awsFlowRubySettings = value;
  }

  // data_source_arn - computed: false, optional: true, required: false
  private _dataSourceArn?: string;
  public get dataSourceArn() {
    return this._dataSourceArn;
  }
  public set dataSourceArn(value: string | undefined) {
    this._dataSourceArn = value;
  }

  // data_source_database_name - computed: false, optional: true, required: false
  private _dataSourceDatabaseName?: string;
  public get dataSourceDatabaseName() {
    return this._dataSourceDatabaseName;
  }
  public set dataSourceDatabaseName(value: string | undefined) {
    this._dataSourceDatabaseName = value;
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string;
  public get dataSourceType() {
    return this._dataSourceType;
  }
  public set dataSourceType(value: string | undefined) {
    this._dataSourceType = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // document_root - computed: false, optional: true, required: false
  private _documentRoot?: string;
  public get documentRoot() {
    return this._documentRoot;
  }
  public set documentRoot(value: string | undefined) {
    this._documentRoot = value;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[];
  public get domains() {
    return this._domains;
  }
  public set domains(value: string[] | undefined) {
    this._domains = value;
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean;
  public get enableSsl() {
    return this._enableSsl;
  }
  public set enableSsl(value: boolean | undefined) {
    this._enableSsl = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // rails_env - computed: false, optional: true, required: false
  private _railsEnv?: string;
  public get railsEnv() {
    return this._railsEnv;
  }
  public set railsEnv(value: string | undefined) {
    this._railsEnv = value;
  }

  // short_name - computed: true, optional: true, required: false
  private _shortName?: string;
  public get shortName() {
    return this._shortName ?? this.getStringAttribute('short_name');
  }
  public set shortName(value: string | undefined) {
    this._shortName = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // app_source - computed: false, optional: true, required: false
  private _appSource?: OpsworksApplicationAppSource[];
  public get appSource() {
    return this._appSource;
  }
  public set appSource(value: OpsworksApplicationAppSource[] | undefined) {
    this._appSource = value;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: OpsworksApplicationEnvironment[];
  public get environment() {
    return this._environment;
  }
  public set environment(value: OpsworksApplicationEnvironment[] | undefined) {
    this._environment = value;
  }

  // ssl_configuration - computed: false, optional: true, required: false
  private _sslConfiguration?: OpsworksApplicationSslConfiguration[];
  public get sslConfiguration() {
    return this._sslConfiguration;
  }
  public set sslConfiguration(value: OpsworksApplicationSslConfiguration[] | undefined) {
    this._sslConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_bundle_on_deploy: this._autoBundleOnDeploy,
      aws_flow_ruby_settings: this._awsFlowRubySettings,
      data_source_arn: this._dataSourceArn,
      data_source_database_name: this._dataSourceDatabaseName,
      data_source_type: this._dataSourceType,
      description: this._description,
      document_root: this._documentRoot,
      domains: this._domains,
      enable_ssl: this._enableSsl,
      name: this._name,
      rails_env: this._railsEnv,
      short_name: this._shortName,
      stack_id: this._stackId,
      type: this._type,
      app_source: this._appSource,
      environment: this._environment,
      ssl_configuration: this._sslConfiguration,
    };
  }
}
