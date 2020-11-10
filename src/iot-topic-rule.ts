// https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IotTopicRuleConfig extends TerraformMetaArguments {
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
export interface IotTopicRuleCloudwatchMetric {
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly metricTimestamp?: string;
  readonly metricUnit: string;
  readonly metricValue: string;
  readonly roleArn: string;
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
export interface IotTopicRuleDynamodbv2PutItem {
  readonly tableName: string;
}
export interface IotTopicRuleDynamodbv2 {
  readonly roleArn: string;
  /** put_item block */
  readonly putItem?: IotTopicRuleDynamodbv2PutItem[];
}
export interface IotTopicRuleElasticsearch {
  readonly endpoint: string;
  readonly id: string;
  readonly index: string;
  readonly roleArn: string;
  readonly type: string;
}
export interface IotTopicRuleErrorActionCloudwatchAlarm {
  readonly alarmName: string;
  readonly roleArn: string;
  readonly stateReason: string;
  readonly stateValue: string;
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
  readonly metricName: string;
  readonly metricNamespace: string;
  readonly metricTimestamp?: string;
  readonly metricUnit: string;
  readonly metricValue: string;
  readonly roleArn: string;
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
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
  readonly tableName: string;
}
export interface IotTopicRuleErrorActionDynamodbv2 {
  readonly roleArn: string;
  /** put_item block */
  readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem[];
}
export interface IotTopicRuleErrorActionElasticsearch {
  readonly endpoint: string;
  readonly id: string;
  readonly index: string;
  readonly roleArn: string;
  readonly type: string;
}
export interface IotTopicRuleErrorActionFirehose {
  readonly deliveryStreamName: string;
  readonly roleArn: string;
  readonly separator?: string;
}
export interface IotTopicRuleErrorActionIotAnalytics {
  readonly channelName: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionIotEvents {
  readonly inputName: string;
  readonly messageId?: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionKinesis {
  readonly partitionKey?: string;
  readonly roleArn: string;
  readonly streamName: string;
}
export interface IotTopicRuleErrorActionLambda {
  readonly functionArn: string;
}
export interface IotTopicRuleErrorActionRepublish {
  readonly qos?: number;
  readonly roleArn: string;
  readonly topic: string;
}
export interface IotTopicRuleErrorActionS3 {
  readonly bucketName: string;
  readonly key: string;
  readonly roleArn: string;
}
export interface IotTopicRuleErrorActionSns {
  readonly messageFormat?: string;
  readonly roleArn: string;
  readonly targetArn: string;
}
export interface IotTopicRuleErrorActionSqs {
  readonly queueUrl: string;
  readonly roleArn: string;
  readonly useBase64: boolean;
}
export interface IotTopicRuleErrorActionStepFunctions {
  readonly executionNamePrefix?: string;
  readonly roleArn: string;
  readonly stateMachineName: string;
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
export interface IotTopicRuleFirehose {
  readonly deliveryStreamName: string;
  readonly roleArn: string;
  readonly separator?: string;
}
export interface IotTopicRuleIotAnalytics {
  readonly channelName: string;
  readonly roleArn: string;
}
export interface IotTopicRuleIotEvents {
  readonly inputName: string;
  readonly messageId?: string;
  readonly roleArn: string;
}
export interface IotTopicRuleKinesis {
  readonly partitionKey?: string;
  readonly roleArn: string;
  readonly streamName: string;
}
export interface IotTopicRuleLambda {
  readonly functionArn: string;
}
export interface IotTopicRuleRepublish {
  readonly qos?: number;
  readonly roleArn: string;
  readonly topic: string;
}
export interface IotTopicRuleS3 {
  readonly bucketName: string;
  readonly key: string;
  readonly roleArn: string;
}
export interface IotTopicRuleSns {
  readonly messageFormat?: string;
  readonly roleArn: string;
  readonly targetArn: string;
}
export interface IotTopicRuleSqs {
  readonly queueUrl: string;
  readonly roleArn: string;
  readonly useBase64: boolean;
}
export interface IotTopicRuleStepFunctions {
  readonly executionNamePrefix?: string;
  readonly roleArn: string;
  readonly stateMachineName: string;
}

// Resource

export class IotTopicRule extends TerraformResource {

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
      description: this._description,
      enabled: this._enabled,
      name: this._name,
      sql: this._sql,
      sql_version: this._sqlVersion,
      tags: this._tags,
      cloudwatch_alarm: this._cloudwatchAlarm,
      cloudwatch_metric: this._cloudwatchMetric,
      dynamodb: this._dynamodb,
      dynamodbv2: this._dynamodbv2,
      elasticsearch: this._elasticsearch,
      error_action: this._errorAction,
      firehose: this._firehose,
      iot_analytics: this._iotAnalytics,
      iot_events: this._iotEvents,
      kinesis: this._kinesis,
      lambda: this._lambda,
      republish: this._republish,
      s3: this._s3,
      sns: this._sns,
      sqs: this._sqs,
      step_functions: this._stepFunctions,
    };
  }
}
