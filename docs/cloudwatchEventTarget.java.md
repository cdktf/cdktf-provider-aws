# `cloudwatchEventTarget` Submodule <a name="`cloudwatchEventTarget` Submodule" id="@cdktf/provider-aws.cloudwatchEventTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventTarget <a name="CloudwatchEventTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target aws_cloudwatch_event_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTarget;

CloudwatchEventTarget.Builder.create(Construct scope, java.lang.String id)
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
    .arn(java.lang.String)
    .rule(java.lang.String)
//  .batchTarget(CloudwatchEventTargetBatchTarget)
//  .deadLetterConfig(CloudwatchEventTargetDeadLetterConfig)
//  .ecsTarget(CloudwatchEventTargetEcsTarget)
//  .eventBusName(java.lang.String)
//  .httpTarget(CloudwatchEventTargetHttpTarget)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .inputPath(java.lang.String)
//  .inputTransformer(CloudwatchEventTargetInputTransformer)
//  .kinesisTarget(CloudwatchEventTargetKinesisTarget)
//  .redshiftTarget(CloudwatchEventTargetRedshiftTarget)
//  .retryPolicy(CloudwatchEventTargetRetryPolicy)
//  .roleArn(java.lang.String)
//  .runCommandTargets(IResolvable)
//  .runCommandTargets(java.util.List<CloudwatchEventTargetRunCommandTargets>)
//  .sqsTarget(CloudwatchEventTargetSqsTarget)
//  .targetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.rule">rule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.batchTarget">batchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | batch_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.ecsTarget">ecsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | ecs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.eventBusName">eventBusName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.input">input</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputPath">inputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | input_transformer block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.kinesisTarget">kinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | kinesis_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.redshiftTarget">redshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | redshift_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.runCommandTargets">runCommandTargets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>></code> | run_command_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.sqsTarget">sqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | sqs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.rule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}.

---

##### `batchTarget`<sup>Optional</sup> <a name="batchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.batchTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

batch_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}

---

##### `ecsTarget`<sup>Optional</sup> <a name="ecsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.ecsTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

ecs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.eventBusName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}.

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.input"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}.

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}.

---

##### `inputTransformer`<sup>Optional</sup> <a name="inputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.inputTransformer"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

input_transformer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}

---

##### `kinesisTarget`<sup>Optional</sup> <a name="kinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.kinesisTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

kinesis_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}

---

##### `redshiftTarget`<sup>Optional</sup> <a name="redshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.redshiftTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

redshift_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}.

---

##### `runCommandTargets`<sup>Optional</sup> <a name="runCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.runCommandTargets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>>

run_command_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}

---

##### `sqsTarget`<sup>Optional</sup> <a name="sqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.sqsTarget"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

sqs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget">putBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget">putEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer">putInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget">putKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget">putRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets">putRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget">putSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget">resetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget">resetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName">resetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath">resetInputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer">resetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget">resetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget">resetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets">resetRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget">resetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBatchTarget` <a name="putBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget"></a>

```java
public void putBatchTarget(CloudwatchEventTargetBatchTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig"></a>

```java
public void putDeadLetterConfig(CloudwatchEventTargetDeadLetterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `putEcsTarget` <a name="putEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget"></a>

```java
public void putEcsTarget(CloudwatchEventTargetEcsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget"></a>

```java
public void putHttpTarget(CloudwatchEventTargetHttpTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `putInputTransformer` <a name="putInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer"></a>

```java
public void putInputTransformer(CloudwatchEventTargetInputTransformer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `putKinesisTarget` <a name="putKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget"></a>

```java
public void putKinesisTarget(CloudwatchEventTargetKinesisTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `putRedshiftTarget` <a name="putRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget"></a>

```java
public void putRedshiftTarget(CloudwatchEventTargetRedshiftTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy"></a>

```java
public void putRetryPolicy(CloudwatchEventTargetRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `putRunCommandTargets` <a name="putRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets"></a>

```java
public void putRunCommandTargets(IResolvable OR java.util.List<CloudwatchEventTargetRunCommandTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>>

---

##### `putSqsTarget` <a name="putSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget"></a>

```java
public void putSqsTarget(CloudwatchEventTargetSqsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `resetBatchTarget` <a name="resetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget"></a>

```java
public void resetBatchTarget()
```

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig"></a>

```java
public void resetDeadLetterConfig()
```

##### `resetEcsTarget` <a name="resetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget"></a>

```java
public void resetEcsTarget()
```

##### `resetEventBusName` <a name="resetEventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName"></a>

```java
public void resetEventBusName()
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget"></a>

```java
public void resetHttpTarget()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput"></a>

```java
public void resetInput()
```

##### `resetInputPath` <a name="resetInputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath"></a>

```java
public void resetInputPath()
```

##### `resetInputTransformer` <a name="resetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer"></a>

```java
public void resetInputTransformer()
```

##### `resetKinesisTarget` <a name="resetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget"></a>

```java
public void resetKinesisTarget()
```

##### `resetRedshiftTarget` <a name="resetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget"></a>

```java
public void resetRedshiftTarget()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetRunCommandTargets` <a name="resetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets"></a>

```java
public void resetRunCommandTargets()
```

##### `resetSqsTarget` <a name="resetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget"></a>

```java
public void resetSqsTarget()
```

##### `resetTargetId` <a name="resetTargetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId"></a>

```java
public void resetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTarget;

CloudwatchEventTarget.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTarget;

CloudwatchEventTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTarget;

CloudwatchEventTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget">batchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget">ecsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget">kinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget">redshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets">runCommandTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget">sqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput">batchTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput">ecsTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput">eventBusNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput">inputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput">inputTransformerInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput">kinesisTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput">redshiftTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput">runCommandTargetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput">sqsTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName">eventBusName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath">inputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `batchTarget`<sup>Required</sup> <a name="batchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget"></a>

```java
public CloudwatchEventTargetBatchTargetOutputReference getBatchTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a>

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig"></a>

```java
public CloudwatchEventTargetDeadLetterConfigOutputReference getDeadLetterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a>

---

##### `ecsTarget`<sup>Required</sup> <a name="ecsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget"></a>

```java
public CloudwatchEventTargetEcsTargetOutputReference getEcsTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget"></a>

```java
public CloudwatchEventTargetHttpTargetOutputReference getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a>

---

##### `inputTransformer`<sup>Required</sup> <a name="inputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer"></a>

```java
public CloudwatchEventTargetInputTransformerOutputReference getInputTransformer();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a>

---

##### `kinesisTarget`<sup>Required</sup> <a name="kinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget"></a>

```java
public CloudwatchEventTargetKinesisTargetOutputReference getKinesisTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a>

---

##### `redshiftTarget`<sup>Required</sup> <a name="redshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget"></a>

```java
public CloudwatchEventTargetRedshiftTargetOutputReference getRedshiftTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy"></a>

```java
public CloudwatchEventTargetRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a>

---

##### `runCommandTargets`<sup>Required</sup> <a name="runCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets"></a>

```java
public CloudwatchEventTargetRunCommandTargetsList getRunCommandTargets();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a>

---

##### `sqsTarget`<sup>Required</sup> <a name="sqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget"></a>

```java
public CloudwatchEventTargetSqsTargetOutputReference getSqsTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `batchTargetInput`<sup>Optional</sup> <a name="batchTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput"></a>

```java
public CloudwatchEventTargetBatchTarget getBatchTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput"></a>

```java
public CloudwatchEventTargetDeadLetterConfig getDeadLetterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `ecsTargetInput`<sup>Optional</sup> <a name="ecsTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput"></a>

```java
public CloudwatchEventTargetEcsTarget getEcsTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `eventBusNameInput`<sup>Optional</sup> <a name="eventBusNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput"></a>

```java
public java.lang.String getEventBusNameInput();
```

- *Type:* java.lang.String

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput"></a>

```java
public CloudwatchEventTargetHttpTarget getHttpTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `inputPathInput`<sup>Optional</sup> <a name="inputPathInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput"></a>

```java
public java.lang.String getInputPathInput();
```

- *Type:* java.lang.String

---

##### `inputTransformerInput`<sup>Optional</sup> <a name="inputTransformerInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput"></a>

```java
public CloudwatchEventTargetInputTransformer getInputTransformerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `kinesisTargetInput`<sup>Optional</sup> <a name="kinesisTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput"></a>

```java
public CloudwatchEventTargetKinesisTarget getKinesisTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `redshiftTargetInput`<sup>Optional</sup> <a name="redshiftTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput"></a>

```java
public CloudwatchEventTargetRedshiftTarget getRedshiftTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput"></a>

```java
public CloudwatchEventTargetRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `runCommandTargetsInput`<sup>Optional</sup> <a name="runCommandTargetsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput"></a>

```java
public java.lang.Object getRunCommandTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>>

---

##### `sqsTargetInput`<sup>Optional</sup> <a name="sqsTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput"></a>

```java
public CloudwatchEventTargetSqsTarget getSqsTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName"></a>

```java
public java.lang.String getEventBusName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `inputPath`<sup>Required</sup> <a name="inputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath"></a>

```java
public java.lang.String getInputPath();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventTargetBatchTarget <a name="CloudwatchEventTargetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetBatchTarget;

CloudwatchEventTargetBatchTarget.builder()
    .jobDefinition(java.lang.String)
    .jobName(java.lang.String)
//  .arraySize(java.lang.Number)
//  .jobAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition">jobDefinition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName">jobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize">arraySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts">jobAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}. |

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition"></a>

```java
public java.lang.String getJobDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}.

---

##### `arraySize`<sup>Optional</sup> <a name="arraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize"></a>

```java
public java.lang.Number getArraySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}.

---

##### `jobAttempts`<sup>Optional</sup> <a name="jobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts"></a>

```java
public java.lang.Number getJobAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}.

---

### CloudwatchEventTargetConfig <a name="CloudwatchEventTargetConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetConfig;

CloudwatchEventTargetConfig.builder()
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
    .arn(java.lang.String)
    .rule(java.lang.String)
//  .batchTarget(CloudwatchEventTargetBatchTarget)
//  .deadLetterConfig(CloudwatchEventTargetDeadLetterConfig)
//  .ecsTarget(CloudwatchEventTargetEcsTarget)
//  .eventBusName(java.lang.String)
//  .httpTarget(CloudwatchEventTargetHttpTarget)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .inputPath(java.lang.String)
//  .inputTransformer(CloudwatchEventTargetInputTransformer)
//  .kinesisTarget(CloudwatchEventTargetKinesisTarget)
//  .redshiftTarget(CloudwatchEventTargetRedshiftTarget)
//  .retryPolicy(CloudwatchEventTargetRetryPolicy)
//  .roleArn(java.lang.String)
//  .runCommandTargets(IResolvable)
//  .runCommandTargets(java.util.List<CloudwatchEventTargetRunCommandTargets>)
//  .sqsTarget(CloudwatchEventTargetSqsTarget)
//  .targetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule">rule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget">batchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | batch_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget">ecsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | ecs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName">eventBusName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input">input</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath">inputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | input_transformer block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget">kinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | kinesis_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget">redshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | redshift_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets">runCommandTargets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>></code> | run_command_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget">sqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | sqs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}.

---

##### `batchTarget`<sup>Optional</sup> <a name="batchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget"></a>

```java
public CloudwatchEventTargetBatchTarget getBatchTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

batch_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig"></a>

```java
public CloudwatchEventTargetDeadLetterConfig getDeadLetterConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}

---

##### `ecsTarget`<sup>Optional</sup> <a name="ecsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget"></a>

```java
public CloudwatchEventTargetEcsTarget getEcsTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

ecs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName"></a>

```java
public java.lang.String getEventBusName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}.

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget"></a>

```java
public CloudwatchEventTargetHttpTarget getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}.

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath"></a>

```java
public java.lang.String getInputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}.

---

##### `inputTransformer`<sup>Optional</sup> <a name="inputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer"></a>

```java
public CloudwatchEventTargetInputTransformer getInputTransformer();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

input_transformer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}

---

##### `kinesisTarget`<sup>Optional</sup> <a name="kinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget"></a>

```java
public CloudwatchEventTargetKinesisTarget getKinesisTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

kinesis_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}

---

##### `redshiftTarget`<sup>Optional</sup> <a name="redshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget"></a>

```java
public CloudwatchEventTargetRedshiftTarget getRedshiftTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

redshift_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy"></a>

```java
public CloudwatchEventTargetRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}.

---

##### `runCommandTargets`<sup>Optional</sup> <a name="runCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets"></a>

```java
public java.lang.Object getRunCommandTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>>

run_command_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}

---

##### `sqsTarget`<sup>Optional</sup> <a name="sqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget"></a>

```java
public CloudwatchEventTargetSqsTarget getSqsTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

sqs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}.

---

### CloudwatchEventTargetDeadLetterConfig <a name="CloudwatchEventTargetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetDeadLetterConfig;

CloudwatchEventTargetDeadLetterConfig.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

### CloudwatchEventTargetEcsTarget <a name="CloudwatchEventTargetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTarget;

CloudwatchEventTargetEcsTarget.builder()
    .taskDefinitionArn(java.lang.String)
//  .capacityProviderStrategy(IResolvable)
//  .capacityProviderStrategy(java.util.List<CloudwatchEventTargetEcsTargetCapacityProviderStrategy>)
//  .enableEcsManagedTags(java.lang.Boolean)
//  .enableEcsManagedTags(IResolvable)
//  .enableExecuteCommand(java.lang.Boolean)
//  .enableExecuteCommand(IResolvable)
//  .group(java.lang.String)
//  .launchType(java.lang.String)
//  .networkConfiguration(CloudwatchEventTargetEcsTargetNetworkConfiguration)
//  .placementConstraint(IResolvable)
//  .placementConstraint(java.util.List<CloudwatchEventTargetEcsTargetPlacementConstraint>)
//  .platformVersion(java.lang.String)
//  .propagateTags(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taskCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>></code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType">launchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint">placementConstraint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>></code> | placement_constraint block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount">taskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}. |

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy"></a>

```java
public java.lang.Object getCapacityProviderStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>>

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider_strategy CloudwatchEventTarget#capacity_provider_strategy}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags"></a>

```java
public java.lang.Object getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand"></a>

```java
public java.lang.Object getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration"></a>

```java
public CloudwatchEventTargetEcsTargetNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}

---

##### `placementConstraint`<sup>Optional</sup> <a name="placementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint"></a>

```java
public java.lang.Object getPlacementConstraint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>>

placement_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#placement_constraint CloudwatchEventTarget#placement_constraint}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}.

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount"></a>

```java
public java.lang.Number getTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}.

---

### CloudwatchEventTargetEcsTargetCapacityProviderStrategy <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetCapacityProviderStrategy;

CloudwatchEventTargetEcsTargetCapacityProviderStrategy.builder()
    .capacityProvider(java.lang.String)
//  .base(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}.

---

### CloudwatchEventTargetEcsTargetNetworkConfiguration <a name="CloudwatchEventTargetEcsTargetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetNetworkConfiguration;

CloudwatchEventTargetEcsTargetNetworkConfiguration.builder()
    .subnets(java.util.List<java.lang.String>)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}.

---

### CloudwatchEventTargetEcsTargetPlacementConstraint <a name="CloudwatchEventTargetEcsTargetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetPlacementConstraint;

CloudwatchEventTargetEcsTargetPlacementConstraint.builder()
    .type(java.lang.String)
//  .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}.

---

### CloudwatchEventTargetHttpTarget <a name="CloudwatchEventTargetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetHttpTarget;

CloudwatchEventTargetHttpTarget.builder()
//  .headerParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .pathParameterValues(java.util.List<java.lang.String>)
//  .queryStringParameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters">headerParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues">pathParameterValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters">queryStringParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}. |

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}.

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues"></a>

```java
public java.util.List<java.lang.String> getPathParameterValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryStringParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}.

---

### CloudwatchEventTargetInputTransformer <a name="CloudwatchEventTargetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetInputTransformer;

CloudwatchEventTargetInputTransformer.builder()
    .inputTemplate(java.lang.String)
//  .inputPaths(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate">inputTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths">inputPaths</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}. |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate"></a>

```java
public java.lang.String getInputTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}.

---

##### `inputPaths`<sup>Optional</sup> <a name="inputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputPaths();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}.

---

### CloudwatchEventTargetKinesisTarget <a name="CloudwatchEventTargetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetKinesisTarget;

CloudwatchEventTargetKinesisTarget.builder()
//  .partitionKeyPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath">partitionKeyPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}. |

---

##### `partitionKeyPath`<sup>Optional</sup> <a name="partitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath"></a>

```java
public java.lang.String getPartitionKeyPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}.

---

### CloudwatchEventTargetRedshiftTarget <a name="CloudwatchEventTargetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRedshiftTarget;

CloudwatchEventTargetRedshiftTarget.builder()
    .database(java.lang.String)
//  .dbUser(java.lang.String)
//  .secretsManagerArn(java.lang.String)
//  .sql(java.lang.String)
//  .statementName(java.lang.String)
//  .withEvent(java.lang.Boolean)
//  .withEvent(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser">dbUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql">sql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName">statementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent">withEvent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}.

---

##### `dbUser`<sup>Optional</sup> <a name="dbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser"></a>

```java
public java.lang.String getDbUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}.

---

##### `statementName`<sup>Optional</sup> <a name="statementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName"></a>

```java
public java.lang.String getStatementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}.

---

##### `withEvent`<sup>Optional</sup> <a name="withEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent"></a>

```java
public java.lang.Object getWithEvent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}.

---

### CloudwatchEventTargetRetryPolicy <a name="CloudwatchEventTargetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRetryPolicy;

CloudwatchEventTargetRetryPolicy.builder()
//  .maximumEventAgeInSeconds(java.lang.Number)
//  .maximumRetryAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}. |

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```java
public java.lang.Number getMaximumEventAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}.

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}.

---

### CloudwatchEventTargetRunCommandTargets <a name="CloudwatchEventTargetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRunCommandTargets;

CloudwatchEventTargetRunCommandTargets.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}.

---

### CloudwatchEventTargetSqsTarget <a name="CloudwatchEventTargetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetSqsTarget;

CloudwatchEventTargetSqsTarget.builder()
//  .messageGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}. |

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventTargetBatchTargetOutputReference <a name="CloudwatchEventTargetBatchTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetBatchTargetOutputReference;

new CloudwatchEventTargetBatchTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize">resetArraySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts">resetJobAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArraySize` <a name="resetArraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize"></a>

```java
public void resetArraySize()
```

##### `resetJobAttempts` <a name="resetJobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts"></a>

```java
public void resetJobAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput">arraySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput">jobAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput">jobDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize">arraySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts">jobAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition">jobDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName">jobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arraySizeInput`<sup>Optional</sup> <a name="arraySizeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput"></a>

```java
public java.lang.Number getArraySizeInput();
```

- *Type:* java.lang.Number

---

##### `jobAttemptsInput`<sup>Optional</sup> <a name="jobAttemptsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput"></a>

```java
public java.lang.Number getJobAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `jobDefinitionInput`<sup>Optional</sup> <a name="jobDefinitionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput"></a>

```java
public java.lang.String getJobDefinitionInput();
```

- *Type:* java.lang.String

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput"></a>

```java
public java.lang.String getJobNameInput();
```

- *Type:* java.lang.String

---

##### `arraySize`<sup>Required</sup> <a name="arraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize"></a>

```java
public java.lang.Number getArraySize();
```

- *Type:* java.lang.Number

---

##### `jobAttempts`<sup>Required</sup> <a name="jobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts"></a>

```java
public java.lang.Number getJobAttempts();
```

- *Type:* java.lang.Number

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition"></a>

```java
public java.lang.String getJobDefinition();
```

- *Type:* java.lang.String

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetBatchTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---


### CloudwatchEventTargetDeadLetterConfigOutputReference <a name="CloudwatchEventTargetDeadLetterConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetDeadLetterConfigOutputReference;

new CloudwatchEventTargetDeadLetterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetDeadLetterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyList <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList;

new CloudwatchEventTargetEcsTargetCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get"></a>

```java
public CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>>

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference;

new CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference <a name="CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference;

new CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetEcsTargetNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---


### CloudwatchEventTargetEcsTargetOutputReference <a name="CloudwatchEventTargetEcsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetOutputReference;

new CloudwatchEventTargetEcsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint">putPlacementConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint">resetPlacementConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy"></a>

```java
public void putCapacityProviderStrategy(IResolvable OR java.util.List<CloudwatchEventTargetEcsTargetCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(CloudwatchEventTargetEcsTargetNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `putPlacementConstraint` <a name="putPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint"></a>

```java
public void putPlacementConstraint(IResolvable OR java.util.List<CloudwatchEventTargetEcsTargetPlacementConstraint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>>

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy"></a>

```java
public void resetCapacityProviderStrategy()
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags"></a>

```java
public void resetEnableEcsManagedTags()
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand"></a>

```java
public void resetEnableExecuteCommand()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType"></a>

```java
public void resetLaunchType()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetPlacementConstraint` <a name="resetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint"></a>

```java
public void resetPlacementConstraint()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags"></a>

```java
public void resetPropagateTags()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount"></a>

```java
public void resetTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint">placementConstraint</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput">launchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput">placementConstraintInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput">taskDefinitionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags">propagateTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount">taskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy"></a>

```java
public CloudwatchEventTargetEcsTargetCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration"></a>

```java
public CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a>

---

##### `placementConstraint`<sup>Required</sup> <a name="placementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint"></a>

```java
public CloudwatchEventTargetEcsTargetPlacementConstraintList getPlacementConstraint();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput"></a>

```java
public java.lang.Object getCapacityProviderStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>>

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput"></a>

```java
public java.lang.Object getEnableEcsManagedTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput"></a>

```java
public java.lang.Object getEnableExecuteCommandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput"></a>

```java
public java.lang.String getLaunchTypeInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput"></a>

```java
public CloudwatchEventTargetEcsTargetNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `placementConstraintInput`<sup>Optional</sup> <a name="placementConstraintInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput"></a>

```java
public java.lang.Object getPlacementConstraintInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput"></a>

```java
public java.lang.String getPropagateTagsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput"></a>

```java
public java.lang.Number getTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `taskDefinitionArnInput`<sup>Optional</sup> <a name="taskDefinitionArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput"></a>

```java
public java.lang.String getTaskDefinitionArnInput();
```

- *Type:* java.lang.String

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags"></a>

```java
public java.lang.Object getEnableEcsManagedTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand"></a>

```java
public java.lang.Object getEnableExecuteCommand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags"></a>

```java
public java.lang.String getPropagateTags();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount"></a>

```java
public java.lang.Number getTaskCount();
```

- *Type:* java.lang.Number

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn"></a>

```java
public java.lang.String getTaskDefinitionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetEcsTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---


### CloudwatchEventTargetEcsTargetPlacementConstraintList <a name="CloudwatchEventTargetEcsTargetPlacementConstraintList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetPlacementConstraintList;

new CloudwatchEventTargetEcsTargetPlacementConstraintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get"></a>

```java
public CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>>

---


### CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference <a name="CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference;

new CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression"></a>

```java
public void resetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventTargetHttpTargetOutputReference <a name="CloudwatchEventTargetHttpTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetHttpTargetOutputReference;

new CloudwatchEventTargetHttpTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters">resetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues">resetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderParameters` <a name="resetHeaderParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters"></a>

```java
public void resetHeaderParameters()
```

##### `resetPathParameterValues` <a name="resetPathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues"></a>

```java
public void resetPathParameterValues()
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters"></a>

```java
public void resetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput">headerParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput">pathParameterValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters">headerParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues">pathParameterValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerParametersInput`<sup>Optional</sup> <a name="headerParametersInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pathParameterValuesInput`<sup>Optional</sup> <a name="pathParameterValuesInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput"></a>

```java
public java.util.List<java.lang.String> getPathParameterValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryStringParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pathParameterValues`<sup>Required</sup> <a name="pathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues"></a>

```java
public java.util.List<java.lang.String> getPathParameterValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryStringParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetHttpTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---


### CloudwatchEventTargetInputTransformerOutputReference <a name="CloudwatchEventTargetInputTransformerOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetInputTransformerOutputReference;

new CloudwatchEventTargetInputTransformerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths">resetInputPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputPaths` <a name="resetInputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths"></a>

```java
public void resetInputPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput">inputPathsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput">inputTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths">inputPaths</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate">inputTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputPathsInput`<sup>Optional</sup> <a name="inputPathsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputPathsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inputTemplateInput`<sup>Optional</sup> <a name="inputTemplateInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput"></a>

```java
public java.lang.String getInputTemplateInput();
```

- *Type:* java.lang.String

---

##### `inputPaths`<sup>Required</sup> <a name="inputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInputPaths();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate"></a>

```java
public java.lang.String getInputTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetInputTransformer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---


### CloudwatchEventTargetKinesisTargetOutputReference <a name="CloudwatchEventTargetKinesisTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetKinesisTargetOutputReference;

new CloudwatchEventTargetKinesisTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath">resetPartitionKeyPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKeyPath` <a name="resetPartitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath"></a>

```java
public void resetPartitionKeyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput">partitionKeyPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath">partitionKeyPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitionKeyPathInput`<sup>Optional</sup> <a name="partitionKeyPathInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput"></a>

```java
public java.lang.String getPartitionKeyPathInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyPath`<sup>Required</sup> <a name="partitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath"></a>

```java
public java.lang.String getPartitionKeyPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetKinesisTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---


### CloudwatchEventTargetRedshiftTargetOutputReference <a name="CloudwatchEventTargetRedshiftTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRedshiftTargetOutputReference;

new CloudwatchEventTargetRedshiftTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser">resetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName">resetStatementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent">resetWithEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbUser` <a name="resetDbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser"></a>

```java
public void resetDbUser()
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn"></a>

```java
public void resetSecretsManagerArn()
```

##### `resetSql` <a name="resetSql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql"></a>

```java
public void resetSql()
```

##### `resetStatementName` <a name="resetStatementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName"></a>

```java
public void resetStatementName()
```

##### `resetWithEvent` <a name="resetWithEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent"></a>

```java
public void resetWithEvent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput">dbUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput">sqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput">statementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput">withEventInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser">dbUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn">secretsManagerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql">sql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName">statementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent">withEvent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dbUserInput`<sup>Optional</sup> <a name="dbUserInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput"></a>

```java
public java.lang.String getDbUserInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput"></a>

```java
public java.lang.String getSecretsManagerArnInput();
```

- *Type:* java.lang.String

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput"></a>

```java
public java.lang.String getSqlInput();
```

- *Type:* java.lang.String

---

##### `statementNameInput`<sup>Optional</sup> <a name="statementNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput"></a>

```java
public java.lang.String getStatementNameInput();
```

- *Type:* java.lang.String

---

##### `withEventInput`<sup>Optional</sup> <a name="withEventInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput"></a>

```java
public java.lang.Object getWithEventInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser"></a>

```java
public java.lang.String getDbUser();
```

- *Type:* java.lang.String

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn"></a>

```java
public java.lang.String getSecretsManagerArn();
```

- *Type:* java.lang.String

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql"></a>

```java
public java.lang.String getSql();
```

- *Type:* java.lang.String

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName"></a>

```java
public java.lang.String getStatementName();
```

- *Type:* java.lang.String

---

##### `withEvent`<sup>Required</sup> <a name="withEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent"></a>

```java
public java.lang.Object getWithEvent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetRedshiftTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---


### CloudwatchEventTargetRetryPolicyOutputReference <a name="CloudwatchEventTargetRetryPolicyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRetryPolicyOutputReference;

new CloudwatchEventTargetRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```java
public void resetMaximumEventAgeInSeconds()
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```java
public void resetMaximumRetryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```java
public java.lang.Number getMaximumEventAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```java
public java.lang.Number getMaximumRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```java
public java.lang.Number getMaximumEventAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---


### CloudwatchEventTargetRunCommandTargetsList <a name="CloudwatchEventTargetRunCommandTargetsList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRunCommandTargetsList;

new CloudwatchEventTargetRunCommandTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get"></a>

```java
public CloudwatchEventTargetRunCommandTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>>

---


### CloudwatchEventTargetRunCommandTargetsOutputReference <a name="CloudwatchEventTargetRunCommandTargetsOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetRunCommandTargetsOutputReference;

new CloudwatchEventTargetRunCommandTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a> OR com.hashicorp.cdktf.IResolvable

---


### CloudwatchEventTargetSqsTargetOutputReference <a name="CloudwatchEventTargetSqsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudwatch_event_target.CloudwatchEventTargetSqsTargetOutputReference;

new CloudwatchEventTargetSqsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId"></a>

```java
public void resetMessageGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput"></a>

```java
public java.lang.String getMessageGroupIdInput();
```

- *Type:* java.lang.String

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId"></a>

```java
public java.lang.String getMessageGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue"></a>

```java
public CloudwatchEventTargetSqsTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---



