// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
  readonly arn: string;
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

function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    array_size: cdktf.numberToTerraform(struct!.arraySize),
    job_attempts: cdktf.numberToTerraform(struct!.jobAttempts),
    job_definition: cdktf.stringToTerraform(struct!.jobDefinition),
    job_name: cdktf.stringToTerraform(struct!.jobName),
  }
}

export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
  readonly assignPublicIp?: boolean;
  readonly securityGroups?: string[];
  readonly subnets: string[];
}

function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
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

function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    launch_type: cdktf.stringToTerraform(struct!.launchType),
    platform_version: cdktf.stringToTerraform(struct!.platformVersion),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
    network_configuration: cdktf.listMapper(cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform)(struct!.networkConfiguration),
  }
}

export interface CloudwatchEventTargetInputTransformer {
  readonly inputPaths?: { [key: string]: string };
  readonly inputTemplate: string;
}

function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_paths: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.inputPaths),
    input_template: cdktf.stringToTerraform(struct!.inputTemplate),
  }
}

export interface CloudwatchEventTargetKinesisTarget {
  readonly partitionKeyPath?: string;
}

function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key_path: cdktf.stringToTerraform(struct!.partitionKeyPath),
  }
}

export interface CloudwatchEventTargetRunCommandTargets {
  readonly key: string;
  readonly values: string[];
}

function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface CloudwatchEventTargetSqsTarget {
  readonly messageGroupId?: string;
}

function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
  }
}


// Resource

export class CloudwatchEventTarget extends cdktf.TerraformResource {

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
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: false, optional: true, required: false
  private _input?: string;
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string ) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // input_path - computed: false, optional: true, required: false
  private _inputPath?: string;
  public get inputPath() {
    return this.getStringAttribute('input_path');
  }
  public set inputPath(value: string ) {
    this._inputPath = value;
  }
  public resetInputPath() {
    this._inputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPathInput() {
    return this._inputPath
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // rule - computed: false, optional: false, required: true
  private _rule: string;
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string;
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId
  }

  // batch_target - computed: false, optional: true, required: false
  private _batchTarget?: CloudwatchEventTargetBatchTarget[];
  public get batchTarget() {
    return this.interpolationForAttribute('batch_target') as any;
  }
  public set batchTarget(value: CloudwatchEventTargetBatchTarget[] ) {
    this._batchTarget = value;
  }
  public resetBatchTarget() {
    this._batchTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTargetInput() {
    return this._batchTarget
  }

  // ecs_target - computed: false, optional: true, required: false
  private _ecsTarget?: CloudwatchEventTargetEcsTarget[];
  public get ecsTarget() {
    return this.interpolationForAttribute('ecs_target') as any;
  }
  public set ecsTarget(value: CloudwatchEventTargetEcsTarget[] ) {
    this._ecsTarget = value;
  }
  public resetEcsTarget() {
    this._ecsTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTargetInput() {
    return this._ecsTarget
  }

  // input_transformer - computed: false, optional: true, required: false
  private _inputTransformer?: CloudwatchEventTargetInputTransformer[];
  public get inputTransformer() {
    return this.interpolationForAttribute('input_transformer') as any;
  }
  public set inputTransformer(value: CloudwatchEventTargetInputTransformer[] ) {
    this._inputTransformer = value;
  }
  public resetInputTransformer() {
    this._inputTransformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTransformerInput() {
    return this._inputTransformer
  }

  // kinesis_target - computed: false, optional: true, required: false
  private _kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
  public get kinesisTarget() {
    return this.interpolationForAttribute('kinesis_target') as any;
  }
  public set kinesisTarget(value: CloudwatchEventTargetKinesisTarget[] ) {
    this._kinesisTarget = value;
  }
  public resetKinesisTarget() {
    this._kinesisTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisTargetInput() {
    return this._kinesisTarget
  }

  // run_command_targets - computed: false, optional: true, required: false
  private _runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
  public get runCommandTargets() {
    return this.interpolationForAttribute('run_command_targets') as any;
  }
  public set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] ) {
    this._runCommandTargets = value;
  }
  public resetRunCommandTargets() {
    this._runCommandTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandTargetsInput() {
    return this._runCommandTargets
  }

  // sqs_target - computed: false, optional: true, required: false
  private _sqsTarget?: CloudwatchEventTargetSqsTarget[];
  public get sqsTarget() {
    return this.interpolationForAttribute('sqs_target') as any;
  }
  public set sqsTarget(value: CloudwatchEventTargetSqsTarget[] ) {
    this._sqsTarget = value;
  }
  public resetSqsTarget() {
    this._sqsTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsTargetInput() {
    return this._sqsTarget
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      input: cdktf.stringToTerraform(this._input),
      input_path: cdktf.stringToTerraform(this._inputPath),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      rule: cdktf.stringToTerraform(this._rule),
      target_id: cdktf.stringToTerraform(this._targetId),
      batch_target: cdktf.listMapper(cloudwatchEventTargetBatchTargetToTerraform)(this._batchTarget),
      ecs_target: cdktf.listMapper(cloudwatchEventTargetEcsTargetToTerraform)(this._ecsTarget),
      input_transformer: cdktf.listMapper(cloudwatchEventTargetInputTransformerToTerraform)(this._inputTransformer),
      kinesis_target: cdktf.listMapper(cloudwatchEventTargetKinesisTargetToTerraform)(this._kinesisTarget),
      run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform)(this._runCommandTargets),
      sqs_target: cdktf.listMapper(cloudwatchEventTargetSqsTargetToTerraform)(this._sqsTarget),
    };
  }
}
