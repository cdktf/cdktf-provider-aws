# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktf/provider-aws.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue aws_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueue;

SqsQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .contentBasedDeduplication(java.lang.Boolean)
//  .contentBasedDeduplication(IResolvable)
//  .deduplicationScope(java.lang.String)
//  .delaySeconds(java.lang.Number)
//  .fifoQueue(java.lang.Boolean)
//  .fifoQueue(IResolvable)
//  .fifoThroughputLimit(java.lang.String)
//  .id(java.lang.String)
//  .kmsDataKeyReusePeriodSeconds(java.lang.Number)
//  .kmsMasterKeyId(java.lang.String)
//  .maxMessageSize(java.lang.Number)
//  .messageRetentionSeconds(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .policy(java.lang.String)
//  .receiveWaitTimeSeconds(java.lang.Number)
//  .redriveAllowPolicy(java.lang.String)
//  .redrivePolicy(java.lang.String)
//  .region(java.lang.String)
//  .sqsManagedSseEnabled(java.lang.Boolean)
//  .sqsManagedSseEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SqsQueueTimeouts)
//  .visibilityTimeoutSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.deduplicationScope">deduplicationScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.delaySeconds">delaySeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoQueue">fifoQueue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.maxMessageSize">maxMessageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redrivePolicy">redrivePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.contentBasedDeduplication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `deduplicationScope`<sup>Optional</sup> <a name="deduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.deduplicationScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `delaySeconds`<sup>Optional</sup> <a name="delaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.delaySeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `fifoQueue`<sup>Optional</sup> <a name="fifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoQueue"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `fifoThroughputLimit`<sup>Optional</sup> <a name="fifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.fifoThroughputLimit"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsDataKeyReusePeriodSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.kmsMasterKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `maxMessageSize`<sup>Optional</sup> <a name="maxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.maxMessageSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `messageRetentionSeconds`<sup>Optional</sup> <a name="messageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.messageRetentionSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name SqsQueue#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#policy SqsQueue#policy}.

---

##### `receiveWaitTimeSeconds`<sup>Optional</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.receiveWaitTimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `redriveAllowPolicy`<sup>Optional</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redriveAllowPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.redrivePolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#region SqsQueue#region}

---

##### `sqsManagedSseEnabled`<sup>Optional</sup> <a name="sqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.sqsManagedSseEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags SqsQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#timeouts SqsQueue#timeouts}

---

##### `visibilityTimeoutSeconds`<sup>Optional</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.visibilityTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope">resetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds">resetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue">resetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit">resetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">resetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize">resetMaxMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds">resetMessageRetentionSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds">resetReceiveWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy">resetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">resetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds">resetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sqsQueue.SqsQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts"></a>

```java
public void putTimeouts(SqsQueueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```java
public void resetContentBasedDeduplication()
```

##### `resetDeduplicationScope` <a name="resetDeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```java
public void resetDeduplicationScope()
```

##### `resetDelaySeconds` <a name="resetDelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```java
public void resetDelaySeconds()
```

##### `resetFifoQueue` <a name="resetFifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue"></a>

```java
public void resetFifoQueue()
```

##### `resetFifoThroughputLimit` <a name="resetFifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```java
public void resetFifoThroughputLimit()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetId"></a>

```java
public void resetId()
```

##### `resetKmsDataKeyReusePeriodSeconds` <a name="resetKmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```java
public void resetKmsDataKeyReusePeriodSeconds()
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```java
public void resetKmsMasterKeyId()
```

##### `resetMaxMessageSize` <a name="resetMaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize"></a>

```java
public void resetMaxMessageSize()
```

##### `resetMessageRetentionSeconds` <a name="resetMessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds"></a>

```java
public void resetMessageRetentionSeconds()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetReceiveWaitTimeSeconds` <a name="resetReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds"></a>

```java
public void resetReceiveWaitTimeSeconds()
```

##### `resetRedriveAllowPolicy` <a name="resetRedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```java
public void resetRedriveAllowPolicy()
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```java
public void resetRedrivePolicy()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSqsManagedSseEnabled` <a name="resetSqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```java
public void resetSqsManagedSseEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVisibilityTimeoutSeconds` <a name="resetVisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds"></a>

```java
public void resetVisibilityTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueue;

SqsQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueue;

SqsQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueue;

SqsQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueue;

SqsQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqsQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqsQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference">SqsQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput">deduplicationScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput">delaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput">fifoQueueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">fifoThroughputLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">kmsDataKeyReusePeriodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput">maxMessageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput">messageRetentionSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput">receiveWaitTimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">redriveAllowPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">sqsManagedSseEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput">visibilityTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope">deduplicationScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds">delaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue">fifoQueue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize">maxMessageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy">redrivePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeouts"></a>

```java
public SqsQueueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference">SqsQueueTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```java
public java.lang.Object getContentBasedDeduplicationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deduplicationScopeInput`<sup>Optional</sup> <a name="deduplicationScopeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```java
public java.lang.String getDeduplicationScopeInput();
```

- *Type:* java.lang.String

---

##### `delaySecondsInput`<sup>Optional</sup> <a name="delaySecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```java
public java.lang.Number getDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `fifoQueueInput`<sup>Optional</sup> <a name="fifoQueueInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```java
public java.lang.Object getFifoQueueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fifoThroughputLimitInput`<sup>Optional</sup> <a name="fifoThroughputLimitInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```java
public java.lang.String getFifoThroughputLimitInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```java
public java.lang.Number getKmsDataKeyReusePeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```java
public java.lang.String getKmsMasterKeyIdInput();
```

- *Type:* java.lang.String

---

##### `maxMessageSizeInput`<sup>Optional</sup> <a name="maxMessageSizeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput"></a>

```java
public java.lang.Number getMaxMessageSizeInput();
```

- *Type:* java.lang.Number

---

##### `messageRetentionSecondsInput`<sup>Optional</sup> <a name="messageRetentionSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput"></a>

```java
public java.lang.Number getMessageRetentionSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `receiveWaitTimeSecondsInput`<sup>Optional</sup> <a name="receiveWaitTimeSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput"></a>

```java
public java.lang.Number getReceiveWaitTimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `redriveAllowPolicyInput`<sup>Optional</sup> <a name="redriveAllowPolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```java
public java.lang.String getRedriveAllowPolicyInput();
```

- *Type:* java.lang.String

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```java
public java.lang.String getRedrivePolicyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sqsManagedSseEnabledInput`<sup>Optional</sup> <a name="sqsManagedSseEnabledInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```java
public java.lang.Object getSqsManagedSseEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---

##### `visibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="visibilityTimeoutSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput"></a>

```java
public java.lang.Number getVisibilityTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```java
public java.lang.Object getContentBasedDeduplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deduplicationScope`<sup>Required</sup> <a name="deduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```java
public java.lang.String getDeduplicationScope();
```

- *Type:* java.lang.String

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds"></a>

```java
public java.lang.Number getDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `fifoQueue`<sup>Required</sup> <a name="fifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue"></a>

```java
public java.lang.Object getFifoQueue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fifoThroughputLimit`<sup>Required</sup> <a name="fifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```java
public java.lang.String getFifoThroughputLimit();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```java
public java.lang.Number getKmsDataKeyReusePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

---

##### `maxMessageSize`<sup>Required</sup> <a name="maxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize"></a>

```java
public java.lang.Number getMaxMessageSize();
```

- *Type:* java.lang.Number

---

##### `messageRetentionSeconds`<sup>Required</sup> <a name="messageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds"></a>

```java
public java.lang.Number getMessageRetentionSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `receiveWaitTimeSeconds`<sup>Required</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds"></a>

```java
public java.lang.Number getReceiveWaitTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `redriveAllowPolicy`<sup>Required</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```java
public java.lang.String getRedriveAllowPolicy();
```

- *Type:* java.lang.String

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```java
public java.lang.String getRedrivePolicy();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sqsManagedSseEnabled`<sup>Required</sup> <a name="sqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```java
public java.lang.Object getSqsManagedSseEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `visibilityTimeoutSeconds`<sup>Required</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds"></a>

```java
public java.lang.Number getVisibilityTimeoutSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueueConfig;

SqsQueueConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .contentBasedDeduplication(java.lang.Boolean)
//  .contentBasedDeduplication(IResolvable)
//  .deduplicationScope(java.lang.String)
//  .delaySeconds(java.lang.Number)
//  .fifoQueue(java.lang.Boolean)
//  .fifoQueue(IResolvable)
//  .fifoThroughputLimit(java.lang.String)
//  .id(java.lang.String)
//  .kmsDataKeyReusePeriodSeconds(java.lang.Number)
//  .kmsMasterKeyId(java.lang.String)
//  .maxMessageSize(java.lang.Number)
//  .messageRetentionSeconds(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .policy(java.lang.String)
//  .receiveWaitTimeSeconds(java.lang.Number)
//  .redriveAllowPolicy(java.lang.String)
//  .redrivePolicy(java.lang.String)
//  .region(java.lang.String)
//  .sqsManagedSseEnabled(java.lang.Boolean)
//  .sqsManagedSseEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SqsQueueTimeouts)
//  .visibilityTimeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope">deduplicationScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds">delaySeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue">fifoQueue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize">maxMessageSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```java
public java.lang.Object getContentBasedDeduplication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `deduplicationScope`<sup>Optional</sup> <a name="deduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```java
public java.lang.String getDeduplicationScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `delaySeconds`<sup>Optional</sup> <a name="delaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```java
public java.lang.Number getDelaySeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `fifoQueue`<sup>Optional</sup> <a name="fifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```java
public java.lang.Object getFifoQueue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `fifoThroughputLimit`<sup>Optional</sup> <a name="fifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```java
public java.lang.String getFifoThroughputLimit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```java
public java.lang.Number getKmsDataKeyReusePeriodSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```java
public java.lang.String getKmsMasterKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `maxMessageSize`<sup>Optional</sup> <a name="maxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize"></a>

```java
public java.lang.Number getMaxMessageSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `messageRetentionSeconds`<sup>Optional</sup> <a name="messageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds"></a>

```java
public java.lang.Number getMessageRetentionSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name SqsQueue#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#policy SqsQueue#policy}.

---

##### `receiveWaitTimeSeconds`<sup>Optional</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds"></a>

```java
public java.lang.Number getReceiveWaitTimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `redriveAllowPolicy`<sup>Optional</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```java
public java.lang.String getRedriveAllowPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```java
public java.lang.String getRedrivePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#region SqsQueue#region}

---

##### `sqsManagedSseEnabled`<sup>Optional</sup> <a name="sqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```java
public java.lang.Object getSqsManagedSseEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags SqsQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.timeouts"></a>

```java
public SqsQueueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#timeouts SqsQueue#timeouts}

---

##### `visibilityTimeoutSeconds`<sup>Optional</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds"></a>

```java
public java.lang.Number getVisibilityTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---

### SqsQueueTimeouts <a name="SqsQueueTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueueTimeouts;

SqsQueueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#create SqsQueue#create}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#delete SqsQueue#delete}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#update SqsQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#create SqsQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#delete SqsQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sqs_queue#update SqsQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqsQueueTimeoutsOutputReference <a name="SqsQueueTimeoutsOutputReference" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sqs_queue.SqsQueueTimeoutsOutputReference;

new SqsQueueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---



