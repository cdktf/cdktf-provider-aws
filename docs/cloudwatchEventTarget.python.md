# `cloudwatchEventTarget` Submodule <a name="`cloudwatchEventTarget` Submodule" id="@cdktf/provider-aws.cloudwatchEventTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventTarget <a name="CloudwatchEventTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target aws_cloudwatch_event_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  rule: str,
  batch_target: CloudwatchEventTargetBatchTarget = None,
  dead_letter_config: CloudwatchEventTargetDeadLetterConfig = None,
  ecs_target: CloudwatchEventTargetEcsTarget = None,
  event_bus_name: str = None,
  http_target: CloudwatchEventTargetHttpTarget = None,
  id: str = None,
  input: str = None,
  input_path: str = None,
  input_transformer: CloudwatchEventTargetInputTransformer = None,
  kinesis_target: CloudwatchEventTargetKinesisTarget = None,
  redshift_target: CloudwatchEventTargetRedshiftTarget = None,
  retry_policy: CloudwatchEventTargetRetryPolicy = None,
  role_arn: str = None,
  run_command_targets: typing.Union[IResolvable, typing.List[CloudwatchEventTargetRunCommandTargets]] = None,
  sqs_target: CloudwatchEventTargetSqsTarget = None,
  target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.rule">rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.batchTarget">batch_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | batch_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.ecsTarget">ecs_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | ecs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.eventBusName">event_bus_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputPath">input_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputTransformer">input_transformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | input_transformer block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.kinesisTarget">kinesis_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | kinesis_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.redshiftTarget">redshift_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | redshift_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.runCommandTargets">run_command_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]</code> | run_command_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.sqsTarget">sqs_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | sqs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.rule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}.

---

##### `batch_target`<sup>Optional</sup> <a name="batch_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.batchTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

batch_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}

---

##### `ecs_target`<sup>Optional</sup> <a name="ecs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.ecsTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

ecs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.eventBusName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}.

---

##### `http_target`<sup>Optional</sup> <a name="http_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.input"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}.

---

##### `input_path`<sup>Optional</sup> <a name="input_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}.

---

##### `input_transformer`<sup>Optional</sup> <a name="input_transformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputTransformer"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

input_transformer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}

---

##### `kinesis_target`<sup>Optional</sup> <a name="kinesis_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.kinesisTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

kinesis_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}

---

##### `redshift_target`<sup>Optional</sup> <a name="redshift_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.redshiftTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

redshift_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}.

---

##### `run_command_targets`<sup>Optional</sup> <a name="run_command_targets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.runCommandTargets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]

run_command_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}

---

##### `sqs_target`<sup>Optional</sup> <a name="sqs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.sqsTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

sqs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget">put_batch_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig">put_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget">put_ecs_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget">put_http_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer">put_input_transformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget">put_kinesis_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget">put_redshift_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets">put_run_command_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget">put_sqs_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget">reset_batch_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig">reset_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget">reset_ecs_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName">reset_event_bus_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget">reset_http_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath">reset_input_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer">reset_input_transformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget">reset_kinesis_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget">reset_redshift_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets">reset_run_command_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget">reset_sqs_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_batch_target` <a name="put_batch_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget"></a>

```python
def put_batch_target(
  job_definition: str,
  job_name: str,
  array_size: typing.Union[int, float] = None,
  job_attempts: typing.Union[int, float] = None
) -> None
```

###### `job_definition`<sup>Required</sup> <a name="job_definition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.jobDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}.

---

###### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.jobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}.

---

###### `array_size`<sup>Optional</sup> <a name="array_size" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.arraySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}.

---

###### `job_attempts`<sup>Optional</sup> <a name="job_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.jobAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}.

---

##### `put_dead_letter_config` <a name="put_dead_letter_config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig"></a>

```python
def put_dead_letter_config(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `put_ecs_target` <a name="put_ecs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget"></a>

```python
def put_ecs_target(
  task_definition_arn: str,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetCapacityProviderStrategy]] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: CloudwatchEventTargetEcsTargetNetworkConfiguration = None,
  placement_constraint: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetPlacementConstraint]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  tags: typing.Mapping[str] = None,
  task_count: typing.Union[int, float] = None
) -> None
```

###### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.taskDefinitionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}.

---

###### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.capacityProviderStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider_strategy CloudwatchEventTarget#capacity_provider_strategy}

---

###### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.enableEcsManagedTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}.

---

###### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.enableExecuteCommand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}.

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}.

---

###### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.launchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}.

---

###### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}

---

###### `placement_constraint`<sup>Optional</sup> <a name="placement_constraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.placementConstraint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]

placement_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#placement_constraint CloudwatchEventTarget#placement_constraint}

---

###### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}.

---

###### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.propagateTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}.

---

###### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.taskCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}.

---

##### `put_http_target` <a name="put_http_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget"></a>

```python
def put_http_target(
  header_parameters: typing.Mapping[str] = None,
  path_parameter_values: typing.List[str] = None,
  query_string_parameters: typing.Mapping[str] = None
) -> None
```

###### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget.parameter.headerParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}.

---

###### `path_parameter_values`<sup>Optional</sup> <a name="path_parameter_values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget.parameter.pathParameterValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}.

---

###### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget.parameter.queryStringParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}.

---

##### `put_input_transformer` <a name="put_input_transformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer"></a>

```python
def put_input_transformer(
  input_template: str,
  input_paths: typing.Mapping[str] = None
) -> None
```

###### `input_template`<sup>Required</sup> <a name="input_template" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer.parameter.inputTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}.

---

###### `input_paths`<sup>Optional</sup> <a name="input_paths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer.parameter.inputPaths"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}.

---

##### `put_kinesis_target` <a name="put_kinesis_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget"></a>

```python
def put_kinesis_target(
  partition_key_path: str = None
) -> None
```

###### `partition_key_path`<sup>Optional</sup> <a name="partition_key_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget.parameter.partitionKeyPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}.

---

##### `put_redshift_target` <a name="put_redshift_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget"></a>

```python
def put_redshift_target(
  database: str,
  db_user: str = None,
  secrets_manager_arn: str = None,
  sql: str = None,
  statement_name: str = None,
  with_event: typing.Union[bool, IResolvable] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}.

---

###### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.dbUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}.

---

###### `secrets_manager_arn`<sup>Optional</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.secretsManagerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}.

---

###### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.sql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}.

---

###### `statement_name`<sup>Optional</sup> <a name="statement_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.statementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}.

---

###### `with_event`<sup>Optional</sup> <a name="with_event" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.withEvent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}.

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy"></a>

```python
def put_retry_policy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
) -> None
```

###### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy.parameter.maximumEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}.

---

###### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}.

---

##### `put_run_command_targets` <a name="put_run_command_targets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets"></a>

```python
def put_run_command_targets(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventTargetRunCommandTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]

---

##### `put_sqs_target` <a name="put_sqs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget"></a>

```python
def put_sqs_target(
  message_group_id: str = None
) -> None
```

###### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget.parameter.messageGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}.

---

##### `reset_batch_target` <a name="reset_batch_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget"></a>

```python
def reset_batch_target() -> None
```

##### `reset_dead_letter_config` <a name="reset_dead_letter_config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig"></a>

```python
def reset_dead_letter_config() -> None
```

##### `reset_ecs_target` <a name="reset_ecs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget"></a>

```python
def reset_ecs_target() -> None
```

##### `reset_event_bus_name` <a name="reset_event_bus_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName"></a>

```python
def reset_event_bus_name() -> None
```

##### `reset_http_target` <a name="reset_http_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget"></a>

```python
def reset_http_target() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_input_path` <a name="reset_input_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath"></a>

```python
def reset_input_path() -> None
```

##### `reset_input_transformer` <a name="reset_input_transformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer"></a>

```python
def reset_input_transformer() -> None
```

##### `reset_kinesis_target` <a name="reset_kinesis_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget"></a>

```python
def reset_kinesis_target() -> None
```

##### `reset_redshift_target` <a name="reset_redshift_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget"></a>

```python
def reset_redshift_target() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_run_command_targets` <a name="reset_run_command_targets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets"></a>

```python
def reset_run_command_targets() -> None
```

##### `reset_sqs_target` <a name="reset_sqs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget"></a>

```python
def reset_sqs_target() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId"></a>

```python
def reset_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTarget.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget">batch_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget">ecs_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer">input_transformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget">kinesis_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget">redshift_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets">run_command_targets</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget">sqs_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput">batch_target_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput">dead_letter_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput">ecs_target_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput">event_bus_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput">http_target_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput">input_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput">input_transformer_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput">kinesis_target_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput">redshift_target_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput">run_command_targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput">sqs_target_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName">event_bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath">input_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_target`<sup>Required</sup> <a name="batch_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget"></a>

```python
batch_target: CloudwatchEventTargetBatchTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a>

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig"></a>

```python
dead_letter_config: CloudwatchEventTargetDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a>

---

##### `ecs_target`<sup>Required</sup> <a name="ecs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget"></a>

```python
ecs_target: CloudwatchEventTargetEcsTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a>

---

##### `http_target`<sup>Required</sup> <a name="http_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget"></a>

```python
http_target: CloudwatchEventTargetHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a>

---

##### `input_transformer`<sup>Required</sup> <a name="input_transformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer"></a>

```python
input_transformer: CloudwatchEventTargetInputTransformerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a>

---

##### `kinesis_target`<sup>Required</sup> <a name="kinesis_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget"></a>

```python
kinesis_target: CloudwatchEventTargetKinesisTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a>

---

##### `redshift_target`<sup>Required</sup> <a name="redshift_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget"></a>

```python
redshift_target: CloudwatchEventTargetRedshiftTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy"></a>

```python
retry_policy: CloudwatchEventTargetRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a>

---

##### `run_command_targets`<sup>Required</sup> <a name="run_command_targets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets"></a>

```python
run_command_targets: CloudwatchEventTargetRunCommandTargetsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a>

---

##### `sqs_target`<sup>Required</sup> <a name="sqs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget"></a>

```python
sqs_target: CloudwatchEventTargetSqsTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `batch_target_input`<sup>Optional</sup> <a name="batch_target_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput"></a>

```python
batch_target_input: CloudwatchEventTargetBatchTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `dead_letter_config_input`<sup>Optional</sup> <a name="dead_letter_config_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput"></a>

```python
dead_letter_config_input: CloudwatchEventTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `ecs_target_input`<sup>Optional</sup> <a name="ecs_target_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput"></a>

```python
ecs_target_input: CloudwatchEventTargetEcsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `event_bus_name_input`<sup>Optional</sup> <a name="event_bus_name_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput"></a>

```python
event_bus_name_input: str
```

- *Type:* str

---

##### `http_target_input`<sup>Optional</sup> <a name="http_target_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput"></a>

```python
http_target_input: CloudwatchEventTargetHttpTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `input_path_input`<sup>Optional</sup> <a name="input_path_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput"></a>

```python
input_path_input: str
```

- *Type:* str

---

##### `input_transformer_input`<sup>Optional</sup> <a name="input_transformer_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput"></a>

```python
input_transformer_input: CloudwatchEventTargetInputTransformer
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `kinesis_target_input`<sup>Optional</sup> <a name="kinesis_target_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput"></a>

```python
kinesis_target_input: CloudwatchEventTargetKinesisTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `redshift_target_input`<sup>Optional</sup> <a name="redshift_target_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput"></a>

```python
redshift_target_input: CloudwatchEventTargetRedshiftTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput"></a>

```python
retry_policy_input: CloudwatchEventTargetRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `run_command_targets_input`<sup>Optional</sup> <a name="run_command_targets_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput"></a>

```python
run_command_targets_input: typing.Union[IResolvable, typing.List[CloudwatchEventTargetRunCommandTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]

---

##### `sqs_target_input`<sup>Optional</sup> <a name="sqs_target_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput"></a>

```python
sqs_target_input: CloudwatchEventTargetSqsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_bus_name`<sup>Required</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `input_path`<sup>Required</sup> <a name="input_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath"></a>

```python
input_path: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventTargetBatchTarget <a name="CloudwatchEventTargetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetBatchTarget(
  job_definition: str,
  job_name: str,
  array_size: typing.Union[int, float] = None,
  job_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition">job_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize">array_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts">job_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}. |

---

##### `job_definition`<sup>Required</sup> <a name="job_definition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition"></a>

```python
job_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}.

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}.

---

##### `array_size`<sup>Optional</sup> <a name="array_size" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize"></a>

```python
array_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}.

---

##### `job_attempts`<sup>Optional</sup> <a name="job_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts"></a>

```python
job_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}.

---

### CloudwatchEventTargetConfig <a name="CloudwatchEventTargetConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  rule: str,
  batch_target: CloudwatchEventTargetBatchTarget = None,
  dead_letter_config: CloudwatchEventTargetDeadLetterConfig = None,
  ecs_target: CloudwatchEventTargetEcsTarget = None,
  event_bus_name: str = None,
  http_target: CloudwatchEventTargetHttpTarget = None,
  id: str = None,
  input: str = None,
  input_path: str = None,
  input_transformer: CloudwatchEventTargetInputTransformer = None,
  kinesis_target: CloudwatchEventTargetKinesisTarget = None,
  redshift_target: CloudwatchEventTargetRedshiftTarget = None,
  retry_policy: CloudwatchEventTargetRetryPolicy = None,
  role_arn: str = None,
  run_command_targets: typing.Union[IResolvable, typing.List[CloudwatchEventTargetRunCommandTargets]] = None,
  sqs_target: CloudwatchEventTargetSqsTarget = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule">rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget">batch_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | batch_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget">ecs_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | ecs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName">event_bus_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath">input_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer">input_transformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | input_transformer block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget">kinesis_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | kinesis_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget">redshift_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | redshift_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets">run_command_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]</code> | run_command_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget">sqs_target</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | sqs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule"></a>

```python
rule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}.

---

##### `batch_target`<sup>Optional</sup> <a name="batch_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget"></a>

```python
batch_target: CloudwatchEventTargetBatchTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

batch_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig"></a>

```python
dead_letter_config: CloudwatchEventTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}

---

##### `ecs_target`<sup>Optional</sup> <a name="ecs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget"></a>

```python
ecs_target: CloudwatchEventTargetEcsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

ecs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}.

---

##### `http_target`<sup>Optional</sup> <a name="http_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget"></a>

```python
http_target: CloudwatchEventTargetHttpTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}.

---

##### `input_path`<sup>Optional</sup> <a name="input_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath"></a>

```python
input_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}.

---

##### `input_transformer`<sup>Optional</sup> <a name="input_transformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer"></a>

```python
input_transformer: CloudwatchEventTargetInputTransformer
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

input_transformer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}

---

##### `kinesis_target`<sup>Optional</sup> <a name="kinesis_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget"></a>

```python
kinesis_target: CloudwatchEventTargetKinesisTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

kinesis_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}

---

##### `redshift_target`<sup>Optional</sup> <a name="redshift_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget"></a>

```python
redshift_target: CloudwatchEventTargetRedshiftTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

redshift_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy"></a>

```python
retry_policy: CloudwatchEventTargetRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}.

---

##### `run_command_targets`<sup>Optional</sup> <a name="run_command_targets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets"></a>

```python
run_command_targets: typing.Union[IResolvable, typing.List[CloudwatchEventTargetRunCommandTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]

run_command_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}

---

##### `sqs_target`<sup>Optional</sup> <a name="sqs_target" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget"></a>

```python
sqs_target: CloudwatchEventTargetSqsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

sqs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}.

---

### CloudwatchEventTargetDeadLetterConfig <a name="CloudwatchEventTargetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

### CloudwatchEventTargetEcsTarget <a name="CloudwatchEventTargetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTarget(
  task_definition_arn: str,
  capacity_provider_strategy: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetCapacityProviderStrategy]] = None,
  enable_ecs_managed_tags: typing.Union[bool, IResolvable] = None,
  enable_execute_command: typing.Union[bool, IResolvable] = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: CloudwatchEventTargetEcsTargetNetworkConfiguration = None,
  placement_constraint: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetPlacementConstraint]] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  tags: typing.Mapping[str] = None,
  task_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint">placement_constraint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]</code> | placement_constraint block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}. |

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}.

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider_strategy CloudwatchEventTarget#capacity_provider_strategy}

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration"></a>

```python
network_configuration: CloudwatchEventTargetEcsTargetNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}

---

##### `placement_constraint`<sup>Optional</sup> <a name="placement_constraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint"></a>

```python
placement_constraint: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetPlacementConstraint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]

placement_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#placement_constraint CloudwatchEventTarget#placement_constraint}

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}.

---

##### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}.

---

### CloudwatchEventTargetEcsTargetCapacityProviderStrategy <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy(
  capacity_provider: str,
  base: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}. |

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}.

---

### CloudwatchEventTargetEcsTargetNetworkConfiguration <a name="CloudwatchEventTargetEcsTargetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}.

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}.

---

### CloudwatchEventTargetEcsTargetPlacementConstraint <a name="CloudwatchEventTargetEcsTargetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint(
  type: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}.

---

### CloudwatchEventTargetHttpTarget <a name="CloudwatchEventTargetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetHttpTarget(
  header_parameters: typing.Mapping[str] = None,
  path_parameter_values: typing.List[str] = None,
  query_string_parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters">header_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters">query_string_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}. |

---

##### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters"></a>

```python
header_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}.

---

##### `path_parameter_values`<sup>Optional</sup> <a name="path_parameter_values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}.

---

##### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters"></a>

```python
query_string_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}.

---

### CloudwatchEventTargetInputTransformer <a name="CloudwatchEventTargetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetInputTransformer(
  input_template: str,
  input_paths: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate">input_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths">input_paths</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}. |

---

##### `input_template`<sup>Required</sup> <a name="input_template" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}.

---

##### `input_paths`<sup>Optional</sup> <a name="input_paths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths"></a>

```python
input_paths: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}.

---

### CloudwatchEventTargetKinesisTarget <a name="CloudwatchEventTargetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget(
  partition_key_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath">partition_key_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}. |

---

##### `partition_key_path`<sup>Optional</sup> <a name="partition_key_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath"></a>

```python
partition_key_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}.

---

### CloudwatchEventTargetRedshiftTarget <a name="CloudwatchEventTargetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget(
  database: str,
  db_user: str = None,
  secrets_manager_arn: str = None,
  sql: str = None,
  statement_name: str = None,
  with_event: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser">db_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName">statement_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent">with_event</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}.

---

##### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}.

---

##### `secrets_manager_arn`<sup>Optional</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn"></a>

```python
secrets_manager_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}.

---

##### `statement_name`<sup>Optional</sup> <a name="statement_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}.

---

##### `with_event`<sup>Optional</sup> <a name="with_event" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent"></a>

```python
with_event: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}.

---

### CloudwatchEventTargetRetryPolicy <a name="CloudwatchEventTargetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}. |

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}.

---

### CloudwatchEventTargetRunCommandTargets <a name="CloudwatchEventTargetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}.

---

### CloudwatchEventTargetSqsTarget <a name="CloudwatchEventTargetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetSqsTarget(
  message_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId">message_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}. |

---

##### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventTargetBatchTargetOutputReference <a name="CloudwatchEventTargetBatchTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize">reset_array_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts">reset_job_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_array_size` <a name="reset_array_size" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize"></a>

```python
def reset_array_size() -> None
```

##### `reset_job_attempts` <a name="reset_job_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts"></a>

```python
def reset_job_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput">array_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput">job_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput">job_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize">array_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts">job_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition">job_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `array_size_input`<sup>Optional</sup> <a name="array_size_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput"></a>

```python
array_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_attempts_input`<sup>Optional</sup> <a name="job_attempts_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput"></a>

```python
job_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_definition_input`<sup>Optional</sup> <a name="job_definition_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput"></a>

```python
job_definition_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `array_size`<sup>Required</sup> <a name="array_size" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize"></a>

```python
array_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_attempts`<sup>Required</sup> <a name="job_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts"></a>

```python
job_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_definition`<sup>Required</sup> <a name="job_definition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition"></a>

```python
job_definition: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetBatchTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---


### CloudwatchEventTargetDeadLetterConfigOutputReference <a name="CloudwatchEventTargetDeadLetterConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetDeadLetterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyList <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventTargetEcsTargetCapacityProviderStrategy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>, cdktf.IResolvable]

---


### CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference <a name="CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetEcsTargetNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---


### CloudwatchEventTargetEcsTargetOutputReference <a name="CloudwatchEventTargetEcsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy">put_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint">put_placement_constraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy">reset_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType">reset_launch_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint">reset_placement_constraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount">reset_task_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_provider_strategy` <a name="put_capacity_provider_strategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy"></a>

```python
def put_capacity_provider_strategy(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetCapacityProviderStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  subnets: typing.List[str],
  assign_public_ip: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None
) -> None
```

###### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}.

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration.parameter.assignPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}.

---

##### `put_placement_constraint` <a name="put_placement_constraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint"></a>

```python
def put_placement_constraint(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetPlacementConstraint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]

---

##### `reset_capacity_provider_strategy` <a name="reset_capacity_provider_strategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy"></a>

```python
def reset_capacity_provider_strategy() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_launch_type` <a name="reset_launch_type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType"></a>

```python
def reset_launch_type() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_placement_constraint` <a name="reset_placement_constraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint"></a>

```python
def reset_placement_constraint() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_count` <a name="reset_task_count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount"></a>

```python
def reset_task_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint">placement_constraint</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput">capacity_provider_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput">launch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput">placement_constraint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput">task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput">task_definition_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand">enable_execute_command</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: CloudwatchEventTargetEcsTargetCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration"></a>

```python
network_configuration: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a>

---

##### `placement_constraint`<sup>Required</sup> <a name="placement_constraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint"></a>

```python
placement_constraint: CloudwatchEventTargetEcsTargetPlacementConstraintList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a>

---

##### `capacity_provider_strategy_input`<sup>Optional</sup> <a name="capacity_provider_strategy_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput"></a>

```python
capacity_provider_strategy_input: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetCapacityProviderStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>]]

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `launch_type_input`<sup>Optional</sup> <a name="launch_type_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput"></a>

```python
launch_type_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: CloudwatchEventTargetEcsTargetNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `placement_constraint_input`<sup>Optional</sup> <a name="placement_constraint_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput"></a>

```python
placement_constraint_input: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetPlacementConstraint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_count_input`<sup>Optional</sup> <a name="task_count_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput"></a>

```python
task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn_input`<sup>Optional</sup> <a name="task_definition_arn_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput"></a>

```python
task_definition_arn_input: str
```

- *Type:* str

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand"></a>

```python
enable_execute_command: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetEcsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---


### CloudwatchEventTargetEcsTargetPlacementConstraintList <a name="CloudwatchEventTargetEcsTargetPlacementConstraintList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventTargetEcsTargetPlacementConstraint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>]]

---


### CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference <a name="CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventTargetEcsTargetPlacementConstraint, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>, cdktf.IResolvable]

---


### CloudwatchEventTargetHttpTargetOutputReference <a name="CloudwatchEventTargetHttpTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters">reset_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues">reset_path_parameter_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters">reset_query_string_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_parameters` <a name="reset_header_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters"></a>

```python
def reset_header_parameters() -> None
```

##### `reset_path_parameter_values` <a name="reset_path_parameter_values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues"></a>

```python
def reset_path_parameter_values() -> None
```

##### `reset_query_string_parameters` <a name="reset_query_string_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters"></a>

```python
def reset_query_string_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput">header_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput">path_parameter_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput">query_string_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters">header_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_parameters_input`<sup>Optional</sup> <a name="header_parameters_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput"></a>

```python
header_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path_parameter_values_input`<sup>Optional</sup> <a name="path_parameter_values_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput"></a>

```python
path_parameter_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters_input`<sup>Optional</sup> <a name="query_string_parameters_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput"></a>

```python
query_string_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters"></a>

```python
header_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path_parameter_values`<sup>Required</sup> <a name="path_parameter_values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetHttpTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---


### CloudwatchEventTargetInputTransformerOutputReference <a name="CloudwatchEventTargetInputTransformerOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths">reset_input_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_paths` <a name="reset_input_paths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths"></a>

```python
def reset_input_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput">input_paths_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput">input_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths">input_paths</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate">input_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_paths_input`<sup>Optional</sup> <a name="input_paths_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput"></a>

```python
input_paths_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_template_input`<sup>Optional</sup> <a name="input_template_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput"></a>

```python
input_template_input: str
```

- *Type:* str

---

##### `input_paths`<sup>Required</sup> <a name="input_paths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths"></a>

```python
input_paths: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_template`<sup>Required</sup> <a name="input_template" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetInputTransformer
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---


### CloudwatchEventTargetKinesisTargetOutputReference <a name="CloudwatchEventTargetKinesisTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath">reset_partition_key_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_partition_key_path` <a name="reset_partition_key_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath"></a>

```python
def reset_partition_key_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput">partition_key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath">partition_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_key_path_input`<sup>Optional</sup> <a name="partition_key_path_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput"></a>

```python
partition_key_path_input: str
```

- *Type:* str

---

##### `partition_key_path`<sup>Required</sup> <a name="partition_key_path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath"></a>

```python
partition_key_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetKinesisTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---


### CloudwatchEventTargetRedshiftTargetOutputReference <a name="CloudwatchEventTargetRedshiftTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser">reset_db_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn">reset_secrets_manager_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName">reset_statement_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent">reset_with_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_db_user` <a name="reset_db_user" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser"></a>

```python
def reset_db_user() -> None
```

##### `reset_secrets_manager_arn` <a name="reset_secrets_manager_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn"></a>

```python
def reset_secrets_manager_arn() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_statement_name` <a name="reset_statement_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName"></a>

```python
def reset_statement_name() -> None
```

##### `reset_with_event` <a name="reset_with_event" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent"></a>

```python
def reset_with_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput">db_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput">secrets_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput">statement_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput">with_event_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName">statement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent">with_event</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `db_user_input`<sup>Optional</sup> <a name="db_user_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput"></a>

```python
db_user_input: str
```

- *Type:* str

---

##### `secrets_manager_arn_input`<sup>Optional</sup> <a name="secrets_manager_arn_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput"></a>

```python
secrets_manager_arn_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `statement_name_input`<sup>Optional</sup> <a name="statement_name_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput"></a>

```python
statement_name_input: str
```

- *Type:* str

---

##### `with_event_input`<sup>Optional</sup> <a name="with_event_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput"></a>

```python
with_event_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `secrets_manager_arn`<sup>Required</sup> <a name="secrets_manager_arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn"></a>

```python
secrets_manager_arn: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

---

##### `with_event`<sup>Required</sup> <a name="with_event" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent"></a>

```python
with_event: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetRedshiftTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---


### CloudwatchEventTargetRetryPolicyOutputReference <a name="CloudwatchEventTargetRetryPolicyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">reset_maximum_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_event_age_in_seconds` <a name="reset_maximum_event_age_in_seconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```python
def reset_maximum_event_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximum_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_event_age_in_seconds_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```python
maximum_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---


### CloudwatchEventTargetRunCommandTargetsList <a name="CloudwatchEventTargetRunCommandTargetsList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventTargetRunCommandTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventTargetRunCommandTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>]]

---


### CloudwatchEventTargetRunCommandTargetsOutputReference <a name="CloudwatchEventTargetRunCommandTargetsOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventTargetRunCommandTargets, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>, cdktf.IResolvable]

---


### CloudwatchEventTargetSqsTargetOutputReference <a name="CloudwatchEventTargetSqsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_target

cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId">reset_message_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_group_id` <a name="reset_message_group_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId"></a>

```python
def reset_message_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput">message_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_group_id_input`<sup>Optional</sup> <a name="message_group_id_input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput"></a>

```python
message_group_id_input: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventTargetSqsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---



