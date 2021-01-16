// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudwatchEventTargetConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly eventBusName?: string;
  readonly input?: string;
  readonly inputPath?: string;
  readonly roleArn?: string;
  readonly rule: string;
  readonly targetId?: string;
  /** batch_target block */
  readonly batchTarget?: CloudwatchEventTargetBatchTarget[];
  /** ecs_target block */
  readonly ecsTarget?: CloudwatchEventTargetEcsTarget[];
  /** input_transformer block */
  readonly inputTransformer?: CloudwatchEventTargetInputTransformer[];
  /** kinesis_target block */
  readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
  /** run_command_targets block */
  readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
  /** sqs_target block */
  readonly sqsTarget?: CloudwatchEventTargetSqsTarget[];
}
export interface CloudwatchEventTargetBatchTarget {
  readonly arraySize?: number;
  readonly jobAttempts?: number;
  readonly jobDefinition: string;
  readonly jobName: string;
}
export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
  readonly assignPublicIp?: boolean;
  readonly securityGroups?: string[];
  readonly subnets: string[];
}
export interface CloudwatchEventTargetEcsTarget {
  readonly group?: string;
  readonly launchType?: string;
  readonly platformVersion?: string;
  readonly taskCount?: number;
  readonly taskDefinitionArn: string;
  /** network_configuration block */
  readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration[];
}
export interface CloudwatchEventTargetInputTransformer {
  readonly inputPaths?: { [key: string]: string };
  readonly inputTemplate: string;
}
export interface CloudwatchEventTargetKinesisTarget {
  readonly partitionKeyPath?: string;
}
export interface CloudwatchEventTargetRunCommandTargets {
  readonly key: string;
  readonly values: string[];
}
export interface CloudwatchEventTargetSqsTarget {
  readonly messageGroupId?: string;
}

// Resource

export class CloudwatchEventTarget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._eventBusName = config.eventBusName;
    this._input = config.input;
    this._inputPath = config.inputPath;
    this._roleArn = config.roleArn;
    this._rule = config.rule;
    this._targetId = config.targetId;
    this._batchTarget = config.batchTarget;
    this._ecsTarget = config.ecsTarget;
    this._inputTransformer = config.inputTransformer;
    this._kinesisTarget = config.kinesisTarget;
    this._runCommandTargets = config.runCommandTargets;
    this._sqsTarget = config.sqsTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // event_bus_name - computed: false, optional: true, required: false
  private _eventBusName?: string;
  public get eventBusName() {
    return this._eventBusName;
  }
  public set eventBusName(value: string | undefined) {
    this._eventBusName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string;
  public get input() {
    return this._input;
  }
  public set input(value: string | undefined) {
    this._input = value;
  }

  // input_path - computed: false, optional: true, required: false
  private _inputPath?: string;
  public get inputPath() {
    return this._inputPath;
  }
  public set inputPath(value: string | undefined) {
    this._inputPath = value;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }

  // rule - computed: false, optional: false, required: true
  private _rule: string;
  public get rule() {
    return this._rule;
  }
  public set rule(value: string) {
    this._rule = value;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string;
  public get targetId() {
    return this._targetId ?? this.getStringAttribute('target_id');
  }
  public set targetId(value: string | undefined) {
    this._targetId = value;
  }

  // batch_target - computed: false, optional: true, required: false
  private _batchTarget?: CloudwatchEventTargetBatchTarget[];
  public get batchTarget() {
    return this._batchTarget;
  }
  public set batchTarget(value: CloudwatchEventTargetBatchTarget[] | undefined) {
    this._batchTarget = value;
  }

  // ecs_target - computed: false, optional: true, required: false
  private _ecsTarget?: CloudwatchEventTargetEcsTarget[];
  public get ecsTarget() {
    return this._ecsTarget;
  }
  public set ecsTarget(value: CloudwatchEventTargetEcsTarget[] | undefined) {
    this._ecsTarget = value;
  }

  // input_transformer - computed: false, optional: true, required: false
  private _inputTransformer?: CloudwatchEventTargetInputTransformer[];
  public get inputTransformer() {
    return this._inputTransformer;
  }
  public set inputTransformer(value: CloudwatchEventTargetInputTransformer[] | undefined) {
    this._inputTransformer = value;
  }

  // kinesis_target - computed: false, optional: true, required: false
  private _kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
  public get kinesisTarget() {
    return this._kinesisTarget;
  }
  public set kinesisTarget(value: CloudwatchEventTargetKinesisTarget[] | undefined) {
    this._kinesisTarget = value;
  }

  // run_command_targets - computed: false, optional: true, required: false
  private _runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
  public get runCommandTargets() {
    return this._runCommandTargets;
  }
  public set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] | undefined) {
    this._runCommandTargets = value;
  }

  // sqs_target - computed: false, optional: true, required: false
  private _sqsTarget?: CloudwatchEventTargetSqsTarget[];
  public get sqsTarget() {
    return this._sqsTarget;
  }
  public set sqsTarget(value: CloudwatchEventTargetSqsTarget[] | undefined) {
    this._sqsTarget = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      event_bus_name: this._eventBusName,
      input: this._input,
      input_path: this._inputPath,
      role_arn: this._roleArn,
      rule: this._rule,
      target_id: this._targetId,
      batch_target: this._batchTarget,
      ecs_target: this._ecsTarget,
      input_transformer: this._inputTransformer,
      kinesis_target: this._kinesisTarget,
      run_command_targets: this._runCommandTargets,
      sqs_target: this._sqsTarget,
    };
  }
}
