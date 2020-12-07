// https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly enabled: boolean;
  readonly name: string;
  readonly sql: string;
  readonly sqlVersion: string;
  readonly tags?: { [key: string]: string };
  /** cloudwatch_alarm block */
  readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
  /** cloudwatch_metric block */
  readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
  /** dynamodb block */
  readonly dynamodb?: IotTopicRuleDynamodb[];
  /** dynamodbv2 block */
  readonly dynamodbv2?: IotTopicRuleDynamodbv2[];
  /** elasticsearch block */
  readonly elasticsearch?: IotTopicRuleElasticsearch[];
  /** error_action block */
  readonly errorAction?: IotTopicRuleErrorAction[];
  /** firehose block */
  readonly firehose?: IotTopicRuleFirehose[];
  /** iot_analytics block */
  readonly iotAnalytics?: IotTopicRuleIotAnalytics[];
  /** iot_events block */
  readonly iotEvents?: IotTopicRuleIotEvents[];
  /** kinesis block */
  readonly kinesis?: IotTopicRuleKinesis[];
  /** lambda block */
  readonly lambda?: IotTopicRuleLambda[];
  /** republish block */
  readonly republish?: IotTopicRuleRepublish[];
  /** s3 block */
  readonly s3?: IotTopicRuleS3[];
  /** sns block */
  readonly sns?: IotTopicRuleSns[];
  /** sqs block */
  readonly sqs?: IotTopicRuleSqs[];
  /** step_functions block */
  readonly stepFunctions?: IotTopicRuleStepFunctions[];
}
export interface IotTopicRuleCloudwatchAlarm {
  readonly alarmName: string;
  readonly roleArn: string;
  readonly stateReason: string;
  readonly stateValue: string;
}

function iotTopicRuleCloudwatchAlarmToTerraform(struct?: IotTopicRuleCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export interface IotTopicRuleCloudwatchMetric {
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly metricTimestamp?: string;
  readonly metricUnit: string;
  readonly metricValue: string;
  readonly roleArn: string;
}

function iotTopicRuleCloudwatchMetricToTerraform(struct?: IotTopicRuleCloudwatchMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleDynamodb {
  readonly hashKeyField: string;
  readonly hashKeyType?: string;
  readonly hashKeyValue: string;
  readonly operation?: string;
  readonly payloadField?: string;
  readonly rangeKeyField?: string;
  readonly rangeKeyType?: string;
  readonly rangeKeyValue?: string;
  readonly roleArn: string;
  readonly tableName: string;
}

function iotTopicRuleDynamodbToTerraform(struct?: IotTopicRuleDynamodb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleDynamodbv2PutItem {
  readonly tableName: string;
}

function iotTopicRuleDynamodbv2PutItemToTerraform(struct?: IotTopicRuleDynamodbv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleDynamodbv2 {
  readonly roleArn: string;
  /** put_item block */
  readonly putItem?: IotTopicRuleDynamodbv2PutItem[];
}

function iotTopicRuleDynamodbv2ToTerraform(struct?: IotTopicRuleDynamodbv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    put_item: cdktf.listMapper(iotTopicRuleDynamodbv2PutItemToTerraform)(struct!.putItem),
  }
}

export interface IotTopicRuleElasticsearch {
  readonly endpoint: string;
  readonly id: string;
  readonly index: string;
  readonly roleArn: string;
  readonly type: string;
}

function iotTopicRuleElasticsearchToTerraform(struct?: IotTopicRuleElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTopicRuleErrorActionCloudwatchAlarm {
  readonly alarmName: string;
  readonly roleArn: string;
  readonly stateReason: string;
  readonly stateValue: string;
}

function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export interface IotTopicRuleErrorActionCloudwatchMetric {
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly metricTimestamp?: string;
  readonly metricUnit: string;
  readonly metricValue: string;
  readonly roleArn: string;
}

function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleErrorActionDynamodb {
  readonly hashKeyField: string;
  readonly hashKeyType?: string;
  readonly hashKeyValue: string;
  readonly operation?: string;
  readonly payloadField?: string;
  readonly rangeKeyField?: string;
  readonly rangeKeyType?: string;
  readonly rangeKeyValue?: string;
  readonly roleArn: string;
  readonly tableName: string;
}

function iotTopicRuleErrorActionDynamodbToTerraform(struct?: IotTopicRuleErrorActionDynamodb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleErrorActionDynamodbv2PutItem {
  readonly tableName: string;
}

function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleErrorActionDynamodbv2 {
  readonly roleArn: string;
  /** put_item block */
  readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem[];
}

function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    put_item: cdktf.listMapper(iotTopicRuleErrorActionDynamodbv2PutItemToTerraform)(struct!.putItem),
  }
}

export interface IotTopicRuleErrorActionElasticsearch {
  readonly endpoint: string;
  readonly id: string;
  readonly index: string;
  readonly roleArn: string;
  readonly type: string;
}

function iotTopicRuleErrorActionElasticsearchToTerraform(struct?: IotTopicRuleErrorActionElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTopicRuleErrorActionFirehose {
  readonly deliveryStreamName: string;
  readonly roleArn: string;
  readonly separator?: string;
}

function iotTopicRuleErrorActionFirehoseToTerraform(struct?: IotTopicRuleErrorActionFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IotTopicRuleErrorActionIotAnalytics {
  readonly channelName: string;
  readonly roleArn: string;
}

function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleErrorActionIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleErrorActionIotEvents {
  readonly inputName: string;
  readonly messageId?: string;
  readonly roleArn: string;
}

function iotTopicRuleErrorActionIotEventsToTerraform(struct?: IotTopicRuleErrorActionIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleErrorActionKinesis {
  readonly partitionKey?: string;
  readonly roleArn: string;
  readonly streamName: string;
}

function iotTopicRuleErrorActionKinesisToTerraform(struct?: IotTopicRuleErrorActionKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export interface IotTopicRuleErrorActionLambda {
  readonly functionArn: string;
}

function iotTopicRuleErrorActionLambdaToTerraform(struct?: IotTopicRuleErrorActionLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface IotTopicRuleErrorActionRepublish {
  readonly qos?: number;
  readonly roleArn: string;
  readonly topic: string;
}

function iotTopicRuleErrorActionRepublishToTerraform(struct?: IotTopicRuleErrorActionRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleErrorActionS3 {
  readonly bucketName: string;
  readonly key: string;
  readonly roleArn: string;
}

function iotTopicRuleErrorActionS3ToTerraform(struct?: IotTopicRuleErrorActionS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleErrorActionSns {
  readonly messageFormat?: string;
  readonly roleArn: string;
  readonly targetArn: string;
}

function iotTopicRuleErrorActionSnsToTerraform(struct?: IotTopicRuleErrorActionSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotTopicRuleErrorActionSqs {
  readonly queueUrl: string;
  readonly roleArn: string;
  readonly useBase64: boolean;
}

function iotTopicRuleErrorActionSqsToTerraform(struct?: IotTopicRuleErrorActionSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IotTopicRuleErrorActionStepFunctions {
  readonly executionNamePrefix?: string;
  readonly roleArn: string;
  readonly stateMachineName: string;
}

function iotTopicRuleErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleErrorActionStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}

export interface IotTopicRuleErrorAction {
  /** cloudwatch_alarm block */
  readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm[];
  /** cloudwatch_metric block */
  readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric[];
  /** dynamodb block */
  readonly dynamodb?: IotTopicRuleErrorActionDynamodb[];
  /** dynamodbv2 block */
  readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2[];
  /** elasticsearch block */
  readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch[];
  /** firehose block */
  readonly firehose?: IotTopicRuleErrorActionFirehose[];
  /** iot_analytics block */
  readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics[];
  /** iot_events block */
  readonly iotEvents?: IotTopicRuleErrorActionIotEvents[];
  /** kinesis block */
  readonly kinesis?: IotTopicRuleErrorActionKinesis[];
  /** lambda block */
  readonly lambda?: IotTopicRuleErrorActionLambda[];
  /** republish block */
  readonly republish?: IotTopicRuleErrorActionRepublish[];
  /** s3 block */
  readonly s3?: IotTopicRuleErrorActionS3[];
  /** sns block */
  readonly sns?: IotTopicRuleErrorActionSns[];
  /** sqs block */
  readonly sqs?: IotTopicRuleErrorActionSqs[];
  /** step_functions block */
  readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions[];
}

function iotTopicRuleErrorActionToTerraform(struct?: IotTopicRuleErrorAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_alarm: cdktf.listMapper(iotTopicRuleErrorActionCloudwatchAlarmToTerraform)(struct!.cloudwatchAlarm),
    cloudwatch_metric: cdktf.listMapper(iotTopicRuleErrorActionCloudwatchMetricToTerraform)(struct!.cloudwatchMetric),
    dynamodb: cdktf.listMapper(iotTopicRuleErrorActionDynamodbToTerraform)(struct!.dynamodb),
    dynamodbv2: cdktf.listMapper(iotTopicRuleErrorActionDynamodbv2ToTerraform)(struct!.dynamodbv2),
    elasticsearch: cdktf.listMapper(iotTopicRuleErrorActionElasticsearchToTerraform)(struct!.elasticsearch),
    firehose: cdktf.listMapper(iotTopicRuleErrorActionFirehoseToTerraform)(struct!.firehose),
    iot_analytics: cdktf.listMapper(iotTopicRuleErrorActionIotAnalyticsToTerraform)(struct!.iotAnalytics),
    iot_events: cdktf.listMapper(iotTopicRuleErrorActionIotEventsToTerraform)(struct!.iotEvents),
    kinesis: cdktf.listMapper(iotTopicRuleErrorActionKinesisToTerraform)(struct!.kinesis),
    lambda: cdktf.listMapper(iotTopicRuleErrorActionLambdaToTerraform)(struct!.lambda),
    republish: cdktf.listMapper(iotTopicRuleErrorActionRepublishToTerraform)(struct!.republish),
    s3: cdktf.listMapper(iotTopicRuleErrorActionS3ToTerraform)(struct!.s3),
    sns: cdktf.listMapper(iotTopicRuleErrorActionSnsToTerraform)(struct!.sns),
    sqs: cdktf.listMapper(iotTopicRuleErrorActionSqsToTerraform)(struct!.sqs),
    step_functions: cdktf.listMapper(iotTopicRuleErrorActionStepFunctionsToTerraform)(struct!.stepFunctions),
  }
}

export interface IotTopicRuleFirehose {
  readonly deliveryStreamName: string;
  readonly roleArn: string;
  readonly separator?: string;
}

function iotTopicRuleFirehoseToTerraform(struct?: IotTopicRuleFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IotTopicRuleIotAnalytics {
  readonly channelName: string;
  readonly roleArn: string;
}

function iotTopicRuleIotAnalyticsToTerraform(struct?: IotTopicRuleIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleIotEvents {
  readonly inputName: string;
  readonly messageId?: string;
  readonly roleArn: string;
}

function iotTopicRuleIotEventsToTerraform(struct?: IotTopicRuleIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleKinesis {
  readonly partitionKey?: string;
  readonly roleArn: string;
  readonly streamName: string;
}

function iotTopicRuleKinesisToTerraform(struct?: IotTopicRuleKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export interface IotTopicRuleLambda {
  readonly functionArn: string;
}

function iotTopicRuleLambdaToTerraform(struct?: IotTopicRuleLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface IotTopicRuleRepublish {
  readonly qos?: number;
  readonly roleArn: string;
  readonly topic: string;
}

function iotTopicRuleRepublishToTerraform(struct?: IotTopicRuleRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleS3 {
  readonly bucketName: string;
  readonly key: string;
  readonly roleArn: string;
}

function iotTopicRuleS3ToTerraform(struct?: IotTopicRuleS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleSns {
  readonly messageFormat?: string;
  readonly roleArn: string;
  readonly targetArn: string;
}

function iotTopicRuleSnsToTerraform(struct?: IotTopicRuleSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotTopicRuleSqs {
  readonly queueUrl: string;
  readonly roleArn: string;
  readonly useBase64: boolean;
}

function iotTopicRuleSqsToTerraform(struct?: IotTopicRuleSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IotTopicRuleStepFunctions {
  readonly executionNamePrefix?: string;
  readonly roleArn: string;
  readonly stateMachineName: string;
}

function iotTopicRuleStepFunctionsToTerraform(struct?: IotTopicRuleStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}


// Resource

export class IotTopicRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_topic_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._sql = config.sql;
    this._sqlVersion = config.sqlVersion;
    this._tags = config.tags;
    this._cloudwatchAlarm = config.cloudwatchAlarm;
    this._cloudwatchMetric = config.cloudwatchMetric;
    this._dynamodb = config.dynamodb;
    this._dynamodbv2 = config.dynamodbv2;
    this._elasticsearch = config.elasticsearch;
    this._errorAction = config.errorAction;
    this._firehose = config.firehose;
    this._iotAnalytics = config.iotAnalytics;
    this._iotEvents = config.iotEvents;
    this._kinesis = config.kinesis;
    this._lambda = config.lambda;
    this._republish = config.republish;
    this._s3 = config.s3;
    this._sns = config.sns;
    this._sqs = config.sqs;
    this._stepFunctions = config.stepFunctions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sql - computed: false, optional: false, required: true
  private _sql: string;
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql
  }

  // sql_version - computed: false, optional: false, required: true
  private _sqlVersion: string;
  public get sqlVersion() {
    return this.getStringAttribute('sql_version');
  }
  public set sqlVersion(value: string) {
    this._sqlVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVersionInput() {
    return this._sqlVersion
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

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
  public get cloudwatchAlarm() {
    return this.interpolationForAttribute('cloudwatch_alarm') as any;
  }
  public set cloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[] ) {
    this._cloudwatchAlarm = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
  public get cloudwatchMetric() {
    return this.interpolationForAttribute('cloudwatch_metric') as any;
  }
  public set cloudwatchMetric(value: IotTopicRuleCloudwatchMetric[] ) {
    this._cloudwatchMetric = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb?: IotTopicRuleDynamodb[];
  public get dynamodb() {
    return this.interpolationForAttribute('dynamodb') as any;
  }
  public set dynamodb(value: IotTopicRuleDynamodb[] ) {
    this._dynamodb = value;
  }
  public resetDynamodb() {
    this._dynamodb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2?: IotTopicRuleDynamodbv2[];
  public get dynamodbv2() {
    return this.interpolationForAttribute('dynamodbv2') as any;
  }
  public set dynamodbv2(value: IotTopicRuleDynamodbv2[] ) {
    this._dynamodbv2 = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch?: IotTopicRuleElasticsearch[];
  public get elasticsearch() {
    return this.interpolationForAttribute('elasticsearch') as any;
  }
  public set elasticsearch(value: IotTopicRuleElasticsearch[] ) {
    this._elasticsearch = value;
  }
  public resetElasticsearch() {
    this._elasticsearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch
  }

  // error_action - computed: false, optional: true, required: false
  private _errorAction?: IotTopicRuleErrorAction[];
  public get errorAction() {
    return this.interpolationForAttribute('error_action') as any;
  }
  public set errorAction(value: IotTopicRuleErrorAction[] ) {
    this._errorAction = value;
  }
  public resetErrorAction() {
    this._errorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose?: IotTopicRuleFirehose[];
  public get firehose() {
    return this.interpolationForAttribute('firehose') as any;
  }
  public set firehose(value: IotTopicRuleFirehose[] ) {
    this._firehose = value;
  }
  public resetFirehose() {
    this._firehose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics?: IotTopicRuleIotAnalytics[];
  public get iotAnalytics() {
    return this.interpolationForAttribute('iot_analytics') as any;
  }
  public set iotAnalytics(value: IotTopicRuleIotAnalytics[] ) {
    this._iotAnalytics = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents?: IotTopicRuleIotEvents[];
  public get iotEvents() {
    return this.interpolationForAttribute('iot_events') as any;
  }
  public set iotEvents(value: IotTopicRuleIotEvents[] ) {
    this._iotEvents = value;
  }
  public resetIotEvents() {
    this._iotEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis?: IotTopicRuleKinesis[];
  public get kinesis() {
    return this.interpolationForAttribute('kinesis') as any;
  }
  public set kinesis(value: IotTopicRuleKinesis[] ) {
    this._kinesis = value;
  }
  public resetKinesis() {
    this._kinesis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: IotTopicRuleLambda[];
  public get lambda() {
    return this.interpolationForAttribute('lambda') as any;
  }
  public set lambda(value: IotTopicRuleLambda[] ) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda
  }

  // republish - computed: false, optional: true, required: false
  private _republish?: IotTopicRuleRepublish[];
  public get republish() {
    return this.interpolationForAttribute('republish') as any;
  }
  public set republish(value: IotTopicRuleRepublish[] ) {
    this._republish = value;
  }
  public resetRepublish() {
    this._republish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: IotTopicRuleS3[];
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }
  public set s3(value: IotTopicRuleS3[] ) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3
  }

  // sns - computed: false, optional: true, required: false
  private _sns?: IotTopicRuleSns[];
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }
  public set sns(value: IotTopicRuleSns[] ) {
    this._sns = value;
  }
  public resetSns() {
    this._sns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs?: IotTopicRuleSqs[];
  public get sqs() {
    return this.interpolationForAttribute('sqs') as any;
  }
  public set sqs(value: IotTopicRuleSqs[] ) {
    this._sqs = value;
  }
  public resetSqs() {
    this._sqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions?: IotTopicRuleStepFunctions[];
  public get stepFunctions() {
    return this.interpolationForAttribute('step_functions') as any;
  }
  public set stepFunctions(value: IotTopicRuleStepFunctions[] ) {
    this._stepFunctions = value;
  }
  public resetStepFunctions() {
    this._stepFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      sql: cdktf.stringToTerraform(this._sql),
      sql_version: cdktf.stringToTerraform(this._sqlVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      cloudwatch_alarm: cdktf.listMapper(iotTopicRuleCloudwatchAlarmToTerraform)(this._cloudwatchAlarm),
      cloudwatch_metric: cdktf.listMapper(iotTopicRuleCloudwatchMetricToTerraform)(this._cloudwatchMetric),
      dynamodb: cdktf.listMapper(iotTopicRuleDynamodbToTerraform)(this._dynamodb),
      dynamodbv2: cdktf.listMapper(iotTopicRuleDynamodbv2ToTerraform)(this._dynamodbv2),
      elasticsearch: cdktf.listMapper(iotTopicRuleElasticsearchToTerraform)(this._elasticsearch),
      error_action: cdktf.listMapper(iotTopicRuleErrorActionToTerraform)(this._errorAction),
      firehose: cdktf.listMapper(iotTopicRuleFirehoseToTerraform)(this._firehose),
      iot_analytics: cdktf.listMapper(iotTopicRuleIotAnalyticsToTerraform)(this._iotAnalytics),
      iot_events: cdktf.listMapper(iotTopicRuleIotEventsToTerraform)(this._iotEvents),
      kinesis: cdktf.listMapper(iotTopicRuleKinesisToTerraform)(this._kinesis),
      lambda: cdktf.listMapper(iotTopicRuleLambdaToTerraform)(this._lambda),
      republish: cdktf.listMapper(iotTopicRuleRepublishToTerraform)(this._republish),
      s3: cdktf.listMapper(iotTopicRuleS3ToTerraform)(this._s3),
      sns: cdktf.listMapper(iotTopicRuleSnsToTerraform)(this._sns),
      sqs: cdktf.listMapper(iotTopicRuleSqsToTerraform)(this._sqs),
      step_functions: cdktf.listMapper(iotTopicRuleStepFunctionsToTerraform)(this._stepFunctions),
    };
  }
}
