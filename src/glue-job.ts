// https://www.terraform.io/docs/providers/aws/r/glue_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueJobConfig extends TerraformMetaArguments {
  readonly allocatedCapacity?: number;
  readonly connections?: string[];
  readonly defaultArguments?: { [key: string]: string };
  readonly description?: string;
  readonly glueVersion?: string;
  readonly maxCapacity?: number;
  readonly maxRetries?: number;
  readonly name: string;
  readonly numberOfWorkers?: number;
  readonly roleArn: string;
  readonly securityConfiguration?: string;
  readonly tags?: { [key: string]: string };
  readonly timeout?: number;
  readonly workerType?: string;
  /** command block */
  readonly command: GlueJobCommand[];
  /** execution_property block */
  readonly executionProperty?: GlueJobExecutionProperty[];
  /** notification_property block */
  readonly notificationProperty?: GlueJobNotificationProperty[];
}
export interface GlueJobCommand {
  readonly name?: string;
  readonly pythonVersion?: string;
  readonly scriptLocation: string;
}
export interface GlueJobExecutionProperty {
  readonly maxConcurrentRuns?: number;
}
export interface GlueJobNotificationProperty {
  readonly notifyDelayAfter?: number;
}

// Resource

export class GlueJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_job',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedCapacity = config.allocatedCapacity;
    this._connections = config.connections;
    this._defaultArguments = config.defaultArguments;
    this._description = config.description;
    this._glueVersion = config.glueVersion;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._numberOfWorkers = config.numberOfWorkers;
    this._roleArn = config.roleArn;
    this._securityConfiguration = config.securityConfiguration;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._command = config.command;
    this._executionProperty = config.executionProperty;
    this._notificationProperty = config.notificationProperty;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_capacity - computed: true, optional: true, required: false
  private _allocatedCapacity?: number;
  public get allocatedCapacity() {
    return this.getNumberAttribute('allocated_capacity');
  }
  public set allocatedCapacity(value: number) {
    this._allocatedCapacity = value;
  }
  public resetAllocatedCapacity() {
    this._allocatedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedCapacityInput() {
    return this._allocatedCapacity
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[];
  public get connections() {
    return this.getListAttribute('connections');
  }
  public set connections(value: string[] ) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections
  }

  // default_arguments - computed: false, optional: true, required: false
  private _defaultArguments?: { [key: string]: string };
  public get defaultArguments() {
    return this.interpolationForAttribute('default_arguments') as any;
  }
  public set defaultArguments(value: { [key: string]: string } ) {
    this._defaultArguments = value;
  }
  public resetDefaultArguments() {
    this._defaultArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultArgumentsInput() {
    return this._defaultArguments
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
    return this._glueVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._maxCapacity
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number ) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
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

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number;
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }
  public set numberOfWorkers(value: number ) {
    this._numberOfWorkers = value;
  }
  public resetNumberOfWorkers() {
    this._numberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfWorkersInput() {
    return this._numberOfWorkers
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string;
  public get workerType() {
    return this.getStringAttribute('worker_type');
  }
  public set workerType(value: string ) {
    this._workerType = value;
  }
  public resetWorkerType() {
    this._workerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeInput() {
    return this._workerType
  }

  // command - computed: false, optional: false, required: true
  private _command: GlueJobCommand[];
  public get command() {
    return this.interpolationForAttribute('command') as any;
  }
  public set command(value: GlueJobCommand[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }

  // execution_property - computed: false, optional: true, required: false
  private _executionProperty?: GlueJobExecutionProperty[];
  public get executionProperty() {
    return this.interpolationForAttribute('execution_property') as any;
  }
  public set executionProperty(value: GlueJobExecutionProperty[] ) {
    this._executionProperty = value;
  }
  public resetExecutionProperty() {
    this._executionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionPropertyInput() {
    return this._executionProperty
  }

  // notification_property - computed: false, optional: true, required: false
  private _notificationProperty?: GlueJobNotificationProperty[];
  public get notificationProperty() {
    return this.interpolationForAttribute('notification_property') as any;
  }
  public set notificationProperty(value: GlueJobNotificationProperty[] ) {
    this._notificationProperty = value;
  }
  public resetNotificationProperty() {
    this._notificationProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPropertyInput() {
    return this._notificationProperty
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_capacity: this._allocatedCapacity,
      connections: this._connections,
      default_arguments: this._defaultArguments,
      description: this._description,
      glue_version: this._glueVersion,
      max_capacity: this._maxCapacity,
      max_retries: this._maxRetries,
      name: this._name,
      number_of_workers: this._numberOfWorkers,
      role_arn: this._roleArn,
      security_configuration: this._securityConfiguration,
      tags: this._tags,
      timeout: this._timeout,
      worker_type: this._workerType,
      command: this._command,
      execution_property: this._executionProperty,
      notification_property: this._notificationProperty,
    };
  }
}
