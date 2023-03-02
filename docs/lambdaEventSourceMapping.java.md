# `lambdaEventSourceMapping` Submodule <a name="`lambdaEventSourceMapping` Submodule" id="@cdktf/provider-aws.lambdaEventSourceMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventSourceMapping <a name="LambdaEventSourceMapping" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping aws_lambda_event_source_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMapping;

LambdaEventSourceMapping.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .functionName(java.lang.String)
//  .amazonManagedKafkaEventSourceConfig(LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig)
//  .batchSize(java.lang.Number)
//  .bisectBatchOnFunctionError(java.lang.Boolean)
//  .bisectBatchOnFunctionError(IResolvable)
//  .destinationConfig(LambdaEventSourceMappingDestinationConfig)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .eventSourceArn(java.lang.String)
//  .filterCriteria(LambdaEventSourceMappingFilterCriteria)
//  .functionResponseTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maximumBatchingWindowInSeconds(java.lang.Number)
//  .maximumRecordAgeInSeconds(java.lang.Number)
//  .maximumRetryAttempts(java.lang.Number)
//  .parallelizationFactor(java.lang.Number)
//  .queues(java.util.List<java.lang.String>)
//  .scalingConfig(LambdaEventSourceMappingScalingConfig)
//  .selfManagedEventSource(LambdaEventSourceMappingSelfManagedEventSource)
//  .selfManagedKafkaEventSourceConfig(LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig)
//  .sourceAccessConfiguration(IResolvable)
//  .sourceAccessConfiguration(java.util.List<LambdaEventSourceMappingSourceAccessConfiguration>)
//  .startingPosition(java.lang.String)
//  .startingPositionTimestamp(java.lang.String)
//  .topics(java.util.List<java.lang.String>)
//  .tumblingWindowInSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.amazonManagedKafkaEventSourceConfig">amazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | amazon_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.bisectBatchOnFunctionError">bisectBatchOnFunctionError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.eventSourceArn">eventSourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | filter_criteria block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionResponseTypes">functionResponseTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#id LambdaEventSourceMapping#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRecordAgeInSeconds">maximumRecordAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.parallelizationFactor">parallelizationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.queues">queues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedEventSource">selfManagedEventSource</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | self_managed_event_source block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedKafkaEventSourceConfig">selfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | self_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.sourceAccessConfiguration">sourceAccessConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>></code> | source_access_configuration block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPosition">startingPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPositionTimestamp">startingPositionTimestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tumblingWindowInSeconds">tumblingWindowInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}.

---

##### `amazonManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="amazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.amazonManagedKafkaEventSourceConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

amazon_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.batchSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}.

---

##### `bisectBatchOnFunctionError`<sup>Optional</sup> <a name="bisectBatchOnFunctionError" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.bisectBatchOnFunctionError"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}.

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}.

---

##### `eventSourceArn`<sup>Optional</sup> <a name="eventSourceArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.eventSourceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}.

---

##### `filterCriteria`<sup>Optional</sup> <a name="filterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.filterCriteria"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `functionResponseTypes`<sup>Optional</sup> <a name="functionResponseTypes" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.functionResponseTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#id LambdaEventSourceMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumBatchingWindowInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}.

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="maximumRecordAgeInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRecordAgeInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}.

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.maximumRetryAttempts"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}.

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="parallelizationFactor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.parallelizationFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}.

---

##### `queues`<sup>Optional</sup> <a name="queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.queues"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}.

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `selfManagedEventSource`<sup>Optional</sup> <a name="selfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedEventSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

self_managed_event_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `selfManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="selfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.selfManagedKafkaEventSourceConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

self_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `sourceAccessConfiguration`<sup>Optional</sup> <a name="sourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.sourceAccessConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>>

source_access_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPosition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}.

---

##### `startingPositionTimestamp`<sup>Optional</sup> <a name="startingPositionTimestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.startingPositionTimestamp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}.

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.topics"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}.

---

##### `tumblingWindowInSeconds`<sup>Optional</sup> <a name="tumblingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.Initializer.parameter.tumblingWindowInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig">putAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig">putDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria">putFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig">putScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource">putSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig">putSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration">putSourceAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig">resetAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError">resetBisectBatchOnFunctionError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig">resetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn">resetEventSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria">resetFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes">resetFunctionResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds">resetMaximumBatchingWindowInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds">resetMaximumRecordAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor">resetParallelizationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues">resetQueues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig">resetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource">resetSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig">resetSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfiguration">resetSourceAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp">resetStartingPositionTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds">resetTumblingWindowInSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAmazonManagedKafkaEventSourceConfig` <a name="putAmazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig"></a>

```java
public void putAmazonManagedKafkaEventSourceConfig(LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putAmazonManagedKafkaEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `putDestinationConfig` <a name="putDestinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig"></a>

```java
public void putDestinationConfig(LambdaEventSourceMappingDestinationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `putFilterCriteria` <a name="putFilterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria"></a>

```java
public void putFilterCriteria(LambdaEventSourceMappingFilterCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putFilterCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `putScalingConfig` <a name="putScalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig"></a>

```java
public void putScalingConfig(LambdaEventSourceMappingScalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `putSelfManagedEventSource` <a name="putSelfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource"></a>

```java
public void putSelfManagedEventSource(LambdaEventSourceMappingSelfManagedEventSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedEventSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `putSelfManagedKafkaEventSourceConfig` <a name="putSelfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig"></a>

```java
public void putSelfManagedKafkaEventSourceConfig(LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSelfManagedKafkaEventSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `putSourceAccessConfiguration` <a name="putSourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration"></a>

```java
public void putSourceAccessConfiguration(IResolvable OR java.util.List<LambdaEventSourceMappingSourceAccessConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.putSourceAccessConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>>

---

##### `resetAmazonManagedKafkaEventSourceConfig` <a name="resetAmazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetAmazonManagedKafkaEventSourceConfig"></a>

```java
public void resetAmazonManagedKafkaEventSourceConfig()
```

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBatchSize"></a>

```java
public void resetBatchSize()
```

##### `resetBisectBatchOnFunctionError` <a name="resetBisectBatchOnFunctionError" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetBisectBatchOnFunctionError"></a>

```java
public void resetBisectBatchOnFunctionError()
```

##### `resetDestinationConfig` <a name="resetDestinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetDestinationConfig"></a>

```java
public void resetDestinationConfig()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEventSourceArn` <a name="resetEventSourceArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetEventSourceArn"></a>

```java
public void resetEventSourceArn()
```

##### `resetFilterCriteria` <a name="resetFilterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFilterCriteria"></a>

```java
public void resetFilterCriteria()
```

##### `resetFunctionResponseTypes` <a name="resetFunctionResponseTypes" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetFunctionResponseTypes"></a>

```java
public void resetFunctionResponseTypes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetId"></a>

```java
public void resetId()
```

##### `resetMaximumBatchingWindowInSeconds` <a name="resetMaximumBatchingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumBatchingWindowInSeconds"></a>

```java
public void resetMaximumBatchingWindowInSeconds()
```

##### `resetMaximumRecordAgeInSeconds` <a name="resetMaximumRecordAgeInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRecordAgeInSeconds"></a>

```java
public void resetMaximumRecordAgeInSeconds()
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetMaximumRetryAttempts"></a>

```java
public void resetMaximumRetryAttempts()
```

##### `resetParallelizationFactor` <a name="resetParallelizationFactor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetParallelizationFactor"></a>

```java
public void resetParallelizationFactor()
```

##### `resetQueues` <a name="resetQueues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetQueues"></a>

```java
public void resetQueues()
```

##### `resetScalingConfig` <a name="resetScalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetScalingConfig"></a>

```java
public void resetScalingConfig()
```

##### `resetSelfManagedEventSource` <a name="resetSelfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedEventSource"></a>

```java
public void resetSelfManagedEventSource()
```

##### `resetSelfManagedKafkaEventSourceConfig` <a name="resetSelfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSelfManagedKafkaEventSourceConfig"></a>

```java
public void resetSelfManagedKafkaEventSourceConfig()
```

##### `resetSourceAccessConfiguration` <a name="resetSourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetSourceAccessConfiguration"></a>

```java
public void resetSourceAccessConfiguration()
```

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPosition"></a>

```java
public void resetStartingPosition()
```

##### `resetStartingPositionTimestamp` <a name="resetStartingPositionTimestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetStartingPositionTimestamp"></a>

```java
public void resetStartingPositionTimestamp()
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTopics"></a>

```java
public void resetTopics()
```

##### `resetTumblingWindowInSeconds` <a name="resetTumblingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.resetTumblingWindowInSeconds"></a>

```java
public void resetTumblingWindowInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMapping;

LambdaEventSourceMapping.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMapping;

LambdaEventSourceMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMapping;

LambdaEventSourceMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig">amazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastProcessingResult">lastProcessingResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource">selfManagedEventSource</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig">selfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfiguration">sourceAccessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList">LambdaEventSourceMappingSourceAccessConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.stateTransitionReason">stateTransitionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput">amazonManagedKafkaEventSourceConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput">batchSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput">bisectBatchOnFunctionErrorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput">destinationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput">eventSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput">filterCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput">functionResponseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput">maximumBatchingWindowInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput">maximumRecordAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput">parallelizationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput">queuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput">scalingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput">selfManagedEventSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput">selfManagedKafkaEventSourceConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationInput">sourceAccessConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput">startingPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput">startingPositionTimestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput">topicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput">tumblingWindowInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError">bisectBatchOnFunctionError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn">eventSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes">functionResponseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds">maximumRecordAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor">parallelizationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues">queues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition">startingPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp">startingPositionTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds">tumblingWindowInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amazonManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="amazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig"></a>

```java
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference getAmazonManagedKafkaEventSourceConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a>

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfig"></a>

```java
public LambdaEventSourceMappingDestinationConfigOutputReference getDestinationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference">LambdaEventSourceMappingDestinationConfigOutputReference</a>

---

##### `filterCriteria`<sup>Required</sup> <a name="filterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteria"></a>

```java
public LambdaEventSourceMappingFilterCriteriaOutputReference getFilterCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference">LambdaEventSourceMappingFilterCriteriaOutputReference</a>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `lastProcessingResult`<sup>Required</sup> <a name="lastProcessingResult" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.lastProcessingResult"></a>

```java
public java.lang.String getLastProcessingResult();
```

- *Type:* java.lang.String

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfig"></a>

```java
public LambdaEventSourceMappingScalingConfigOutputReference getScalingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference">LambdaEventSourceMappingScalingConfigOutputReference</a>

---

##### `selfManagedEventSource`<sup>Required</sup> <a name="selfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSource"></a>

```java
public LambdaEventSourceMappingSelfManagedEventSourceOutputReference getSelfManagedEventSource();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference">LambdaEventSourceMappingSelfManagedEventSourceOutputReference</a>

---

##### `selfManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="selfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig"></a>

```java
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference getSelfManagedKafkaEventSourceConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a>

---

##### `sourceAccessConfiguration`<sup>Required</sup> <a name="sourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfiguration"></a>

```java
public LambdaEventSourceMappingSourceAccessConfigurationList getSourceAccessConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList">LambdaEventSourceMappingSourceAccessConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateTransitionReason`<sup>Required</sup> <a name="stateTransitionReason" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.stateTransitionReason"></a>

```java
public java.lang.String getStateTransitionReason();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `amazonManagedKafkaEventSourceConfigInput`<sup>Optional</sup> <a name="amazonManagedKafkaEventSourceConfigInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfigInput"></a>

```java
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig getAmazonManagedKafkaEventSourceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSizeInput"></a>

```java
public java.lang.Number getBatchSizeInput();
```

- *Type:* java.lang.Number

---

##### `bisectBatchOnFunctionErrorInput`<sup>Optional</sup> <a name="bisectBatchOnFunctionErrorInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionErrorInput"></a>

```java
public java.lang.Object getBisectBatchOnFunctionErrorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `destinationConfigInput`<sup>Optional</sup> <a name="destinationConfigInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.destinationConfigInput"></a>

```java
public LambdaEventSourceMappingDestinationConfig getDestinationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventSourceArnInput`<sup>Optional</sup> <a name="eventSourceArnInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArnInput"></a>

```java
public java.lang.String getEventSourceArnInput();
```

- *Type:* java.lang.String

---

##### `filterCriteriaInput`<sup>Optional</sup> <a name="filterCriteriaInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.filterCriteriaInput"></a>

```java
public LambdaEventSourceMappingFilterCriteria getFilterCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `functionResponseTypesInput`<sup>Optional</sup> <a name="functionResponseTypesInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypesInput"></a>

```java
public java.util.List<java.lang.String> getFunctionResponseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maximumBatchingWindowInSecondsInput`<sup>Optional</sup> <a name="maximumBatchingWindowInSecondsInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSecondsInput"></a>

```java
public java.lang.Number getMaximumBatchingWindowInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumRecordAgeInSecondsInput`<sup>Optional</sup> <a name="maximumRecordAgeInSecondsInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSecondsInput"></a>

```java
public java.lang.Number getMaximumRecordAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttemptsInput"></a>

```java
public java.lang.Number getMaximumRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `parallelizationFactorInput`<sup>Optional</sup> <a name="parallelizationFactorInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactorInput"></a>

```java
public java.lang.Number getParallelizationFactorInput();
```

- *Type:* java.lang.Number

---

##### `queuesInput`<sup>Optional</sup> <a name="queuesInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queuesInput"></a>

```java
public java.util.List<java.lang.String> getQueuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scalingConfigInput`<sup>Optional</sup> <a name="scalingConfigInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.scalingConfigInput"></a>

```java
public LambdaEventSourceMappingScalingConfig getScalingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---

##### `selfManagedEventSourceInput`<sup>Optional</sup> <a name="selfManagedEventSourceInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedEventSourceInput"></a>

```java
public LambdaEventSourceMappingSelfManagedEventSource getSelfManagedEventSourceInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---

##### `selfManagedKafkaEventSourceConfigInput`<sup>Optional</sup> <a name="selfManagedKafkaEventSourceConfigInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfigInput"></a>

```java
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig getSelfManagedKafkaEventSourceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---

##### `sourceAccessConfigurationInput`<sup>Optional</sup> <a name="sourceAccessConfigurationInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.sourceAccessConfigurationInput"></a>

```java
public java.lang.Object getSourceAccessConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>>

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionInput"></a>

```java
public java.lang.String getStartingPositionInput();
```

- *Type:* java.lang.String

---

##### `startingPositionTimestampInput`<sup>Optional</sup> <a name="startingPositionTimestampInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestampInput"></a>

```java
public java.lang.String getStartingPositionTimestampInput();
```

- *Type:* java.lang.String

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topicsInput"></a>

```java
public java.util.List<java.lang.String> getTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tumblingWindowInSecondsInput`<sup>Optional</sup> <a name="tumblingWindowInSecondsInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSecondsInput"></a>

```java
public java.lang.Number getTumblingWindowInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

---

##### `bisectBatchOnFunctionError`<sup>Required</sup> <a name="bisectBatchOnFunctionError" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.bisectBatchOnFunctionError"></a>

```java
public java.lang.Object getBisectBatchOnFunctionError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventSourceArn`<sup>Required</sup> <a name="eventSourceArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.eventSourceArn"></a>

```java
public java.lang.String getEventSourceArn();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `functionResponseTypes`<sup>Required</sup> <a name="functionResponseTypes" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.functionResponseTypes"></a>

```java
public java.util.List<java.lang.String> getFunctionResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maximumBatchingWindowInSeconds`<sup>Required</sup> <a name="maximumBatchingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

```java
public java.lang.Number getMaximumBatchingWindowInSeconds();
```

- *Type:* java.lang.Number

---

##### `maximumRecordAgeInSeconds`<sup>Required</sup> <a name="maximumRecordAgeInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

```java
public java.lang.Number getMaximumRecordAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `parallelizationFactor`<sup>Required</sup> <a name="parallelizationFactor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.parallelizationFactor"></a>

```java
public java.lang.Number getParallelizationFactor();
```

- *Type:* java.lang.Number

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.queues"></a>

```java
public java.util.List<java.lang.String> getQueues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPosition"></a>

```java
public java.lang.String getStartingPosition();
```

- *Type:* java.lang.String

---

##### `startingPositionTimestamp`<sup>Required</sup> <a name="startingPositionTimestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.startingPositionTimestamp"></a>

```java
public java.lang.String getStartingPositionTimestamp();
```

- *Type:* java.lang.String

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tumblingWindowInSeconds`<sup>Required</sup> <a name="tumblingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tumblingWindowInSeconds"></a>

```java
public java.lang.Number getTumblingWindowInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;

LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.builder()
//  .consumerGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId">consumerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}. |

---

##### `consumerGroupId`<sup>Optional</sup> <a name="consumerGroupId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```java
public java.lang.String getConsumerGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

### LambdaEventSourceMappingConfig <a name="LambdaEventSourceMappingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingConfig;

LambdaEventSourceMappingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .functionName(java.lang.String)
//  .amazonManagedKafkaEventSourceConfig(LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig)
//  .batchSize(java.lang.Number)
//  .bisectBatchOnFunctionError(java.lang.Boolean)
//  .bisectBatchOnFunctionError(IResolvable)
//  .destinationConfig(LambdaEventSourceMappingDestinationConfig)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .eventSourceArn(java.lang.String)
//  .filterCriteria(LambdaEventSourceMappingFilterCriteria)
//  .functionResponseTypes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maximumBatchingWindowInSeconds(java.lang.Number)
//  .maximumRecordAgeInSeconds(java.lang.Number)
//  .maximumRetryAttempts(java.lang.Number)
//  .parallelizationFactor(java.lang.Number)
//  .queues(java.util.List<java.lang.String>)
//  .scalingConfig(LambdaEventSourceMappingScalingConfig)
//  .selfManagedEventSource(LambdaEventSourceMappingSelfManagedEventSource)
//  .selfManagedKafkaEventSourceConfig(LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig)
//  .sourceAccessConfiguration(IResolvable)
//  .sourceAccessConfiguration(java.util.List<LambdaEventSourceMappingSourceAccessConfiguration>)
//  .startingPosition(java.lang.String)
//  .startingPositionTimestamp(java.lang.String)
//  .topics(java.util.List<java.lang.String>)
//  .tumblingWindowInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig">amazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | amazon_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize">batchSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError">bisectBatchOnFunctionError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | destination_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn">eventSourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | filter_criteria block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes">functionResponseTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#id LambdaEventSourceMapping#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds">maximumRecordAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor">parallelizationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues">queues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource">selfManagedEventSource</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | self_managed_event_source block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig">selfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | self_managed_kafka_event_source_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfiguration">sourceAccessConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>></code> | source_access_configuration block. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition">startingPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp">startingPositionTimestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds">tumblingWindowInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}.

---

##### `amazonManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="amazonManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.amazonManagedKafkaEventSourceConfig"></a>

```java
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig getAmazonManagedKafkaEventSourceConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

amazon_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.batchSize"></a>

```java
public java.lang.Number getBatchSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}.

---

##### `bisectBatchOnFunctionError`<sup>Optional</sup> <a name="bisectBatchOnFunctionError" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.bisectBatchOnFunctionError"></a>

```java
public java.lang.Object getBisectBatchOnFunctionError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}.

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.destinationConfig"></a>

```java
public LambdaEventSourceMappingDestinationConfig getDestinationConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

destination_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}.

---

##### `eventSourceArn`<sup>Optional</sup> <a name="eventSourceArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.eventSourceArn"></a>

```java
public java.lang.String getEventSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}.

---

##### `filterCriteria`<sup>Optional</sup> <a name="filterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.filterCriteria"></a>

```java
public LambdaEventSourceMappingFilterCriteria getFilterCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

filter_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}

---

##### `functionResponseTypes`<sup>Optional</sup> <a name="functionResponseTypes" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.functionResponseTypes"></a>

```java
public java.util.List<java.lang.String> getFunctionResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#id LambdaEventSourceMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBatchingWindowInSeconds`<sup>Optional</sup> <a name="maximumBatchingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumBatchingWindowInSeconds"></a>

```java
public java.lang.Number getMaximumBatchingWindowInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}.

---

##### `maximumRecordAgeInSeconds`<sup>Optional</sup> <a name="maximumRecordAgeInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRecordAgeInSeconds"></a>

```java
public java.lang.Number getMaximumRecordAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}.

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}.

---

##### `parallelizationFactor`<sup>Optional</sup> <a name="parallelizationFactor" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.parallelizationFactor"></a>

```java
public java.lang.Number getParallelizationFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}.

---

##### `queues`<sup>Optional</sup> <a name="queues" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.queues"></a>

```java
public java.util.List<java.lang.String> getQueues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}.

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.scalingConfig"></a>

```java
public LambdaEventSourceMappingScalingConfig getScalingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}

---

##### `selfManagedEventSource`<sup>Optional</sup> <a name="selfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedEventSource"></a>

```java
public LambdaEventSourceMappingSelfManagedEventSource getSelfManagedEventSource();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

self_managed_event_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}

---

##### `selfManagedKafkaEventSourceConfig`<sup>Optional</sup> <a name="selfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.selfManagedKafkaEventSourceConfig"></a>

```java
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig getSelfManagedKafkaEventSourceConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

self_managed_kafka_event_source_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}

---

##### `sourceAccessConfiguration`<sup>Optional</sup> <a name="sourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.sourceAccessConfiguration"></a>

```java
public java.lang.Object getSourceAccessConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>>

source_access_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPosition"></a>

```java
public java.lang.String getStartingPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}.

---

##### `startingPositionTimestamp`<sup>Optional</sup> <a name="startingPositionTimestamp" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.startingPositionTimestamp"></a>

```java
public java.lang.String getStartingPositionTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}.

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}.

---

##### `tumblingWindowInSeconds`<sup>Optional</sup> <a name="tumblingWindowInSeconds" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingConfig.property.tumblingWindowInSeconds"></a>

```java
public java.lang.Number getTumblingWindowInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}.

---

### LambdaEventSourceMappingDestinationConfig <a name="LambdaEventSourceMappingDestinationConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingDestinationConfig;

LambdaEventSourceMappingDestinationConfig.builder()
//  .onFailure(LambdaEventSourceMappingDestinationConfigOnFailure)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | on_failure block. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig.property.onFailure"></a>

```java
public LambdaEventSourceMappingDestinationConfigOnFailure getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}

---

### LambdaEventSourceMappingDestinationConfigOnFailure <a name="LambdaEventSourceMappingDestinationConfigOnFailure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingDestinationConfigOnFailure;

LambdaEventSourceMappingDestinationConfigOnFailure.builder()
    .destinationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}. |

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}.

---

### LambdaEventSourceMappingFilterCriteria <a name="LambdaEventSourceMappingFilterCriteria" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingFilterCriteria;

LambdaEventSourceMappingFilterCriteria.builder()
//  .filter(IResolvable)
//  .filter(java.util.List<LambdaEventSourceMappingFilterCriteriaFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#filter LambdaEventSourceMapping#filter}

---

### LambdaEventSourceMappingFilterCriteriaFilter <a name="LambdaEventSourceMappingFilterCriteriaFilter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingFilterCriteriaFilter;

LambdaEventSourceMappingFilterCriteriaFilter.builder()
//  .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}. |

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}.

---

### LambdaEventSourceMappingScalingConfig <a name="LambdaEventSourceMappingScalingConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingScalingConfig;

LambdaEventSourceMappingScalingConfig.builder()
//  .maximumConcurrency(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency">maximumConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}. |

---

##### `maximumConcurrency`<sup>Optional</sup> <a name="maximumConcurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig.property.maximumConcurrency"></a>

```java
public java.lang.Number getMaximumConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}.

---

### LambdaEventSourceMappingSelfManagedEventSource <a name="LambdaEventSourceMappingSelfManagedEventSource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSelfManagedEventSource;

LambdaEventSourceMappingSelfManagedEventSource.builder()
    .endpoints(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints">endpoints</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource.property.endpoints"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEndpoints();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}.

---

### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;

LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.builder()
//  .consumerGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId">consumerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}. |

---

##### `consumerGroupId`<sup>Optional</sup> <a name="consumerGroupId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.property.consumerGroupId"></a>

```java
public java.lang.String getConsumerGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}.

---

### LambdaEventSourceMappingSourceAccessConfiguration <a name="LambdaEventSourceMappingSourceAccessConfiguration" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSourceAccessConfiguration;

LambdaEventSourceMappingSourceAccessConfiguration.builder()
    .type(java.lang.String)
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#type LambdaEventSourceMapping#type}. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#type LambdaEventSourceMapping#type}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference;

new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">resetConsumerGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroupId` <a name="resetConsumerGroupId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```java
public void resetConsumerGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">consumerGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupIdInput`<sup>Optional</sup> <a name="consumerGroupIdInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```java
public java.lang.String getConsumerGroupIdInput();
```

- *Type:* java.lang.String

---

##### `consumerGroupId`<sup>Required</sup> <a name="consumerGroupId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```java
public java.lang.String getConsumerGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingDestinationConfigOnFailureOutputReference <a name="LambdaEventSourceMappingDestinationConfigOnFailureOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference;

new LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingDestinationConfigOnFailure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---


### LambdaEventSourceMappingDestinationConfigOutputReference <a name="LambdaEventSourceMappingDestinationConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingDestinationConfigOutputReference;

new LambdaEventSourceMappingDestinationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure"></a>

```java
public void putOnFailure(LambdaEventSourceMappingDestinationConfigOnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.resetOnFailure"></a>

```java
public void resetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure"></a>

```java
public LambdaEventSourceMappingDestinationConfigOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference">LambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.onFailureInput"></a>

```java
public LambdaEventSourceMappingDestinationConfigOnFailure getOnFailureInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOnFailure">LambdaEventSourceMappingDestinationConfigOnFailure</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingDestinationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingDestinationConfig">LambdaEventSourceMappingDestinationConfig</a>

---


### LambdaEventSourceMappingFilterCriteriaFilterList <a name="LambdaEventSourceMappingFilterCriteriaFilterList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingFilterCriteriaFilterList;

new LambdaEventSourceMappingFilterCriteriaFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get"></a>

```java
public LambdaEventSourceMappingFilterCriteriaFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>>

---


### LambdaEventSourceMappingFilterCriteriaFilterOutputReference <a name="LambdaEventSourceMappingFilterCriteriaFilterOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference;

new LambdaEventSourceMappingFilterCriteriaFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.resetPattern"></a>

```java
public void resetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### LambdaEventSourceMappingFilterCriteriaOutputReference <a name="LambdaEventSourceMappingFilterCriteriaOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingFilterCriteriaOutputReference;

new LambdaEventSourceMappingFilterCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<LambdaEventSourceMappingFilterCriteriaFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList">LambdaEventSourceMappingFilterCriteriaFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filter"></a>

```java
public LambdaEventSourceMappingFilterCriteriaFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilterList">LambdaEventSourceMappingFilterCriteriaFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaFilter">LambdaEventSourceMappingFilterCriteriaFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingFilterCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingFilterCriteria">LambdaEventSourceMappingFilterCriteria</a>

---


### LambdaEventSourceMappingScalingConfigOutputReference <a name="LambdaEventSourceMappingScalingConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingScalingConfigOutputReference;

new LambdaEventSourceMappingScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency">resetMaximumConcurrency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumConcurrency` <a name="resetMaximumConcurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.resetMaximumConcurrency"></a>

```java
public void resetMaximumConcurrency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput">maximumConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency">maximumConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumConcurrencyInput`<sup>Optional</sup> <a name="maximumConcurrencyInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrencyInput"></a>

```java
public java.lang.Number getMaximumConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `maximumConcurrency`<sup>Required</sup> <a name="maximumConcurrency" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency"></a>

```java
public java.lang.Number getMaximumConcurrency();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfigOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingScalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingScalingConfig">LambdaEventSourceMappingScalingConfig</a>

---


### LambdaEventSourceMappingSelfManagedEventSourceOutputReference <a name="LambdaEventSourceMappingSelfManagedEventSourceOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference;

new LambdaEventSourceMappingSelfManagedEventSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput">endpointsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints">endpoints</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpointsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEndpointsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEndpoints();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingSelfManagedEventSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedEventSource">LambdaEventSourceMappingSelfManagedEventSource</a>

---


### LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference <a name="LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference;

new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId">resetConsumerGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroupId` <a name="resetConsumerGroupId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resetConsumerGroupId"></a>

```java
public void resetConsumerGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput">consumerGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupIdInput`<sup>Optional</sup> <a name="consumerGroupIdInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupIdInput"></a>

```java
public java.lang.String getConsumerGroupIdInput();
```

- *Type:* java.lang.String

---

##### `consumerGroupId`<sup>Required</sup> <a name="consumerGroupId" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```java
public java.lang.String getConsumerGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```java
public LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---


### LambdaEventSourceMappingSourceAccessConfigurationList <a name="LambdaEventSourceMappingSourceAccessConfigurationList" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSourceAccessConfigurationList;

new LambdaEventSourceMappingSourceAccessConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get"></a>

```java
public LambdaEventSourceMappingSourceAccessConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a>>

---


### LambdaEventSourceMappingSourceAccessConfigurationOutputReference <a name="LambdaEventSourceMappingSourceAccessConfigurationOutputReference" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lambda_event_source_mapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference;

new LambdaEventSourceMappingSourceAccessConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMappingSourceAccessConfiguration">LambdaEventSourceMappingSourceAccessConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---



